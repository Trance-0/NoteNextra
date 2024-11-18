course_code=input('We will follow the naming pattern of {class}_L{lecture number}.md, enter the course code to start.\n')
start=input('enter the number of lecture that you are going to start.\n')
end=input('Enter the end of lecture (exclusive).\n')
start=int(start)
end=int(end)
while start<end:
    # create a empty text file
    fp = open(f'{course_code}_L{start}.md', 'w')
    fp.write(f'# Lecture {start}')
    fp.close()
    start+=1

print("Complete")