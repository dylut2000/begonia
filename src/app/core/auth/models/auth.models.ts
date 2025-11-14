export type LoginType = {
  email: string
  password: string
}

export type RegisterType = LoginType & {imageUrl: string; username: string}

export type UserType = {
  id: string
  email: string
  imageUrl: string
  username: string
}
