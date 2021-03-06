var apiKey = require('./../.env').apiKey;

function DoctorData() {
  this.retrieved = [];
}

DoctorData.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  var docDataObj = this;

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
        result.data.forEach(function(dataEntry) {
          docDataObj.retrieved.push(dataEntry);
        });
        displayDoctors(medicalIssue, docDataObj.retrieved);
      })
     .fail(function(error){
        console.log("fail");
      });

  this.retrieved = docDataObj.retrieved;
};

String.prototype.capitalizeFirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

exports.doctorModule = DoctorData;
