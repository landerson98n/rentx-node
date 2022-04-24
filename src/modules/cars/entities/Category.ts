import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {v4} from 'uuid'

@Entity("categories")
class Category{
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: string;
  constructor(){
    if(!this.id){
      this.id = v4()
    }
  }
}

export {Category}