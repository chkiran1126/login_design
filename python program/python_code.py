#print("hello kiran, how are you doing")

#from here python practice question and some normal code are begins

# practice question 1

"""states=["up","uttarakhand","mumbai","punjab","harayana"]

def cal_len(list):
  for el in list:
    print(el,end=" ")

  return len(list)

cal_len(states)
len=len(states)
print(len)"""

# practice question 2

"""def fact(num):
  val=1
  for i in range(num,1,-1):
    val *=i
  print(val) 
  
fact(5)"""

# practice question 3

"""def convert(USD):
  inr=USD*83
  print("usd:",usd,"and usd convert into inr:",inr)

usd=int(input("enter your usd here:"))
convert(usd)"""

# practice question 4

"""def odd_eve(num):
  if(num%2==0):
    print("even")
  else:
    print("odd")

a=int(input("enter your number"))
odd_eve(a)"""

# practice question 5

"""def sum(n):
  if (n==0):
    return 0
  else:
    return n+sum(n-1)
  
cal=(sum(3))
print(cal)"""

#practice question 6

def check():
  word="aafter"
  with open("practice.txt","r") as f:
    data=f.read()
    if(data.find(word) !=-1):
      print("found")
    else:
      print("not found")  
check()
