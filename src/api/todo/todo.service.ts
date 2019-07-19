import { Service } from "typedi";
import { DeleteResult, UpdateResult } from "typeorm";

import { InjectRepository } from "typeorm-typedi-extensions";
import { CreateTodoDto, UpdateTodoDto } from "./dto";
import { Todo } from "./todo.entity";
import { TodoRepository } from "./todo.repository";

// 레포지토리 종합하고 처리를 하는 로직이 들어가면됨.
@Service()
export default class TodoService {
  constructor(@InjectRepository() private todoRepository: TodoRepository) {}

  public async findAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  public findByIdTodo(id: number) {
    return this.todoRepository.findOne(id);
  }

  public createTodo(creatoTodoDto: CreateTodoDto) {
    return this.todoRepository.create(creatoTodoDto);
  }
  public updateTodo(updateTodoDto: UpdateTodoDto): Promise<UpdateResult> {
    const { id } = updateTodoDto;
    return this.todoRepository.update(id, updateTodoDto);
  }
  public removeTodo(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
    // return this.todoRepository
  }
}
