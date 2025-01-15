# Lecture 2

Today we'll talk generally about C++ development (plus a few platform specifics):

- We'll develop, submit, and grade code in Windows
- It's also helpful to become familiar with Linux
  - E.g., on shell.cec.wustl.edu
  - For example, running code through two different compilers can catch a lot more "easy to make" errors

Extra credit on Lab 1: compile the cpp program in Linux.

## Writing C++

Makefile ASCII text

C++ course files, ASCII text, end it with .cpp

C++ header files, ASCII text, end it with .h

readme, ASCII text (show what program does)

## Parts of a C++ Program

### Declarations

data types, function signatures, class declarations

- This allows the compiler to check for type safety, correct syntax, and other errors
- Usually kept in header files (e.g., .h)
- Included as needed by other files (to make compiler happy)

```cpp
// my_class.h
class Simple {
    public:
        Simple (int i);
        void print_i();
    private:
        int i_;
}

typedef unsigned int UNIT32;

int usage (char * program_name);

struct Point2D {
    double x_;
    double y_;
};
```

### Definitions

Static variables initialization, function implementation

- The part that turns into an executable program
- Usually kept in source files (e.g., .cpp)

```cpp
// my_class.cpp
#include "my_class.h"

Simple::Simple (int i) : i_(i) {}

void Simple::print_i() {
    std::cout << i_ << std::endl;
}
```

### Directives

tell complier or preprocessor what to do

more on this later

## A Very Simple C++ Program

```cpp
#include <iostream> // precompiler directive

using namespace std; // compiler directive

// definition of main function

int main(int, char *[]) {
    cout << "Hello, World!" << endl;
    return 0;
}
```

### What is `#include <iostream>`?

- `#include` tells the precompiler to include a file
- Usually, we include header files that:
  - Contain declarations of structs, classes, functions
  - Sometimes contain template _definitions_ (template not included in this course)
- Implementation varies from compiler to compiler (advanced topic covered later)
- `<iostream>` is the C++ standard header file for input/output streams

### What is `using namespace std;`?

- The `using` directive tells the compiler to include code from libraries that have separate namespaces
- Similar idea to "packages" in other languages
- C++ provides a namespace for its standard library
  - Called the "standard namespace" (written as `std`)
  - Contains `cout`, `cin`, `cerr` standard iostreams, and much more
- Namespaces reduce collisions between symbols
  - Rely on the `::` scoping operator to match symbols to them
  - If another library with namespace `mylib` defined `cout` we could say `std::cout` vs. `mylib::cout`
- Can also apply `using` more selectively:
  - E.g., just `using std::cout`

### What is `int main(int, char *[]) { ... }`?

- Defines the main function of any C++ program, it is the entry point of the program

- Who calls main?
  - The runtime environment, specifically a function often called something like `crt0` or `crtexe`

- What about the stuff in parentheses?
  - A list of types of the input arguments to function `main`
  - With the function name, makes up its signature
  - Since this version of `main` ignores any inputs, we leave off names of the input variables, and only give their types

- What about the stuff in braces?
  - It's the body of function `main`, its definition

### What is `cout << "Hello, World!" << endl;`?

- Uses the standard output iostream, named `cout`
  - For standard input, use `cin`
  - For standard error, use `cerr`
- `<<` is an operator for inserting into the stream
  - A member operator of the `ostream` class
  - Returns a reference to stream on which it's called
  - Can be applied repeatedly to references left-to-right 
- `"hello, world!"` is a C-style string
  - A 14-position character array terminated by `'\0'`
- `endl` is an iostream manipulator
  - Ends the line by inserting end-of-line character(s)
  - Also flushes the stream

### What about `return 0;`?

- The `main` function must return an integer value
- By convention:
  - Return `0` to indicate successful execution
  - Return non-zero value to indicate failure
- The program should exit gracefully through `main`'s return
- Other ways the program can terminate abnormally:
  - Uncaught exceptions propagating out of `main`
  - Division by zero
  - Dereferencing null pointers
  - Accessing memory not owned by the program
    - Array index out of bounds
    - Dereferencing invalid/"stray" pointers

## A slightly more complex program

```cpp
#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    for (int i = 0; i < argc; i++) {
        cout << argv[i] << endl;
    }
    return 0;
}
```

### `int argc, char *argv[]`

- A way to affect the program's behavior
  - Carry parameters with which program was called
  - Passed as parameters to main from crt0
  - Passed by value (we'll discuss what that means)

`argc`:

- An integer with the number of parameters (>=1)

`argv`:

- An array of pointers to C-style character strings
- **Its array-length is the value stored in `argc`**
- The name of the program is kept in `argv[0]`

### What is `for (int i = 0; i < argc; i++) { ... }`?

Standard C++ for loop syntax:

- Consists of 3 parts:
  1. Initialization statement (executed once at start)
  2. Test expression (checked before each iteration) 
  3. Increment expression (executed after each iteration)

Let's break down each part:

`int i = 0`:

- Declares integer variable `i` (scoped to the loop)
- Initializes `i` to 0 (initialization, not assignment)

`i < argc`:

- Tests if we're within array bounds
- Critical for memory safety - accessing outside array can crash program

`++i`:

- Increments array position counter
- Uses prefix increment operator

## Lifecycle of a C++ Program

Start from the makefile

- The makefile is a text file that tells the compiler how to build the program, it activates the 'make' utility to build the program
  - The make file turnin/checkin to the WebCAT E-mail
  - The makefile complies the gcc compiler to compile the cpp file
  - The makefile links the object files to create the executable file

The cpp file

- The cpp file is a text file that contains the source code of the program
  - The cpp file is compiled into an object file by the gcc compiler to combined with the link produced by the makefile with the runtime/util library

Finally, the object file is linked with the runtime/util library to create the executable program and ready to debug with Eclipse or Visual Studio.

## Development Environment Studio

### Course Format

- We'll follow a similar format most days in the course:
  - Around 30 minutes of lecture and discussion
  - Then about 60 minutes of studio time
  - Except for:
    - Open studio/lab days
    - Reviews before the midterm and final
    - The day of the midterm itself

### Studio Guidelines

- Work in groups of 2 or 3
- Exercises are posted on the course web page
- Record your answers and email them to the course account
- Instructors will circulate to answer questions

### Purpose of Studios

- Develop skills and understanding
- Explore ideas you can use for labs
- Prepare for exams which test studio material
- Encouraged to try variations beyond exercises
