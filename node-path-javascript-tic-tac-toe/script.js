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
        this.resetBtn = document.querySelector('#reset');
    };

    function handeTurnUi(cell, roundResult) {
        let player = roundResult.roundPlayer.symbol;

        cell.classList.add(player.toLowerCase());
        
        if(roundResult.status !== 'turn') removeCellEffect();
        else setCellEffect();            
        
        setRoundText(roundResult.status);
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
        
        this.resetBtn.addEventListener('click', () => {
            gameController.reset();
            renderBoard();
        });
    };

    function setCellEffect() {
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

    let setRoundText = (status = 'turn') => {
        this.currentPlayerEl.textContent = statusTexts[status]();        
    }
    
    function removeCellEffect() {
        var classname = `player-${gameController.getCurrentPlayer().symbol.toLowerCase()}`;
        for (const item of this.cellEls) {
            item.classList.remove(classname);
        }
    }

    const renderBoard= () => {
        for(let cell of this.cellEls){
            cell.classList = ['grid-item'];
        }
        
        setRoundText();
        setCellEffect();
    }
    
    let init = () => {
        cacheDom();
        renderBoard();
        bindEvents();
    };

    // Expose public methods
    return {
        init
    };
})();

uiController.init();
