
$(document).ready(function(){
    $('.serviceItem').on('click',function(event){
       event.preventDefault();
       var serviceId=this.id;
       var data={
        'id':serviceId
       }
    alert(serviceId);
    });
    /*$.ajax({
      type:'POST',
      url:'/service',
      data:data
    
    });
    */
   $('#hi').on('click',function(event){
     alert("ayay");
   });
  

});