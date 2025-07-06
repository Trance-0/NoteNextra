# Lecture 4

Office hour after lecture: Cupules I 109

## Chapter II Finite Dimensional Subspaces

### Span and Linear Independence 2A

#### Definition 2.2

Linear combination

Given a list (a finite list), of $\mathbb{F}$ vectors $\vec{v_1},...,\vec{v_m}$. A linear combination of $\vec{v_1},...,\vec{v_m}$ is a vector $\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m},a_i\in \mathbb{F}$ (Adding vectors with different weights)

#### Definition 2.4

Span

The set of all linear combinations of $\vec{v_1},...,\vec{v_m}$ is called the span of $\{\vec{v_1},...,\vec{v_m}\}$

Span $\{\vec{v_1},...,\vec{v_m}\}=\{\vec{v}\in V, \vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m}\textup{ for some }a_i\in \mathbb{F}\}$ 

Note: When there is a nonzero vector in $\{\vec{v_1},...,\vec{v_m}\}$, the span is a infinite set.

Example:

Consider $V=\mathbb{R}^3$, find the span of the vector $\{(1,2,3),(1,1,1)\}$,

The span is $\{a_1\cdot (1,2,3),a_2\cdot (1,1,1):a_1,a_2\in \mathbb{R}\}=\{(a_1+a_2,2a_1+a_2,3a_1+a_2):a_1,a_2\in \mathbb{R}\}$

$(-1,0,1)\in Span((1,2,3),(1,1,1))$

$(1,0,1)\cancel{\in} Span((1,2,3),(1,1,1))$

#### Theorem 2.6

The span of a list of vectors in $V$ is the smallest subspace of $V$ containing this list.

Proof:

1. Span is a subspace
   
   $Span\{\vec{v_1},...,\vec{v_m}\}=\{a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m}\textup{ for some }a_i\in \mathbb{F}\}$
   
   * The zero vecor is inside the span by letting all the $a_i=0$
   * Closure under addition: $a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m}+b_1\vec{v_1}+b_2\vec{v_2}+...+b_m\vec{v_m}=(a_1+b_1)\vec{v_1}+(a_2+b_2)\vec{v_2}+...+(a_m+b_m)\vec{v_m}\in Span\{\vec{v_1},...,\vec{v_m}\}$
   * Closure under multiplication: $c(a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m})=(ca_1)\vec{v_1}+(ca_2)\vec{v_2}+...+(ca_m)\vec{v_m}\in Span\{\vec{v_1},...,\vec{v_m}\}$

2. Span is the **smallest** subspace containing the given list.

   For each $i\in\{1,...,m\}$, $\vec{v_i}=0\vec{v_1}+...+0\vec{v_{i-1}}+\vec{v_i}+0\vec{v_{i+1}}+...+0\vec{v_m}\in Span\{\vec{v_1},...,\vec{v_m}\}$
   
   If $W$ is a subspace of $V$ containing $Span\{\vec{v_1},...,\vec{v_m}\}$, then $W$ is closed under addition and scalar multiplication.
   
   Thus for any $a_1,...,a_m\in \mathbb{F},a_1\vec{v_1}+a_2\vec{v_2}+...+a_m\vec{v_m}\in W$. So $Span\{\vec{v_1},...,\vec{v_m}\}\subset W$

#### Definition 2.ex.1

Spanning set

If a vector space $V=Span\{\vec{v_1},...,\vec{v_m}\}$, then we say $\{\vec{v_1},...,\vec{v_m}\}$ spans $V$, which is the spanning set of $V$.

A vector space is called finite dimensional if it spanned by a **finite** list.

Example:

$\mathbb{F}^n$ is finite dimensional

$\mathbb{R}=Span\{(1,0,0),(0,1,0),(0,0,1)\}$

$(a,b,c)=a(1,0,0)+b(0,1,0)+c(0,0,1)$

#### Definition

Polynomial

A polynomial is a **function** $p:\mathbb{F}\to \mathbb{F}$ such that $p(Z)=\sum_{i=0}^{m} a_i z^i,a_i\in \mathbb{F}$

Let $\mathbb{P}(\mathbb{F})$ be the set of polynomials over $\mathbb{F}$, then $\mathbb{P}(\mathbb{F})$ has the structure of a vector space.

If we consider the degree of polynomials, then $f=a_1f_1+...+a_mf_m$, with degree $f\leq max\{deg(f_1,...,f_m)\}$

$\mathbb{P}(\mathbb{F})$ is a infinite dimensional vector space.

Let $\mathbb{P}_m(\mathbb{F})$ be the set of polynomials of degree at mote $m$, then $\mathbb{P}_m(\mathbb{F})$ is a finite dimensional vectro space.

$\mathbb{P}_m(\mathbb{F})=Span\{1,z,z^2,...z^m\}$

#### Linear independence

How to find a "good" spaning set for a finite dimensional vector space.

Example:

$V=\mathbb{R^2}$

$\mathbb{R^2}=Span\{(1,0),(0,1)\}$

$\mathbb{R^2}=Span\{(1,0),(0,1),(0,0),(1,1)\}$

$\mathbb{R^2}=Span\{(1,2),(3,1),(4,25)\}$

#### Definition 2.15

A list of vector $\vec{v_1},...,\vec{v_m}$ in $V$ is called linearly independent if the only choice for $a_1,...,a_m\in \mathbb{F}$ such that $a_1\vec{v_1}+...+a_m\vec{v_m}=\vec{0}$ is $a_1=...=a_m=0$

If not, then there must $\exists\vec{v_i}$ that can be expressed by other vectors in the set.