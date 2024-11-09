import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number | undefined;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
