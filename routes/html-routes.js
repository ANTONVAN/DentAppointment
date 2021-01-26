module.exports = function(app){

        app.get("/",(req,res)=>{
            res.render("login","");
        });

        app.get("/appointments",(req,res)=>{
            
            res.render("appointments","");
        });

        app.get("/profile",(req,res)=>{
            
            res.render("user","");
        });

        app.get("/treatments",(req,res)=>{
           
            res.render("treatments","");
        });

        app.get("/services",(req,res)=>{
           
            res.render("services","");
            
        });


        

};