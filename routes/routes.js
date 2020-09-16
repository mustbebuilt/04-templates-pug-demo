const express = require('express');

const router = express.Router();


module.exports = () => {



    router.get('/example', (req, res) => {
        return res.render('example', {
            title: 'PUG Example', message: 'Hello PUG Template'
            });
    });

    router.get('/dogs', (req, res) => {

        var dogJson = [
            { 
                "name" : "Fido",
                "breed" : "Border Terrier",
                "childFriendly" : true
            },
            { 
                "name" : "Butch",
                "breed": "Poodle",
                "childFriendly" : true
            },
            { 
                "name" : "Patch",
                "breed": "Poodle",
                "childFriendly" : false
            }
        ];

        return res.render('dogs-loop', {
            title: 'Looping Data with PUG',
            message : 'Data Loop with PUG',
            dogs: dogJson
            });
    });

    router.get('/main', (req, res) => {
        return res.render('main', {
            title: 'PUG Example from Parts', 
            message: 'Hello PUG Template built in parts',
            showMsg: true,
            headingOne: 'Page made from parts'
            });
    });



    

    return router;

}
