# 문제 : https://www.acmicpc.net/problem/1748

n = int(input())
result = 0
n_len = len(str(n))

if n_len == 1 :
    result = 1 * n

else :
    for i in range(1,n_len+1):
        if i == 1:
            result += 9
        else:
            result += ((10 ** i) - 10 ** (i-1)) * i
    result -= ((10 ** n_len - 1) - n ) * n_len

print(result)