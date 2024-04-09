let ImageGalleryDatabase = JSON.parse(localStorage.getItem("Gallery")) || [];

$(document).ready(function () {
  console.log("Page loaded");
  showData();
  $("#inputFile").on("drop", function (event) {
    event.preventDefault();
    handleFiles(event.originalEvent.dataTransfer.files);
  });

  $("#inputFile").on("change", function () {
    handleFiles($("#inputFile")[0].files);
  });
});

function handleFiles(files) {
  if (files.length > 0) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      let inputFileName = files[i].name;

      reader.onload = function () {
        let fileData = {
          name: inputFileName,
          dataURL: reader.result,
        };
        ImageGalleryDatabase.push(fileData);
        localStorage.setItem("Gallery", JSON.stringify(ImageGalleryDatabase));
        if (i === files.length - 1) {
          showData(); // Call showData() after updating the local storage
          $("#inputFile").val("");
        }
      };
      reader.readAsDataURL(files[i]);
    }
  }
}

// Show all cards in the gallery
function showData() {
  // $("#sortable").empty(); // Clear existing data
  let html = "";
  ImageGalleryDatabase.forEach((img, index) => {
    html += createCard(img, index);
  });
  $("#sortable").prepend(html);
}
showData();

function createCard(img, index) {
  return ` <div class="col-md-4 cards p-0">
              <img class="card-img" src="${img.dataURL}"> 
          </div>`;
}
