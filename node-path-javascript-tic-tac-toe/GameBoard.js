let gameBoard = (() => {
   let gameboard = [];
   
   return {
       setPiece: (cellid, sign) => {
          if(typeof (gameBoard[cellid]) != 'string' )
          {
              gameBoard[cellid] = sign;
              return true;
          }
          return false;
       }
   }
})();