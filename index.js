const askQuestion = require('./tools/ask-question');

console.log("😸");

askQuestion.ask('Test?', {
    'y': () => console.log('Cool!'),
    'n': () => console.log('Why?')
});