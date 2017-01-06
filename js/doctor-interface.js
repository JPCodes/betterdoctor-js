var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  //medicalIssue param not needed unless printing it out
  $('.showCondition').text("You inputted: " + medicalIssue.capitalizeFirst());
  doctorEntry.forEach(function(entry) {
    $('.showDoctors').append("<li>" + entry.profile.first_name + "</li>");
  });
};

$(document).ready(function(){
  var newDoctorData = new DoctorData();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    newDoctorData.retrieved = [];
    $('.showDoctors').empty();
    var medicalIssue = $('#condition-input').val();
    newDoctorData.getDoctors(medicalIssue, displayDoctors);
  });


});
