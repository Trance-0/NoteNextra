# Lecture 8

## Computational number theory/arithmetic

We want to have a easy-to-use one-way functions for cryptography.

How to find $a^x\mod N$ quickly. $a,x,N$ are positive integers. We want to reduce $[a\mod N]$

Example: $129^{39}\mod 41\equiv (129\mod 41)^{39}\mod 41=6^{39}\mod 41$

Find the binary representation of $x$. e.g. express as sums of powers of 2.

`x=39=bin(1,0,0,1,1,1)`

Repeatedly square $floor(\log_2(x))$ times.

$$
\begin{aligned}
    6^{39}\mod 41&=6^{32+4+2+1}\mod 41\\
    &=(6^{32}\mod 41)(6^{4}\mod 41)(6^{2}\mod 41)(6^{1}\mod 41)\mod 41\\
    &=(-4)(25)(-5)(6)\mod 41\\
    &=7
\end{aligned}
$$

The total multiplication steps is $floor(\log_2(x))$

_looks like fast exponentiation right?_

Goal: $f_{g,p}(x)=g^x\mod p$ is a one-way function, for certain choice of $p,g$ (and assumptions)

### A group (Nice day one for MODERN ALGEBRA)

A group $G$ is a set with, a binary operation $\oplus$. and $\forall a,b\in G$, $a \oplus b\to c$

1. $a,b\in G,a\oplus b\in G$
2. $(a\oplus b)\oplus c=a\oplus(b\oplus c)$
3. $\exists e$ such that $\forall a\in G, e\oplus g=g=g\oplus e$
4. $\exists g^{-1}\in G$ such that $g\oplus g^{-1}=e$

Example: 

- $\mathbb{Z}_N=\{0,1,2,3,...,N-1\}$ with addition $\mod N$, with identity element $0$. $a\in \mathbb{Z}_N, a^{-1}=N-a$.
- A even simpler group is $\Z$ with addition.
- $\mathbb{Z}_N^*=\{x:x\in \mathbb{Z},1 \leq x\leq N: gcd(x,N)=1\}$ with multiplication $\mod N$ (we can do division here! yeah...).
  - If $N=p$ is prime, then $\mathbb{Z}_p^*=\{1,2,3,...,p-1\}$
  - If $N=24$, then $\mathbb{Z}_{24}^*=\{1,5,7,11,13,17,19,23\}$
    - Identity is $1$.
    - Let $a\in \mathbb{Z}_N^*$, by Euclidean algorithm, $gcd(a,N)=1$,$\exists x,y \in Z$ such that $ax+Ny=1,ax\equiv 1\mod N,x=a^{-1}$
    - $a,b\in \mathbb{Z}_N^*$. Want to show $gcd(ab,N)=1$. If $gcd(ab,N)=d>1$, then some prime $p|d$. so $p|(a,b)$, which means $p|a$ or $p|b$. In either case, $gcd(a,N)>d$ or $gcd(b,N)>d$, which contradicts that $a,b\in \mathbb{C}_N^*$

### Euler's totient function

$\phi:\mathbb{Z}^+\to \mathbb{Z}^+,\phi(N)=|\mathbb{Z}_N^*|=|\{1\leq x\leq N:gcd(x,N)=1\}|$

Example: $\phi(1)=1$, $\phi(24)=8$, $\phi (p)=p-1$, $\phi(p\cdot q)=(p-1)(q-1)$

### Euler's Theorem

For any $a\in \mathbb{Z}_N^*$, $a^{\phi(N)}\equiv 1\mod N$

Consequence: $a^x\mod N$, $x=K\cdot \phi(N)+r,0\leq r\leq \phi(N)$

$$
a^x\equiv a^{K \cdot \phi (N) +r}\equiv ( a^{\phi(n)} )^K \cdot a^r \mod N$
$$

So computing $a^x\mod N$ is polynomial in $\log (N)$ by reducing $a\mod N$ and $x\mod \phi(N)<N$

Corollary: Fermat's little theorem:

$1\leq a\leq p-1,a^{p-1}\equiv 1 \mod p$