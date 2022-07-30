# 문제 : https://www.acmicpc.net/problem/10773

size = int(input())
array = []
result = []

for i in range(size):
    array.append(int(input()))
    
for j in array:
    if j != 0:
        result.append(j)
    else:
        result.pop(-1)

print(sum(result))