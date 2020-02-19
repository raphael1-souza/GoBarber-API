import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Raphael',
    email: 'raphael.souza@gmail.com',
    password_hash: '123455556',
  });

  return res.json(user);
});

export default routes;
