import Server from "./src/api/utils/server";
import mongoose from 'mongoose';

import userRoutes from "./src/api/routes/user.routes";
import postRoutes from "./src/api/routes/post.routes";
import carRoutes from "./src/api/routes/cart.routes";

import bodyParser from "body-parser";
import cors from 'cors';
require('dotenv').config();

const server = new Server();

//Body Parser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json() );

//Server Routes
server.app.use(`/${process.env.NAME}/user`, userRoutes);
server.app.use(`/${process.env.NAME}/post`, postRoutes);
server.app.use(`/${process.env.NAME}/car`, carRoutes);

//CORS Config
server.app.use(cors({ origin: true, credentials: true }));

//Mongo
mongoose.connect(process.env.DATABASE_URL as string,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) throw err;
        console.log('Database UP!')
    });


//Express up
server.start(() => {
    var port = process.env.PORT || 3000;
    console.log(`Running on ${port}`);
});