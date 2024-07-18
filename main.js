
//daate and time picker

      layui.use(["layer", "form"], function () {
        var layer = layui.layer;
        var form = layui.form;
      });
      layui.use("laydate", function () {
        var laydate = layui.laydate;

        // formate
        laydate.render({
          elem: "#datetime",
          type: "datetime",
          lang: 'en'
        });
      });


// date picker

$(function () {
  $(".datepicker").datepicker();
  $("#anim").on("change", function () {
    $(".datepicker").datepicker("option", "showAnim", $(this).val());
  });
});

$(document).ready(function () {
  $(".datepicker").datepicker();
  $(".datetimepicker").datetimepicker();})



//隱藏顯示

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

//tooltip

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
