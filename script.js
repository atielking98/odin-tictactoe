var GameBoard = (function () {
    var gameBoard = {};
    var gameBoardArr = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    // var privateMethod = function () {
  
    // };
    gameBoard.getBoard = function () {
        return gameBoardArr;
    };

    gameBoard.renderBoard = function () {
        var squares = document.querySelectorAll(".square");
        for (var i = 0; i < squares.length; i++) {
            squares[i].innerHTML = gameBoardArr[i];
        }
    }
    // myModule.anotherPublicMethod = function () {
  
    // };
    return gameBoard; // returns the Object with public methods
  })();

  var DisplayController = (function () {
    var displayController = {};
    // var privateMethod = function () {
  
    // };
    // myModule.publicMethod = function () {
  
    // };
    // myModule.anotherPublicMethod = function () {
  
    // };
    return displayController; // returns the Object with public methods
  })();

  const playerFactory = (name) => {
    const sayHello = () => console.log('hello!');
    return { name, sayHello };
  };
  
  
  // usage
  //Module.publicMethod();
  GameBoard.renderBoard();