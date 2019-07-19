import {
  Body,
  Delete,
  Get,
  JsonController,
  OnUndefined,
  Param,
  Post,
  Put
} from "routing-controllers";

import { CreateTodoDto, UpdateTodoDto } from "./dto";
import { Todo } from "./todo.entity";
import { TodoNotFoundError } from "./todo.error";
import TodoService from "./todo.service";

@JsonController("/todos")
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Get("")
  public findTodos(): Promise<Todo[]> {
    return this.todoService.findAllTodos();
  }

  @Get("/:id")
  @OnUndefined(TodoNotFoundError)
  public findTodoById(@Param("id") id: number) {
    return this.todoService.findByIdTodo(id);
  }

  @Post("")
  public createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Put("/:id")
  @OnUndefined(TodoNotFoundError)
  public updateTodo(
    @Param("id") id: number,
    @Body() updateTodoDto: UpdateTodoDto
  ) {
    return this.todoService.updateTodo(updateTodoDto);
  }

  @Delete("/:id")
  @OnUndefined(TodoNotFoundError)
  public removeTodo(@Param("id") id: number) {
    return this.todoService.removeTodo(id);
  }
}
