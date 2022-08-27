# 문제 : https://www.acmicpc.net/problem/1356

n = list(map(int,input()))

if len(n) <= 1 :
    pass
else :
    for i in range(1,len(n)) :
        front = 1
        back = 1
        for j in range(i):
            front *= n[j]
        for k in range(i, len(n)):
            back *= n[k]
        if front == back :
            print('YES')
            exit()
print('NO')