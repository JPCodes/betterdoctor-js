var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  //medicalIssue param not needed unless printing it out
  $('.showCondition').append("<p class='center-text'>" + "You inputted: " + medicalIssue.capitalizeFirst() + "</p>");
  doctorEntry.forEach(function(entry) {
    $('.showDoctors').append("<li class='center-text'>" + "<div class='media'>" + "<div class='media-left media-middle'>" + "<img class='media-object' src='" + entry.profile.image_url + "'>" + "</div>" + "<div class='media-body'>" + "<p>" + entry.profile.first_name + ' ' + entry.profile.last_name + ' ' + entry.profile.title + "</p>" + "<p>" +"Specialty: " + entry.specialties[0].name + "</p>" + "</li>" + "</div>" + "</div>"
                                  );
  });
};

$(document).ready(function(){
  var newDoctorData = new DoctorData();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    newDoctorData.retrieved = [];
    $('.showCondition').empty();
    $('.showDoctors').empty();
    var medicalIssue = $('#condition-input').val();
    newDoctorData.getDoctors(medicalIssue, displayDoctors);
  });


});
