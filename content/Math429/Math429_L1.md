# Lecture 1

## Linear Algebra

Linear Algebra is the study of the Vector Spaces and their maps

Examples

* Vector spaces

    $\mathbb{R},\mathbb{R}^2...\mathbb{C}$

* Linear maps:
  
    matrices, functions, derivatives

### Background & notation

$$
\textup{fields}\begin{cases}
    \mathbb{R}=\textup{ real numbers}\\
    \mathbb{C}=\textup{ complex numbers}\\
    \mathbb{F}=\textup{ and arbitrary field, usually } \mathbb{R} \textup{ or }\mathbb{C}
\end{cases}
$$

## Chapter I Vector Spaces

### Definition 1B

#### Definition 1.20

A vector space over $\mathbb{f}$ is a set $V$ along with two operators $v+w\in V$ for $v,w\in V$, and $\lambda \cdot  v$ for $\lambda\in \mathbb{F}$ and $v\in V$ satisfying the following properties:

* Commutativity: $\forall v, w\in V,v+w=w+v$
* Associativity: $\forall u,v,w\in V,(u+v)+w=u+(v+w)$
* Existence of additive identity: $\exists 0\in V$ such that $\forall v\in V, 0+v=v$
* Existence of additive inverse: $\forall v\in V, \exists w \in V$ such that $v+w=0$
* Existence of multiplicative identity: $\exists 1 \in \mathbb{F}$ such that $\forall v\in V,1\cdot v=v$
* Distributive properties: $\forall v, w\in V$ and $\forall a,b\in \mathbb{F}$, $a\cdot(v+w)=a\cdot v+ a\cdot w$ and $(a+b)\cdot v=a\cdot v+b\cdot v$

#### Theorem 1.26~1.30

Other properties of vector space

If $V$ is a vector space on $v\in V,a\in\mathbb{F}$

* $0\cdot v=0$
* $a\cdot 0=0$
* $(-1)\cdot v=-v$
* uniqueness of additive identity
* uniqueness of additive inverse

#### Example

Proof for $0\cdot v=0$

Let $v\in V$ be a vector, then $(0+0)\cdot v=0\cdot v$, using the distributive law we can have $0\cdot v+0\cdot v=0\cdot v$, then $0\cdot v=0$

Proof for unique additive identity

Suppose $0$ and $0'$ are both additive identities for some vector space $V$.

Then $0' = 0' +0 = 0 +0' = 0$,

where the first equality holds because $0$ is an additive identity, the second equality comes from commutativity, and the third equality holds because $0'$ is an additive identity. Thus 0$' = 0$, proving that 𝑉 has only one additive identity.

#### Definition 1.22 

Real vector space, complex vector space

* A vector space over $\mathbb{R}$ is called a real vector space.
* A vector space over $\mathbb{C}$ is called a complex vector space.

Example:

If $\mathbb{F}$ is a vector space, prove that $\mathbb{F}^2$ is a vector space

We proceed by iterating the properties of the vector space.

For example, Existence of additive identity in $\mathbb{F}^2$ is $(0,0)$, it is obvious that $\forall (a,b)\in \mathbb{F}^2, (a,b)+(0,0)=(a,b)$. Thus, $(0,0)$ is the additive identity in $\mathbb{F}^2$.

