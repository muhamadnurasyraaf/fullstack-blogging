const express = require('express');

const app = express();

const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use("/",postRouter);

db.sequelize.sync().then(() => {
    const port = 3001;
    app.listen(port,() =>{
        console.log(`Running server on port ${port}`);
    });
})

