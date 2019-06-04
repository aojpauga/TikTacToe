var playerTurn = 1;
var cells = document.querySelectorAll(".tile");
var playerTurnDiv = document.querySelector("#playerTurn");
var board = document.querySelector("#board");

var playAgain = document.querySelector("#playAgain");
playAgain.style.display = "none";

var playAgainButton = document.querySelector("#playAgainButton");
playAgainButton.onclick = function() {
    playAgain.style.display = "none";
    board.style.display = "block";
};

var clearCells = function() {
    cells.forEach(function(cell) {
        cell.innerHTML = "";

    });
};

var checkWinnerGroup = function(selector, player) {
    var count = 0;
    var group = document.querySelectorAll(selector);
    group.forEach(function(cell) {
        if (cell.innerHTML == player) {
            count += 1;
        }
    });
    if (count == 3) {
        return true;
    } else {
        return false;
    }
};

var checkWinner = function(player) {
    var row1 = checkWinnerGroup(".row1", player);
    var row2 = checkWinnerGroup(".row2", player);
    var row3 = checkWinnerGroup(".row3", player);

    var col1 = checkWinnerGroup(".col1", player);
    var col2 = checkWinnerGroup(".col2", player);
    var col3 = checkWinnerGroup(".col3", player);

    var diag1 = checkWinnerGroup(".diag1", player);
    var diag2 = checkWinnerGroup(".diag2", player);

    if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) {
        if (player == "X") {
            playerTurnDiv.innerHTML = "<h2>Player " + player + " wins!</h2>";
            playerTurnDiv.style.color = "red";
            board.style.display = "none";
            playAgain.style.display = "block";
            playAgain.style.backgroundColor = "red";
            playAgain.style.color = "blue";
            clearCells();
        } else {
            playerTurnDiv.innerHTML = "<h2>Player " + player + " wins!</h2>";
            playerTurnDiv.style.color = "blue";
            board.style.display = "none";
            playAgain.style.display = "block";
            playAgain.style.backgroundColor = "blue";
            playAgain.style.color = "red";
            clearCells();
        }

    }

};



cells.forEach(function(cell) {
    cell.onclick = function() {
        if (cell.innerHTML == "") {
            if (playerTurn == 1) {
                cell.innerHTML = "X";
                cell.style.color = "red";
                playerTurnDiv.innerHTML = "<h2>Player O Turn!</h2>";
                checkWinner("X");
                playerTurn = 2;


            } else {
                cell.innerHTML = "O";
                cell.style.color = "blue";
                playerTurnDiv.innerHTML = "<h2>Player X Turn!</h2>";
                checkWinner("O");
                playerTurn = 1;

            }
        }
    };
});