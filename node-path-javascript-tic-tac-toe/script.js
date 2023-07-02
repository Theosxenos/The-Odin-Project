let uiController = (function() {
    let turnText = () => `${gameController.getCurrentPlayer().name}'s turn`;
    
    let cacheDom = function() {
        this.boardEl = document.querySelector('.game-board');
        this.cellEls = this.boardEl.children;
        this.currentPlayerEl = document.querySelector('#current-player');
    };

    function handeTurnUi(cell, roundResult) {
        let player = roundResult.roundResult.player;
        // cell.textContent = player;
        cell.classList.add(player.toLowerCase());
        renderGame();
        
    }

    let bindEvents = () => {
        [...this.cellEls].forEach((cell) => {
            cell.addEventListener('click', (event) => {
                let cellId = event.target.attributes['data-id'].value;
                let roundResult = gameController.playRound(cellId);
                
                // TODO - Error message?
                if(roundResult.wrongMove) return;
                // TODO - Handle win
                if(roundResult.hasWon) return;
                
                handeTurnUi(event.target, roundResult);
            });
        });
    };
    
    let renderGame = () => {
        this.currentPlayerEl.textContent = turnText();
        let cellelements = [...this.cellEls];

        cellelements.forEach((cell) => {
            cell.classList.forEach((cn) => {
                if (cn.includes('player')) {
                    cell.classList.remove(cn);
                }
            });

            cell.classList.add(`player-${gameController.getCurrentPlayer().symbol.toLowerCase()}`);
        });
    }
    let init = () => {
        cacheDom();
        renderGame();
        bindEvents();
    };

    // Expose public methods
    return {
        init
    };
})();

uiController.init();
