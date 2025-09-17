# CSE332S Object-Oriented Programming in C++ (Lecture 9)

## Sequential Containers

Hold elements of a parameterized type (specified when the container variable is
declared): `vector<int> v; vector<string> v1;`

Elements are inserted/accessed based on their location (index)

- A single location cannot be in more than 1 container
- Container owns elements it contains - copied in by value, contents of container are destroyed when the container is destroyed

Containers provide an appropriate interface to add, remove, and access elements

- Interface provided is determined by the specifics of the container - underlying data structure

_usually the provided interface of the container runs in constant time_

### Non-random access containers

Cannot access elements in constant time, must traverse the container to get to the desired element.

#### Forward list

- implemented as a singly linked list of elements
- Elements are not contiguous in memory (no random access)
- Contains a pointer to the first element (can only grow at front, supplies a `forward_iterator`)

#### List

- implemented as a doubly linked list of elements
- Elements are not contiguous in memory (no random access)
- Contains a pointer to front and back (can grow at front or back, supplies a `bidirectional_iterator`)

### Random access containers

Add, remove, and access elements in constant time.

#### Vector

- implemented as a dynamically sized array of elements
- Elements are contiguous in memory (random access)
- Can only grow at the back via `push_back()` (amortized constant time, _may expand the array takes linear time_)

#### Deque

- double-ended queue of elements
- Elements do not have to be contiguous in memory, but must be accessible in constant time (random access)
- Can grow at front or back of the queue

## Iterators and iterator types

Could use the subscript/indexing (operator[]) operator with a loop

- Not all containers supply an [] operator, but we should still be able to traverse and access their elements

Containers provide iterator types:

- `vector<int>::iterator i; // iterator over non-const elements`
- `vector<int>::const_iterator ci; // iterator over const elements`

Containers provide functions for creating iterators to the beginning and just past
the end of the container:

```cpp
vector<int> v = { 1, 2, 3, 4, 5 };
auto start = v.cbegin(); // cbegin() gives const iterator, you can't modify the elements, you can use .begin() to get a non-const iterator
while (start != v.cend()) { // over const elements, v.cend() is not a valid element, it's just one pass the end.
    cout << *start << endl;
    ++start;
}
```

### More on iterators

- Iterators generalize different uses of pointers
  - Most importantly, define left-inclusive intervals over the ranges of elements in a container `[begin, end)`
- Iterators interface between algorithms and data structures (Iterator design pattern)
  - Algorithms manipulate iterators, not containers
- An iterator’s value can represent 3 kinds of `states`:
  - `dereferencable` (points to a valid location in a range), eg `*start`
  - `past the end` (points just past last valid location in a range), eg `v.cend()`
  - `singular` (points to nothing), eg `nullptr`
- Can construct, compare, copy, and assign iterators so that native and library types
  can inter-operate

### Properties of Iterator Intervals

- Valid intervals can be traversed safely with an iterator
  - An empty range `[p,p)` is valid
  - If `[first, last)` is valid and non-empty, then `[first+1, last)` is also valid
    - Proof: iterative induction on the interval
  - If `[first, last)` is valid
    - and position `mid` is reachable from `first`
    - and `last` is reachable from `mid`
    - then `[first, mid)` and `[mid, last)` are also valid
    - Proof: divide and conquer induction on the interval
  - If `[first, mid)` and `[mid, last)` are valid, then `[first, last)` is valid
    - Proof: divide and conquer induction on the interval

### Interface supplied by different iterator types

- Output iterators: used in output operations (write), 
  - "destructive" read at head of stream (istream)
- Input iterators: used in input operations (read), 
  - "transient" write to stream (ostream)
- Forward iterators: used in forward operations (read, write), common used in forward linked list
  - Value _persists_ after read/write
- Bidirectional iterators: used in bidirectional operations (read, write), common used in doubly linked list
  - Value have _locations_
- Random access iterators: used in random access operations (read, write), common used in vector
  - Can express _distance_ between two iterators

| Category/Operation | Output         | Input          | Forward        | Bidirectional  | Random Access     |
| ------------------ | -------------- | -------------- | -------------- | -------------- | ----------------- |
| Read               | N/A            | `=*p`(r-value) | `=*p`(r-value) | `=*p`(r-value) | `=*p`(r-value)    |
| Access             | N/A            | `->`           | `->`           | `->`           | `->,[]`           |
| Write              | `*p=`(l-value) | N/A            | `*p=`(l-value) | `*p=`(l-value) | `*p=`(l-value)    |
| Iteration          | `++`           | `++`           | `++`           | `++,--`        | `++,--,+,-,+=,-=` |
| Comparison         | N/A            | `==,!=`        | `==,!=`        | `==,!=`        | `==,!=,<,>,<=,>=` |

## Generic algorithms in CPP

A standard collection of generic algorithms

- Applicable to various types and containers
  - E.g., sorting integers (`int`) vs. intervals (`pair<int, int>`)
  - E.g., sorting elements in a `vector` vs. in a C-style array
- Polymorphic even without inheritance relationships - interface polymorphism
  - Types substituted need not have a common base class
  - Must only provide the interface the algorithm requires
  - Common iterator interfaces allow algorithms to work with many types of
containers, without knowing the implementation details of the container
- Significantly used with the sequence containers
  - To reorder elements within a container’s sequence
  - To store/fetch values into/from a container
  - To calculate various values and properties from it

### Organization of C++ Algorithm Libraries

The `<algorithm>` header file contains

- Non-modifying sequence operations
  - Do some calculation but don’t change sequence itself
  - Examples include `count`, `count_if`
- Mutating sequence operations
  - Modify the order or values of the sequence elements
  - Examples include `copy`, `random_shuffle`
- Sorting and related operations
  - Modify the order in which elements appear in a sequence
  - Examples include `sort`, `next_permutation`
- The `<numeric>` header file contains
  - General numeric operations
  - Scalar and matrix algebra, especially used with `vector<T>`
  - Examples include `accumulate`, `inner_product`

### Using Algorithms

Example using `std::sort()`

- `sort` algorithm
  - Reorders a given range
  - Can also plug in a functor to change the ordering function
  - http://www.cplusplus.com/reference/algorithm/sort/

- Requires random access iterators.
- Requires elements being sorted implement `operator<` (less than)

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int main(int argc, char* argv[]) {
  vector<int> v = { 3, 1, 4, 1, 5, 9 };
  sort(v.begin(), v.end()); // sort the vector
  for (int i : v) {
    cout << i << " ";
  }
  return 0;
}
```

Sort forward list of strings

```cpp
forward_list<string> fl = { "hello", "world", "this", "is", "a", "test" };
sort(fl.begin(), fl.end());
```
**This is not valid because forward list does not support random access iterators.**

Sort vector of strings

```cpp
vector<string> v = { "hello", "world", "this", "is", "a", "test" };
sort(v.begin(), v.end());
```