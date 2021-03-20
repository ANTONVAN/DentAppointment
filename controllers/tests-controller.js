const db = require("../models");

module.exports = function(app){

    app.post("/addTest",(req,res)=>{
        console.log(req.body);
        db.Tests.create({

            test_name:req.body.name,
            test_cost:req.body.cost,
            test_observations: req.body.observations,


        }).then((response)=>{
                res.send(response);
        });
    });

    app.get("/tests",(req,res) => {

    console.log("estamos aqui");
    db.Tests.findAll({


    }).then((tests)=>{
          
            
            let Tests = tests.map((obj)=>{
                let test = obj.dataValues;
                return test
            });

           
            res.render("tests",{Tests})
    });
    
    });

    app.get("/testsGet",(req,res) => {

        console.log("estamos aqui");
        db.Tests.findAll({
    
    
        }).then((tests)=>{
              
                
                let Tests = tests.map((obj)=>{
                    let test = obj.dataValues;
                    return test
                });
    
               
                res.send(Tests);
        });
        
        });



    app.get("/viewTest/:id",(req,res)=>{

       let id = req.params.id;
       
         
         db.Tests.findOne({
             where:{id},
            
 
         }).then((response)=>{

           res.send(response);
         })
     });

     app.put("/updateTest/:id",(req,res)=>{
        console.log(req.params.id)
         db.Tests.update({

             test_name: req.body.name,
             test_cost:req.body.cost,
             test_observations:req.body.observations

         },{where:{id:req.params.id}}).then((response) => {
             res.send(response);
            }) .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                  res.send(err);
                });
     });





     app.delete("/deleteTest/:id",(req,res)=>{

        db.Tests.destroy({where:{id:req.params.id}}).then(()=>{
                
                res.status(200).end();
                
        }).catch((err)=>{
            console.log(err);
            res.status(500).send("we failed to delete for some reason")
        });

    });




    
};