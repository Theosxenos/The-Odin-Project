let uiController = (function() {
    const statusTexts = {
        'turn': () => `${gameController.getCurrentPlayer().name}'s turn`,
        'draw': () => 'It\'s a draw!',
        'win': () => `${gameController.getCurrentPlayer().name} has won`
    }
    
    let cacheDom = function() {
        this.boardEl = document.querySelector('.game-board');
        this.cellEls = this.boardEl.children;
        this.currentPlayerEl = document.querySelector('#current-player');
    };

    function handeTurnUi(cell, roundResult) {
        let player = roundResult.roundPlayer.symbol;

        cell.classList.add(player.toLowerCase());
        
        renderGame(roundResult.status);
    }

    let bindEvents = () => {
        [...this.cellEls].forEach((cell) => {
            cell.addEventListener('click', (event) => {
                let cellId = event.target.attributes['data-id'].value;
                let roundResult = gameController.playRound(cellId);
                
                // Game over
                if(!roundResult) return;

                handeTurnUi(event.target, roundResult);
            });
        });
    };
    
    let renderGame = (status = 'turn') => {
        this.currentPlayerEl.textContent = statusTexts[status]();
        let cellelements = [...this.cellEls];

        // Make sure the elements have the right class representing the current player
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
