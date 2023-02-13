console.log('Conected')


// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console
// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.
// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.

// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject


function Academy(name, students,subject, start, end, ){
    this.name = name;
    this.students = students;
    this.subject = subject;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subject.length * 10; // isto i tuka mi dava nula
    this.printStudents = function(){
        console.log(this.students)
    }
    this.printSubject = function(){
        console.log(this.subject)
    }
}

function Subject(title, isElective, academy, students){
    this.title = title,
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.numberOfClasses = 10; // tuka ne mi menuva number of classes mi dava 0
    this.overrideClasses = function(number){
        if(number >= 3){
            this.numberOfClasses = number
            console.log(this.numberOfClasses)
        } else {
            console.log('Please enter a number bigger than 3')
        }

    }

}

function Student(firstName, lastName, age, academy){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubject = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy){
        this.academy = academy
        academy.students.push(this)
        
        console.log(`The student ${this.firstName} ${this.lastName} started ${this.academy.name} Academy`)
       
    }
    this.startSubject = function(subjectObj){
        this.academy.subject = subjectObj
        if(subjectObj === academy.subject){
            this.currentSubject = subjectObj;
            console.log(`The subject ${subjectObj.title} is included in the ${this.academy.name}`)
        } else if(this.currentSubject){
            this.completedSubject.push(this)
        }
    
    }
}

let webDeveloper = new Academy('Web Developer', [],[], '17th October 2022', '17th October 2023');
let dataScience = new Academy('Data Science', [], [], '02nd September 2022', '02nd September 2023')
let javaScript = new Subject('Java Script', false, webDeveloper, []);
let css = new Subject('CSS', false, webDeveloper, []);
let html = new Subject('Html', false, dataScience,[])
let student = new Student('Sanja', 'Ignova', 32, dataScience);
let student2 = new Student('Petar', 'Petrov', 30, webDeveloper);


student2.startAcademy(webDeveloper)
student.startAcademy(dataScience)
student.startSubject(html)
student2.startSubject(javaScript)
student2.startSubject(css)
student2.startSubject(html) // ova go dava gresno, html ne e vo webDeveloper tuku vo data science, mene mi gi dava i na dvete mesta
student2.startAcademy(dataScience) // ova isto go dava gresno, na student 2 mu e dadeno properti webDeveloper

console.log(`Student:`, student)
console.log('Student2:', student2)
console.log('Academy WEB:', webDeveloper)
console.log('Academy DATA:', dataScience)
console.log('JAVA:', javaScript)
console.log('CSS:', css)
webDeveloper.printStudents()
dataScience.printStudents()
webDeveloper.printSubject()
dataScience.printSubject()
css.overrideClasses(5)
javaScript.overrideClasses(2)
html.overrideClasses(20)



