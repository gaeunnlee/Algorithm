# 문제 : https://www.acmicpc.net/problem/1268

students = []
class_cnt = [0] * 10
n = int(input())
student_cnt = [] 
for i in range(n) :
    student_cnt.append([0] * n)

for _ in range(n) :
    students.append(input().split(" "))
    
for j in range(5) :
    array = [] 
    for k in range(n) :
        array.append(int(students[k][j]))
        class_cnt[int(students[k][j])] += 1
    for m in range(1,9):
        array_ = []
        if class_cnt[m] >= 2:
            for p in range(n) :
                if array[p] == m :
                    array_.append(p)
            for q in range(len(array_)):
                for r in range(len(array_)):
                    student_cnt[array_[q]][array_[r]] += 1
                student_cnt[array_[q]][array_[q]] -= 1
    class_cnt = [0] * 10

count_array = []
for u in range(n):
    count = sum(map(lambda x : x >= 1, student_cnt[u]))
    count_array.append(count) 

print(count_array.index(max(count_array))+1)