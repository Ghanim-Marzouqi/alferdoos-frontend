import { USER_TYPE } from "../config/Constants";

export default interface UserDto {
  // main properties
  readonly id?: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  profileImage: File;
  userType: USER_TYPE;
}