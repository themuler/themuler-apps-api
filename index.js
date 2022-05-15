const dotenv = require('dotenv');

if (dotenv.config().error) {
    throw new Error('Could not find .env file');
} else {
    const express = require('express');
    const app = express();
    const appController = require('./controller/app.controller');
    app.use(express.json());
    
    app.get('/ping', (req, res) => res.json({message: 'Working..!'}));
    
    app.get('/apps', appController.getApps);
    
    app.post('/apps', appController.saveApp);
    
    app.use((err, req, res, next) => {
        res.status(500)
            .json({message: err});
        
    });
    
    // app.listen(8080, () => {
    //     console.log('Started Listening');
    // });
    // export 'app'
    module.exports = app;
}
