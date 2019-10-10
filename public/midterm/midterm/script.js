$(document).ready(function(){
    
     $("#likesTotal").val("#likes");
     $("#dislikeTotal").val("#dislikes");
     
     $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=9md3fIfMWiQ",
        dataType: "json",
        success: function(result,status) {
            var index = 0;
            $("#id").val(result[index].id);
            $("#youtubeId")
            $("#likes").html(result[index].likes);
            $("#dislikes").html(result[index].dislikes);
            
            calculateTotalLike();
            calculateTotalDislike();
        }
    });//ajax
});

function calculateTotalLike() {
    $("#like-clicked").click();
    $("#like-clicked").hide();
    return $("#likesTotal");
};

function calculateTotalDislike() {
    $("#dislike-clicked").click();
    $("#like-clicked").hide();
    return $("#likesTotal");
};

