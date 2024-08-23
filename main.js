

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
    // console.log(datepickerElements);

      if (datepickerElements.length > 0) {
    datepickerElements.forEach(function (elem) {
      let userInput = ""; 
      
      laydate.render({
        elem: elem,
        type: "date",
        lang: 'en',
        theme: '#F7941D',
        trigger: 'click', 
        show: false, 
        done: function(value) {
          userInput = value; 
          // console.logo(userInput);
        }
      });

      // 监听手动输入，更新存储的用户输入
      elem.addEventListener('input', function () {
        userInput = elem.value; // 存储用户输入的值
      });

    
      elem.addEventListener('blur', function () {
        elem.value = userInput; 
      });

      elem.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault(); 
          elem.blur(); 
          setTimeout(function() {
            elem.value = userInput; 
          }, 10);
        }
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
