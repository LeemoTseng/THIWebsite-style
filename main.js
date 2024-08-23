

if (document.querySelectorAll(".datetime")) {
  layui.use(["layer", "form", "laydate"], function () {
    var layer = layui.layer;
    var form = layui.form;
    var laydate = layui.laydate;

    // Date and time picker
    var datetimeElements = document.querySelectorAll(".datetime");
    // console.log(datetimeElements);

    if (datetimeElements.length > 0) {
      datetimeElements.forEach(function (elem) {
        laydate.render({
          elem: elem,
          type: "datetime",
          lang: 'en',
          format: 'yyyy-MM-dd HH:mm',
          theme: '#F7941D'
        });
      });
    }

    // Date picker
    var datepickerElements = document.querySelectorAll(".datepicker");
    console.log(datepickerElements);

    if (datepickerElements.length > 0) {
      datepickerElements.forEach(function (elem) {
        laydate.render({
          elem: elem,
          type: "date",
          lang: 'en',
          format: 'yyyy-MM-dd',
          theme: '#F7941D'
        });
      });
    }
  });
}

//隱藏顯示

if (document.querySelector("#roommate")) {

  document.addEventListener("DOMContentLoaded", function () {
    const colleagueInput = document.querySelector("#colleague");
    const familyInput = document.querySelector("#family");
    const colleagueNameDiv = document.querySelector("#colleagueName");
    const addFamilyBtn = document.querySelector("#addFamilyBtn");


    // Function to update the visibility of the colleague name input and add family button
    function updateVisibility() {
      if (colleagueInput.checked) {
        colleagueNameDiv.style.display = "block";
        addFamilyBtn.style.display = "none";
      } else if (familyInput.checked) {
        colleagueNameDiv.style.display = "none";
        addFamilyBtn.style.display = "block";
      }
    }

    // Initial check on page load
    updateVisibility();

    // Add event listeners to radio buttons
    colleagueInput.addEventListener("change", updateVisibility);
    familyInput.addEventListener("change", updateVisibility);
  });
}

//tooltip

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
