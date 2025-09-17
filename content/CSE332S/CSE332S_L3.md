# CSE332S Object-Oriented Programming in C++ (Lecture 3)

## C++ basic data types

- int, long, short, char (signed, integer arithmetic)
  - char is only 1 byte for all platforms
  - other types are platform dependent
  - can determine the size of the type by using `sizeof()`, `<climits> INT_MAX`
- float, double (floating point arithmetic)
  - more expensive in space and time
  - useful when you need to describe continuous quantities
- bool (boolean logic)

### User-defined types

- (unscoped or scoped) enum
  - maps a sequence of integer values to named constants
- function and operators
  - function is a named sequence of statements, for example `int main()`
- struct and class
  - similar to abstractions in cpp, extend C struct

### struct and class

- struct is public by default
- class is private by default
- both can have
  - member variables
  - member functions
  - constructors
  - destructors
- common practice:
  - use struct for simple data structures
  - use class for more complex data structures with non-trivial functionality

```cpp
struct My_Data{
    My_Data(int x, int y): x_(x), y_(y) {}
    int x_;
    int y_;
};
```

```cpp
class My_Data{
    public:
        My_Object(int x, int y): x_(x), y_(y) {}
        ~My_Object(){}
    private:
        int x_;
        int y_;
};
```

### More about native and user-defined types

- Pointer
  - raw memory address of an object
  - its type constrains what types it can point to
  - can take on a value of 0 (null pointer)
- Reference
  - alias for an existing object
  - its type constrains what types it can refer to
  - cannot take on a value of 0 (**always** refer to a valid object)
- Mutable (default) vs. const types (read right to left)
  - `const int x;` is a read-only variable
  - `int j` is a read-write declaration

## Scopes

Each variable is associated with a scope, which is a region of the program where the variable is valid

- the entire program is a global scope
- a namespace is a scope
- member of a class is a scope
- a function is a scope
- a block is a scope

```cpp
int g_x; // global scope
namespace my_namespace{
    int n_x; // namespace scope
}
class My_Class{
    int c_x; // class scope
    int my_function(){
        int f_x; // function scope
        {
            int b_x; // block scope
        }
        return 0;
    }
}
```

A symbol is only visible within its scope

- helps hide unneeded details (abstraction)
- helps avoid name collisions (encapsulation)

## Motivation for pointer and reference

We often need to _refer_ to an object, but don't want to copy it

There are two common ways to do this:

- Indirectly, via a pointer
  - This gives the address of the object
  - Requires the code to do extra work. eg, dereferencing
  - Like going to the address of the object
- Directly, via a reference
  - Acts as an alias for the object
  - Code interacts with reference as if it were the object itself

## Pointer and reference syntax

### Pointer

A pointer is a variable that holds the address of an object

can be untyped. eg, `void *p;`

usually typed. eg, `int *p;` so that it can be checked by the compiler

If typed, the type constrains what it can point to, a int pointer can only point to an int. `int *p;`

A pointer can be null, eg, `int *p = nullptr;`

We can change to what it points to, eg, `p = &x;`

### Reference

A reference is an alias for an existing object, also holds the address of the object, but is only created on compile time.

Usually with nicer interface than pointers.

Must be typed, and its type constrains what types it can refer to. `int &r;`

Always refers to a valid object, so cannot be null. `int &r = nullptr;` is invalid.

Note: **reference cannot be reassigned to refer to a different object.**

|symbol|used in declaration|used in definition|
|---|---|---|
|unary `&`|reference, eg, `int &r;`|address-of, eg, `int &r = &x;`|
|unary `*`|pointer, eg, `int *p;`|dereference, eg, `int *p = *q;`|
|`->`|member access, eg, `p->x;`|member access via pointer, eg, `p->second;`|
|`.`|member access, eg, `p.x;`|member access via reference, eg, `p.second;`|

## Aliasing via pointers and references

### Aliasing via reference

Example:

```cpp
int main(int argc, char *argv[]){
    int i=0;
    int j=1;
    int &r = i;
    int &s = i;
    r = 8; // do not need to dereference r, just use it as an alias for i
    cout << "i: " << i << ", j: " << j << ", r: " << r << ", s: " << s << endl;
    // should print: i: 8, j: 1, r: 8, s: 8
    return 0;
}
```

### Aliasing via pointer

Example:

```cpp
int main(int argc, char *argv[]){
    int i=0;
    int j=1;
    int *p = &i;
    int *q = &i;
    *q = 6; // need to dereference q to access the value of j
    cout << "i: " << i << ", j: " << j << ", p: " << *p << ", q: " << *q << endl;
    // should print: i: 6, j: 1, p: 6, q: 6
    return 0;
}
```

### Reference to Pointer

Example:

```cpp
int main(int argc, char *argv[]){
    int j = 1;
    int &r = j; // r is a **reference** to j
    int *p = &r; // p is a **pointer** to the address of r, here & is the address-of operator, which returns the address of the object
    int * &t = p; // t is a **reference** to pointer p, here & is the reference operator, which returns the reference of the object. 
    cout << "j: " << j << ", r: " << r << ", p: " << *p << ", t: " << *t << endl;
    // should print: j: 1, r: 1, p: 1, t: [address of p]
    return 0;
}
```

Notice that we cannot have a pointer to a reference. But we can have a reference to a pointer.

### Reference to Constant

Example:

```cpp
int main(int argc, char *argv[]){
    const int i = 0;
    int j = 1;
    int &r = j; // r cannot refer to i, because i is a constant (if true, alter i through r should be valid)
    const int &s=i; // s can refer to i, because s is a constant reference (we don't reassign s)
    const int &t=j; // t can refer to j, because t is a constant reference (we don't reassign t)
    cout << "i: " << i << ", j: " << j << ", r: " << r << ", s: " << s << ", t: " << t << endl;
    // should print: i: 0, j: 1, r: 1, s: 0
    return 0;
}
```

Notice that we cannot have a non-constant reference to a constant object. But we can have a constant reference to a non-constant object.

### Pointer to Constant

Example:

```cpp
int main(int argc, char *argv[]){
    const int i = 0;
    int j = 1;
    int k = 2;
    
    // pointer to int
    int *w = &j;
    
    // const pointer to int
    int *const x = &j;
    
    // pointer to const int
    const int *y = &i;
    
    // const pointer to const int, notice that we cannot change the value of the int that z is pointing to, in this case j **via pointer z**, nor the address that z is pointing to. But we can change the value of j via pointer w or j itself.
    const int *const z = &j;
}
```

- Read declaration from right to left, eg, `int *w = &j;` means `w` is a pointer to an `int` that is the address of `j`.
- Make promises via the `const` keyword, two options:
  - `const int *p;` means `p` is a pointer to a constant `int`, so we cannot change the value of the `int` that `p` is pointing to, but we can change the address that `p` is pointing to.
  - `int *const p;` means `p` is a constant pointer to an `int`, so we cannot change the address that `p` is pointing to, but we can change the value of the `int` that `p` is pointing to.
- A pointer to non-constant cannot point to a const variable.
  - neither `w = &i;` nor `x = &i;` is valid.
  - any of the pointer can points to `j`.

## Pass by value, pass by reference, and type inference

Example:

```cpp
int main(int argc, char *argv[]){
    int h = -1;
    int i = 0;
    int j = 1;
    int k = 2;
    return func(h, i, j, &k);
}

int func(int a, const int &b, int &c, int *d){
    ++a; // [int] pass by value, a is a copy of h, so a is not the same as h
    c = b; // [int &] pass by reference, c is an alias for j, the value of c is the same as the value of b (or i), but we cannot change the value of b (or i) through c (const int &b)
    *d = a; // [int *] pass by value, d is a pointer to k, so *d is the value of k, a is assigned to value of k.
    ++d; // d is a pointer to k, but pass by value, so ++d doesn't change the value of k.
    return 0;
}
```

### More type declaration keywords

`typedef` keyword introduces a "type alias" for a type.

```cpp
typedef Foo * Foo_ptr; // Foo_ptr is a type alias for Foo *

// the following two variables are of the same type
Foo_ptr p1 = 0;
Foo *p2 = 0;
```

`auto` keyword allows the compiler to deduce the type of a variable from the initializer.

```cpp
int x = 0; // x is of type int
float y = 1.0; // y is of type float
auto z = x + y; // z is of type float, with initialized value 1.0
```

`decltype` keyword allows the compiler to deduce the type of a variable from the type of an expression.

```cpp
int x = 0;
double y = 0.0;
float z = 0.0f;

decltype(x) a; // a is of type int, value is not initialized
decltype(y) b; // b is of type double, value is not initialized
decltype(z) c; // c is of type float, value is not initialized
```

