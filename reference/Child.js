// child.js

function run_python_script(jsonString){

    const promise = new Promise((resolve, reject) => {
        
        // spawn new child process to call the python script
        const {spawn} = require('child_process');
        
        const python = spawn('python3', ["-c",`from apps import python_app; python_app.run(${jsonString});`])

        var dataToSend = ''
        python.stdout.on('data', (data) => {
            dataToSend = data.toString()
        })

        python.stderr.on('data', (data)=>{
            console.log(`stderr: ${data}`)
            reject(new Error(`stderr occured`))
        })

        python.on('close', (code)=>{
            if (code !=0){
                reject(new Error(`error code: ${code}`))
            }else{
                resolve(dataToSend)
            }
        })
    })

    return promise
}

module.exports = { run_python_script };
