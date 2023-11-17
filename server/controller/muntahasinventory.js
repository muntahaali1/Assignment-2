var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let muntahasinventory = require('../models/muntahasinventory');

module.exports.Displaymuntahasinventory = async (req,res,next)=>{ //< Mark function as async
    try{
       const muntahasinventoryList = await muntahasinventory.find(); //< Use of await keyword
       res.render('muntahasinventory/list', {
          title: 'muntahasinventory list',                                                                                          
          muntahasinventoryList: muntahasinventoryList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('muntahasinventory/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.Addmuntahasinventory =  (req,res,next)=>{
    try{
        res.render('muntahasinventory/add',
        {
            title:'Add muntahasinventory'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('muntahasinventory/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Processmuntahasinventory =  (req,res,next)=>{
    try{
        let newmuntahasinventory = muntahasinventory({
            "Name":req.body.Name,
            "Colour": req.body.Colour,
            "Material": req.body.Material,
            "Description": req.body.Description,
            "Price": req.body.Price
        });
        muntahasinventory.create(newmuntahasinventory).then(() =>{
            res.redirect('/muntahasinventory')
        })
    }
    catch(error){
        console.error(err);
        res.render('muntahasinventory/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Editmuntahasinventory = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const muntahasinventoryToEdit = await muntahasinventory.findById(id);
    res.render('muntahasinventory/edit',
    {
        title:'Edit muntahasinventory',
        muntahasinventory:muntahasinventoryToEdit
    })
}
catch(error){
    console.error(err);
    res.render('muntahasinventory/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditmuntahasinventory = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedmuntahasinventory = muntahasinventory({
            "_id":id,
            "Name":req.body.Name,
            "Colour": req.body.Colour,
            "Material": req.body.Material,
            "Description": req.body.Description,
            "Price": req.body.Price
        });
        muntahasinventory.findByIdAndUpdate(id,updatedmuntahasinventory).then(()=>{
            res.redirect('/muntahasinventory')
        });
    }
    catch(error){
        console.error(err);
        res.render('muntahasinventory/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.Deletemuntahasinventory = (req,res,next)=>{
    try{
        let id = req.params.id;
        muntahasinventory.findByIDandDelete(id).then(() =>
        {
            res.redirect('/muntahasinventory')
        })
    }
    catch(error){
        console.error(err);
        res.render('muntahasinventory/list',
        {
            error: 'Error on the server'
        });
    }
}
