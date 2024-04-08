let allImageArray = JSON.parse(localStorage.getItem("images")) || [];
$(document).ready(function () {
  let filesSelected;
  $("#inputFile").on("drop", function (event) {
    event.preventDefault();
    let files = event.originalEvent.dataTransfer.files;
    filesSelected = files;
  });

  $("#inputFile").on("change", function () {
    let files = $("#inputFile")[0].files;
    filesSelected = files;
  });

  $("#myForm").submit(function (event) {
    event.preventDefault();
    if (filesSelected) {
      handleFiles(filesSelected);
    }
  });
});

function handleFiles(files) {
  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      let inputFileName = files[i].name;

      reader.onload = function () {
        let fileData = {
          name: inputFileName,
          dataURL: reader.result,
        };
        allImageArray.push(fileData);
        localStorage.setItem("images", JSON.stringify(allImageArray));
      };
      reader.readAsDataURL(files[i]);
    }
  }
  displayData();
}

function displayData() {
  allImageArray.forEach((image, index) => {
    let SlideCard = createSlideCard(image, index);
    $("#card-container").prepend(SlideCard);
  });
}

function createSlideCard(image, index) {
  let card = $("<div>", {
    class: "slide",
  }).html(`<div class="col-md-12">
                <div class="card-box">
                    <img src=${image.dataURL}
                        alt="">
                </div>`);

  return card;
}

displayData();
