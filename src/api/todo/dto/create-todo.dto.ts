import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  public title: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
