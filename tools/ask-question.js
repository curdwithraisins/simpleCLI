/**
 * Simple ask of a question
 */
const rl = require('./init-readline')();

const ask = (question, answers) => {
    rl.question(`${question} `, answer => {
        if (answers.hasOwnProperty(answer)) {
            answers[answer]();
        }
        rl.close();
    });
};

const repeatedAsk = (question, answers) => {
    rl.question(`${question} `, answer => {
        if (answers.hasOwnProperty(answer)) {
            answers[answer]();
            rl.close();
            return;
        }
        repeatedAsk(question, answers);
    });
};

module.exports = {
    ask,
    repeatedAsk
};