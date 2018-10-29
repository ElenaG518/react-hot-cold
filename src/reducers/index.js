import {NEW_GAME, MAKE_GUESS, AURAL_UPDATE} from '../actions';

const initialState = {
    guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const HotOrColdReducer = (state=initialState, action) => {
    
    if (action.type === NEW_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        })
    }

    else if (action.type === MAKE_GUESS) {
        let feedback;
            let guess = parseInt(action.guess, 10);
            if (isNaN(guess)) {
                feedback = 'Please enter a valid number';
                return Object.assign({}, state, {
                    feedback,
                    guesses: [...state.guesses, guess]
                });
              }

            const difference = Math.abs(guess - state.correctAnswer);

                
                if (difference >= 50) {
                    feedback = 'You\'re Ice Cold...';
                } else if (difference >= 30) {
                    feedback = 'You\'re Cold...';
                } else if (difference >= 10) {
                    feedback = 'You\'re Warm.';
                } else if (difference >= 1) {
                    feedback = 'You\'re Hot!';
                } else {
                    feedback = 'You got it!';
                }
            

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, guess]
        } )
    }

    else if (action.type === AURAL_UPDATE) {
        return Object.assign({}, state, {
            auralStatus: action.auralStatus
        })
    }
    return state;
};
