# 문제 : https://www.acmicpc.net/problem/1978

n = int(input())
data = []
result = 0

data = list(map(int,input().split()))

for num in data:
    k = 2
    while True:
        if num % k != 0 and k <= num:
            if k < num :
                k += 1
                continue
        elif num % k == 0 and k == num:
                result += 1
                break           
        else:
            break

print(result)