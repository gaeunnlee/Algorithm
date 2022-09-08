# 문제 : https://www.acmicpc.net/problem/1920

n = int(input())
fa = set(list(map(int, input().split(" "))))
m = int(input())
sa = list(map(int, input().split(" ")))

for i in sa:
    if i in fa :
        print(1)
    else :
        print(0)