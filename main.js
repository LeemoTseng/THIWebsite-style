

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

  });
}

//BS5datepickerr

document.addEventListener('DOMContentLoaded', function () {

  const datepickers = document.querySelectorAll('.BS5datepicker');

  datepickers.forEach(function (elem) {
    $(elem).datepicker({
      format: 'yyyy-mm-dd',
      todayHighlight: true,
      autoclose: true,
      templates: {
        leftArrow: '',
        rightArrow: ''
      }
    }).on('changeDate', function () {
      $(this).datepicker('hide');
    });

    let userInput = ""; // 用于记录用户输入的值

    // 实时记录用户输入的值
    elem.addEventListener('input', function (event) {
      userInput = event.target.value.trim();
    });

    // Enter 键事件处理
    elem.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // 阻止默认行为

        // 尝试解析输入的日期
        let parsedDate = null;

        // 检查是否为默认格式 yyyy-mm-dd
        if (/^\d{4}-\d{2}-\d{2}$/.test(userInput)) {
          parsedDate = new Date(userInput);
        }
        // 尝试解析其它常见格式 yyyy/mm/dd
        else if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(userInput)) {
          const parts = userInput.split('/');
          parsedDate = new Date(`${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`);
        }

        // 如果日期有效且格式正确，则格式化为 yyyy-mm-dd
        if (parsedDate && !isNaN(parsedDate.getTime())) {
          const formattedDate = parsedDate.toISOString().slice(0, 10);
          elem.value = formattedDate;
        } else {
          elem.value = userInput; // 保持用户原始输入值
        }

        // 手动触发失去焦点事件，避免日期选择器干扰
        elem.blur();
        elem.focus();
      }
    });

    // 监听 input 框的失去焦点事件
    elem.addEventListener('blur', function () {
      // 如果在按下 Enter 之前用户离开了输入框，仍然保持用户输入值
      elem.value = userInput;
    });
  });

  // 隐藏所有日期选择器的 icon
  document.querySelectorAll('.gj-icon[role="right-icon"]').forEach(function (icon) {
    icon.style.display = 'none';
  });
});




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
