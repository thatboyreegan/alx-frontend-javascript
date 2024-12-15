interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName , lastName) => {
    return (`${firstName[0]}. ${lastName}`)
}

interface ClassInterface {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}
class StudentClass implements ClassInterface {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork() {
        return "Currently working"
    }

    displayName() {
        return this.firstName;
    }
}
