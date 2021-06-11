import { STUDENT_STATUS } from "../config/Constants";
import StudentDto from "./StudentDto";

export default interface StudentRegistrationRequestDto {
  readonly id?: number;
  student: StudentDto;
  status: STUDENT_STATUS;
  remarks: string;
  isActive: boolean;
  createdBy?: string;
  createdAt?: Date;
  updateBy?: string;
  updateAt?: Date;
}