
var setHours = function() {
// Add the current date on top
var cday  = moment().format('dddd, MMMM Do')
$("#currentDay").text(cday);

// Display all the times in the calendar
var hrm = moment('09:00','h:mm a');
var hr = hrm.format('ha');
$("#nine").text(hr); 
$("#ten").text((hrm.add(1, 'hours')).format('ha'));
hrm.subtract(1, 'hours');
$("#eleven").text((hrm.add(2, 'hours')).format('ha'));
hrm.subtract(2, 'hours');
$("#twelve").text((hrm.add(3, 'hours')).format('ha'));
hrm.subtract(3, 'hours');
$("#thirteen").text((hrm.add(4, 'hours')).format('ha'));
hrm.subtract(4, 'hours');
$("#fourteen").text((hrm.add(5, 'hours')).format('ha'));
hrm.subtract(5, 'hours');
$("#fifteen").text((hrm.add(6, 'hours')).format('ha'));
hrm.subtract(6, 'hours');
$("#sixteen").text((hrm.add(7, 'hours')).format('ha'));
hrm.subtract(7, 'hours');
$("#seventeen").text((hrm.add(8, 'hours')).format('ha'));
hrm.subtract(8, 'hours');
}

var calColors = function () {

    
    // capture the current hour but convert to 24 hr format to make comparison simpler
    var time24 = parseInt(moment().format('k'));
    var time12 = parseInt(moment().format('h'));

   //  convert calendar hour into 24hr format for comparison purposes
   
   var tcal = $('#nine');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#ten');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#eleven');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#twelve');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#thirteen');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#fourteen');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#fifteen');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#sixteen');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

   var tcal = $('#seventeen');
   var tcalt = tcal.text();
   var tcal24m = moment(tcalt,'ha');
   var tcal24 = parseInt(tcal24m.format('k'));
   var rightparent = (tcal.parent()).parent();
   var righttextarea = rightparent.find("textarea");
   addcls (tcal24,time24,righttextarea);

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

var save = function(event) {

    console.log("i am here");
}


setHours();
calColors();    

$("#saveBtn").click(function () {
    console.log("hello");
    save();
}
    ) ;





