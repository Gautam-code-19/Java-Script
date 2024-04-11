function AddMenu() {
  $("#form-container").css("transform", "scale(1)");
}
function Close() {
  $("#form-container").css("transform", "scale(0)");
}

$(document).ready(function () {
  let navData = JSON.parse(localStorage.getItem("NavData")) || [];

  function generateMenu() {
    let parentLink = $("#parent-link");
    parentLink.empty(); // Clear existing menu items

    navData.forEach((item) => {
      let menuItem = $(
        `<li class = "parent-li"><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`
      );
      if (item.sublinks && item.sublinks.length > 0) {
        let submenu = $(`<ul class='nestedNav'></ul>`);
        item.sublinks.forEach((sublink) => {
          submenu.append(`<li><a class="btn" href="#">${sublink}</a></li>`);
        });
        menuItem.append(submenu);
      }
      parentLink.append(menuItem);
    });

    // Populate the select dropdown based on existing links in navData
    let selectDropdown = $("#addto");
    selectDropdown.empty();
    selectDropdown.append(`
    <option value="" selected>CHOOSE...</option>
                <option value="PARENT">PARENT</option>
    `);
    navData.forEach((elem) => {
      selectDropdown.append(
        `<option value="${elem.links}">${elem.links}</option>`
      );
    });
  }

  // Function to append a new menu item
  function appendMenu(item) {
    let parentLink = $("#parent-link");
    let menuItem = $(
      `<li><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`
    );
    if (item.sublinks && item.sublinks.length > 0) {
      let submenu = $(`<ul class='nestedNav'></ul>`);
      item.sublinks.forEach((sublink) => {
        submenu.append(`<li><a class="btn" href="#">${sublink}</a></li>`);
      });
      menuItem.append(submenu);
    }
    parentLink.append(menuItem);
  }

  // Show child elem on click parent link
  $("#parent-link").on("click", ".btn", function () {
    $(".nestedNav").removeClass("scale-up");
    $(this).next(".nestedNav").toggleClass("scale-up");
  });

  // Form submission handling
  $(".form-wrapper").submit((e) => {
    e.preventDefault();
    let addto = $("#addto").val().toUpperCase();
    let menuData = $("#AddMenu").val().toUpperCase();

    if (addto === "PARENT" || !addto) {
      let data = {
        links: menuData,
        sublinks: [],
      };
      navData.push(data);
      appendMenu(data); // Append the new menu item
    } else {
      let parent = navData.find((item) => item.links === addto);
      if (parent) {
        parent.sublinks.push(menuData);
        generateMenu(); // Regenerate the entire menu
      }
    }
    alert("link add successFull");
    localStorage.setItem("NavData", JSON.stringify(navData));
  });

  // Initial menu generation
  generateMenu();
});
