$(document).ready(function () {
  let page = 1;
  let perPage = 5;

  function Load() {
    $.ajax({
      url: "https://api.unsplash.com/photos/",
      type: "GET",
      data: {
        client_id: "gfkdWWOpftlg12zNx4skAgVVak5MbnDRGSigMr-1tKE",
        page: page,
        per_page: perPage,
      },
      success: function (response) {
        response.forEach(function (photo) {
          let card = $("<div>", {
            class: "column",
          }).html(
            `<img class="card-img" src="${photo.urls.regular}" alt="${photo.user.bio}">`
          );
          $("#content").append(card);
        });
        page++;
      },
      error: function (xhr, status, error) {
        console.error("Error loading content:", error);
      },
    });
  }

  Load();

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      Load();
    }
  });
});
