/**
 * Created by travisknoll on 4/29/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var helloSchema = new Schema({
    name: String
});

module.exports = mongoose.model('hello', helloSchema);