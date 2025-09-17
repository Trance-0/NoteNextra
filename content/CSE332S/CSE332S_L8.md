# CSE332S Object-Oriented Programming in C++ (Lecture 8)

## From procedural to object-oriented programming

Procedural programming

- Focused on **functions** and the call stack
- Data and functions treated as **separate** abstractions
- Data must be passed into/returned out of functions, functions work on any piece of data that can be passed in via parameters

Object-oriented programming

- Data and functions packaged **together** into a single abstraction
- Data becomes more interesting (adds behavior)
- Functions become more focused (restricts data scope)

## Object-oriented programming

- Data and functions packaged together into a single abstraction
  - Data becomes more interesting (adds behavior)
  - Functions become more focused (restricts data scope)

### Today:

- An introduction to classes and structs
  - Member variables (state of an object)
  - Constructors
  - Member functions/operators (behaviors)
  - Encapsulation
  - Abstraction

At a later date:

- Inheritance (class 12)
- Polymorphism (12)
- Developing reusable OO designs (16-21)

## Class and struct

### From C++ Functions to C++ Structs/Classes

C++ functions encapsulate behavior

- Data used/modified by a function must be passed in via parameters
- Data produced by a function must be passed out via return type

Classes (and structs) encapsulate related data and behavior (**Encapsulation**)

- Member variables maintain each object’s state
- Member functions (methods) and operators have direct access to member variables of the object on which they are called
- Access to state of an object is often restricted
- **Abstraction** - a class presents only the relevant details of an object, through its public interface.

### C++ Structs vs. C++ Classes?

Class members are **private** by default, struct members are **public** by default

When to use a struct

- Use a struct for things that are mostly about the data
- **Add constructors and operators to work with STL containers/algorithms**

When to use a class

- Use a class for things where the behavior is the most important part
- Prefer classes when dealing with encapsulation/polymorphism (later)

```cpp
// point2d.h - struct declaration
struct Point2D {
    Point2D(int x, int y);
    bool operator< (const Point2D &) const; // a const member function
    int x_; // promise a member variable
    int y_;
};
```

```cpp
// point2d.cpp - methods functions
#include "point2d.h"

Point2D::Point2D(int x, int y) : 
x_(x), y_(y) {}

bool Point2D::operator< (const Point2D &other) const {
    return x_ < other.x_ || (x_ == other.x_ && y_ < other.y_);
}
```

### Structure of a class

```cpp
class Date {
    public: // public stores the member functions and variables accessible to the outside of class
    Date(); // default constructor
    Date (const Date &); // copy constructor
    Date(int year, int month, int day); // constructor with parameters
    virtual ~Date(); // (virtual) destructor
    Date& operator= (const Date &); // assignment operator
    int year() const; // accessor
    int month() const; // accessor
    int day() const; // accessor
    void year(int year); // mutator
    void month(int month); // mutator
    void day(int day); // mutator
    string yyymmdd() const; // generate a string representation of the date
    private: // private stores the member variables that only the class can access
    int year_;
    int month_;
    int day_;
};
```

#### Class constructor

- Same name as its class
- Establishes invariants for objects of the class
- **Base class/struct and member initialization list**
  - Used to initialize member variables
  - Used to construct base class when using inheritance
  - Must initialize const and reference members there
  - **Runs before the constructor body, object is fully initialized in constructor body**

```cpp
// date.h
class Date {
    public:
    Date();
    Date(const Date &);
    Date(int year, int month, int day);
    ~Date();
    // ...
    private:
    int year_;
    int month_;
    int day_;
};
```

```cpp
// date.cpp
Date::Date() : year_(0), month_(0), day_(0) {} // initialize member variables, use pre-defined values as default values
Date::Date(const Date &other) : year_(other.year_), month_(other.month_), day_(other.day_) {} // copy constructor
Date::Date(int year, int month, int day) : year_(year), month_(month), day_(day) {} // constructor with parameters
// ...
```

#### More on constructors

Compiler defined constructors:

- Compiler only defines a default constructor if no other constructor is declared
- Compiler defined constructors simply construct each member variable using the same operation

Default constructor for **built-in types** does nothing (leaves the variable uninitialized)!

It is an error to read an uninitialized variable

## Access control and friend declarations

Declaring access control scopes within a class - where is the member visible?

- `private`: visible only within the class
- `protected`: also visible within derived classes (more later)
- `public`: visible everywhere

Access control in a **class** is `private` by default

- It’s better style to label access control explicitly

A `struct` is the same as a `class`, except access control for a `struct` is `public` by default

- Usually used for things that are “mostly data”

### Issues with Encapsulation in C++

Encapsulation - state of an object is kept internally (private), state of an object can be changed via calls to its public interface (public member functions/operators)

Sometimes two classes are closely tied:

- One may need direct access to the other’s internal state
- But, other classes should not have the same direct access
- Containers and iterators are an example of this

We could:

1. Make the internal state public, but this violates **encapsulation**
2. Use an inheritance relationship and make the internal state protected, but the inheritance relationship doesn’t make sense
3. Create fine-grained accessors and mutators, but this clutters the interface and violates **abstraction**

### Friend declarations

Offer a limited way to open up class encapsulation

C++ allows a class to declare its “friends”

- Give access to specific classes or functions

Properties of the friend relation in C++

- Friendship gives complete access
  - Friend methods/functions behave like class members
  - public, protected, private scopes are all accessible by friends
- Friendship is asymmetric and voluntary
  - A class gets to say what friends it has (giving permission to them)
  - But one cannot “force friendship” on a class from outside it
- Friendship is not inherited
  - Specific friend relationships must be declared by each class
  - “Your parents’ friends are not necessarily your friends”


```cpp
// in Foo.h
class Foo {
    friend ostream &operator<< (ostream &out, const Foo &f); // declare a friend function, can be added at any line of the class declaration
    public:
    Foo(int x);
    ~Foo();
    // ...
    private:
    int baz_;
};

ostream &operator<< (ostream &out, const Foo &f);
```

```cpp
// in Foo.cpp
ostream &operator<< (ostream &out, const Foo &f) {
    out << f.baz_; // access private member variable via friend declaration
    return out;
}


```

