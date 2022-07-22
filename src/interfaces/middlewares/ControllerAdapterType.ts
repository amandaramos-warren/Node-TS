import { NextFunction, Request, Response } from 'express';
import IController from '../presentation/IController';

export type ControllerAdapterType = (
  controller: IController
) => (req: Request, res: Response, next: NextFunction) => void;
