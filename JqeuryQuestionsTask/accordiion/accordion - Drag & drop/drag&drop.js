let allImageArray = JSON.parse(localStorage.getItem("images")) || [];
$(document).ready(function () {
  let filesSelected;
  $("#inputFile").on("drop", function (event) {
    event.preventDefault();
    let files = event.originalEvent.dataTransfer.files;
    handleFiles(files);
  });

  $("#inputFile").on("change", function () {
    let files = $("#inputFile")[0].files;
    handleFiles(files);
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
    $("#sortable").prepend(SlideCard);
  });
}

function createSlideCard(image, index) {
  let card = $("<div>", {
    class: "col-md-4 cards",
  }).html(`  <img src=${image.dataURL} alt="">`);

  return card;
}

displayData();
