import { NextFunction, Request, Response } from "express";
import { Service } from "typedi";

import { InjectRepository } from "typeorm-typedi-extensions";
import { Todo } from "./todo.entity";
import { TodoRepository } from "./todo.repository";

// 레포지토리 종합하고 처리를 하는 로직이 들어가면됨.
@Service()
export default class TodoService {
  constructor(@InjectRepository() private todoRepository: TodoRepository) {}

  public async findAllTodos(): Promise<Todo[]> {
    // const todos = await this.todoRepository.find();
    return await this.todoRepository.find();
  }

  public findByIdTodo(req: Request, res: Response, next: NextFunction) {
    return "findByIdTodo";
  }
  public createTodo(req: Request, res: Response, next: NextFunction) {
    return "updateTodo";
  }
  public updateTodo(req: Request, res: Response, next: NextFunction) {
    return "updateTodo";
  }
  public removeTodo(req: Request, res: Response, next: NextFunction) {
    return "removeTodo";
  }
}
