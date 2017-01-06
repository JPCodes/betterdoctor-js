var DoctorData = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  var newDoctorData = new DoctorData();
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#condition-input').val();

    newDoctorData.getDoctors(medicalIssue, apiKey)
  });

});
