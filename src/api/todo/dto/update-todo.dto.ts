import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength
} from "class-validator";

export class UpdateTodoDto {
  @IsInt()
  @IsPositive()
  @IsNumber()
  public id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  public title: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
