import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"

@Entity("specifications")
export class Specification{
  @PrimaryColumn()
  id: string
  @Column()
  name: string
  @Column()
  description: string
  @Column()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id = v4()
    }
  }
}