# Lecture 6

## Expressions

### Expressions: Operators and Operands

- **Operators** obey arity, associativity, and precedence
  ```cpp
  int result = 2 * 3 + 5; // assigns 11
  ```
- Operators are often overloaded for different types
  ```cpp
  string name = first + last; // concatenation
  ```
- An **lvalue** gives a **location**; an **rvalue** gives a **value**
  - Left hand side of an assignment must be an lvalue
  - Prefix increment and decrement take and produce lvalues (e.g., `++a` and `--a`)
  - Postfix versions (e.g., `a++` and `a--`) take lvalues, produce rvalues
- Beware accidentally using the “future equivalence” operator, e.g.,
  ```cpp
  if (i = j) // instead of if (i == j)
  ```
- Avoid type conversions if you can, and only use **named** casts (if you must explicitly convert types)

When compiling an expression, the compiler uses the precedence of the operators to determine which subexpression to execute first. Operator precedence defines the order in which different operators in an expression are evaluated.

### Expressions are essentially function calls

```cpp
int main(int argc, char *argv[]){
    string h="hello";
    string w="world";
    h=h+w;
    return 0;
}
```

Compiler will generate a function call for each expression.

The function name is `operator+` for the `+` operator.

```cpp
string operator+(const string & a, const string & b){
    // implementation ignored.
}
```

### Initialization vs. Assignment

`=` has dual meaning

When used in declaration, it is an **initializer** (constructor is called)

```cpp
int a = 1;
```

When used in assignment, it is an **assignment**

```cpp
a = 2;
```

## Statements and exceptions

In C++, **statements** are the basic units of execution.

- Each statement ends with a semicolon (`;`) and can use expressions to compute values.
- Statements introduce scopes, such as those for temporary variables.

A useful statement usually has a **side effect**:

- Stores a value for future use, e.g., `j = i + 5;`
- Performs input or output, e.g., `cout << j << endl;`
- Directs control flow, e.g., `if (j > 0) { ... } else { ... }`
- Interrupts control flow, e.g., `throw out_of_range;`
- Resumes control flow, e.g., `catch (RangeError &re) { ... }`

The `goto` statement is considered too low-level and is usually better replaced by `break` or `continue`.

- If you must use `goto`, you should comment on why it is necessary.

### Motivation for exceptions statements

Need to handle cases where program cannot behave normally

- E.g., zero denominator for division

Otherwise bad things happen

- Program crashes
- Wrong results

Could set value to `Number::NaN`

- I.e., a special “not-a-number” value
- Must avoid using a valid value…  
  … which may be difficult (e.g., for int)
- Anyway, caller might fail to check for it

Exceptions offer a better alternative

```cpp
void Number::operator/(const Number & n){
    if (n.value == 0) throw DivisionByZero();
    // implementation ignored.
    return *this / n.value;
}
```

### Exceptions: Throw Statement Syntax

- Can throw any object
- Can catch, inspect, user, refine, rethrow exceptions
  - By value makes local copy
  - By reference allows modification to be made to the original exception
- Default catch block is indicated by `...`

```cpp
void f(){
    throw 1;
}

int main(int argc, char *argv[]){
    try{
        f();
    }
    catch (int &e){
        cout << "caught an exception: " << e << endl;
    }
    catch (...){
        cout << "caught an non int exception" << endl;
    }
    return 0;
}
```

### C++ 11: Library Exception Hierarchy

- **C++11 standardizes a hierarchy of exception classes**
  - To access these classes `#include <stdexcept>`
- **Two main kinds (subclasses) of `exception`**
  - Run time errors (overflow errors and underflow errors)
  - Logic errors (invalid arguments, length error, out of range)
- **Several other useful subclasses of `exception`**
  - Bad memory allocation
  - Bad cast
  - Bad type id
  - Bad exception
- **You can also declare other subclasses of these**
  - Using the class and inheritance material in later lectures

## Exception behind the scenes

- **Normal program control flow is halted**
  - At the point where an exception is thrown

- **The program call stack "unwinds"**
  - Stack frame of each function in call chain "pops"
  - Variables in each popped frame are destroyed
  - This goes on until a matching try/catch scope is reached

- **Control passes to first matching catch block**
  - Can handle the exception and continue from there
  - Can free some resources and re-throw exception

- **Let's look at the call stack and how it behaves**
  - Good way to explain how exceptions work (in some detail)
  - Also a good way to understand normal function behavior

### Exceptions Manipulate the Function Call Stack

- **In general, the call stack’s structure is fairly basic**
  - A chunk of memory representing the state of an active function call
  - Pushed on program call stack at run-time (can observe in a debugger)

- **`g++ -s` generates machine code (in assembly language)**
  - A similar feature can give exact structure for most platforms/compilers

- **Each stack frame contains:**
  - A pointer to the previous stack frame
  - The return address (i.e., just after point from which function was called)
  - The parameters passed to the function (if any)
  - Automatic (local) variables for the function
    - Sometimes called “stack variables”

_basically, you can imageing the try/catch block as a function that is called when an exception is thrown._

## Additional Details about Exceptions

- Control jumps to the first matching catch block
- Order matters if multiple possible matches
  - Especially with inheritance-related exception classes
  - Put more specific catch blocks before more general ones
  - Put catch blocks for more derived exception classes before catch blocks for their respective base classes
- `catch(...)` is a catch-all block
  - Often should at least free resources, generate an error message, and else.
  - May rethrow exception for another handler to catch and do more
- `throw`;
  - As of C++11, rethrows a caught exception

### Depreciated Exception Specifications

- **Exception specifications**
  - Used to specify which exceptions a function can throw
  - Depreciated in C++11
  - **Exception specifications are now deprecated**
  - **Use `noexcept` instead**
  - **`noexcept` is a type trait that indicates a function does not throw exceptions**

```cpp
void f() throw(int, double); // prohibits throwing int or double
```

```cpp
void f() noexcept; // prohibits throwing any exceptions
```

### Rule of Thumb for Using C++ Exceptions

- **Use exceptions to handle any cases where the program cannot behave normally**
  - Do not use exceptions as a way to control program execution under normal operating conditions

- **Don't let a thrown exception propagate out of the main function uncaught**
  - Instead, always catch any exceptions that propagate up
  - Then return a non-zero value to indicate program failure

- **Don’t rely on exception specifications**
  - May be a false promise, unless you have fully checked all the code used to implement that interface
  - No guarantees that they will work for templates, because a template parameter could leave them off and then fail

