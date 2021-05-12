import UserDto from "./UserDto";

export default interface StudentDto {
  // main properties
  readonly id?: number;
  firstName: string;
  secondName: string;
  thridName: string;
  familyName: string;
  fullname: string;
  finishedGrade: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  village: string;
  subjectANumber: number;
  subjectBNumber: number;
  savedChapters: string[];
  savedSurahs: string[];
  isLearntInQuranCenter: boolean;
  quranCenterLocation: string;
  skills: string;
  isHealthy: boolean;
  healthIssues: string;
  certificates: File[];
  studentImage: File;
  readonly parentId?: number;

  // navigation properties
  readonly parent?: UserDto;
}