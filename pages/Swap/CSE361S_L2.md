# Lecture 2: Binary Representation

## Bits review

- 1 byte = 8 bits

### Converting between binary and decimal

$162_{10} = 10100010_{2}$

$$
\begin{aligned}
162_{10} &= 1 \cdot 2^7 + 0 \cdot 2^6 + 1 \cdot 2^5 + 0 \cdot 2^4 + 0 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0 \\
&= 128 + 32 + 2 \\
&= 162
\end{aligned}
$$

## Example Data representations

| C Data Type | Size (bytes 32bit) | Size (bytes 64bit) | x86-64 |
| ----------- | ----------------- | ----------------- | ----- |
| `char`      | 1                 | 1                 | 1     |
| `short`     | 2                 | 2                 | 2     |
| `int`       | 4                 | 4                 | 4     |
| `long`      | 4                 | 8                 | 8     |
| `float`     | 4                 | 4                 | 4     |
| `double`    | 8                 | 8                 | 8     |
| `long double` | -              | -             | 10/16    |
| `pointer`   | 4                 | 8                 | 8     |

Same size if declared as `unsigned`

### Encoding Integers (w bits)

#### Unsigned Integers

$$
B2U(X)= \sum_{i=0}^{w-1} x_i \cdot 2^i
$$

Example:

$$
\begin{aligned}
B2U(01101) &= 0 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= 0 + 8 + 4 + 0 + 1 \\
&= 13
\end{aligned}
$$

$$
\begin{aligned}
B2U(11101) &= 1 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= 16 + 8 + 4 + 0 + 1 \\
&= 29
\end{aligned}
$$

#### Two's Complement

$$
B2T(X)= -x_{w-1} \cdot 2^{w-1} + \sum_{i=0}^{w-2} x_i \cdot 2^i
$$


Example:

$$
\begin{aligned}
B2T(01101) &= 0 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= 0 + 8 + 4 + 0 + 1 \\
&= 13
\end{aligned}
$$

$$
\begin{aligned}
B2T(11101) &= -1 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= -16 + 8 + 4 + 0 + 1 \\
&= -3
\end{aligned}
$$

#### Sign Bit

- For 2's complement, most significant bit is the sign bit
  - 0 for positive
  - 1 for negative

#### Numeric Ranges

- Assume you have a integer type that is 4 bits long
  - Unsigned: 0 to 15
    - $0b1111=15$
  - 2's Complement: -8 to 7
    - $0b1000=-8$

- Unsigned Values:
  - $UMin=0=B2U(000\ldots 0)$
  - $UMax=2^w-1=B2U(111\ldots 1)$
- 2's Complement Values
  - $TMin=-2^{w-1}=B2T(100\ldots 0)$
  - $TMax=2^{w-1}-1=B2T(011\ldots 1)$
  - Other interesting values $-1=B2T(111\ldots 1)$

#### Values for different word sizez

|  | W=8 | W=16 | W=32 | W=64 |
| --- | --- | --- | --- | --- |
| TMin | -128 | -32768 | -2147483648 | -9223372036854775808 |
| TMax | 127 | 32767 | 2147483647 | 9223372036854775807 |
| UMin | 0 | 0 | 0 | 0 |
| UMax | 255 | 65535 | 4294967295 | 18446744073709551615 |

## C Operators for bitwise operations

### Boolean algebra

And 

|`&`| 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 1 |

Example:

```c
int a = 0b1010;
int b = 0b1100;
int c = a & b; //  should return 0b1000
```

Or

|`\|`| 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 1 | 1 |

Example:

```c
int a = 0b1010;
int b = 0b1100;
int c = a | b; //  should return 0b1110
```

Xor

|`^`| 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 1 | 0 |

Example:

```c
int a = 0b1010;
int b = 0b1100;
int c = a ^ b; //  should return 0b0110
```

Not

|`~`| 0 | 1 |
| --- | --- | --- |
|  | 1 | 0 |

Example:

```c
int a = 0b1010;
int c = ~a; //  should return 0b0101
```

#### Imagine as set operations

- `&` is intersection
- `|` is union
- `^` is exclusive or (symmetric difference)
- `~` is complement

#### Logic operators on C

- `&&` is and
- `||` is or
- `!` is not

Interesting properties:

- View `0` as `false` and any non-zero value as `true`
- Always returns `0` or `1`
- Early termination: if the first operand is `0`, the second operand is not evaluated

Example:

```c
int a = 0x69;
int b = 0x55;
int c = a && b; //  should return 0x01
int d = a || b; //  should return 0x01 (the program will not check b at all since a is non-zero by early termination)
int e = !a; //  should return 0x00
int f = !!a; //  should return 0x01
int g = !0; //  should return 0x01

int *p = NULL;
bool should_access = p && *p; //  (avoid null pointer access, returns 0 if p is NULL, otherwise returns true if *p is non-zero)
```

#### Using bit masks

```c
// goal: compute val mod x and x is a power of 2
unsigned int val = 137; // some value to take mod of
unsigned int x = 16; // x is a power of 2
unsigned int mask = x - 1; // mask is a bit mask that is all 1s except for the least significant bit
unsigned int mod = val & mask; // mod is the result of val mod x
```

#### Shift operations

- `<<` is left shift
  - Shift bit-vector x left y positions
- `>>` is right shift
  - Shift bit-vector x right y positions
  - Logical shift: fill with 0s
  - Arithmetic shift: fill with the sign bit
- Undefined behavior: shift by a number greater than or equal to the word size

Example:

| `x` | `0b01100010` |
| --- | --- |
| `x<<3` | `0b00010000` |
| Logical shift `x>>2` | `0b00011000` |
| Arithmetic shift `x>>2` | `0b00011000` |

For negative numbers:

| `x` | `0b10100010` |
| --- | --- |
| `x<<3` | `0b00010000` |
| Logical shift `x>>2` | `0b00101000` |
| Arithmetic shift `x>>2` | `0b11101000` |

#### Pop count function

- How do you implement a pop count function in a 4-byte memory?

Trivial way:

```c
# define MASK 0x1;

int pop_count(unsigned int x) {
  // does not work for negative numbers
  int count = 0;
  while (x!=0) {
    if (x & MASK) count++;
    x >>= 1;
  }
  return count;
}
```

#### Casting Between Signed and Unsigned Integers in C

Constants

- By default, constants are signed
- To make a constant unsigned, add the `U` suffix

```c
unsigned int a = 0x1234U;
```

Casting

- Explicitly cast to a different type

```c
int tx,ty;
unsigned int ux,uy;

tx = (int) ux;
uy = (unsigned) ty;
```

- Implicit casting also occurs via assignments and procedure calls

```c
tx = ux;
pop_count(tx); // popcount is a built-in function that returns the number of 1s in the binary representation of x (unsigned int)
```

#### When should I use unsigned integers?

- Don't use just because the number are non-negative
  - Easy to make mistakes

```c
unsigned i;
for (i = cnt-2; i < 0; i++) {
  // do something
}
```

If `cnt=1` then `i` will be `-1` and the loop will not terminate in short time. LOL.

- Can be very subtle

```c
#define DELTA sizeof(int) // sizeof(int) returns unsigned

int x = 0;
for (int i = CNT; i-DELTA >=0; i-=DELTA) {
  // do something
}
```

The expression `i-DELTA >= 0` will be evaluated as `unsigned` and will not terminate.

#### Code Security Example

You can access the kernel memory region holding non user-accessible data. if you give negative index to the array, it will access the kernel memory region by interpreting the negative index as an unsigned integer.

## Change int size

### Extension

- When operating with types of different widths, C automatically perform extension
- Converting from smaller to larger type is always safe
  - Given w-bit integer `x`,
  - Convert `x` to `w+k` bit integer with the same value
- Two different types of extension
  - zero extension: use for unsigned (similar to logical shift)
  - sign extension: use for signed (similar to arithmetic shift)

### Truncation

- Task:
  - Given w-bit integer `x`,
  - Convert `x` to `k` bit integer with the same value
- Rule:
  - Drop high-order `w-k` bits
- Effect:
  - can change the value of `x`
  - unsigned: mathematical mode on `x`
  - signed: reinterprets the bit (add -2^k to the value)

#### Code puzzle

what is the output of the following code?

```c
unsigned short y=0xFFFF;
int x = y;
printf("%x", x); /* print the value of x as a hexadecimal number */
```

The output is `0x0000FFFF` it will try to preserve the value of `y` by sign extending the value of `y` to `x`.
