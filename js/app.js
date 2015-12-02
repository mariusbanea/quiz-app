$(document).ready(function () {

    /*--- Questions Variable ---*/
    var questions = [
//Question 1
        {
            question: 'What is the most expensive car in the world?',
            choices: ['Bugatti Veyron', 'Ferrari 250 gto', 'Rolls Royce Phantom'],
            correct: 1,
            correctDetails: '1962 Ferrari 250 GTO is $52 000 000. '
	},

//Question 2  
        {
            question: 'What is the smallest car in the world?',
            choices: ['Peel P50', 'BMW Mini', 'Mercedes Smart'],
            correct: 0,
            correctDetails: 'The Peel P50 is 54 in (1,372 mm) long and 39 in (991 mm) wide.'
	},

//Question 3
        {
            question: 'How much horsepower does a monster truck have?',
            choices: ['Around 2000 bhp', 'Around 3000 bhp', 'Around 4000 bhp'],
            correct: 0,
            correctDetails: 'The Grave Digger has 1500-2000 bhp.'
	},

//Question 4
        {
            question: 'How fast is the fastest land speed record for cars?',
            choices: ['593 mph', '843 mph', '763 mph'],
            correct: 2,
            correctDetails: 'The official land-speed record (measured over one mile) is 1,227.985 km/h (763.035 mi/h) by Thrust SSC.'
	},

//Question 5
        {
            question: 'How many car companies are there in the world?',
            choices: ['Around 1500', 'Around 2500', 'Around 3500'],
            correct: 2,
            correctDetails: 'There are more than 3500 Car Manufacturers worldwide.'
	},

//Question 6
        {
            question: 'How much does an average person drive in a year?',
            choices: ['About 13000 miles', 'About 15000 miles', 'About 20000 miles'],
            correct: 0,
            correctDetails: 'About 13000 miles.'
	},

//Question 7
        {
            question: 'How much does the average person in USA spend on gas each year?',
            choices: ['$3400', '$1000', '$1300'],
            correct: 2,
            correctDetails: 'About $1300.'
	},

//Question 8
        {
            question: 'What is the best selling car in the world?',
            choices: ['Volkswagen Beetle', 'Toyota Corolla', 'Ford Model T'],
            correct: 1,
            correctDetails: 'Toyota Corolla sold 40000 cars worldwide.'
	},

//Question 9
        {
            question: 'How long is the longest car in the world?',
            choices: ['10feet', '65feet', '100 feet'],
            correct: 2,
            correctDetails: 'A 30.5 m (100 ft) long 26-wheeled limousine was designed by Jay Ohrberg of Burbank, California, USA.'
	},

//Question 10
        {
            question: 'What is price of the cheapest car in the world?',
            choices: ['$1000', '$3000', '$2000'],
            correct: 2,
            correctDetails: 'The Tata Nano is a city car manufactured in India with a price of US$2000 new.'
	}
];


    /*--- Result Message Variable ---*/
    var feedback = "Well Done";


    /*--- Variables ---*/
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;



    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.result-section').hide();


    /*--- On start quiz ---*/

    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        questionDisplay();
    });


    $('.quiz-section').on('click', '.option', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            //if correct answer was selected    
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<p>Q: " + questions[questionNum].question + "<br />");
        $('#result_msg').append("   --->A: " + questions[questionNum].correctDetails + "</p>");

        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {
            $('.result-section').show();
            $('#finalScore').text(correctTotal + "/" + questionTotal);

            //load correct feedback based on correctTotal 

            //$('#result_msg').append(feedback);


            $('start-button').show();
            //hide other "screens"
            $('.quiz-section').hide();
            $('.start-section').hide();

        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }
    });




    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });


    /*--- Display Questions ---*/
    function questionDisplay() {
        //displays the current question
        $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //displays the answer choices
            $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
        }
    }


});