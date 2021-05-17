import { USER_TYPE } from "../../config/Constants";

export default interface AuthDto {
  name?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  userType?: USER_TYPE;
  isRemebered?: boolean;
}