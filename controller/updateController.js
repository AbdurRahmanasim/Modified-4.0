const model = require("../model/registerschema");


const updateController = (req, res) => {

    const { userName, email , quizScore } = req.body

console.log(req.body)
console.log(userName)
console.log(email)
console.log(quizScore)




    model.updateOne({ email : email }, {$set:{quizScore : quizScore }} ,(err, data) => {

        if (err) {

            res.send(err);
            console.log(err)

        } 
        else{

            res.send(data)
            console.log(data)


        }


    })


               


}

module.exports = updateController;