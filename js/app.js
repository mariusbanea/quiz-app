/*--- Step 1 - Defining global variables ---*/

var questionsArray = [
//Question 1
    {
        questionText: 'What is the most expensive car in the world?',
        questionChoices: ['Bugatti Veyron', 'Ferrari 250 gto', 'Rolls Royce Phantom'],
        questionCorrectChoice: 1,
        correctDetails: '1962 Ferrari 250 GTO is $52 000 000. '
    },

//Question 2
    {
        questionText: 'What is the smallest car in the world?',
        questionChoices: ['Peel P50', 'BMW Mini', 'Mercedes Smart'],
        questionCorrectChoice: 0,
        correctDetails: 'The Peel P50 is 54 in (1,372 mm) long and 39 in (991 mm) wide.'
    },

//Question 3
    {
        questionText: 'How much horsepower does a monster truck have?',
        questionChoices: ['Around 2000 bhp', 'Around 3000 bhp', 'Around 4000 bhp'],
        questionCorrectChoice: 0,
        correctDetails: 'The Grave Digger has 1500-2000 bhp.'
    },

//Question 4
    {
        questionText: 'How fast is the fastest land speed record for cars?',
        questionChoices: ['593 mph', '843 mph', '763 mph'],
        questionCorrectChoice: 2,
        correctDetails: 'The official land-speed record (measured over one mile) is 1,227.985 km/h (763.035 mi/h) by Thrust SSC.'
    },

//Question 5
    {
        questionText: 'How many car companies are there in the world?',
        questionChoices: ['Around 1500', 'Around 2500', 'Around 3500'],
        questionCorrectChoice: 2,
        correctDetails: 'There are more than 3500 Car Manufacturers worldwide.'
    },

//Question 6
    {
        questionText: 'How much does an average person drive in a year?',
        questionChoices: ['About 13000 miles', 'About 15000 miles', 'About 20000 miles'],
        questionCorrectChoice: 0,
        correctDetails: 'About 13000 miles.'
    },

//Question 7
    {
        questionText: 'How much does the average person in USA spend on gas each year?',
        questionChoices: ['$3400', '$1000', '$1300'],
        questionCorrectChoice: 2,
        correctDetails: 'About $1300.'
    },

//Question 8
    {
        questionText: 'What is the best selling car in the world?',
        questionChoices: ['Volkswagen Beetle', 'Toyota Corolla', 'Ford Model T'],
        questionCorrectChoice: 1,
        correctDetails: 'Toyota Corolla sold 40000 cars worldwide.'
    },

//Question 9
    {
        questionText: 'How long is the longest car in the world?',
        questionChoices: ['10feet', '65feet', '100 feet'],
        questionCorrectChoice: 2,
        correctDetails: 'A 30.5 m (100 ft) long 26-wheeled limousine was designed by Jay Ohrberg of Burbank, California, USA.'
    },

//Question 10
    {
        questionText: 'What is price of the cheapest car in the world?',
        questionChoices: ['$1000', '$3000', '$2000'],
        questionCorrectChoice: 2,
        correctDetails: 'The Tata Nano is a city car manufactured in India with a price of US$2000 new.'
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

/*--- Step 2 - Defining functions ---*/

function questionDisplay() {

    //1 - update the each question text
    $('#question').text(questionsArray[currentQuestionNumber].questionText);



    //2 - display the what are the choices for the current question
    //2.1 - first delete all the existing choices before populating it with new ones
    $('#choices').empty();
    //2.2 - the get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    //2.3 - loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }



    //3 - displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}

/*--- Step 3 - Defining functions ---*/

$(document).ready(function () {


    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.result-section').hide();


    /*--- On start quiz ---*/
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });


    /*--- Show quiz questions ---*/
    $('.quiz-section').on('click', '.option', function () {

        //get the question answer from the user
        var userAnswer = $("input[class='option']:checked").val();
        //get the correct answer from the questionsArray above
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        //compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {
            //if the answer was correct increment the total number of correct answers
            totalNumberOfCorrectAnswers++;
            //console.log(totalNumberOfCorrectAnswers);
        }
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");


        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

            //hide other containers
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display the following question
            questionDisplay();
        }
    });


    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});
