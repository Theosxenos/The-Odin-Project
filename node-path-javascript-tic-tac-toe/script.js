let uiController = (function() {
    let turnText = () => `${gameController.getCurrentPlayer().name}'s turn`;
    
    let cacheDom = function() {
        this.boardEl = document.querySelector('.game-board');
        this.cellEls = this.boardEl.children;
        this.currentPlayerEl = document.querySelector('#current-player');
    };

    let bindEvents = () => {
        [...this.cellEls].forEach((cell) => {
            cell.addEventListener('click', (event) => {
                let cellId = event.target.attributes['data-id'].value;
                let roundResult = gameController.playRound(cellId);
                
                if(!roundResult) return;
                
                event.target.textContent = gameController.getCurrentPlayer().sign;
                renderGame();
            });
        });
    };
    
    let renderGame = () => {
        this.currentPlayerEl.textContent = turnText();
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
