import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Todo } from "./todo.entity";

@Service()
@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  // 여기에 커스텀한 레포지토리 추가하면된다.
  // 복잡한 쿼리를 추가할때 쓰면된다.
}
