# 문제: https://www.acmicpc.net/problem/1110

n = input()
if len(n) != 2 :
            n = '0' + n

m = n
new = 100
a = 0
b = 0
count = 0

while True:
    if n != new :
        count += 1
        if len(m) != 2 :
            m = '0' + m
        a = m[1]
        b = str(int(m[0]) + int(m[1]))
        if len(b) == 2:
            b = b[1]
        new = a + b
        m = new
    else: 
        break

print(count)