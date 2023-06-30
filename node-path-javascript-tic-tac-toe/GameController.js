let gameController = (() => {
    const gameboard = [];
    const gameboardSize = 3 * 3;
    const players = [
        playerFactory('Player X', 'X'),
        playerFactory('Player O','O')
    ];
    let currentPlayer = players[0];

    for (let i = 0; i < gameboardSize; i++) {
        gameboard[i] = cellFactory(i + 1, '');
    }
    let setPiece = (elementid) => {
        let cellid = elementid - 1;
        if (gameboard[cellid].player === '') {
            gameboard[cellid].player = currentPlayer.sign;
            return true;
        }
        return false;
    };
    
    let changeCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };
    
    return {
        getCurrentPlayer: () => currentPlayer,
        playRound(elementid) {
            if (setPiece(elementid)) {
                changeCurrentPlayer();
                return true;
            }

            return false;
        },
    }
})();