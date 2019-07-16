import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put
} from "routing-controllers";

import { CreateTodoDto, UpdateTodoDto } from "./dto";
import { Todo } from "./todo.entity";
import TodoService from "./todo.service";

@JsonController("/todos")
export class TodosController {
  constructor(private todoService: TodoService) {}

  @Get("")
  public findTodos(): Promise<Todo[]> {
    return this.todoService.findAllTodos();
  }

  // @Get("/:id")
  // public findTodoById(@Param("id") id: number) {
  //   return this.todoService.findByIdTodo(id);
  // }

  // @Post("")
  // public createTodo(@Body() createTodo: CreateTodoDto) {
  //   return "";
  // }

  // @Put("/:id")
  // public updateTodo(
  //   @Param("id") id: number,
  //   @Body() updateTodo: UpdateTodoDto
  // ) {
  //   return "";
  // }

  // @Delete("/:id")
  // public removeTodo(@Param("id") id: number) {
  //   return "";
  // }
}
