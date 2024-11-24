import express from 'express';

import User from './models/UserSchema.js';
// db connection
import bodyParser from 'body-parser';
import db from './db.js';

const app = express();
app.use(bodyParser.json());

app.get('/', async(req, res) => {

    try{
        const data = await User.find();
        res.status(200).json({ message: "Data Fecth Succesfullt", data: data });
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
});


app.post('/', async (req, res) => {
    const data = req.body;
    if (data) {
        try {
            const userData = new User(data);
            const saveResponse = await userData.save();
            res.status(200).json({ message: "Data Save Succesfullt", data: saveResponse });
        } catch (error) {
            console.log("Error while saving data", error);
            res.status(500).json({ message: "Fail to save data", data: saveResponse })
        }
    } else {
        res.status(400).json({ message: 'No data provided' });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
