
    const express = require('express')
    const app = express();
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json({}));
    const {spawn} = require('child_process');
    const PORT = process.env.PORT || 3000;
  
    app.get('/', (req, res) => {
  
      let arg = 123455
      // spawn new child process to call the python script
      const python = spawn('python3', ['-c', `import ../apps.python_app; python_app.run_app(${arg});`]);
      
      var dataToSend;
      python.stdout.on('data', (data)=>{
        dataToSend = data.toString();
      })

      // in close event we are sure that stream from child process is closed
      python.on('exit', (code) => {
          console.log(`child process close all stdio with code ${code}, ${dataToSend}`);
          res.send(JSON.parse(dataToSend));
      });
    });

    app.listen(PORT, ()=>console.log(`app running on port ${PORT}`))
