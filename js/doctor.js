function DoctorData() {
  this.retrieved = [];
}

DoctorData.prototype.getDoctors = function(medicalIssue, apiKey) {
  var docDataObj = [];

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
        result.data.forEach(function(dataEntry) {
          docDataObj.push(dataEntry);
        });
      })
     .fail(function(error){
        console.log("fail");
      });

  this.retrieved = docDataObj;
};

exports.doctorModule = DoctorData;
