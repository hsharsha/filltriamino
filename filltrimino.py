#!/usr/bin/python

# Program to fill 2^n by 2^n square with a hole in it using triminos   |A|
#                                                                    |A|B|

import random

def filltrimino(board, size, hole, start):
    (x, y) = hole
    (p, q) = start
    if x < p+size/2 and y < q+size/2:
        board[p+size/2][q+size/2] = 'B'
        board[p+size/2-1][q+size/2] = 'A'
        board[p+size/2][q+size/2-1] = 'A'
        if size > 2:
            filltrimino(board, size/2, hole, start)
            filltrimino(board, size/2, (p+size/2, q+size/2), (p+size/2, q+size/2))
            filltrimino(board, size/2, (p+size/2-1, q+size/2), (p, q+size/2))
            filltrimino(board, size/2, (p+size/2, q+size/2-1), (p+size/2, q))
    elif x >= p+size/2 and y < q+size/2:
        board[p+size/2-1][q+size/2-1] = 'A'
        board[p+size/2-1][q+size/2] = 'B'
        board[p+size/2][q+size/2] = 'A'
        if size > 2:
            filltrimino(board, size/2, hole, (p+size/2, q))
            filltrimino(board, size/2, (p+size/2-1, q+size/2-1), start)
            filltrimino(board, size/2, (p+size/2-1, q+size/2), (p, q+size/2))
            filltrimino(board, size/2, (p+size/2, q+size/2), (p+size/2, q+size/2))
    elif x < p+size/2 and y >= q+size/2:
        board[p+size/2-1][q+size/2-1] = 'A'
        board[p+size/2][q+size/2-1] = 'B'
        board[p+size/2][q+size/2] = 'A'
        if size > 2:
            filltrimino(board, size/2, hole, (p, q+size/2))
            filltrimino(board, size/2, (p+size/2, q+size/2), (p+size/2, q+size/2))
            filltrimino(board, size/2, (p+size/2-1, q+size/2-1), start)
            filltrimino(board, size/2, (p+size/2, q+size/2-1), (p+size/2, q))
    elif x >= p+size/2 and y >= q+size/2:
        board[p+size/2-1][q+size/2-1] = 'B'
        board[p+size/2-1][q+size/2] = 'A'
        board[p+size/2][q+size/2-1] = 'A'
        if size > 2:
            filltrimino(board, size/2, hole, (p+size/2, q+size/2))
            filltrimino(board, size/2, (p+size/2-1, q+size/2-1), start)
            filltrimino(board, size/2, (p+size/2-1, q+size/2), (p, q+size/2))
            filltrimino(board, size/2, (p+size/2, q+size/2-1), (p+size/2, q))

n = random.randint(1,3)
size = 2**n
x = random.randint(1, size)
y = random.randint(1, size)

print "Filling triminos for square", size, "by", size, "with a hole at (", x, ",", y, ")"

board = []
for i in range(size+1):
    row = []
    for j in range(size+1):
        row.append('X')
    board.append(row)

filltrimino(board, size, (x, y), (1,1));

for i in range(1, size+1):
    print str(board[i][1:])[1:-1]
