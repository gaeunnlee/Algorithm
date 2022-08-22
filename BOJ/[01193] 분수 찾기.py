# 문제 : https://www.acmicpc.net/problem/1193

num = int(input())
cpy = num

k = 1
i = 1
j = 1
m = 0

while True:
    if num <= k:
        break 
    else:
        num -= k
        k += 1
        
for a in range(k):
    m += a

b = cpy - m
c = k - b + 1

if k % 2 == 0:
	print(f"{b}/{c}")
else:
	print(f"{c}/{b}")