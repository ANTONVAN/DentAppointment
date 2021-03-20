const db = require("../models");


module.exports = function(app){

    app.post("/addOrder",(req,res)=>{
       
         //////////////

         let today = new Date();
         let dd = String(today.getDate()).padStart(2, '0');
         let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         let yyyy = today.getFullYear();
 
         today = yyyy + '-' + mm + '-' + dd;
 
         console.log("Fecha-------" + today + "HORA ----"+req.body.start);
 
         //////////////////////////////

        db.Order.create({
             date_start:req.body.start,
             date_end:req.body.end,
             patient_id:req.body.patient,
             test_id:req.body.test
             //date_day:today

        }).then((response)=>{

                res.send(response);
        });
        
    });

    app.post("/addOrder/:date",(req,res)=>{


       db.Order.create({
            date_start:req.body.start,
            date_end:req.body.end,
            date_day:req.params.date,
            patient_id:req.body.patient,
            test_id:req.body.test
            //date_day:today

       }).then((response)=>{

               res.send(response);
       });
       
   });

   app.put("/editOrder/:id",(req,res)=>{
    console.log("----------------------------------------------");
    console.log("params "+req.params.id)
    console.log("body "+JSON.stringify(req.body))

    db.Order.update({

         date_start:req.body.start,
         date_end:req.body.end,
         date_day:req.params.editDate,
         patient_id:req.body.patient,
         test_id:req.body.test
         
         //date_day:today

    },{
        where:{id:req.params.id}
    }).then((response)=>{

            res.send(response);
    });

    
    
    });
    
    app.get("/orders",(req,res)=>{
        /*
        //////////////
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        //////////////////////////////

        db.Appointment.findAll({}).then((response)=>{

                let Appointments = response.map((obj)=>{
                    let app = obj.dataValues;
                return app
                });

            //console.log("Testing " + response);
            res.render("appointments",{Appointments})

        });*/
        res.render("orders","")
    });

    app.get("/orders/:date",(req,res)=>{

        
        
        let date = req.params.date;
        console.log("RECIVED -----" + date);

        db.Order.findAll({
            where:{date_day:date}
            , order: [['date_start', 'ASC']]
        
        }).then((response)=>{

            let Orders = response.map((obj)=>{
                let app = obj.dataValues;
                return app
            });
           
            res.json(Orders);

        });
    });

    app.get("/orders/dates/:id",(req,res)=>{

        
        
        let id = req.params.id;
   

        db.Order.findOne({
            where:{id:id}
        }).then((response)=>{

           
           
            res.json(response);

        });
        
    });

    app.delete("/deleteOrder/:id",(req,res)=>{

        
        
        let id = req.params.id;
   

        db.Order.destroy({
            where:{id:id}
        }).then(()=>{

           
           
            res.send("done!");

        });
        
    });

   //validators

   app.get("/validateTest/:id",(req,res)=>{
        let id = req.params.id;
    

        db.Order.findAll({
            where:{test_id:id}
        }).then((response)=>{

        
        
            res.json(response);

    });
   });

   app.get("/validatePatient/:id",(req,res)=>{
    let id = req.params.id;


    db.Order.findAll({
        where:{patient_id:id}
    }).then((response)=>{

    
    
        res.json(response);

});
});
    

    
};