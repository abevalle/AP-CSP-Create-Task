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
	/*adds all the grades together in the array gradArray*/
	var grossGpa = gradeArray.reduce(add,0);
	/*divides grossGpa by classCount then roudns it to the second decimal point*/
	var netGpa = Math.round(grossGpa/classCount * 100)/100;
	/*logs netGpa to console*/
	console.log(netGpa);
	/*resets arrays*/
	reset();
	return netGpa;
}

function printGPA() {
	calcGpa()
	/*prints GPA to html*/
	document.getElementById('totalGPA').innerHTML = 'Your GPA: ' + calcGpa();
}

/*I used this to add all the items in an array*/
function add(a, b) {
	return a + b;
}

function reset() {
	/*Clears arrays*/
	gradeArray.length = 0;
	classArray.length = 0;
	/*double checking to make sure they are clear*/
	console.log(gradeArray);
	console.log(classArray);
}

/*add class functions*/
function addClass() {
		/*checkig if at max classes*/
		if (classCount == 12) {
			/*if there are too many classes it will error out*/
		console.log('Too many classes')
		console.log('You have ' + classCount + ' classes')
	} else {
		/*if there is less than 12 it will add 1 class every click*/
		classCount++

		console.log(classCount)
		/*added the class HTML*/
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


// GPA projection Script.

//get Sem 1 GPA

//get gpa from 1st function
function calcCumGpa() {
	var netGpa = calcGpa();
	var sem1 = document.getElementById('sem1').value;
	//Calculation for cumGpa
	var cumGpa = sem1*netGpa/2

	document.getElementById('cumGpa').innerHTML = cumGpa;
}

//prints cumGpa to html



/*event listeners to know when things happen*/
/*When the submit button is clicked it will run calcGPA()*/
document.getElementById('submit').onclick = function() {printGPA()};
document.getElementById('reset').onclick = function() {reset()};
document.getElementById('addClass').onclick = function() {addClass()};
document.getElementById('calcCum').onclick = function() {calcCumGpa()};
