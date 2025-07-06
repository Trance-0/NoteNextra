# CSE 442T

## Course Description

This course is an introduction to the theory of cryptography. Topics include:

One-way functions, Pseudorandomness, Private-key cryptography, Public-key cryptography, Authentication, and etc.

### Instructor:

[Brian Garnett](bcgarnett@wustl.edu)

Math Phd… Great!

Proof based course and write proofs.

CSE 433 for practical applications.

### Office Hours:

Right after class! 4-5 Mon, Urbaur Hall 227

### Textbook:

[A course in cryptography Lecture Notes](https://www.cs.cornell.edu/courses/cs4830/2010fa/lecnotes.pdf)

### Comments:

Most proofs are not hard to understand.

Many definitions to remember. They are long and tedious. 

For example, I have to read the book to understand the definition of "hybrid argument". It was given as follows:

>Let $X^0_n,X^1_n,\dots,X^m_n$ are ensembles indexed from $1,..,m$
> If $\mathcal{D}$ distinguishes $X_n^0$ and $X_n^m$ by $\mu(n)$, then $\exists i,1\leq i\leq m$ where $X_{n}^{i-1}$ and $X_n^i$ are distinguished by $\mathcal{D}$ by $\frac{\mu(n)}{m}$

I'm having a hard time to recover them without reading the book.

The lecturer's explanation is good but you'd better always pay attention in class or you'll having a hard time to catch up with the proof.

### Notations used in this course

The notations used in this course is very complicated. However, since we need to defined those concepts mathematically, we have to use those notations. Here are some notations I changed or emphasized for better readability at least for myself.

- I changed all the element in set to lowercase letters. I don't know why K is capitalized in the book.
- I changed the message space notation $\mathcal{M}$ to $M$, and key space notation $\mathcal{K}$ to $K$ for better readability.
- All the $\mathcal{A}$ denotes a algorithm. For example, $\mathcal{A}$ is the adversary algorithm, and $\mathcal{D}$ is the distinguisher algorithm.
- As always, $[1,n]$ denotes the set of integers from 1 to n.
- $P[A]$ denotes the probability of event $A$.
- $\{0,1\}^n$ denotes the set of all binary strings of length $n$.
- $1^n$ denotes the string of length $n$ with all bits being 1.
- $0^n$ denotes the string of length $n$ with all bits being 0.
- $;$ means and, $:$ means given that.
- $\Pi_n$ denotes the set of all primes less than $2^n$.
