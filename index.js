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
		var name = document.getElementById(`className${i}`).value
		var grade = document.getElementById(`grade${i}`)
		var grades = grade.options[grade.selectedIndex].text;
		classArray.push(name);
		gradeArray.push(grades);
	}
}

function calcGpa() {
	getGrade();
	console.log('Class names')
	console.log(classArray);
	console.log('Class grades')
	console.log(gradeArray);
	var gpa = eval(gradeArray[0])+eval(gradeArray[1])+eval(gradeArray[2])+eval(gradeArray[3])+eval(gradeArray[4])
	console.log(gpa)
	var classes = 5
	var gpaTotal = gpa/classes
	console.log(gpaTotal)
}

document.getElementById('submit').onclick = function() {calcGpa()};


function clearCalc() {

}