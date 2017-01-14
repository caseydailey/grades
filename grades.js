//Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

    //  A score of 50-60 is an F
    //  A score of 61-70 is a D
    //  A score of 71-80 is a C
    //  A score of 81-90 is a B
    //  A score of 91-100 is an A

//Start with array of random scores in your JavaScript

var grades = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//define grades  

var A = null;
var B = null;
var C = null;
var D = null;
var F = null;

//Use console.log to output the following criteria:


    //How many of each grade?
    
    for (i=0;i<grades.length;i++) {

		if (grades[i]>=91 && grades[i]<=100) {
			A++;
		}else if (grades[i]>=81 && grades[i]<=90) {
			B++;
		}else if (grades[i]>=71 && grades[i]<=80) {
			C++;
		}else if (grades[i]>=61 && grades[i]<=70) {
			D++;
		}else if(grades[i]>=50 && grades[i]<=60) {
			F++;
	};
}

console.log('how many A\'s:', A);
console.log('how many B\'s:', B);
console.log('how many C\'s:', C);
console.log('how many D\'s:', D);
console.log('how many F\'s:', F);




    //What is the lowest grade?
    

    var bottomUp = grades.sort(function(a, b){
    	return a - b;
    });
    	console.log('bottomUp:', bottomUp);
		console.log('lowest grade is:', bottomUp[0]);

    //What is the highest grade?
    
    var topDown = grades.sort(function(a, b){
    	return b -a;
    });
    	console.log('topDown:', topDown);
		console.log('highest grade is:', topDown[0]);

