# 문제 : https://www.acmicpc.net/problem/1236

row, col = map(int, input().split(" "))

status = []

sec_row = 0
sec_col_arr = []
sec_col = 0

for i in range(row):
    status.append(input())

for j in range(row):
    if "X" not in status[j]:
        sec_row += 1

for k in range(col):
    sec_col_tmp = []
    for m in range(row):
        sec_col_tmp.append(status[m][k])
    sec_col_arr.append(sec_col_tmp)

for m in range(col):
    if "X" not in sec_col_arr[m]:
        sec_col += 1

print(max(sec_col,sec_row))