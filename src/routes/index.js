/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

import UserRoutes from './user.routes';
import PostRoutes from './post.routes';

import APIError from '../services/error';



const routes = new Router();


routes.use('/users', UserRoutes);
routes.use('/posts', PostRoutes);



routes.all('*', (req, res, next) =>
  next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)),
);



export default routes;
