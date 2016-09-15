console.log("cnit133_hw3_part1");


function process() {
    var homework,
        midterm,
        final,
        acr,
        finalaverage,
        lettergrade;


   
    	while(homework === "undefined" || homework < 0 || homework > 100 || isNaN(homework)){
    		homework = parseFloat(prompt("Student's homework average. Value shoul be between 0 and 100"));
    	}
    
    	while(midterm === "undefined" || midterm < 0 || midterm > 100 || isNaN(midterm)){
    		midterm = parseFloat(prompt("Mid-term exam score. Value shoul be between 0 and 100"));
    	}
 

    	while(final === "undefined" || final < 0 || final > 100 || isNaN(final)){
    		final = parseFloat(prompt("Final exam score. Value shoul be between 0 and 100"));
    	}

    	while(acr === "undefined" || acr < 0 || acr > 100 || isNaN(acr)){
    		acr = parseFloat(prompt("Acr. Value shoul be between 0 and 100"));
    	}

    

    //final average = (.5 hwAvg) + (.2 midExam) + (.2 finalExam) + (.1 ACR)\

    finalaverage = parseInt((0.5 * homework) + (0.2 * midterm) + (0.2 * final) + (0.1 * acr));



    if(finalaverage >= 90){
    	lettergrade = "A";
    } else if (finalaverage >= 80){
    	lettergrade = "B";
    } else if (finalaverage >=70){
    	lettergrade = "C";
    } else if (finalaverage >=60){
    	lettergrade = "D";
    } else{
    	lettergrade = "F";
    }


    if (lettergrade === "D" || lettergrade === "F"){
    	alert("Student must retake the course");
    }

    console.log("homework: ", homework);
    console.log("midterm: ",midterm);
    console.log("final: ",final);
    console.log("acr: ",acr);
    console.log("finalaverage", finalaverage);
    console.log("lettergrade", lettergrade);

  document.getElementById("result").value = finalaverage + lettergrade;
  // document.forms["myform"].elements["result"].innerHTML = finalaverage;


      
}
$(document).ready(function(){
    $("#show-instructions").click(function(){
        $("#instructions").slideToggle("slow");
    });
});

























// sum, average, and product of the three integers, and the smallest and largest of t

// ç
// 	var homework = prompt("Homework average"),
// 		midterm,
// 		final,
// 		acr;



// 	homework = document.forms["myform"].elements["homework"].value;
// 	midterm = document.forms["myform"].elements["midterm"].value;
// 	final = document.forms["myform"].elements["final"].value;
// 	acr = document.forms["myform"].elements["acr"].value;



// 	console.log("homework: ",homework);
// 	console.log(midterm);
// 	console.log(final);
// 	console.log(acr);




// 	//document.forms["myform"].elements["result"].value = quotient;


// }
