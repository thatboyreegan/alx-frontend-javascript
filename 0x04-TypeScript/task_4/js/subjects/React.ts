/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts"/>
/// <reference path="Cpp.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } 
            return 'No available teacher';
        }
    }

    export const react = new React();
}