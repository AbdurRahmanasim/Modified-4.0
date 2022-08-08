const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    
    userName: {
        type : String
    },

    email: 
    { 
        type: String
      
    },

    quizScore:
    {
        type: Number
    } 

   

});

const UserModel = mongoose.model("jsQuiz", registerSchema);

module.exports = UserModel;