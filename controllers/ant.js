var ant = require('../models/ant');
// List of all Costumes
exports.ant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.ant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ant detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.ant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: ant create POST');
};
// Handle Costume delete form on DELETE.
exports.ant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ant delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.ant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ant update PUT' + req.params.id);
};

// List of all ants
exports.ant_list = async function(req, res) {
    try{
    theants = await ant.find();
    res.send(theants);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.ant_view_all_Page = async function(req, res) {
    try{
    theant = await ant.find();
    res.render('ant', { title: 'Ant Search Results', results: theant });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Costume create on POST.
exports.ant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.antName = req.body.antName;
    document.age = req.body.age;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    exports.ant_detail = async function (req, res) {
        console.log("detail" + req.params.id)
        try {
            result = await ant.findById(req.params.id)
            res.send(result)
        } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
    };
    
    //New code for Assignment 12 for screenshot2
    //Handle ant update form on PUT
    exports.ant_update_put = async function (req, res) {
        console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
        try {
            let toUpdate = await ant.findById(req.params.id)
            // Do updates of properties
            if (req.body.antName)
                toUpdate.antName = req.body.antName;
            if (req.body.age) toUpdate.age= req.body.age;
            if (req.body.color) toUpdate.color= req.body.color;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
        }
    };

   
    exports.ant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await ant.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    
    