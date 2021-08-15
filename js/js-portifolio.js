$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
  });
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });

  const quotes = [
    { msg: "Test message 1", author: "author 1" },
    { msg: "new message 2", author: "new author 2" },
    { msg: "another Test message 3", author: "auth 3" },
  ];

  let q = -1,
    i = 0;

  //recursive function
  function quotesLoop() {
    setTimeout(() => {
      $("#quote-msg").text(quotes[i].msg);
      $("#quote-author").text(quotes[i].author);
      i++;
      if (q < 0) {
        quotesLoop();
      }

      if (i >= quotes.length) {
        i = 0;
      }
    }, 5 * 1000);
  }

  quotesLoop();
});
