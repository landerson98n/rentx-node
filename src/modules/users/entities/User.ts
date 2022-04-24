import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"

@Entity("users")
export class User{
  @PrimaryColumn()
  id?: string
  @Column()
  name: string
  @Column()
  email: string
  @Column()
  username: string
  @Column()
  password: string
  @Column()
  driver_license: string
  @Column()
  admin?: boolean
  @Column()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id = v4()
    }
    if(!this.admin){
      this.admin = false
    }
  }
}