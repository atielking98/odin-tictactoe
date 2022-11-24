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
            square.classList.add(game.activePlayer.marker);
            square.textContent = game.activePlayer.marker;
            // update array value to be that of active player
            board[index] = game.activePlayer.marker;
            // remove event listener from the marked index
            square.style.pointerEvents = 'none';
            // update remainingSpots
            game.remainingSpots -= 1;

            game.checkWinner();
            // check remaining spots
            if (game.winnerDeclared === false) {
                if (game.remainingSpots > 0) {
                    game.alertNextPlayer();
                    game.nextPlayer();
                } else if (game.remainingSpots == 0) {
                    game.declareTie();
                }
            } else {
                endGame();
            }
        })
    });

    function endGame() {
        squares.forEach((square) => {
            square.style.pointerEvents = 'none';
        });
    }

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

    let subtext = document.querySelector('.subtext'); // display winner/tie
    let playerName = document.querySelector('.player-name'); // purpose: alert player turn

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

    function checkWinner() {
        winningAxes.forEach((item) => {
            if (gameBoard.board[item[0]] === activePlayer.marker && 
                    gameBoard.board[item[1]] === activePlayer.marker && 
                    gameBoard.board[item[2]] === activePlayer.marker) {
                console.log("Winner!");
                subtext.textContent = `${activePlayer.name} wins!`;
                playerName.textContent = "";
                this.winnerDeclared = true;
            }
        });
    }

    function alertNextPlayer() {
        this.activePlayer === playerOne ? playerName.textContent = 
            "Player 2's Turn" : playerName.textContent = "Player 1's Turn";
    }

    function nextPlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : 
            this.activePlayer = playerOne;
    }

    function declareTie() {
        console.log("Tie!");
        subtext.textContent = "It's a tie!";
        playerName.textContent = "";
    }

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