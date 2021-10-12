const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/question
    axios.get('http://localhost:3000/api/question')
        .then(function(response){
            res.render('index', { question : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports add_question = (req, res) =>{
    res.render( add_question');
}

exports.update_question = (req, res) =>{
    axios.get('http://localhost:3000/api/question', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_question", { question : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}