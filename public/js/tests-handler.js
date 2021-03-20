$(function(){
 
//target for deletion
 var target;  


// Modal events
$("#create-btn").on("click",function(){
    
     $("#myModal").css("display","block");
 
 });
 
 $(".view-icon").on("click",function(){
    
   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewTest/"+id,{

      type:"GET"

   }).then((response)=>{

      console.log(response.test_name);

      $("#view_test_name").text(response.test_name);

      $("#view_test_cost").text(response.test_cost);
      $("#view_test_observations").text(response.test_observations);
      
      $("#viewModal").css("display","block");
   });



   

});

$(".edit-icon").on("click",function(){

   let id = $(this).attr("data-id"); 
   target=id;
   
   $.ajax("/viewTest/"+id,{

      type:"GET"

   }).then((response)=>{

      

      $("#edit_test_name").val(response.test_name);
      $("#edit_test_cost").val(response.test_cost);
      $("#edit_test_observations").val(response.test_observations);



      $("#editModal").css("display","block");
   });
    
   
});
 
 $(".close, #cancelCreate").on("click",function(){
    $("#myModal").css("display","none");
 });

 //save Test, send object
 $("#saveTest").on("click",function(){

   let Test = {

      name: $("#test_name").val(),
      cost: $("#test_cost").val(),
      observations:$("#test_observations").val(),
     
   }

   $.ajax("/addTest",{
      type:"POST",
      data:Test,
   }).then((response)=>{

      window.location.replace("/tests");
   });

   console.log(Test);

   $("#myModal").css("display","none");
});

$("#saveEdit").on("click",function(event){

   let Test = {

      name: $("#edit_test_name").val(),
      cost: parseInt($("#edit_test_cost").val()),
      observations:$("#edit_test_observations").val(),
     
   };
   $.ajax("/updateTest/" + target,{
      type:"PUT",
      data:Test,
   }).then((response)=>{

      target= "";
      window.location.replace("/tests");


   });

   console.log(Test);

   $("#myModal").css("display","none");
});

 $(".closeEdit, #cancelEdit, #saveTestEdit").on("click",function(){
    $("#editModal").css("display","none");
 });

 $("#exitView, .closeView").on("click",function(){
    $("#viewModal").css("display","none");
 });

 $(".delete-icon").on("click",function(){
    
      target = $(this).attr("data-id"); 
      $("#deletePromt").text("");

    $("#delete-prompt").css("display","block");

});

$("#cancelDel, .closeDeletion").on("click",function(){
    $("#delete-prompt").css("display","none");
    
    });
    
    


// #deleteBtn
$("#deleteBtn").on("click",function(){
   $.ajax("/validateTest/"+target,{
      type: "GET"
   }).then((resp)=>{

      if(resp.length>0)
      { 
         
         $("#deletePromt").text("You have appointments with this test! change the appointments first");
      }
      else
      {
         $.ajax("/deleteTest/" + target,{

            type:"DELETE"
      
         }).then((response)=>{
           
         $("#delete-prompt").css("display","none");
          window.location.replace("/tests");
         });
      }

   });

 

});

});

