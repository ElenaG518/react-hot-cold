export const NEW_GAME = 'NEW_GAME';
export const newGame = game => ({
    type: NEW_GAME,
    game
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
        guess
});

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = auralStatus => ({
    type: AURAL_UPDATE,
    auralStatus
});