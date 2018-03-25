/*setting points for GPA*/
var A = 4
var B = 3
var C = 2
var D = 1
var F = 0

/*Setting global variables*/
var gradeArray = []
var classArray = []
var classCount = 5
var gradeClean = []

/*This function is made to gather the input from the form*/
function getGrade() {
	/*loops through all the inputs gathering info*/
	for (var i = 1; i <= classCount; i++) {
		/*This gets the class name*/
		var name = document.getElementById(`className${i}`).value
		/*This gets the grades*/
		var grade = document.getElementById(`grade${i}`)
		/*This strips the HTML from the option and gives us the selected option*/
		var grades = grade.options[grade.selectedIndex].text;
		/*Since this a loop every time it runs it loops it adds the grade to the Array*/
		classArray.push(name);
		gradeArray.push(eval(grades));
	}
}

function calcGpa() {
	/*Getting grade data to make sure scopes match up*/
	getGrade();
	/*Logging the classes and grades to make sure the script it working*/
	console.log('Class names');
	console.log(classArray);
	console.log('Class grades');
	console.log(gradeArray);
	var grossGpa = gradeArray.reduce(add,0);
	var netGpa = Math.round(grossGpa/classCount * 100)/100;
	console.log(netGpa);
	reset();
	document.getElementById('totalGPA').innerHTML = 'Your GPA: ' + netGpa;
}

function add(a, b) {
	return a + b;
}

function reset() {
	gradeArray.length = 0;
	classArray.length = 0;
	console.log(gradeArray);
	console.log(classArray);
}

function addClass() {
		if (classCount == 12) {
		console.log('Too many classes')
		console.log('You have ' + classCount + ' classes')
	} else {
		classCount++

		console.log(classCount)
		document.getElementById(`class${classCount}`).innerHTML = `
			<div class="col">
		    	<label>Class name</label>
				<input type="text" id="className${classCount}" class="form-control" placeholder="Class name">
		    </div>
		    <div class="col">
		    	<label>Grade</label>
				<select class="form-control" id="grade${classCount}">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="F">F</option>
				</select>
		    </div>`

	}

}

/*When the submit button is clicked it will run calcGPA()*/
document.getElementById('submit').onclick = function() {calcGpa()};
document.getElementById('reset').onclick = function() {reset()};
document.getElementById('addClass').onclick = function() {addClass()};
