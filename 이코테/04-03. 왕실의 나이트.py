# 행복 왕국의 왕실 정원은 체스판과 같은 8 X 8 좌표 평면이다.
# 왕실 정원의 특정한 한 칸에 나이트가 서 있다.
# 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없다.
# 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.
# 1.수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
# 2.수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
# 8 X 8 좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오. 
# 이때 왕실의 정원에서 행 위치를 표현 할 때는 1부터 8로 표현하며, 열 위치를 표현할 때는 a부터 h로 표현한다.

# <내 풀이>
# 완전 탐색으로 이동할 수 있는 8가지 경우에 적합한지 모두 계산하였다.

p = list(input())
col = ord(p[0])
row = int(p[1])
count = 0

if col + 2 >= ord('a') and col + 2 <= ord('h'):
    if row + 1 >= 1 and row + 1 <= 8:
        count += 1
        if row -1 >= 1 and row - 1 <= 8:
            count += 1
if col - 2 >= ord('a') and col + 2 <= ord('h'):
    if row + 1 >= 1 and row + 1 <= 8:
        count += 1
        if row -1 >= 1 and row - 1 <= 8:
            count += 1
if row + 2 >= 1 and row + 2 <= 8:
    if col + 1 >= ord('a') and col + 1 <= ord('h'):
        count += 1
        if col -1 >= ord('a') and col - 1 <= ord('h'):
            count += 1
if row - 2 >= 1 and row + 2 <= 8:
    if col + 1 >= ord('a') and col + 1 <= ord('h'):
        count += 1
        if col -1 >= ord('a') and col - 1 <= ord('h'):
            count += 1

print(count)