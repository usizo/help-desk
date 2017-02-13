
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request')
const api = require('./../config.js');
const qs = require('querystring');
const github = api.github;
const userCtrl = require('./controllers/userController.js');
const questionCtrl = require('./controllers/questionController.js');
const messageCtrl = require('./controllers/messageController.js');

const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', userCtrl.getUsers);
app.get('/questions', questionCtrl.getQuestions);
app.get('/messages', messageCtrl.getMessages);

app.post('/users', userCtrl.addUser);
app.post('/questions', questionCtrl.addQuestion);
app.post('/messages', messageCtrl.addMessage);

app.get('/auth/github', (req, res) => {  //first step in button request
    console.log('step 0');
    var url = 'https://github.com/login/oauth/authorize?' + 
    'scope=user&' +
    'redirect_uri=http://localhost:3000/auth/github/callback&' +
    'client_id=' + github.apiId;
    res.redirect(url);
})

app.get('/auth/github/callback', (req, res) => {
    console.log('step 1');
    var tokenQuery = {
        client_id: github.apiId,
        client_secret: github.apiSecret,
        code: req.query.code,
        accept: 'application/json'
    }
    var url = 'https://github.com/login/oauth/access_token?' + qs.stringify(tokenQuery);
    var options = {
        url: url,
        headers: {
            'user-agent': 'deep'
        },
        json: true
    };
    request(options, (err, resp, body) => {
        console.log('step 2');
        if (err) return res.send(500, err); 
        console.log(body); 
        res.cookie('token' , body.access_token); 
        var options = {
            url: 'https://api.github.com/user', 
            headers: {
                'user-agent': 'deep', 
                'Accept': 'application/json', 
                'Authorization': 'token ' + body.access_token
            },
            json: true
        };
        request(options, (err, resp, body) => {
            console.log('step 3');
            //res.send(body);
            res.redirect('/');
        });
    })
})
app.get('/github', (req, res) => {
    console.log('step 4');
    var token = req.cookies.token;
    var options = {
        url: 'https://api.github.com/user', 
        headers: {
            'user-agent': 'deep', 
            'Accept': 'application/json', 
            'Authorization': 'token ' + token
        },
        json: true
    }
    request(options, (err, resp, body) => {
        console.log('step 5');
        res.send(body);
    })
})

app.post('/signup', userCtrl.addUser);
app.post('/login', userCtrl.verifyUser)


app.listen(3000);

module.exports = app;
