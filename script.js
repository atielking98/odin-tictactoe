const playerFactory = (name, marker) => {
    return { name, marker };
  };

const gameBoard = (() => {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
   
    let squares = document.querySelectorAll(".square");
    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            // update display
            square.textContent = game.activePlayer.marker;
            // update array value to be that of active player
            board[index] = game.activePlayer.marker;
            // remove event listener from the marked index
            square.style.pointerEvents = 'none';
            // update remainingSpots
            game.remainingSpots -= 1;

            game.checkWinner();
            // check remaining spots
            if (game.winnerDeclared == false) {
                if (game.remainingSpots > 0) {
                    game.alertNextPlayer();
                    game.nextPlayer();
                } else if (game.remainingSpots == 0) {
                    game.declareTie();
                }
            }
        })
    });
    return {
        board
    };
})();

const game = (() => {
    // declare players
    const playerOne = playerFactory("Player 1", "X");
    const playerTwo = playerFactory("Player 2", "O");

    // starting point
    let activePlayer = playerOne;
    let winnerDeclared = false;
    let remainingSpots = 9;

    // winning conditions
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    // myModule.anotherPublicMethod = function () {
  
    // };
    return {
        activePlayer,
        winnerDeclared,
        remainingSpots,
        checkWinner,
        alertNextPlayer,
        nextPlayer,
        declareTie
    }; // returns the Object with public methods
  })();