# 문제 : https://www.acmicpc.net/problem/1316

num = int(input())
words = []
result = 0

for i in range(num):
    input_data = input()
    words.append(input_data)

for word in words:
    charList = []
    count = 0
    for j in range(len(word)):
        char = word[j]
        if char not in charList:
            charList.append(word[j])
            count += 1            
        elif charList[-1] == word[j]:
            charList.remove(word[j])
            charList.append(word[j])
            count += 1
        else:
            charList.remove(word[j])
            charList.append(word[j])
            
    if count == len(word):
        result += 1

print(result)

