
var setHours = function() {
// Add the current date on top
var cday  = moment().format('dddd, MMMM Do')
$("#currentDay").text(cday);

// Display all the times in the calendar
var hrm = moment('09:00','h:mm a');
var hr = hrm.format('ha');
$("#0").text(hr); 
$("#1").text((hrm.add(1, 'hours')).format('ha'));
hrm.subtract(1, 'hours');
$("#2").text((hrm.add(2, 'hours')).format('ha'));
hrm.subtract(2, 'hours');
$("#3").text((hrm.add(3, 'hours')).format('ha'));
hrm.subtract(3, 'hours');
$("#4").text((hrm.add(4, 'hours')).format('ha'));
hrm.subtract(4, 'hours');
$("#5").text((hrm.add(5, 'hours')).format('ha'));
hrm.subtract(5, 'hours');
$("#6").text((hrm.add(6, 'hours')).format('ha'));
hrm.subtract(6, 'hours');
$("#7").text((hrm.add(7, 'hours')).format('ha'));
hrm.subtract(7, 'hours');
$("#8").text((hrm.add(8, 'hours')).format('ha'));
hrm.subtract(8, 'hours');
}

var calColors = function () {
    // capture the current hour but convert to 24 hr format to make comparison simpler
    var time24 = parseInt(moment().format('k'));
   //  go through all the calendar rows and add the content into the textarea
   for (i=0; i<9; i++) {
   // choose to appropriate element id    
   var str = "#" + (i).toString()
   var tcal = $(str);
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   // add text to textarea
   righttextarea.text(textarray[i]);
   addcls (tcal24,time24,righttextarea);
   }
}    

var addcls = function (timecal, timenow, textar) {
 // remove any existing classes
 if (textar.hasClass("present")) { textar.removeClass("present");};
 if (textar.hasClass("past")) { textar.removeClass("past");};
 if (textar.hasClass("future")) { textar.removeClass("future");};
 // add the right class depending on time being in the past, present or future
 if (timecal<timenow) {
    textar.addClass("past");
}
else if (timecal>timenow) {
    textar.addClass("future");
}
else {
    textar.addClass("present");
};
}

var save = function(idnumb,txte) {
// function save data into local storage
    textarray[idnumb-9] = txte;
    localStorage.setItem("textareaval", JSON.stringify(textarray));

}


// initatlize the calendar text
 var textarray = new Array(9);
 var textvalueunparsed = localStorage.getItem("textareaval");
 textarray = JSON.parse(textvalueunparsed);
 if (!(textarray)) { var textarray = ["","","","","","","","",""]};

 // set the calendar hours display
 setHours();
 // set the calendar colors and content
 calColors();
 // Keep checking calendar entries every 5 minutes incase user leaves application open and doesn't refresh
 
 setInterval(function(){ 
// set the calendar hours display
setHours();
// set the calendar colors and content
calColors();    
 }
, (5*1000*60));

// execute function if save button is clicked
$(".saveBtn").click(function() {

    // get the id number and text of textarea
    var idn = $(this).attr("id");
    var txt = $(this).closest(".row").find("#tarea").val();
    var txtt = txt.trim();
    // save the text in the textarea to local storage
    save(idn,txtt);
});






