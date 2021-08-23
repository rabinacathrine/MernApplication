const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String
},
{collection:'userdata'}
)

const user = mongoose.model('user',userSchema)
module.exports=user