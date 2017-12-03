
var panel = $('#quiz-area');

$(document).on('click', '#start', function(){
  game.start();
});

$(document).on('click', '#done', function(){
  game.done();
});

//(Questions & Answers) - 
var questions = [{
  question: "What NFL football team had the biggest scoring comeback in the history of the Super Bowl?",
  answers: ['Cowboys', 'Raiders', 'Patriots', 'Broncos'],
  correctAnswer: "Patriots"
}, {
  question: "Who is the longest reigning heavyweight boxing champion with 25 successful defenses?",
  answers: ['Mike Tyson', 'Joe Louis', 'Evander Holyfield', 'Muhammad Ali'],
  correctAnswer: "Joe Louis"
}, {
  question: "Barry Bonds currently holds the Major League Baseball home run record with how many home runs?",
  answers: ["820", "425", "654", "762"],
  correctAnswer: "762"
}, {
  question: "Which tennis player has won the most men's Grand Slam titles?",
  answers: ["Roger Federer", "Rafael Nadal", "John McEnroe", "Stefan Edberg"],
  correctAnswer: "Roger Federer"
}, {
  question: "Who is the only athlete ever to play in a Super Bowl and a World Series?",
  answers: ["Derek Jeter", "Chad Johnson", "Deion Sanders", "Jim Bob"],
  correctAnswer: "Deion Sanders"
}, {
  question: "According to NBA rules how long does a player have after catching the ball to shoot a free throw?",
  answers: ["7 Seconds", "10 Seconds", "5 Seconds", "8 Seconds"],
  correctAnswer: "10 Seconds"
}, {
  question: "Which country won the 2012 UEFA European Championship?",
  answers: ["Germany", "France", "England", "Spain"],
  correctAnswer: "Spain"
}, {
  question: "In sports, what does the acronym MVP stand for?",
  answers: ["Most Valuable Person", "Most Viewed Player", "Most Valuable Player"],
  correctAnswer: "Most Valuable Player"
}];

//Count down function that is starts at 120 seconds.

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      
      game.done();
    }
  },


  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },

//Check the coorect answers.

  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-3']:checked"), function(){
       if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });  
    $.each($("input[name='question-4']:checked"), function(){
       if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-5']:checked"), function(){
       if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-6']:checked"), function(){
       if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
	$.each($("input[name='question-7']:checked"), function(){
       if ($(this).val() == questions[7].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

//Answers displayed.

    this.results();
  },


    results:function(){
      clearInterval(timer);

      $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

    }


  };