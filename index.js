/*setting points for GPA*/
var A = 4
var B = 3
var C = 2
var D = 1
var F = 0

/*Initializing Grade array*/
var gradeArray = []
var classArray = []

/*This function is made to gather the input from the form*/
function getGrade() {
	/*loops through all the inputs gathering info*/
	for (var i = 1; i <= 5; i++) {
		/*This gets the class name*/
		var name = document.getElementById(`className${i}`).value
		/*This gets the grades*/
		var grade = document.getElementById(`grade${i}`)
		/*This strips the HTML from the option and gives us the selected option*/
		var grades = grade.options[grade.selectedIndex].text;
		/*Since this a loop every time it runs it loops it adds the grade to the Array*/
		classArray.push(name);
		gradeArray.push(grades);
	}
}

function calcGpa() {
	/*Getting grade data to make sure scopes match up*/
	getGrade();
	/*Logging the classes and grades to make sure the script it working*/
	console.log('Class names')
	console.log(classArray);
	console.log('Class grades')
	console.log(gradeArray);
	/*This does the math. Using eval to convert string into a variable*/
	var gpa = eval(gradeArray[0])+eval(gradeArray[1])+eval(gradeArray[2])+eval(gradeArray[3])+eval(gradeArray[4])
	/*Gross GPA*/
	console.log(gpa)
	/*setting up the math*/
	var classes = i
	/*doing more math*/
	var gpaTotal = gpa/classes
	/*Logging the GPA to console*/
	console.log(gpaTotal)
}

/*When the submit button is clicked it will run calcGPA()*/
document.getElementById('submit').onclick = function() {calcGpa()};


function clearCalc() {

}