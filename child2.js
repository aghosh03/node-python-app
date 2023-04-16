function runPython(inputData, appName){
    const { spawnSync } = require('child_process');
    const python = spawnSync('python3', ['-c', `from apps import ${appName}; ${appName}.run(${inputData}); assert False`], { encoding: "utf8" });

    // Access stdout
    return(python.stdout)

    // Access stderr
    console.log(python.stderr)

}
module.exports = {runPython}



//calling run_python
var data = {
    "industry": "Financial Services",
    "revenue": 987654321
}
var appName = 'python_app'
var inputData = JSON.stringify(data);
var result = runPython(inputData, appName);
console.log(result);