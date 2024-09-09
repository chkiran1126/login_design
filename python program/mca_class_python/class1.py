"""write a program to input a number and check that such no. is even or odd"""

a=int(input("enter your number:"))
if (a%2==0):
  print("number is even:", a)
else:
  print("number is odd:", a)

#write a program to input two no. from the keyboards and display only greatest value among them

a=int(input("enter your number first:"))
b=int(input("enter your number second:"))
c=int(input("enter your number third:"))
if(a>b and a>c):
  print("greatest values is:", a)
elif(b>c):
  print("greatest values is:", b)
else:
  print("greatest values is:", c)

#wap to input electricity unit and calculate electricity bill on the basis of following condition
#unit<=100  rate=3rs\unit
#100 <=500  4rs\unit
#500   5rs\unit
"""fixed charge=300
if total bill>=3000, 10% subsidy will be given"""

unit=int(input("enter your bill units:"))
load=int(input("enter your load:"))
if(unit<=100):
  bill=(unit*3)+300
elif(unit>100 and unit<=500):
  bill=(unit*4)+300
elif(unit>500):
  bill=(unit*5)+300
print("electricity bill")
if(bill>3000 and load<5):
  total_bill=(bill-bill/10)
  print("total bill is :",bill)
