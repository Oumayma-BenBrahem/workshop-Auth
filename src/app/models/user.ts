// export interface User {
//   accessToken: string;
//   role: string;
// }
// models/user.ts
export interface User {
  email: string;
  role: string;
  name: string;
  surname: string;
  id: number;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}


