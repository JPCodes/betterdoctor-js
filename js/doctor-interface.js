var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  //medicalIssue param not needed unless printing it out
  $('.showCondition').text("You inputted: " + medicalIssue);
  doctorEntry.forEach(function(entry) {
    $('.showDoctors').append("<li>" + entry.profile.first_name + "</li>");
  })
  console.log(doctorEntry);

}

$(document).ready(function(){


  $('#search-form').submit(function(event) {
    event.preventDefault();
    var newDoctorData = new DoctorData();
    var medicalIssue = $('#condition-input').val();
    newDoctorData.getDoctors(medicalIssue, displayDoctors);
  });


});
