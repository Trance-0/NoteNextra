# CSE332S Object-Oriented Programming in C++ (Lecture 5)

## Function and the Call Stack

### Function lifecycle

Read variable declaration from right to left

eg:

```c
int i; // i is a integer variable
int & r = i; // r is a reference to i
int *p = &i; // p is a pointer to i
const int * const q = &i; // q is a constant pointer to a constant integer
```

Read function declaration from inside out

eg:

```c
int f(int x); // f is a function that takes an integer argument and returns an integer
```

Cpp use the "**program call stack**" to manage active function invocations

When a function is called:

1. A stack frame is "**pushed**" onto the call stack
2. Execution jumps fro the calling functio's code block to the called function's code block

Then the function is executed the return value is pushed onto the stack

When a function returns:

1. The stack frame is "**popped**" off the call stack
2. Execution jumps back to the calling function's code block

The compiler manages the program call stack

- Small performance overhead associated with stack frame management
- Size of a stack frame must be known at compile time - cannot allocate dynamically sized objects on the stack

#### Stack frame

A stack frame represents the state of an active function call

Each frame contains:

- **Automatic variables** - variables local to the function. (automatic created and destroyed when the function is called and returns)
- **Parameters** - values passed to the function
- **A previous frame pointer** - used to access the caller's frame
- **Return address** - the address of the instruction to execute after the function returns

### Recursion for free

An example of call stack:

```cpp
void f(int x) {
    int y = x + 1;
}
void main(int argc, char *argv[]) {
    int z = 1;
    f(z);
}
```

when f is called, a stack frame is pushed onto the call stack:

- function `f`
  - parameter `x`
  - return address
- function `main`
  - parameter `argc`
  - parameter `argv`
  - return address

On recursion, the call stack grows for each recursive call, and shrinks when each recursive call returns.

```cpp
void f(int x) {
    if (x > 0) {
        f(x - 1);
    }
}
int main(int argc, char *argv[]) {
    f(10);
}
```

The function stack will look like this:

- function `f(0)`
  - parameter `x`
  - return address
- function `f(1)`
  - parameter `x`
  - return address
- ...
- function `f(10)`
  - parameter `x`
  - return address
- function `main`
  - parameter `argc`
  - parameter `argv`
  - return address

### Pass by reference and pass by value

However, when we call recursion with pass by reference.

```cpp
void f(int & x) {
    if (x > 0) {
        f(x - 1);
    }
}
int main(int argc, char *argv[]) {
    int z = f(10);
}
```

The function stack will look like this:

- function `f(0)`
  - return address
- function `f(1)`
  - return address
- ...
- function `f(10)`
  - return address
- function `main`
  - parameter `z`
  - parameter `argc`
  - parameter `argv`
  - return address

This is because the reference is a pointer to the variable, so the function can modify the variable directly without creating a new variable.

### Function overloading and overload resolution

Function overloading is a feature that allows a function to have multiple definitions with the same name but **different parameters**.

Example:

```cpp
void errMsg(int &x){
    cout << "Error with code: " << x << endl;
}
void errMsg(const int &x){
    cout << "Error with code: " << x << endl;
}
void errMsg(const string &x){
    cout << "Error with message: " << x << endl;
}
void errMsg(const int &x, const string &y){
    cout << "Error with code: " << x << " and message: " << y << endl;
}
int main(int argc, char *argv[]){
    int x = 10;
    const int y = 10;
    string z = "File not found";
    errMsg(x); // this is the first function (best match: int to int)
    errMsg(y); // this is the second function (best match: const int to const int)
    errMsg(z); // this is the third function (best match: string to const string)
    errMsg(x, z); // this is the fourth function (best match: int to const int, string to const string)
}
```

When the function is called, the compiler will automatically determine which function to use based on the arguments passed to the function.

BUT, there is still ambiguity when the function is called with the same type of arguments.

```cpp
void errMsg(int &x);
void errMsg(short &x);
int main(int argc, char *argv[]){
    char x = 'a';
    errMsg(x); // this is ambiguous, cpp don't know which function to use since char can both be converted to int and short. This will throw an error.
}
```

#### Default arguments

Default arguments are arguments that are provided by the function caller, but if the caller does not provide a value for the argument, the function will use the default value.

```cpp
void errMsg(int x = 0, string y = "Unknown error");
```

If the caller does not provide a value for the argument, the function will use the default value.

```cpp
errMsg(); // this will use the default value for both arguments
errMsg(10); // this will use the default value for the second argument
errMsg(10, "File not found"); // this will use the provided value for both arguments
```

Overloading and default arguments

```cpp
void errMsg(int x = 0, string y = "Unknown error");
void errMsg(int x);
```

This is ambiguous, because the compiler don't know which function to use. This will throw an error.

We can only default the rightmost arguments

```cpp
void errMsg(int x = 0, string y = "Unknown error");
void errMsg(int x, string y = "Unknown error"); // this is valid
void errMsg(int x = 0, string y); // this is invalid
```

Caller must supply leftmost arguments first, even they are same as default arguments

```cpp
void errMsg(int x = 0, string y = "Unknown error");
int main(int argc, char *argv[]){
    errMsg("File not found"); // this will throw an error, you need to provide the first argument
    errMsg(10, "File not found"); // this is valid
}
```
