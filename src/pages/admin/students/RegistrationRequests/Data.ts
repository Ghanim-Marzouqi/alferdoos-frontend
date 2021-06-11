import { STUDENT_STATUS } from "../../../../config/Constants";
import StudentRegistrationRequestDto from "../../../../dtos/StudentRegistrationRequestDto";

export const DUMMY_DATA: StudentRegistrationRequestDto[] = [
  {
    id: 1,
    student: {
      firstName: 'شهم',
      secondName: 'غانم',
      thridName: 'سالم',
      familyName: 'المرزوقي',
      finishedGrade: 'seven',
      firstPhoneNumber: '99887766',
      secondPhoneNumber: '96959498',
      village: 'معمد',
      subjectANumber: '5',
      subjectBNumber: '3',
      savedChapters: ['الجزء الأول'],
      savedSurahs: ['الناس'],
      isLearntInQuranCenter: false,
      quranCenterLocation: '',
      skills: 'ذكي جدا',
      isHealthy: true,
      healthIssues: '',
      certificates: [],
      studentImage: new File([], ''),
    },
    status: STUDENT_STATUS.REVIEW,
    remarks: '',
    isActive: true,
    createdAt: new Date()
  }
]
