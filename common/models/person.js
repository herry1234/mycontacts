module.exports = function(Person) {
  //create extened API here
  Person.hasMarried = function(cb) {
    console.log("Checking person has been married");
    var res = "Yes";
    cb(null,res);
  };
  Person.remoteMethod(
    'hasMarried',
  {
  http:{path: '/married', verb: 'get'},
  returns: {arg: 'hasmarried',type:'string'}
  }
);

};
