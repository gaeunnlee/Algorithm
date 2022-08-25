# 문제 : https://www.acmicpc.net/problem/1292

n, m = map(int, input().split(" "))

k = 1
arr = []
c = 1

for i in range(1,999):
    for _ in range(i):
        if c <= m :
            arr.append(k)
            c += 1
        else: break
    if c > m : break
    k += 1    

print(sum(arr[n-1:]))