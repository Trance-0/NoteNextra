# CSE332S Object-Oriented Programming in C++ (Lecture 7)

## Debugging

Debugger let's us:

1. Execute code incrementally
   a. Line by line, function to function, breakpoint to breakpoint
2. Examine state of executing program
   a. Examine program call stack
   b. Examine variables

When to debug:

1. Trace how a program runs
2. Program crashes
3. Incorrect result

### Basic debugging commands

Set breakpoints
Run program - program stops on the first breakpoint it encounters
From there:

- Execute one line at a time
- Step into (step out can be useful if you step into a function outside of your code)
- Step over

- Execute until the next breakpoint (continue)

While execution is stopped:

- Examine the state of the program
  - Call stack, variables, ...

### Lots of power, but where to start?

Stepping through the entire program is infeasible

Think first!!!

- What might be going wrong based on the output or crash message?
- How can I test my hypothesis?
  - Can I narrow down the scope of my search?
  - Can I recreate the bug in a simpler test case/simpler code?
- Set breakpoints in smart locations based on my hypothesis

### Today’s program

A simple lottery ticket game

1. User runs the program with 5 arguments, all integers (1-100)
2. Program randomly generates 10 winning numbers
3. User wins if they match 3 or more numbers

At least that’s how it should run, but you will have to find and fix a few issues first

First, let’s look at some things in the code

- Header guards/pragma once
- Block comments: Who wrote this code? and what does it do?
- Multiple files and including header files
  - **Do not define functions in header files, declarations only**
  - **Do not #include .cpp files**
  - Function or data type must be declared before it can be used

#### Header Guards

```cpp
#pragma once // alternative to traditional header guards, don't need to do both.
#ifndef ALGORITHMS_H
#define ALGORITHMS_H
#include<vector>
void insertion_sort(std::vector<int> & v);
bool binary_search(const std::vector<int> & v, int value);
#endif // ALGORITHMS_H
```

The header guard is used to prevent the header file from being included multiple times in the same file.
