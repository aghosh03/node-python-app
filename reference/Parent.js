//calling_function.js

const Child = require('./Child.js');

var data = {
    "industry": "Financial Services",
    "revenue": 12345678
}

var jsonString = JSON.stringify(data);

var result = ''
Child.run_python_script(jsonString).then(returnedData => {
    var result = returnedData;
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })

  