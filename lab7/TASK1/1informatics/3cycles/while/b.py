'''
Задача №3058. Минимальный делитель
Дано целое число, не меньшее 2. Выведите его наименьший натуральный делитель, отличный от 1.
'''
x, i = int(input()), 2
while x % i != 0:
    i += 1
print(i)