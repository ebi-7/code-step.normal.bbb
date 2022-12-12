//ハンバーガー
$(function() {
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#bgCover').toggleClass('active');
        $('#menu').toggleClass('active');
    });
  });


//左右フェード
$(function () {
    $(".sec01__leftbox").on("inview", function () {
      $(this).addClass("slideRight");
    });
  });

  $(function () {
    $(".sec01__rightbox").on("inview", function () {
      $(this).addClass("slideLeft");
    });
  });

//チャットふわっと
$(function () {
    $(".chatBox").on("inview", function () {
      $(this).addClass("chatAnime");
    });
  });
