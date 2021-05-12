const INITIAL_STUDENT_DATA = {
  firstName: "",
  secondName: "",
  thridName: "",
  familyName: "",
  fullname: "",
  finishedGrade: "seven",
  firstPhoneNumber: "",
  secondPhoneNumber: "",
  village: "معمد",
  subjectANumber: 0,
  subjectBNumber: 0,
  savedChapters: [],
  savedSurahs: [],
  isLearntInQuranCenter: false,
  quranCenterLocation: "",
  skills: "",
  isHealthy: true,
  healthIssues: "",
  certificates: [],
  studentImage: new File([], "")
}

const VILLAGES = ["معمد", "المعري", "البلاد", "الفيقين", "البياض", "الشعيبة", "حي جامع", "المعيول", "عز", "متان", "أخرى"];

const CHAPTERS = ["- اختر -", "الأول", "الثاني", "الثالث", "الرابع"];

const SURAHS = ["- اختر -", "البقرة", "آل عمران", "النساء"];

export { INITIAL_STUDENT_DATA, VILLAGES, CHAPTERS, SURAHS }