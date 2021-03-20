$(function(){

   $("#menu-new-orders").on("click", ()=>{

      window.location.replace("/newOrders");
   
   });
    
   $("#menu-orders").on("click", ()=>{

      window.location.replace("/orders");
   
   });
   
   $("#menu-calendar").on("click", ()=>{

      window.location.replace("/calendar");
   
   });
   

   $("#menu-profile").on("click", ()=>{
   
      window.location.replace("/profile");
   
   });
   
   $("#menu-patients").on("click", ()=>{
   
      window.location.replace("/patients");
   
   });
   
/*    $("#menu-treatments").on("click", ()=>{
   
      window.location.replace("/treatments");
   
   }); */

   $("#menu-tests").on("click", ()=>{
   
      window.location.replace("/tests");
   
   });

})
