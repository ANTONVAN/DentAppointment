$(function(){

  //create list
  var tests = [];

  $("#test").keypress(function(event){
    if(event.which==13){
      console.log("Adding test");

      testCode = $("#test").val();

      $.ajax(`/viewTest/${testCode}`,{
                  type:"GET",
                  
                 
              }).then((response)=>{
                  console.log(response);
                  tests.push({test_id: response.id});
                  console.log(tests);
                  /*tests.forEach(test => {
                      
                      let add = $("<option>");
                      add.attr('id', test.id);
                      add.val(test.test_name); 
                      add.addClass("serclick");
                      testsList.append(add);
                  });*/


              $("#test").val(""); 
              });


      return false;
    }
  });


});