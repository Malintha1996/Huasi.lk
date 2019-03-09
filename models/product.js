
const mongoose=require('mongoose');

const ItemSchema=mongoose.Schema({
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
        required:true
    }
 });
 

const ProductSchema=mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    sid:{
        type:String,
        require:true
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
        required:true
    },
    items:[ItemSchema]
   
    

});


const Product=module.exports=mongoose.model('Product',ProductSchema);

  module.exports.getProductById=function(id,callback){
      const query={id:id}
      Product.findOne(query,callback);
  }
  module.exports.getProducts=function(sid,callback){
    const query={sid:sid}
    Product.find(query,callback);
}

module.exports.addProduct=function(item,index){
    
   let product=new Product({
    id:item.id,
    name:item.name,
    picture:item.picture,
    description:item.description
   });
    
    product.save((err,item)=>{
        if(err) throw err;
        console.log(item);
    });
} 