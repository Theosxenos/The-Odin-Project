const gameBoardController = (() =>{
    const gameboard = [];
    const gameboardSize = 9;

    let setPiece = (elementid, symbol) => {
        let cellid = elementid - 1;
        if (gameboard[cellid].player === '') {
            gameboard[cellid].player = symbol;
            return gameboard[cellid];
        }
        return false;
    };
    
    const initializeGameboard = () => {
        for (let i = 0; i < gameboardSize; i++) {
            gameboard[i] = cellFactory(i + 1, '');
        }
    }
    
    initializeGameboard();
    
    return {
        setPiece,
    }
})();

let gameController = (() => {
    const players = [
        playerFactory('Player X', 'X'),
        playerFactory('Player O', 'O')
    ];
    let currentPlayer = players[0];

    let getCurrentPlayer = () => currentPlayer;

    let changeCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };
    
    let playRound = (elementid) => {
        let roundresult = gameBoardController.setPiece(elementid, currentPlayer.symbol);
        let returnresult = {hasWon: false, wrongMove: false, roundResult: roundresult};
        
        if (roundresult) {
            changeCurrentPlayer();
            return returnresult;
        }
        
        returnresult.wrongMove = true;
        return returnresult;
    }
    
    return {getCurrentPlayer, playRound}
})();