const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 80,
    },
    {
        name: 'Ron',
        score: 70,
    },
    {
        name: 'Thomas',
        score: 90,
    },
    {
        name: 'Jeff',
        score: 50,
    },
    {
        name: 'John',
        score: 40,
    },
    {
        name: 'Ansel',
        score: 100,
    },
];

const eligibleScolarshipStudents = students.filter((student) => student.score >= 80);

console.log(eligibleScolarshipStudents);

/*
 Output:
[
  { name: 'James', score: 80 },
  { name: 'Thomas', score: 90 },
  { name: 'Ansel', score: 100 }
 */