var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  //medicalIssue param not needed unless printing it out
  $('.showCondition').text(medicalIssue);
  doctorEntry.forEach(function() {
    $('.showDoctors').text(medicalIssue);
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
