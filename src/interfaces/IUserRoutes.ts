import { Router } from 'express';

export default interface IUserRoutes {
  router: Router;
  routes(): void;
}
