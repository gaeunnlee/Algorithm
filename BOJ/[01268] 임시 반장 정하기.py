# 문제 : https://www.acmicpc.net/problem/1268

students = []
n = int(input())
class_cnt = [0] * 10

for _ in range(n) :
    students.append(list(map(int,input().split(" "))))

student_cnt = []

for i in range(n) :
    student_cnt.append([0] * n)

for i in range(5):
    for j in range(n):
        for k in range(n):
            if j != k :
                if students[j][i] == students[k][i]:
                    student_cnt[j][k] += 1

count_array = []
for u in range(n):
    count = sum(map(lambda x : x >= 1, student_cnt[u]))
    count_array.append(count) 

print(count_array.index(max(count_array))+1)