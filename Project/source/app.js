// https://github.com/babel/example-node-server
import express from 'express';
import mongoose from 'mongoose';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import cookie_session from 'cookie-session';
import { register_route } from './controllers';

const app = express();

app.use(body_parser());
app.use(cookie_parser());
app.use(cookie_session({ 
        name: 'session',
        keys: ['23456', '09876']
    })
);
register_route(app)


mongoose.connect("mongodb://localhost:27017/node_test_db",);
app.listen(8080, function(){
    console.log('Server started on port 8080');
});