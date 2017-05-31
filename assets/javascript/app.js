//Create Variable quiz as an object and create the questions that contain arrays.

var quiz = [ {
		question: "What's Princes favorite color?",
		picture: "assets/images/prince.jpg",
		choices: ['Blue','Perriwinkle','Purple','Red'],
		correct: 2,
	},
	{	question: "Whats the name of this band?",
		picture: 'assets/images/sexpistols.jpg',
		choices: ['Rush','Weedzer','The Shins','The Sex Pistols'],
		correct: 3,
	},
	{	question: "Which one of of these famous Jazz bands did Herbie Hancock play in?",
		picture: 'assets/images/herbiehancock.jpg',
		choices: ['Weather Report','The Miles Davis Quintet','Incognito','Spyro Gyro'],
		correct: 1,
	},
	{	question: "Who's the original bass player of Metallica?",
		picture: 'assets/images/metallica.jpg',
		choices: ['Cliff Burton','Dave Mustaine','Robert Trujillo','Jason Newsted'],
		correct: 0,
	},
	{	question: "Who is the leader of Parliament Funkadelic?",
		picture: 'assets/images/pfunk.jpg',
		choices: ['Bootsy Collins','George Clinton','Sly Stone','Ben Fields'],
		correct: 1,
	},
	{	question: "Who created Motown Records?",
		picture: 'assets/images/motown.jpg',
		choices: ['Herb Alpert','Smokey Robinson','Berry Gordy','Barry Allen'],
		correct: 2,
	},
	{	question: "What is U2 Frontman Bono's real name?",
		picture: 'assets/images/u2.jpg',
		choices: ['Pete Link','Paul Hewson','Hunter Ryan','David Evans'],
		correct: 1,
	},
	{	question: "What was Led Zeppelins original working name?",
		picture: 'assets/images/led.jpeg',
		choices: ['God Hammer','The Firm','Band of Joy','The New Yardbirds'],
		correct: 3,
	},
	{	question: "Who is the leader & main songwriter for the band XTC?",
		picture: 'assets/images/xtc.jpg',
		choices: ['Carl Long','Mike Winters','Andrew Partridge','Victor Kind'],
		correct: 3,
	},
	{	question: "Where was Stax Records originally started?",
		picture: 'assets/images/stax.jpg',
		choices: ['Memphis','Philadelphia','St. Louis','Cleveland'],
		correct: 0,

}];

//Set counter

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;

var quizPic = $('<img>');



$('input[name="choice"]').hide;

// display question function
function nextQuest(){

	$('#questions').text(quiz[counter].question);
	quizPic.attr('src', quiz[counter].picture)
	$('#rock').append(quizPic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}


// client-sided validation
function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); // display next question
	}
	else {
		alert("HEY! You didn't make a choice! Choose something for crying out loud!.");
		counter--;
	}
}

// display first question
nextQuest();


// next button function
$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	// increment score if answer is correct
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	// display score screen
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Bif ! Bam ! Zowie ! You scored " + numCorrect + " out of " + numQuestions + " !";
		return; // returns false *(there has to be a better way! figure it out.)*
	}

	validate();

	// fade in new question
	$('.card').hide().fadeIn("slow");
	
	// clear previous selection
	$('input[name="choice"]').prop('checked', false);
});


// back button function
$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});
