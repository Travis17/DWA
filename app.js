/**
 * Created by travisknoll on 4/29/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var hello = require('./models/hello');
var router = express.Router();

mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');


//middleware
router.use(function(req, res, next){

    console.log('Something is happening!');
    next();
});
//routes
router.get('/', function(req, res) {
    res.json({ message: 'Horay! Welcome to our API!'});
});


router.route('/hello')

.post(function(req, res) {

    var hello = new Hello();
    hello.name = req.body.name;

    hello.save(function(err){
        if(err)
            res.send(err);

        res.json({ message: 'Your Hello has been created!' });
    });
});


app.use('/api', router);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






var port = process.env.PORT || 8080;




app.listen(port);
console.log('My Magic happens on port' + '  ' + port);

