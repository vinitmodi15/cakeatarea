const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const Product = mongoose.model("Product",productSchema);

app.use(cors());
app.use(express.json());

const connectToDB=async()=>{
 try {
    await mongoose.connect('mongodb+srv://vinitjodhpur2:root123@cluster0.usr9fud.mongodb.net/')
 console.log("Connected to the database.")
 } catch (error) {
  console.log(error.message)  
 }
}

connectToDB();

app.get('/',async (req,res)=>{
   try {

    let products = await Product.find();
    res.status(200).json({
        message:"success",
        products
    })
    
   } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
   }
});

app.post("/addproduct", async(req,res)=>{
   try {
    let newProduct = req.body;
    let product = await Product.create(newProduct);

    res.status(201).json({
        message:"success",
        product
    })
   } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
   }
});
 

app.put("/updateproduct/:productid",async(req,res)=>{
try {
    
const {productid} = req.params;

let updatedProduct= await Product.findByIdAndUpdate(productid,req.body);

if(!updatedProduct){
 return   res.status(201).json({
        success:false,
        message:"No Product Found"
    })
}

res.status(201).json({
success:true,
    message:"You made a update request"
});


} catch (error) {
    res.status(201).json({
        success:false,
        message:"You made a update request"
    })
}
});


app.get("/productdes/:category",async(req,res)=>{

    try {
        const productCategory= req.params.category;

        const products = await Product.find({category:productCategory});
        res.status(200).json({
            Success:true,
            products
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

})


app.listen(4000,()=>{
    console.log("our server is working")
});