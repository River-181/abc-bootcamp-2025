# generator_01.py

# 다 생산하고 반환하는 방식
def generator_numbers_1(max_number: int):
    print("Called generator numbers_1 function")
    numbers = []
    for i in range(1, max_number+1):
        numbers.append(i)   # 계속 생성하며 시간과 메모리 소모
    return numbers          # 다 만들고 나서 출하

number_1 = generator_numbers_1(10)
print(number_1) 


# 생산하면서 반환하는 방식
def generator_numbers_2(max_number: int):
    print("Called generator numbers_2 function")
    for i in range(1, max_number+1):
        yield i

numbers_2 = generator_numbers_2(10)
print(numbers_2)  # generator 객체가 반환됨
