# N개의 원소를 가진 배열을 M개 생성해야 함
N,M = map(int, input().split())

# 각 행별 가장 작은 수를 담는 배열
arrayMin = []

for i in range(M):
    array = list(map(int, input().split()))
    array.sort()
    arrayMin.append(array[0])

# 행별로 가장 작은 수를 모은 배열을 내림차순으로 정렬한 후 가장 큰 수 구함   
arrayMin.sort(reverse=True)
print(arrayMin[0])

