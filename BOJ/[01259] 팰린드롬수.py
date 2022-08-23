# 문제 : https://www.acmicpc.net/problem/1259

nums = []

while True:
    n = input()
    if n != '0' :
        nums.append(n)
    else:
        break
    
for num in nums :
    check = True
    length = len(num)
    for i in range(length // 2) :
        if num[i] != num[length-i-1] :
            print('no')
            check = False
            break
    if check == True : 
        print('yes')