let gameController = (function() {
    let player1 = playerFactory('X');
    let player2 = playerFactory('O');
    let currentPlayer = player1;

    let cacheDom = function() {
        this.boardEl = document.querySelector('.gameboard');
        this.cells = this.boardEl.childNodes;
    };

    let bindEvents = function() {
        this.cells.forEach((cell) => {
            cell.addEventListener('click', (event) => {
                let cellId = event.target.attributes['data-id'].value;
                let sign = currentPlayer.sign;
                let canPlace = gameBoard.setPiece(cellId, sign);
                
                if(!canPlace) return;
                
                event.target.textContent = sign;
                changePlayer();
            });
        });
    };

    let init = function() {
        cacheDom();
        bindEvents();
    };
    
    let changePlayer = () => {
        if(currentPlayer === player1) {
            currentPlayer = player2;
            return;
        }
        
        currentPlayer = player1;
    }

    // Expose public methods
    return {
        init
    };
})();

gameController.init();
