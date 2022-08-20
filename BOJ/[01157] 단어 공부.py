# 문제 : https://www.acmicpc.net/problem/1157

word = input().lower()
num = [0] * 26

for i in word : 
    j = int(ord(i)) - 97
    num[j] += 1

maxNum = max(num)
c = num.count(maxNum)

if c != 1 :
    print("?")
else:
    print(chr(num.index(maxNum)+97).upper())