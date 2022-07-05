const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose = require("mongoose");
const app = express();


app.use(bodyParser.json());

mongoose
    .connect(
        "mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/project-1-db?retryWrites=true&w=majority", { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err));

app.use("/", route);



app.listen(process.env.PORT || 3001, function() {
    console.log("Express app running on port " + (process.env.PORT || 3001));
});