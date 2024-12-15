/// <reference path="./subjects/Java.ts"/>
/// <reference path="./subjects/Teacher.ts"/>
/// <reference path="./subjects/Subject.ts"/>
/// <reference path="./subjects/Cpp.ts"/>
/// <reference path="./subjects/React.ts"/>

export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
}

console.log('C++');
Subjects.cpp.SetTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

console.log('Java');
Subjects.java.SetTeacher(cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log('React');
Subjects.react.SetTeacher(cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
