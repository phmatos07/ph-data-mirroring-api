import { NextFunction, Request, Response } from "express";

export class UserGetController {

  static get(request: Request, response: Response, next: NextFunction): void {
    const testeJson = {
      nome: request.query.nome,
      idade: 25,
      data: '29/09/1988'
    }
    response.send(testeJson);
  }
}
