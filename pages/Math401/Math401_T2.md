# Topic 2: Finite-dimensional Hilbert spaces

Recall the complex number is a tuple of two real numbers, $z=(a,b)$ with addition and multiplication defined by

$$
(a,b)+(c,d)=(a+c,b+d)
$$

$$
(a,b)\cdot(c,d)=(ac-bd,ad+bc)
$$

or in polar form,

$$
z=re^{i\theta}=r(\cos\theta+i\sin\theta)
$$

where $r=\sqrt{a^2+b^2}=\sqrt{z\overline{z}}$ and $\theta=\tan^{-1}(b/a)$.

The complex conjugate of $z$ is $\overline{z}=(a,-b)$.

## Section 1: Finite-dimensional Complex Vector Spaces

Here, we use the field $\mathbb{C}$ of complex numbers. or the field $\mathbb{R}$ of real numbers as the field $\mathbb{F}$ we are going to encounter.

### Definition of vector space

A vector space $\mathscr{V}$ over a field $\mathbb{F}$ is a set equipped with an **addition** and a **scalar multiplication**, satisfying the following axioms:

1. Addition is associative and commutative. For all $u,v,w\in \mathscr{V}$,

Associativity:
$$
(u+v)+w=u+(v+w)
$$

Commutativity:

$$
u+v=v+u
$$

2. Additive identity: There exists an element $0\in \mathscr{V}$ such that $v+0=v$ for all $v\in \mathscr{V}$.

3. Additive inverse: For each $v\in \mathscr{V}$, there exists an element $-v\in \mathscr{V}$ such that $v+(-v)=0$.

4. Multiplicative identity: There exists an element $1\in \mathbb{F}$ such that $v\cdot 1=v$ for all $v\in \mathscr{V}$.

5. Multiplicative inverse: For each $v\in \mathscr{V}$ and $c\in \mathbb{F}$, there exists an element $c^{-1}\in \mathbb{F}$ such that $v\cdot c^{-1}=1$.

6. Distributivity: For all $u,v\in \mathscr{V}$ and $c,d\in \mathbb{F}$,

$$
c(u+v)=cu+cv
$$

A vector is an ordered pair of elements over the field $\mathbb{F}$.

If we consider $\mathbb{F}=\mathbb{C}^n$, $n\in \mathbb{N}$, then $u=(a_1,a_2,\cdots,a_n), v=(b_1,b_2,\cdots,b_n)\in \mathbb{C}^n$ are vectors.

The addition and scalar multiplication are defined by

$$
u+v=(a_1+b_1,a_2+b_2,\cdots,a_n+b_n)
$$

$$
cu=(ca_1,ca_2,\cdots,ca_n)
$$

$c\in \mathbb{C}$.

The matrix transpose is defined by

$$
u^T=(a_1,a_2,\cdots,a_n)^T=\begin{pmatrix}
a_1 \\
a_2 \\
\vdots \\
a_n
\end{pmatrix}
$$

The complex conjugate transpose is defined by

$$
u^*=(a_1,a_2,\cdots,a_n)^*=\begin{pmatrix}
\overline{a_1} \\
\overline{a_2} \\
\vdots \\
\overline{a_n}
\end{pmatrix}
$$

> In physics, the complex conjugate is sometimes denoted by $z^*$ instead of $\overline{z}$.
> The complex conjugate transpose is sometimes denoted by $u^\dagger$ instead of $u^*$.

### Hermitian inner product and norms

On $\mathbb{C}^n$, the Hermitian inner product is defined by

$$
\langle u,v\rangle=\sum_{i=1}^n \overline{u_i}v_i
$$

The norm is defined by

$$
\|u\|=\sqrt{\langle u,u\rangle}
$$

#### Definition of Inner product

Let $\mathscr{H}$ be a complex vector space. An inner product on $\mathscr{H}$ is a function $\langle \cdot, \cdot \rangle: \mathscr{H}\times \mathscr{H}\to \mathbb{C}$ satisfying the following axioms:

1. For each $u\in \mathscr{H}$, $v\mapsto \langle u,v\rangle$ is a linear map.

$$
\langle u,av+bw\rangle=a\langle u,v\rangle+b\langle u,w\rangle
$$

For all $u,v,w\in \mathscr{H}$ and $a,b\in \mathbb{C}$.

2. For all $u,v\in \mathscr{H}$, $\langle u,v\rangle=\overline{\langle v,u\rangle}$.

$u\mapsto \langle u,v\rangle$ is a conjugate linear map.

3. $\langle u,u\rangle\geq 0$ and $\langle u,u\rangle=0$ if and only if $u=0$.

#### Definition of norm

Let $\mathscr{H}$ be a complex vector space. A norm on $\mathscr{H}$ is a function $\|\cdot\|: \mathscr{H}\to \mathbb{R}$ satisfying the following axioms:

1. For all $u\in \mathscr{H}$, $\|u\|\geq 0$ and $\|u\|=0$ if and only if $u=0$.

2. For all $u\in \mathscr{H}$ and $c\in \mathbb{C}$, $\|cu\|=|c|\|u\|$.

3. Triangle inequality: For all $u,v\in \mathscr{H}$, $\|u+v\|\leq \|u\|+\|v\|$.

#### Definition of inner product space

A complex vector space $\mathscr{H}$ with an inner product is called a **Hilbert space**.

#### Cauchy-Schwarz inequality

For all $u,v\in \mathscr{H}$,

$$
|\langle u,v\rangle|\leq \|u\|\|v\|
$$

#### Parallelogram law

For all $u,v\in \mathscr{H}$,

$$
\|u+v\|^2+\|u-v\|^2=2(\|u\|^2+\|v\|^2)
$$

#### Polarization identity

For all $u,v\in \mathscr{H}$,

$$
\langle u,v\rangle=\frac{1}{4}(\|u+v\|^2-\|u-v\|^2+i\|u+iv\|^2-i\|u-iv\|^2)
$$

#### Additional definitions

Let $u,v\in \mathscr{H}$.

$||v||$ is the length of $v$.

$v$ is a unit vector if $\|v\|=1$.

$u,v$ are orthogonal if $\langle u,v\rangle=0$.

#### Definition of orthonormal basis

A set of vectors $\{e_1,e_2,\cdots,e_n\}$ in a Hilbert space $\mathscr{H}$ is called an orthonormal basis if

1. $\langle e_i,e_j\rangle=\delta_{ij}$ for all $i,j\in \{1,2,\cdots,n\}$.

$$
\delta_{ij}=\begin{cases}
1 & \text{if } i=j \\
0 & \text{if } i\neq j
\end{cases}
$$

2. $n=\dim \mathscr{H}$.

### Subspaces and orthonormal bases

#### Definition of subspace

A subset $\mathscr{W}$ of a vector space $\mathscr{V}$ is a subspace if it is closed under addition and scalar multiplication.

#### Definition of orthogonal complement

Let $E$ be a subset of a Hilbert space $\mathscr{H}$. The orthogonal complement of $E$ is the set of all vectors in $\mathscr{H}$ that are orthogonal to every vector in $E$.

$$
E^\perp=\{v\in \mathscr{H}: \langle v,w\rangle=0 \text{ for all } w\in E\}
$$

#### Definition of orthogonal projection

Let $E$ be a $m$-dimensional subspace of a Hilbert space $\mathscr{H}$. An orthogonal projection of $E$ is a linear map $P_E: \mathscr{H}\to E$

$$
P_E(v)=\sum_{i=1}^m \langle v,e_i\rangle e_i
$$

#### Definition of orthonormal direct sum

A inner product space $\mathscr{H}$ is the direct sum of $E_1,E_2,\cdots,E_n$ if

$$
\mathscr{H}=E_1\oplus E_2\oplus \cdots \oplus E_n
$$

and $E_i\cap E_j=\{0\}$ for all $i\neq j$.

That is, $\forall v\in \mathscr{H}$, there exists a unique $v_i\in E_i$ such that $v=v_1+v_2+\cdots+v_n$.

#### Definition of meet and join of subspaces

Let $E$ and $F$ be two subspaces of a Hilbert space $\mathscr{H}$. The meet of $E$ and $F$ is the subspace $\mathscr{H}$ such that

$$
E\land F=E\cap F
$$

The join of $E$ and $F$ is the subspace $\mathscr{H}$ such that

$$
E\lor F=\{u+v: u\in E, v\in F\}
$$

### Null space and range

#### Definition of null space

Let $A$ be a linear map from a vector space $\mathscr{V}$ to a vector space $\mathscr{W}$. The null space of $A$ is the set of all vectors in $\mathscr{V}$ that are mapped to the zero vector in $\mathscr{W}$.

$$
\text{Null}(A)=\{v\in \mathscr{V}: Av=0\}
$$

#### Definition of range

Let $A$ be a linear map from a vector space $\mathscr{V}$ to a vector space $\mathscr{W}$. The range of $A$ is the set of all vectors in $\mathscr{W}$ that are mapped from $\mathscr{V}$.

$$
\text{Range}(A)=\{w\in \mathscr{W}: \exists v\in \mathscr{V}, Av=w\}
$$

### Dual spaces and adjoints of linear maps\

#### Definition of linear map

A linear map $T: \mathscr{V}\to \mathscr{W}$ is a function that satisfies the following axioms:

1. Additivity: For all $u,v\in \mathscr{V}$ and $a,b\in \mathbb{F}$,

$$
T(au+bv)=aT(u)+bT(v)
$$

2. Homogeneity: For all $u\in \mathscr{V}$ and $a\in \mathbb{F}$,

$$
T(au)=aT(u)
$$

#### Definition of linear functionals

A linear functional $f: \mathscr{V}\to \mathbb{F}$ is a linear map from $\mathscr{V}$ to $\mathbb{F}$.

Here, $\mathbb{F}$ is the field of complex numbers.

#### Definition of dual space

Let $\mathscr{V}$ be a vector space over a field $\mathbb{F}$. The dual space of $\mathscr{V}$ is the set of all linear functionals on $\mathscr{V}$.

$$
\mathscr{V}^*=\{f:\mathscr{V}\to \mathbb{F}: f\text{ is linear}\}
$$

If $\mathscr{H}$ is a finite-dimensional Hilbert space, then $\mathscr{H}^*$ is isomorphic to $\mathscr{H}$.

Note $v\in \mathscr{H}\mapsto \langle v,\cdot\rangle\in \mathscr{H}^*$ is a conjugate linear isomorphism.

#### Definition of adjoint of a linear map

Let $T: \mathscr{V}\to \mathscr{W}$ be a linear map. The adjoint of $T$ is the linear map $T^*: \mathscr{W}\to \mathscr{V}$ such that

$$
\langle Tv,w\rangle=\langle v,T^*w\rangle
$$

for all $v\in \mathscr{V}$ and $w\in \mathscr{W}$.

#### Definition of self-adjoint operators

A linear operator $T: \mathscr{V}\to \mathscr{V}$ is self-adjoint if $T^*=T$.

#### Definition of unitary operators

A linear map $T: \mathscr{V}\to \mathscr{V}$ is unitary if $T^*T=TT^*=I$.

### Dirac's bra-ket notation

#### Definition of bra and ket

Let $\mathscr{H}$ be a Hilbert space. The bra-ket notation is a notation for vectors in $\mathscr{H}$.

$$
\langle v|w\rangle
$$

is the inner product of $v$ and $w$.

$$
|v\rangle
$$

is the vector (or linear map) $v$.

$$
|u\rangle\langle v|
$$

is a linear map from $\mathscr{H}$ to $\mathscr{H}$.

