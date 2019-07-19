import { HttpError } from "routing-controllers";

export class TodoNotFoundError extends HttpError {
  constructor() {
    super(404, "TODO NOT FOUND");
  }
}
