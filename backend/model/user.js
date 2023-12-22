const mongoose=require('mongoose')
const RegistrationSchema=new mongoose.Schema({
    aadharnumber:{type:String,required:true,unique:true},
    mobilenumber:{type:String,required:true},
    image:{type:String,required:true}
},{collection:"personals"})
const LoginSchema=new mongoose.Schema({
    microid:{type:String,required:true}
},{collection})
const model=mongoose.model('LoginSchema',UserSchema)