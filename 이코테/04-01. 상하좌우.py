# 여행가 A는 N x N 크기의 정사각형 공간 위에 서 있다. 
# 이 공간은 1 x 1 크기의 정사각형으로 나누어져 있다. 
# 가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N,N)에 해당한다. 
# 여행가 A는 상(U), 하(D), 좌(L), 우(R) 방향으로 이동할 수 있으며, 시작 좌표는 항상 (1,1)이다. 
# 여행 계획서에는 하나의 줄에 띄어쓰기를 기준으로 하여 L, R, U, D 중 하나의 문자가 반복적으로 적혀 있다. 
# 이때 여행가 A가 N x N 크기의 정사각형 공간을 벗어나는 움직임은 무시된다. 

# <내 풀이>
# L R U D 에 따라 -1 이나 +1 을 더하는데
# 행과 열의 값이 0 또는 n 이 되는 경우에 -1 이나 +1 을 더하여
# 계산하기 전의 값으로 만들어준다

n = int(input())
plan = list(input().split())

row = 1 # 행
col = 1 # 열

for i in plan :
    if i == "L" :  col -= 1
    elif i == "R" :  col += 1 
    elif i == "U"  : row -= 1 
    elif i == "D" :  row += 1

    if col == 0 : col += 1
    elif col == (n+1) : col -= 1
    elif row == 0 : row += 1 
    elif row == (n+1) : row -= 1

print(row,col)