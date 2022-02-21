from pythonping import ping
import os

if os.path.exists("except.txt"):
    os.remove("ping.txt")

lines = open("ip.txt").read().splitlines()

for x in lines:
    try:
        fullstring = ping(x, count=1).__str__()
        y = 'Req'
        if y in fullstring:
            print(x, file=open('nopers.txt', 'a'))
        else:
            print(x, file=open('git.txt', 'a'))
    except Exception as err:
        print('{}'.format(err), file=open('except.txt', 'a'))