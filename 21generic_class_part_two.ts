class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Children<T> {
  classTeacher: T;
  nameChildren: string;
  constructor(classTeacher: T, nameChildren: string) {
    this.classTeacher = classTeacher;
    this.nameChildren = nameChildren;
  }

  getClassess(): string {
    const teacherName = this.classTeacher["name"];
    const joinedChildInClass = `children ${this.nameChildren} join in class ${teacherName}`;
    return joinedChildInClass;
  }
}

const TeacherName = new Teacher("udin");
const children = new Children(TeacherName, "bambang");
console.log(children.getClassess());
