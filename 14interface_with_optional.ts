//  optional interface example
interface TeacherInterfaceValid {
  name: string;
  birthdayDate: Date;
  phoneNumber?: string;
  graduateTitle: string;
}

let teacherRegisterValid: TeacherInterfaceValid = {
  name: "udin",
  birthdayDate: new Date(),
  graduateTitle: "Software Engineer MBA",
};

console.log("teacherRegister:", teacherRegisterValid);

// non optional interface example
// interface TeacherInterfaceNonValid {
//   name: string;
//   birthdayDate: Date;
//   phoneNumber: string;
//   graduateTitle: string;
// }

// let teacherRegisterNonValid: TeacherInterfaceNonValid = {
//   name: "udin",
//   birthdayDate: new Date(),
//   graduateTitle: "Software Engineer MBA",
// };

// console.log("teacherRegister:", teacherRegisterNonValid);

// Note: please uncoment script in non optional interface, and open with IDE vs code or another, and get response interface error from IDE
