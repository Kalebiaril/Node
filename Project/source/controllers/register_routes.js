import product_router from './product';
import category_router from './categories';
import express from 'express';
import path from 'path';
//import { check_user_midd } from '../minddlewares';


const staticPath = path.join(__dirname ,"../../client");

function addApiRoutes(app, routeName, routes){
    app.use(`/api/${routeName}`, routes);
}


export function register_route(app){
    app.use('/', express.static(staticPath));    
    app.use('/api', product_router);
    app.use('/api', category_router);
}
