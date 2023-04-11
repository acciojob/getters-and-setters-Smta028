//complete this code
class Person {
	constructor(name,age){
	get getName(){
		return this.name;
	}
		set setName(){
			return this.name;
		}
	}
}

class Student extends Person {
	super()
	study(){
		console.log(getName()+"is studying");
	}
}

class Teacher extends Person {
	super()
	teach(){
		console.log(getName()+"is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
