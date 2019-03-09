
const mongoose=require('mongoose');

const ServiceSchema=mongoose.Schema({
    id:{
      type:String,
      required:true
    },
    name:{
        type:String,
        required:true
    },
   picture:{
      type:String,
      required:true
    },
    description:{
        type:String,
    }
    

});

const Service=module.exports=mongoose.model('Service',ServiceSchema);

module.exports.getServiceById=function(id,callback){
    const query={id:id}
    Service.findOne(query,callback);
}
module.exports.addService=function(item,callback){
    let service=new Service({
        id:item.id,
        name:item.name,
        picture:item.picture,
        description:item.description
       });
    service.save();
} 
