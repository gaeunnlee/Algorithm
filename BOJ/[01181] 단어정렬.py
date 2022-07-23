# 문제: https://www.acmicpc.net/problem/1181

n= int(input())
words = []
result = []

for i in range(n):
    word = input()
    words.append(word)

words.sort()
words.sort(key=len)

for j in words:
    if j not in result:
        result.append(j)

print(*result, sep="\n")