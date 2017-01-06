var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  //medicalIssue param not needed unless printing it out
  $('.showCondition').append("<p class='center-text'>" + "You inputted: " + medicalIssue.capitalizeFirst() + "</p>");
  doctorEntry.forEach(function(entry) {
    $('.showDoctors').append("<li class='center-text'>" + entry.profile.first_name + ' '
                                    + entry.profile.last_name + ' '
                                    + entry.profile.title
                                    + "<ul>"
                                    + "<li class='center-text'>" + "Specialty: " + entry.specialties[0].name + "</li>" + "</li>"
                                    + "</ul>"
                                  );
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
