interface Student {
    firstName : string,
    lastName : string;
    age : number;
    location: string;
}

const student1 : Student = {
    firstName : "John",
    lastName : "Doe",
    age : 28,
    location : "Right here"
};

const student2 : Student = {
    firstName : "Jane",
    lastName : "Doe",
    age : 29,
    location : "Here too"
}

const StudentsList : Array<Student> = [student1, student2]

const body = document.querySelector("body");
const table = document.createElement("table");
const tableHeader = table.createTHead();
const tableBody = document.createElement("tbody")

const headerRow = tableBody.insertRow();
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);

StudentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const celFirstName = row.insertCell();
    celFirstName.textContent = student.firstName;
    const cellLocation = row.insertCell();
    cellLocation.textContent = student.location;
})

table.appendChild(tableBody);
body?.appendChild(table);
