const model = require("../model/registerschema");


const registerController = (req, res) => {

    const { userName, email , quizScore } = req.body

console.log(req.body)
console.log(userName)
console.log(email)
console.log(quizScore)



    if (!userName || !email ) {

        return res.json({ "message": "Required fields are empty." });

    }

    model.findOne({ email }, (err, data) => {

        if (err) {

            res.send(err);

        } 

        else if (data) {

            console.log(data);

            res.json({ "message": "Already Attempted" });

        } 
            
            else {
                model.create(  req.body , (err, data ) => {

                if (err) {

                    res.send(err);

                } else {
                    console.log(data)

                    res.json({ "message": "User Successfully Registered." });
                    
                }
            });
        }
    }
    );


}

module.exports = registerController;