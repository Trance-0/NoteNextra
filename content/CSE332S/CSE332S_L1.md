# CSE332S Object-Oriented Programming in C++ (Lecture 1)

## Today:

1. A bit about me
2. A bit about the course
3. A bit about C++
4. How we will learn
5. Canvas tour and course policies
6. Piazza tour
7. Studio: Setup our work environment

## A bit about me:

This is my 14th year at WashU.

- 5 as a graduate student advised by Dr. Cytron  
  - Research focused on optimizing the memory system for garbage collected languages  
- My 9th as an instructor  
  - Courses taught: 131, 247, 332S, 361S, 422S, 433S, 454A, 523S  

## CSE 332S Overview:

This course has 3 high level goals:

1. Gain proficiency with a 2nd programming language
2. Introduce important lower-level constructs that many high-level languages abstract away (pointers, explicit dynamic memory management, code compilation, stack management, static programming languages, etc.)
3. Teach fundamental object-oriented programming principles and design

C++ allows us to accomplish all three goals above!

### An introduction to C++

C++ is a multi-paradigm language

- Procedural programming - functions
- Object-oriented programming - classes and structs
- Generic programming - templates

C++ is built upon C, keeping lower-level features of C while adding higher-level features

#### Evolution of C++

1. C is a procedural programming language primarily used to develop low-level systems software, such as operating systems.
   - designed to map efficiently to typical machine instructions, making compilation fairly straightforward and giving low-level access to memory
   - However, type safe code reuse is hard without high-level programming constructs such as objects and generics.
2. Stroustrup first designed C++ with classes/objects, but kept procedural parts similar to C
3. Templates (generics) were later added and the STL was developed
4. C++ is now standardized, with the latest revision of the standard being C++23

### So, why C++? And an overview of the semester timeline...

1. C++ allows us to explore programming constructs such as low-level memory access (pointers and references), function calls (stack management), and explicit memory management (1st 1/3rd of the semester)
2. We can then learn how those lower-level constructs are used to enable more abstract higher-level constructs, such as objects and the development of the C++ Standard Template Library (the STL) (middle 1/3rd of the semester)
3. Finally, we will use C++ to study the fundamentals of object-oriented design (final 3rd of the semester)

### How we will learn (flipped classroom):

#### Prior to class

Lectures are pre-recorded and posted for you to view asynchronously before class

- Posted 72 hours before class on Canvas

Post-lecture tasks are posted alongside the lectures and should be completed before class

- Canvas discussion to ask questions, “like” already asked questions
- A short quiz over the lecture content

#### During class

- Work on a studio within a group to build an understanding of the topic via hands-on exercises and discussion (10:30 - 11:20 AM, 1:30 - 2:20 PM)
  - Treat studio as a time to explore and test your understanding of a concept. Place emphasis on exploration.
  - TAs and I will be there to help guide you through and discuss the exercises.
- Optional recitation for the first 30 minutes of each class - content generally based on questions posed in the discussion board. Recitations will be recorded.

#### Outside of class

- Readings provide further details on the topics covered in class
- Lab assignments ask you to apply the concepts you have learned

### In-class studio policy

You should be in-class by 35 minutes after the official class start time (10 am -> 10:35 AM, 1 PM -> 1:35 PM) to receive credit

- Credit awarded for being in-class and working on studio. If you do not finish the studio, you will still get credit IF you are working on studio
- All studio content is fair game on an exam. The exam is hard, the best way to prep is to spend class time efficiently working through studio
- If instructors (myself or TAs) feel you are not working on studio, credit will be taken away. Old studios may be reviewed if this is a consistent problem
- You should always commit and push the work you completed at the end of class. You should always accept the assignment link and join the team you are working with so you have access to the studio repository.

### Other options for studio

If studio must be missed for some reason:

- Complete the studio exercises in full (must complete all non-optional exercises) within 4 days of the assigned date to receive credit
  - Friday at 11:59 PM for Monday studios
  - Sunday at 11:59 PM for Wednesday studios
  - Ok to work asynchronously in a group

### Topics we will cover:

- C++ program basics
  - Variables, types, control statements, development environments
- C++ functions
  - Parameters, the call stack, exception handling
- C++ memory
  - Addressing, layout, management
- C++ classes and structs
  - Encapsulation, abstraction, inheritance
- C++ STL
  - Containers, iterators, algorithms, functors
- OO design
  - Principles and Fundamentals, reusable design patterns

### Other details:

We will use Canvas to distribute lecture slides, studios, assignments, and announcements. Piazza will be used for discussion

### Lab details:

CSE 332 focuses on correctness, but also code readability and maintainability

- Labs graded on correctness as well as programming style
- Each lab lists the programming guidelines that should be followed
- Please review the CSE 332 programming guidelines before turning in each lab

Labs 1, 2, and 3 are individual assignments. You may work in groups of up to three on labs 4 and 5

### Academic Integrity

Cheating is the misrepresentation of someone else’s work as your own, or assisting someone else in cheating

- Providing or receiving answers on exams
- Accessing unapproved sources of information on an exam
- Submitting code written outside of this course in this semester, written by someone else not on your team (or taken from the internet)
- Allowing another student to copy your solution
  - Do not host your projects in public repos

Please also refer to the McKelvey Academic Integrity Policy

Online resources may be used to lookup general purpose C++ information (libraries, etc.). They should not be used to lookup questions specific to a course assignment. Any online resources used, including generative AIs such as chatGPT must be cited, with a description of the prompt/question asked. A comment in your code works fine for this. You may use code from the textbook or from [cppreference.com](https://en.cppreference.com/w/) or [cplusplus.com](https://cplusplus.com/) without citations.

If you have any doubt at all, ask me!

### Studio: Setting up our working environment

Visit the course canvas page, sign up for the course piazza page, and get started on studio 1

