var students = [];
for (let i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}

for (let student of students) {
  greetStudents( student );
}

while (students.length > 0) {
  let students = students.pop();
  greetStudents(student);
}
