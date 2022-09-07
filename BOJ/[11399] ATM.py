# 문제 : https://www.acmicpc.net/problem/11399

p = int(input())
t = sorted(list(map(int, input().split())))
s = 0
answer = 0

for i in range(p):
    s += t[i]
    answer += s

print(answer)