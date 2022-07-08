n = 1260
count = 0

# 큰 단위의 화폐부터 차례대로 확인
coin_types = [500,100,50,10]

for coin in coin_types:
    count += n // coin # 해당 화폐로 거슬러줄 수 있는 동전의 개수 세기
    n %= coin
    
    # 500원
    # count = 0 + 1260 // 500 = 2
    # # n = 1260 % 500 = 260
    
    # 100원
    # count = 2 + 260 // 100 = 4
    # n = 260 % 100 = 60

    # 50원
    # count = 4 + 60 // 50 = 5
    # n = 60 % 50 = 10

    # 10원
    # count = 5 + 10 // 10 = 6
    # n = 10 % 10 = 0

print(count) # count = 6



