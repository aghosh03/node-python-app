const {spawn} = require('child_process');

let data = {
    "industry": "Financial Services",
    "revenue": 12345678
}
jsonString = JSON.stringify(data);

func1 = async(jsonString)=>{
    const python = spawn('python3', ["-c",`from apps import python_app; python_app.run(${jsonString});`]);
    var dataToSend = ''
    python.stdout.on('data', (data) => {
        dataToSend = data.toString() //<---How do I return this back to parent?
        return dataToSend
    })
}

func1(jsonString).then((x)=>{
    console.log(x)
})