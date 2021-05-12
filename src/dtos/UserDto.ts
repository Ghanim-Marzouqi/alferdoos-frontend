import { USER_TYPE } from "../config/Constants";

export default interface UserDto {
  // main properties
  readonly id?: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  profileImage: string;
  userType: USER_TYPE;
}