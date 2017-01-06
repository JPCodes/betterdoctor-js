var DoctorData = require('./../js/doctor.js').doctorModule;
var displayDoctors = function(medicalIssue, doctorEntry) {
  $('.showCondition').append("<h2>" + "You inputted: " + medicalIssue.capitalizeFirst() + "</h2>");
  doctorEntry.forEach(function(entry) {
    $('.showDoctors').append("<li class='center-text'>" + "<div class='media'>" + "<div class='media-left media-middle'>" + "<img class='media-object' src='" + entry.profile.image_url + "'>" + "</div>" + "<div class='media-body media-middle'>" + "<p>" + entry.profile.first_name + ' ' + entry.profile.last_name + ' ' + entry.profile.title + "</p>" + "<p>" +"Specialty: " + entry.specialties[0].name + "</p>" + "</li>" + "</div>" + "</div>" + "<hr>"
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
