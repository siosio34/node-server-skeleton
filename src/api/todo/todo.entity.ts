import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @CreateDateColumn({ type: "timestamptz" })
  public createColumn: Date;

  @CreateDateColumn({ type: "timestamptz" })
  public updateColumn: Date;
}
