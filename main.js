// date picker

  $( function() {
    $( ".datepicker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( ".datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });
  } );


// Bootstrap Modal

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('click', () => {
//   myInput.focus()
// })


// $('#datepicker').datetimepicker({

//   ownerDocument: document,
//   contentWindow: window,

//   value: '',
//   rtl: false,

//   format: 'Y/m/d H:i',
//   formatTime: 'H:i',
//   formatDate: 'Y/m/d',

//   // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
//   startDate:  false, 

//   step: 60,
//   monthChangeSpinner: true,

//   closeOnDateSelect: false,
//   closeOnTimeSelect: true,
//   closeOnWithoutClick: true,
//   closeOnInputClick: true,
//   openOnFocus: true,

//   timepicker: true,
//   datepicker: true,
//   weeks: false,

//   // use formatTime format (ex. '10:00' for formatTime: 'H:i')
//   defaultTime: false, 

//   // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')
//   defaultDate: false, 

//   minDate: false,
//   maxDate: false,
//   minTime: false,
//   maxTime: false,
//   minDateTime: false,
//   maxDateTime: false,

//   allowTimes: [],
//   opened: false,
//   initTime: true,
//   inline: false,
//   theme: '',
//   touchMovedThreshold: 5,

//   // callbacks
//   onSelectDate: function () {},
//   onSelectTime: function () {},
//   onChangeMonth: function () {},
//   onGetWeekOfYear: function () {},
//   onChangeYear: function () {},
//   onChangeDateTime: function () {},
//   onShow: function () {},
//   onClose: function () {},
//   onGenerate: function () {},

//   withoutCopyright: true,
//   inverseButton: false,
//   hours12: false,
//   next: 'xdsoft_next',
//   prev : 'xdsoft_prev',
//   dayOfWeekStart: 0,
//   parentID: 'body',
//   timeHeightInTimePicker: 25,
//   timepickerbar: true,
//   todayButton: true,
//   prevButton: true,
//   nextButton: true,
//   defaultSelect: true,

//   scrollMonth: true,
//   scrollTime: true,
//   scrollInput: true,

//   lazyInit: false,
//   mask: false,
//   validateOnBlur: true,
//   allowBlank: true,
//   yearStart: 1950,
//   yearEnd: 2050,
//   monthStart: 0,
//   monthEnd: 11,
//   style: '',
//   id: '',
//   fixed: false,
//   roundTime: 'round', // ceil, floor
//   className: '',
//   weekends: [],
//   highlightedDates: [],
//   highlightedPeriods: [],
//   allowDates : [],
//   allowDateRe : null,
//   disabledDates : [],
//   disabledWeekDays: [],
//   yearOffset: 0,
//   beforeShowDay: null,

//   enterLikeTab: true,
//   showApplyButton: false,
//   insideParent: false,
  
// });

// // show datetime picker
// $('#input').datetimepicker('show');

// // hide datetime picker
// $('#input').datetimepicker('hide');

// // toggle datetime picker
// $('#input').datetimepicker('toggle');

// // destroy datetime picker
// $('#input').datetimepicker('destroy');

// // reset datetime picker's value
// $('#input').datetimepicker('reset');

// // validate datetime picker's value
// $('#input').datetimepicker(validate)

// // set datetime picker's option
// // $('#input').datetimepicker('setOptions', {...});

// // get current datetimepicker's value
// $('#input').datetimepicker('getValue')