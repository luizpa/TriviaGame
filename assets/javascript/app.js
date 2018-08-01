$('#start').on('click', function(){
    $('#start').remove();
for(var i=0;i<questions.length;i++){
    $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
    for(var j=0;j<questions[i].answers.length;j++){
        $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
    }
}
})

var questions = [{
question: "What was the first-full length CGI movie?",
answers: ["A Bug's life", "Monster Inc.", "Toy Story", "The Lion King"],
correctAnswer: "Toy Story"
}, {
    question: "Which one of these is NOT a name of one of the spice Girls?",
    answers: ["sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls"
}, {
    question: 'Which group released the hit song, "Smells like teen Spirit"?',
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana"
}, {
    question: 'Which popular Disney movie featured the song, "Circle of Life"?',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King"
}, {
    question: 'Finish this line from the fresh Prince of Bel-Air theme: " I whistled for a cab and when it came near, the license plate said..."',
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh"
}, {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter"
}, {
    question: "What was the name of the principal at Bayside High in Saved by the Bell?",
    answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Belding"
}];






























