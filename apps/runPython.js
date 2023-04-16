function run_python_script(inputData, appName){
    
    const { spawnSync } = require('child_process');
    const python = spawnSync('python3', ['-c', `from apps import ${appName}; ${appName}.run(${inputData}); assert False`], { encoding: "utf8" });

    // Access stdout
    return(python.stdout)

    // Access stderr
    console.log(python.stderr)

}
module.exports = { run_python_script };