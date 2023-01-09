import { Roles } from "./roles"

export interface UserInfo {
  _id: string
  name: string
  email: string
  rol: Roles
}
