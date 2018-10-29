// https://github.com/babel/example-node-server
import express from 'express';
import mongoose from 'mongoose';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import { register_route } from './controllers';

const app = express();
const base_url = '/api'

app.use(body_parser());
app.use(cookie_parser());

register_route(base_url, app)


mongoose.connect("mongodb://localhost:27017/node_test_db",);
app.listen(8080, function(){
    console.log('Server started on port 8080');
});