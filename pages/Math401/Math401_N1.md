# Node 1

_all the materials are recovered after the end of the course. I cannot split my mind away from those materials._

## Recap on familiar ideas

### Group

A group is a set $G$ with a binary operation $\cdot$ that satisfies the following properties:

1. **Closure**: For all $a, b \in G$, the result of the operation $a \cdot b$ is also in $G$.
2. **Associativity**: For all $a, b, c \in G$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. **Identity**: There exists an element $e \in G$ such that for all $a \in G$, $e \cdot a = a \cdot e = a$.
4. **Inverses**: For each $a \in G$, there exists an element $b \in G$ such that $a \cdot b = b \cdot a = e$.

### Ring

A ring is a set $R$ with two binary operations, addition and multiplication, that satisfies the following properties:

1. **Additive Closure**: For all $a, b \in R$, the result of the addition $a + b$ is also in $R$.
2. **Additive Associativity**: For all $a, b, c \in R$, $(a + b) + c = a + (b + c)$.
3. **Additive Identity**: There exists an element $0 \in R$ such that for all $a \in R$, $0 + a = a + 0 = a$.
4. **Additive Inverses**: For each $a \in R$, there exists an element $-a \in R$ such that $a + (-a) = (-a) + a = 0$.
5. **Multiplicative Closure**: For all $a, b \in R$, the result of the multiplication $a \cdot b$ is also in $R$.
6. **Multiplicative Associativity**: For all $a, b, c \in R$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.

Others not shown since you don't need too much.

## Symmetric Group

### Definition

The symmetric group $S_n$ is the group of all permutations of $n$ elements. Or in other words, the group of all bijections from a set of $n$ elements to itself.

Example:

$$
e=1,2,3\\
(12)=2,1,3\\
(13)=3,2,1\\
(23)=1,3,2\\
(123)=3,1,2\\
(132)=2,3,1
$$

$(12)$ means that $1\to 2, 2\to 1, 3\to 3$ we follows the cyclic order for the elements in the set.

$S_3 = \{e, (12), (13), (23), (123), (132)\}$

The multiplication table of $S_3$ is:

|Element|e|(12)|(13)|(23)|(123)|(132)|
|---|---|---|---|---|---|---|
|e|e|(12)|(13)|(23)|(123)|(132)|
|(12)|(12)|e|(123)|(13)|(23)|(132)|
|(13)|(13)|(132)|e|(12)|(23)|(123)|
|(23)|(23)|(123)|(132)|e|(12)|(13)|
|(123)|(123)|(13)|(23)|(132)|e|(12)|
|(132)|(132)|(23)|(12)|(123)|(13)|e|

## Functions defined on $S_n$

### Symmetric Generating Set

