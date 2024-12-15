/// <reference path="Teacher.ts"/>

namespace Subjects {
    export class Subject {
        teacher?: Teacher;
        SetTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}