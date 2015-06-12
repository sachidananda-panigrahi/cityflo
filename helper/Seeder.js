var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userModel = require('../models/UsersModel');
var async = require("async");
var locals = {};

if(mongoose.connection.readyState=='no'){
    var connection = mongoose.connect('mongodb://localhost/cityflo_db');
}

function objectFindByKeyAndValue(collection, key, value){
    var len = collection.length;        
    for(var i = 0; i<len; i++){
        var item = collection[i];
        if(item[key] === value) return item;
    }
    return false;
};

function populateDB() {
    
    var allUsers = [
        {
            id: 'cityflo1',
            name: 'Sachidananda Panigrahi',
            email: 'snpanigrahi88@gmail.com',
            mobile: 8857928163,
            address: 'SN: 45/4, Datta Mandir HSG SOC, Chandan Nagar',
            city: 'Pune',
            state: 'Maharastra',
            country: 'India',
            pin: 411014,
            password: bcrypt.hashSync('sachin', bcrypt.genSaltSync(8), null),
            birth_date: new Date(1988, 03, 24, 12, 00, 00),
            gender: 'M',
            created_at: new Date(),
            home: { latitude: 18.559358, longitude: 73.931093 },
            office: { latitude: 18.549855, longitude: 73.901103 },
            home_pickup: { latitude: 18.559358, longitude: 73.931093 },
            home_drop_off: { latitude: 18.559358, longitude: 73.931093 },
            office_pickup: {  latitude: 18.549855, longitude: 73.901103 },
            office_drop_off: {  latitude: 18.549855, longitude: 73.901103 },
            message: 'HI, How are you?',
            status: 'active'
        }
    ];

    async.series([
        function(callback){
            userModel.find({}, function (err, users) {
                if (users) {
                    console.log('Users : ' + users.length);
                    if (users.length === 0) {
                        var allUsersLength = allUsers.length;                            
                        async.forEach(allUsers, function(eachUser, callback) {                    
                            var dummyUser = new userModel(eachUser); 
                            dummyUser.save(function (err, user) {
                                if(user.username=='SuperAdmin'){
                                    locals.user_id=user._id;                            
                                }          
                                console.log("User insertion Id: "+user._id);
                                callback();             
                            });
                        }, callback); 
                        
                    }else{                        
                        console.log(users.length + ' users exist.');                        
                        var resultObj = objectFindByKeyAndValue(users, 'role', 'superadmin');                                                                            
                        locals.user_id=resultObj    ._id;
                        callback(); 
                    }
                }
            }); 
        }
              
    ],function(err, results){ // optional callback         
       //console.log("Session: %j", locals);        
    }); 
         
}; 
module.exports = {'populateDB' : new populateDB()};