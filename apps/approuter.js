const express = require('express')
const router = express.Router();
const runPython = require('./runPython.js');

router.post('/:appName',(req, res)=>{

    var inputData = JSON.stringify(req.body);
    var appName = req.params.appName
    const result = runPython.run_python_script(inputData, appName);
    console.log(result)
    const context = JSON.parse(result)
    console.log(context)

    console.log(`savings: ${context.savings}`)
    res.status(200).redirect('/',{context:context.savings})

});
  
module.exports = router