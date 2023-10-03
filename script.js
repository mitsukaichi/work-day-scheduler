// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// need to override the existingSchedule to show the one saved in local storage
var existingSchedule = [];

$(function () {
  $(".time-block").on("click",".saveBtn",function(event){
    var buttonClicked = $(event.target);
    var scheduleDescription = buttonClicked.siblings().eq(1).val();
    var scheduledHour = buttonClicked.parent().attr("id");
    if (scheduleDescription !== " "){
      var newSchedule = {
        hour: scheduledHour,
        text: scheduleDescription
      };
      existingSchedule.push(newSchedule);
      localStorage.setItem("workDayScheduler",JSON.stringify(existingSchedule));
    } else {
      alert("You cannot save empty schedule");
    }
  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
var timeBlock = $(".time-block");

for (i = 0; i < 8; i++) {
  if (timeBlock.eq(i).attr("id").substring(5) < (dayjs().format("HH"))){
    timeBlock.eq(i).attr("class", "row time-block past");
  } else if (timeBlock.eq(i).attr("id").substring(5) === (dayjs().format("HH"))){
    timeBlock.eq(i).attr("class", "row time-block present");
  } else {
    timeBlock.eq(i).attr("class", "row time-block future");
  }
};

console.log(timeBlock.eq(1).attr("id").substring(5) < (dayjs().format("HH")));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.

var currentDay = "";  

if (dayjs().format("D") % 10 === 1) {
  currentDay =  (dayjs().format("dddd, MMMM D") + "st");
} else if (dayjs().format("DD") % 10 === 2) {
  currentDay =  (dayjs().format("dddd, MMMM D") + "nd");
} else if (dayjs().format("DD") % 10 === 3) {
  currentDay =  (dayjs().format("dddd, MMMM D") + "rd");
} else {
  currentDay =  (dayjs().format("dddd, MMMM D") + "th")
};

$("#currentDay").text(currentDay); 

});
