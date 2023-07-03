const gameBoardController = (() =>{
    const gameboard = [];
    const gameboardSize = 9;

    const getGameboard = () => gameboard;
    
    let setPiece = (elementid, symbol) => {
        if (gameboard[elementid].player === '') {
            gameboard[elementid].player = symbol;
            
            return true;
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
        getGameboard,
        initializeGameboard
    }
})();

let gameController = (() => {
    const players = [
        playerFactory('Player X', 'X'),
        playerFactory('Player O', 'O')
    ];
    let currentPlayer = players[0];
    let gameOver = false;
    
    let getCurrentPlayer = () => currentPlayer;

    const reset = () => {
        currentPlayer = players[0];
        gameOver = false;
        gameBoardController.initializeGameboard();
    }
    
    let changeCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };
    
    let playRound = (elementid) => {
        if (gameOver) return;

        let roundresult = gameBoardController.setPiece(elementid, currentPlayer.symbol);
        let roundstatus = {status: 'turn', roundPlayer: currentPlayer};

        if (roundresult) {
            if ((gameOver = checkForWin())) {
                roundstatus.status = 'win';

                return roundstatus;
            }

            if ((gameOver = checkForDraw())) {
                roundstatus.status = 'draw';

                return roundstatus;
            }

            changeCurrentPlayer();

            return roundstatus;
        }


        return roundstatus;
    }
    
    function checkForWin() {
        /*
            0 1 2 
            3 4 5
            6 7 8
         */
        let winningmoves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let gameboard = gameBoardController.getGameboard();
        for(let i = 0; i < winningmoves.length; i++) {
            let [a,b,c] = winningmoves[i];
            if(gameboard[a].player && gameboard[a].player === gameboard[b].player && gameboard[a].player === gameboard[c].player) {
                return true;
            }
        }
        
        return false;
    }
    function checkForDraw() {
        return gameBoardController.getGameboard().every(c => c.player !== '');
    }
    
    return {getCurrentPlayer, playRound, reset}
})();