function getRandomColor()
{
 var color =  '#'+Math.floor(Math.random()*0xffffff).toString(16);
 return color;
}

var count = 0;
function filltrimino(board, size, hole, start)
{
  var x = hole[0]; var y = hole[1];
  var p = start[0]; var q = start[1];
  count = count + 1;
  var color = getRandomColor();

  if (x < p+size/2 && y < q+size/2) {
        board[p+size/2][q+size/2] = [color, count];
        board[p+size/2-1][q+size/2] = [color, count];
        board[p+size/2][q+size/2-1] = [color, count];
        if (size > 2) {
            filltrimino(board, size/2, hole, start);
            filltrimino(board, size/2, [p+size/2, q+size/2], [p+size/2, q+size/2]);
            filltrimino(board, size/2, [p+size/2-1, q+size/2], [p, q+size/2]);
            filltrimino(board, size/2, [p+size/2, q+size/2-1], [p+size/2, q]);
        }
    }
    else if (x >= p+size/2 && y < q+size/2) {
        board[p+size/2-1][q+size/2-1] = [color, count];
        board[p+size/2-1][q+size/2] = [color, count];
        board[p+size/2][q+size/2] = [color, count];
        if (size > 2) {
            filltrimino(board, size/2, hole, [p+size/2, q]);
            filltrimino(board, size/2, [p+size/2-1, q+size/2-1], start);
            filltrimino(board, size/2, [p+size/2-1, q+size/2], [p, q+size/2]);
            filltrimino(board, size/2, [p+size/2, q+size/2], [p+size/2, q+size/2]);
        }
    }
    else if (x < p+size/2 && y >= q+size/2) {
        board[p+size/2-1][q+size/2-1] = [color, count];
        board[p+size/2][q+size/2-1] = [color, count];
        board[p+size/2][q+size/2] = [color, count];
        if (size > 2) {
            filltrimino(board, size/2, hole, [p, q+size/2]);
            filltrimino(board, size/2, [p+size/2, q+size/2], [p+size/2, q+size/2]);
            filltrimino(board, size/2, [p+size/2-1, q+size/2-1], start);
            filltrimino(board, size/2, [p+size/2, q+size/2-1], [p+size/2, q]);
        }
    }
    else if (x >= p+size/2 && y >= q+size/2) {
        board[p+size/2-1][q+size/2-1] = [color, count];
        board[p+size/2-1][q+size/2] = [color, count];
        board[p+size/2][q+size/2-1] = [color, count];
        if (size > 2) {
            filltrimino(board, size/2, hole, [p+size/2, q+size/2]);
            filltrimino(board, size/2, [p+size/2-1, q+size/2-1], start);
            filltrimino(board, size/2, [p+size/2-1, q+size/2], [p, q+size/2]);
            filltrimino(board, size/2, [p+size/2, q+size/2-1], [p+size/2, q]);
        }
    }
    return;
}

var n = Math.floor((Math.random() * 4) + 1);
var size = Math.pow(2, n);
var x = Math.floor((Math.random() * size) + 1);
var y = Math.floor((Math.random() * size) + 1);

var board = new Array(size+1);

for (var i = 0; i < size+1; i++) {
  board[i] = new Array(size+1);
  for (var j = 0; j < size+1; j++) {
     board[i][j] = ["white", 0];
  }
}

board[x][y] = ["snow", 'X'];

filltrimino(board, size, [x,y], [1,1]);

var chessBoard = document.getElementById("chessBoard");

for (var i=1; i<size+1; i++){
    var row = chessBoard.appendChild(document.createElement("div"));
    for (var j=1; j<size+1; j++){
    		var t = document.createElement("div");
        var numtxt = document.createTextNode(board[i][j][1]);
        t.style.backgroundColor = board[i][j][0];
        t.appendChild(numtxt);
        row.appendChild(t);
    }
}
