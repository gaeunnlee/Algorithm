# 문제 : https://www.acmicpc.net/problem/2839

# < 내 풀이 >
# N은 5가지로 나뉜다
# 1) 5로 나누어 떨어지는 경우
# 2) 5로 나눈 나머지가 3으로 나누어 떨어지는 경우
# 3) 3을 k번 뺐을 때 5로 나누어 떨어지는 경우 
# 4) 3으로 나누어 떨어지는 경우
# 5) 5와 3의 배수로 조합 불가능한 경우

N = int(input())
result= 0
M = N

result = N // 5 # 1)
M = N % 5

if M != 0 :
	if M % 3 == 0 :
		result = result + M // 3 # 2)
	else:
		result = 0
		M = N
		while True:
			if M > 3 :
				if M % 5 != 0 :
					M -= 3
					result += 1
				else :
					result += M // 5 # 3)
					break
			else :
				break

		if M == 3 :
			result += 1 # 4)
			
		elif M < 3: 
			result = -1 # 5)

print(result)