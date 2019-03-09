
const Product= require('./models/product.js');
const Service= require('./models/services.js');
const MailService= require('./mailController.js');

module.exports=function(app){
  app.get('/home',function(req,res){
     res.render("home");
  });
  app.get('/aboutus',function(req,res){
    res.render('aboutus');
  });

  app.get('/services/:id',function(req,res){
    Service.getServiceById(req.params.id,(err,service)=>{
      console.log(service);
      res.render("services",{service:service});
    });
    
});

app.get('/products',function(req,res){
  console.log(req.query);
    id=req.query.id;
    sid=req.query.sid;
    Product.getProductById(id,(err,product)=>{
      if(err){
        console.log(err);
      }
      Product.getProducts(sid,(err,products)=>{
        console.log(products)
        res.render("products",{
          products:products,
          product:product
        });
      });
     
    }); 
    
  });

app.get('/contactus',function(req,res){
    res.render("contactus");
  });
app.post('/subscribe',function(req,res){
    var email=req.body.email;
    console.log(email);
    MailService(email);
    res.send({success:true});
   
});



}