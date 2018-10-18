
$.ajax({ 
    type: 'GET', 
    url: 'http://127.0.0.1:8000/article/lists/', 
    dataType: 'json',
    success: function (data) {
        var articles = []
        $.each(data, function(index, element) {
            articles.push('<div class="article"><h5>' + element.title + '</h5>' 
                + '<div class="artcontent">' + element.content + '</div>'
                + '<span>Author:' + element.author + '</span>'
                + '<p id="vote-elem'+ element.id +'"><input type="button" name="upvote" value="vote" class="button-primary" onclick="cast_vote(' + element.id + ')"/></p>'
                + '</div>');
        });
        $('#article_lists').append( articles.join('') );
    }
});

function cast_vote(id) {
    $.ajax({
        type: 'PATCH',
        url: 'http://127.0.0.1:8000/article/'+ id + '/vote',
        dataType: 'json',
        success: function (data) {           
            $('#vote-elem'+ id).html('<span class="green-color">Successfully Voted</span>');
        }
    })
}
