# CSE332S Object-Oriented Programming in C++ (Lecture 4)

## Namespace details

### Motivation

Classes encapsulate behavior (methods) and state (member data) behind an interface.

Structs are similar, but with state accessible.

Classes and structs are used to specify self contained, cohesive abstractions.

- Can say what class/struct does in one sentence.

What if we want to describe more loosely related collections of state and behavior?

Could use a class or struct

- But that dilutes their design intent.

### Namespace

Cpp offers an appropriate scoping mechanism for **loosely related** aggregates: Namespaces.

- Good for large function collections.
  - E.g. a set of related algorithms and function objects
- Good for general purpose collections
  - E.g. program utilities, performance statistics, etc.

Declarative region

- Where a variable/function can be used
- From where declared to end of declarative region

### Namespace Properties

Declared/(re)opend with `namespace` keyword.

- `namespace name { ... }`
- `namespace name = namespace existing_name { ... };`

Access members using scoping `operator::`

- `std::cout << "Hello, World!" << std::endl;`

Everything not declared in another namespace is in the global namespace.

Can nest namespace declarations

- `namespace outer { namespace inner { ... } }`

### Using Namespaces

The `using` keyword make elements visible.

- Only apples to the current scope.

Can add entire name space to the current scope

- `using namespace std;`
- `cout << "Hello, World!" << endl;`

Can also declare unnamed namespaces

- Elements are visible after the declaration
- `namespace { int i = 42; }` will make `i` visible in the current file.

## C-style vs. C++ strings

### C++ string class

```cpp
#include <iostream>
#include <string>

using namespace std;

int main (int argc, char *argv[]) {
    string s = "Hello,";
    s += " World!";
    cout << s << endl; // prints "Hello, World!"
    return 0;
}
```

- Using `<string>` header
- Various constructions
- Assignment operator
- Overloaded operators
- Indexing operator, we can index cpp strings like arrays, `s[i]`
### C-style strings

```cpp
#include <iostream>
#include <cstring>

using namespace std;

int main (int argc, char *argv[]) {
    char *h = "Hello, ";
    string sh = "Hello, ";
    char *w = "World!";
    string sw = "World!";
    cout << (h < w) << endl; // this returns 0 because we are comparing pointers
    cout << (sh < sw) << endl; // this returns 1 because we are comparing values of strings in alphabetical order
    h += w; // this operation is illegal because we are trying to add a pointer to a pointer
    sh += sw; // concatenates the strings
    cout << h << endl; // this prints char repeatedly till the termination char
    cout << sh << endl; // this prints the string
    return 0;
}
```

- C-style strings continguous arrays of char
  - Often accessed as `char *` by pointer.
- Cpp string class provides a rich set of operations.
- Cpp strings do "what you expected" as a programmer.
- C-style strings do "what you expected" as a machine designer.

Use cpp strings for most string operations.

## Cpp native array

### Storing Other Data Types Besides `char`

There are many options to store non-char data in an array.

Native C-style arrays

- Cannot add or remove positions
- Can index positions directly (constant time)
- Not necessary zero-terminated (no null terminator as ending)

STL list container (bi-linked list)

- Add/remove position on either end
- Cannot index positions directly

STL vector container ("back stack")

- Can add/remove position at the back
- Can index positions directly

### Pointer and Arrays

```cpp
#include <iostream>

using namespace std;

int main (int argc, char *argv[]) {
    int a[10];
    int *p = &a[0];
    int *q = a;
    // p and q are pointing to the same location
    ++q; // q is now pointing to the second element of the array
}
```

An array holds a contiguous sequence of memory locations

- Can refer to locations using either array index or pointer location
- `int a[0]` vs `int *p`
- `a[i]` vs `*(a + i)`

Array variable essentially behaves like a const pointer

- Like `int * const arr;`
- Cannot change where it points
- Can change locations unless declared as const, eg `const int arr[10];`

Can initalize other pointers to the start of the array

- Using array name
- `int *p = a;`
- `int *p = &a[0];`

Adding or subtracting int pointer n moves a pointer by n of the type it points to

- `int *p = a;`
- `p += 1;` moves pointer by 1 `sizeof(int)`
- `p -= 1;` moves pointer by 1 `sizeof(int)`

Remember that cpp only guarantees `sizeof(char)` is 1.

### Array of (and Pointers to) Pointers

```cpp
#include <iostream>

using namespace std;

int main (int argc, char *argv[]) {
    // could declare char ** argv
    for (int i = 0; i < argc; i++) {
        cout << argv[i] << endl;
    }
    return 0;
}
```

Can have array of pointers to pointers

Can also have an array of pointers to arrays

- `int (*a)[10];`
- `a[0]` is an array of 10 ints
- `a[0][0]` is the first int in the first array

### Rules for pointer arithmetic

```cpp
#include <iostream>

using namespace std;

int main (int argc, char *argv[]) {
    int a[10];
    int *p = &a[0];
    int *q = p + 1;
    return 0;
}
```

You can subtract pointers to get the number of elements between them (no addition, multiplication, or division)

- `int n = q - p;`
- `n` is the number of elements between `p` and `q`

You can add/subtract an integer to a pointer to get a new pointer

- `int *p2 = p + 1;`
- `p2` is a pointer to the second element of the array
- `p+(q-p)/2` is allowed but not `(p+q)/2`

Array and pointer arithmetic: Given a pointer `p` and integer `n`, `p[n]` is equivalent to `*(p+n)`.

Dereferencing a 0 pointer is undefined behavior.

Accessing memory outside of an array may

- Crash the program
- Let you read/write memory you shouldn't (hard to debug)

Watch out for:

- Uninitialized pointers
- Failing to check for null pointers
- Accessing memory outside of an array
- Error in loop initialization, termination, or increment

### Dynamic Memory Allocation

Aray can be allocated, and deallocated dynamically

Arrays have particular syntax for dynamic allocation

Don't leak, destroy safely.

```cpp
Foo * baz (){
    // note the array form of new
    int * const a = new int[3];
    a[0] = 1; a[1] = 2; a[2] = 3;
    Foo *f = new Foo;
    f->reset(a);
    return f;
}

void Foo::reset(int *a) {
    // ctor must initialize to 0
    delete [] this->array_ptr;
    this->array_ptr = a;
}

void Foo::~Foo() {
    // note the array form of delete
    delete [] this->array_ptr;
}
```

## Vectors

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main (int argc, char *argv[]) {
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);
    // note that size_t is an unsigned type that is guaranteed to be large enough to hold the size of v.size(), determined by the compiler.
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i] << endl;
    }
    // this will print 1, 2, 3
    return 0;
}
```

### Motivation to use vectors

Vector do a lot of (often tricky) dynamic memory management.

- use new[] and delete[] internally
- resize, don't leak memory

Easier to pass to functions

- can tell you their size by `size()`
- Don't have to pass a separate size argument
- Don't need a pointer by reference in order to resize

Still have to pay attention

- `push_back` allocates more memory but `[]` does not
- vectors copy and take ownership of elements

## IO classes

```cpp
#include <iostream>

using namespace std;

int main (int argc, char *argv[]) {
    int i;
    // cout == std::ostream
    cout << "Enter an integer: ";
    // cin == std::istream
    cin >> i;
    cout << "You entered: " << i << endl;
    return 0;
}
```

`<iostream>` provides classes for input and output.

- Use `<istream>` for input
- Use `<ostream>` for output

Overloaded operators

- `<<` for insertion
- `>>` for extraction (terminates on whitespace)

Other methods

- `ostream`
  - `write`
  - `put`
- `istream`
  - `get`
  - `eof`
  - `good`
  - `clear`

Stream manipulators

- `ostream`: `flush`, `endl`, `setwidth`, `setprecision`, `hex`, `boolalpha` (boolalpha is a manipulator that changes the way bools are printed from 0/1 to true/false).

### File I/O

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main (int argc, char *argv[]) {
    ifstream ifs;
    ifs.open("input.txt", ios::in);
    ofstream ofs ("output.txt", ios::out);
    if (!ifs.is_open() && ofs.is_open()) {
        int i;
        ifs >> i;
        ofs << i;
    }
    ifs.close();
    ofs.close();
    return 0;
}
```

`<fstream>` provides classes for file input and output.

- Use `<ifstream>` for input
- Use `<ofstream>` for output

Other methods

- `open`
- `close`
- `is_open`
- `getline` parses a line from the file, defaults to whitespace
- `seekg`
- `seekp`

File modes:

- `in` let you read from the file
- `out` let you write to the file
- `ate` let you write to the end of the file
- `app` let you write to the end of the file
- `trunc` let you truncate the file
- `binary` let you read/write binary data

### String Streams Classes

```cpp
#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

int main (int argc, char *argv[]) {
    ifstream ifs("input.txt", ios::in);
    if (!ifs.is_open()) {
        string line_1, word_1;
        getline(ifs, line_1);
        istringstream iss(line_1);
        iss >> word_1;  
        cout << word_1 << endl;
    }
    ifs.close();
    return 0;
}
```

`<sstream>` provides classes for string streams.

- Use `<istringstream>` for input
- Use `<ostringstream>` for output

Useful for scanning input

- Get a line form file into a string
- Wrap a string into a stream
- Pull words off the stream

```cpp
#include <iostream>
#include <sstream>

using namespace std;

int main (int argc, char *argv[]) {
    if (argc < 3) return 1;
    ostringstream argsout;
    argsout << argv[1] << " " << argv[2] << endl;
    istringstream argsin(argsout.str());
    float f,g;
    argsin >> f;
    argsin >> g;
    cout << f << "/" << g << "is" << f/g << endl;
    return 0;
}
```

Useful for formatting output

- Using string as format buffer
- Wrapping a string into a stream
- Push formatted values into the stream
- Output the stream to file

Program gets arguments as C-style strings

Formatting is tedious and error prone in C-style strings (`sprintf`, etc.)

`iostream` formatting is friendly.



