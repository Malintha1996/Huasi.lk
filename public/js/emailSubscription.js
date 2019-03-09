$(document).ready(function(){
 

  $('#newsletterForm').on('submit',function(event){
   
     event.preventDefault();
     var email=$('#email').val();
     var data={
      'email':email,
     }
     var btn= $('#btn');
     $.ajax({
       type:'POST',
       url:'/subscribe',
       data:data,
       success:function(data){
         alert("Thank you for subscribing us!!");
       },
       error:function(err){
         alert("Something went wrong try again later");
       }

     });
  });
});