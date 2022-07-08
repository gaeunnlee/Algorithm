N, M, K = map(int, input().split())
array = list(map(int, input().split()))

array.sort(reverse=True) # 입력받은 배열을 내림차순으로 배열

print(array)
 
first = array[0] # 가장 큰 수
second = array[1] # 두번째로 큰 수

countM = 0 # 숫자를 M번까지 더할 수 있으므로 세줘야 함
countK = 0 # 같은 수를 연속으로 K번까지만 더할 수 있으므로 세줘야 함
sum = 0 # 합

while countK < K: # 가장 큰 수를 K번까지만 더하는 반복문
    if countM < M: # 숫자가 더해지는 횟수가 M번보다 작을 때까지만 위 while문을 반복
        countM += 1
        countK += 1
        sum += first
        if countK == K: # 만약 같은 수를 K번까지 더하면
            sum += second # 두번째로 큰 수를 더해야 함
            countK = 0 # K를 0으로 리셋하여 다시 셈
            countM += 1
            continue
    else: # 숫자가 더해지는 횟수가 M번이 되었을 때 while문을 종료함
        break

print(sum)
    
