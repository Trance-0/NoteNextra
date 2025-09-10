# Math 401, Fall 2025: Thesis notes, R1, Non-commutative probability theory

> Progress: 0/NaN=NaN% (denominator and enumerator may change)

## Notations and definitions

This part will cover the necessary notations and definitions for the remaining parts of the recollection.

### Notations of Hilbert space

A Hilbert space is a vector space equipped with an inner product.

### Lipschitz function

#### $\eta$-Lipschitz function

Let $(X,\operatorname{dist}_X)$ and $(Y,\operatorname{dist}_Y)$ be two metric spaces. A function $f:X\to Y$ is said to be $\eta$-Lipschitz if there exists a constant $L\in \mathbb{R}$ such that

$$
\operatorname{dist}_Y(f(x),f(y))\leq L\operatorname{dist}_X(x,y)
$$

for all $x,y\in X$. And $\eta=\|f\|_{\operatorname{Lip}}=\inf_{L\in \mathbb{R}}L$.

That basically means that the function $f$ should not change the distance between any two pairs of points in $X$ by more than a factor of $L$.

### Operations on Hilbert space and Measurements

Basic definitions

### $SO(n)$

The special orthogonal group $SO(n)$ is the set of all **distance preserving** linear transformations on $\mathbb{R}^n$.

It is the group of all $n\times n$ orthogonal matrices ($A^T A=I_n$) on $\mathbb{R}^n$ with determinant $1$.

$$
SO(n)=\{A\in \mathbb{R}^{n\times n}: A^T A=I_n, \det(A)=1\}
$$

<details>
<summary>Extensions</summary>

In [The random Matrix Theory of the Classical Compact groups](https://case.edu/artsci/math/esmeckes/Haar_book.pdf), the author gives a more general definition of the Haar measure on the compact group $SO(n)$,

$O(n)$ (the group of all $n\times n$ **orthogonal matrices** over $\mathbb{R}$),

$$
O(n)=\{A\in \mathbb{R}^{n\times n}: AA^T=A^T A=I_n\}
$$

$U(n)$ (the group of all $n\times n$ **unitary matrices** over $\mathbb{C}$), 

$$
U(n)=\{A\in \mathbb{C}^{n\times n}: A^*A=AA^*=I_n\}
$$

Recall that $A^*$ is the complex conjugate transpose of $A$.

$SU(n)$ (the group of all $n\times n$ unitary matrices over $\mathbb{C}$ with determinant $1$), 

$$
SU(n)=\{A\in \mathbb{C}^{n\times n}: A^*A=AA^*=I_n, \det(A)=1\}
$$

$Sp(2n)$ (the group of all $2n\times 2n$ symplectic matrices over $\mathbb{C}$),

$$
Sp(2n)=\{U\in U(2n): U^T J U=UJU^T=J\}
$$

where $J=\begin{pmatrix}
0 & I_n \\
-I_n & 0
\end{pmatrix}$ is the standard symplectic matrix.

</details>

### Haar measure

Let $(SO(n), \| \cdot \|, \mu)$ be a metric measure space where $\| \cdot \|$ is the [Hilbert-Schmidt norm](https://notenextra.trance-0.com/Math401/Math401_T2#definition-of-hilbert-schmidt-norm) and $\mu$ is the measure function.

The Haar measure on $SO(n)$ is the unique probability measure that is invariant under the action of $SO(n)$ on itself.

That is also called _translation-invariant_.

That is, fixing $B\in SO(n)$, $\forall A\in SO(n)$, $\mu(A\cdot B)=\mu(B\cdot A)=\mu(B)$.

The Haar measure is the unique probability measure that is invariant under the action of $SO(n)$ on itself.

_The existence and uniqueness of the Haar measure is a theorem in compact lie group theory. For this research topic, we will not prove it._

### Random sampling on the $\mathbb{C}P^n$

Note that the space of pure state in bipartite system

## Non-commutative probability theory

### Partial trace and purification

#### Partial trace

Recall that the bipartite state of a quantum system is a linear operator on $\mathscr{H}=\mathscr{A}\otimes \mathscr{B}$, where $\mathscr{A}$ and $\mathscr{B}$ are finite-dimensional Hilbert spaces.

##### Definition of partial trace for arbitrary linear operators

Let $T$ be a linear operator on $\mathscr{H}=\mathscr{A}\otimes \mathscr{B}$, where $\mathscr{A}$ and $\mathscr{B}$ are finite-dimensional Hilbert spaces.

An operator $T$ on $\mathscr{H}=\mathscr{A}\otimes \mathscr{B}$ can be written as (by the definition of [tensor product of linear operators](https://notenextra.trance-0.com/Math401/Math401_T2#tensor-products-of-linear-operators))

$$
T=\sum_{i=1}^n a_i A_i\otimes B_i
$$

where $A_i$ is a linear operator on $\mathscr{A}$ and $B_i$ is a linear operator on $\mathscr{B}$.

The $\mathscr{B}$-partial trace of $T$ ($\operatorname{Tr}_{\mathscr{B}}(T):\mathcal{L}(\mathscr{A}\otimes \mathscr{B})\to \mathcal{L}(\mathscr{A})$) is the linear operator on $\mathscr{A}$ defined by

$$
\operatorname{Tr}_{\mathscr{B}}(T)=\sum_{i=1}^n a_i \operatorname{Tr}(B_i) A_i
$$

#### Definition of partial trace for density operators

Let $\rho$ be a density operator in $\mathscr{H}_1\otimes\mathscr{H}_2$, the partial trace of $\rho$ over $\mathscr{H}_2$ is the density operator in $\mathscr{H}_1$ (reduced density operator for the subsystem $\mathscr{H}_1$) given by:

$$
\rho_1\coloneqq\operatorname{Tr}_2(\rho)
$$

<details>
<summary>Examples</summary>

Let $\rho=\frac{1}{\sqrt{2}}(|01\rangle+|10\rangle)$ be a density operator on $\mathscr{H}=\mathbb{C}^2\otimes \mathbb{C}^2$. 

Expand the expression of $\rho$ in the basis of $\mathbb{C}^2\otimes\mathbb{C}^2$ using linear combination of basis vectors:

$$
\rho=\frac{1}{2}(|01\rangle\langle 01|+|01\rangle\langle 10|+|10\rangle\langle 01|+|10\rangle\langle 10|)
$$

Note $\operatorname{Tr}_2(|ab\rangle\langle cd|)=|a\rangle\langle c|\cdot \langle b|d\rangle$.

Then the reduced density operator of the subsystem $\mathbb{C}^2$ in first qubit is, note the $\langle 0|0\rangle=\langle 1|1\rangle=1$ and $\langle 0|1\rangle=\langle 1|0\rangle=0$:

$$
\begin{aligned}
\rho_1&=\operatorname{Tr}_2(\rho)\\
&=\frac{1}{2}(\langle 1|1\rangle |0\rangle\langle 0|+\langle 0|1\rangle |0\rangle\langle 1|+\langle 1|0\rangle |1\rangle\langle 0|+\langle 0|0\rangle |1\rangle\langle 1|)\\
&=\frac{1}{2}(|0\rangle\langle 0|+|1\rangle\langle 1|)\\
&=\frac{1}{2}I
\end{aligned}
$$

is a mixed state.

</details>

### Purification

Let $\rho$ be any [state](https://notenextra.trance-0.com/Math401/Math401_T6#pure-states) (may not be pure) on the finite dimensional Hilbert space $\mathscr{H}$. then there exists a unit vector $w\in \mathscr{H}\otimes \mathscr{H}$ such that $\rho=\operatorname{Tr}_2(|w\rangle\langle w|)$ is a pure state.

<details>
<summary>Proof</summary>

Let $(u_1,u_2,\cdots,u_n)$ be an orthonormal basis of $\mathscr{H}$ consisting of eigenvectors of $\rho$ for the eigenvalues $p_1,p_2,\cdots,p_n$. As $\rho$ is a states, $p_i\geq 0$ for all $i$ and $\sum_{i=1}^n p_i=1$.

We can write $\rho$ as

$$
\rho=\sum_{i=1}^n p_i |u_i\rangle\langle u_i|
$$

Let $w=\sum_{i=1}^n \sqrt{p_i} u_i\otimes u_i$, note that $w$ is a unit vector (pure state). Then

$$
\begin{aligned}
\operatorname{Tr}_2(|w\rangle\langle w|)&=\operatorname{Tr}_2(\sum_{i=1}^n \sum_{j=1}^n \sqrt{p_ip_j} |u_i\otimes u_i\rangle \langle u_j\otimes u_j|)\\
&=\sum_{i=1}^n \sum_{j=1}^n \sqrt{p_ip_j} \operatorname{Tr}_2(|u_i\otimes u_i\rangle \langle u_j\otimes u_j|)\\
&=\sum_{i=1}^n \sum_{j=1}^n \sqrt{p_ip_j} \langle u_i|u_j\rangle |u_i\rangle\langle u_i|\\
&=\sum_{i=1}^n \sum_{j=1}^n \sqrt{p_ip_j} \delta_{ij} |u_i\rangle\langle u_i|\\
&=\sum_{i=1}^n p_i |u_i\rangle\langle u_i|\\
&=\rho
\end{aligned}
$$

is a pure state.

</details>

## Drawing the connection between the space $S^{2n+1}$, $CP^n$, and $\mathbb{R}$

A pure quantum state of size $N$ can be identified with a **Hopf circle** on the sphere $S^{2N-1}$.

A random pure state $|\psi\rangle$ of a bipartite $N\times K$ system such that $K\geq N\geq 3$.

The partial trace of such system produces a mixed state $\rho(\psi)=\operatorname{Tr}_K(|\psi\rangle\langle \psi|)$, with induced measure $\mu_K$. When $K=N$, the induced measure $\mu_K$ is the Hilbert-Schmidt measure.

Consider the function $f:S^{2N-1}\to \mathbb{R}$ defined by $f(x)=S(\rho(\psi))$, where $S(\cdot)$ is the von Neumann entropy. The Lipschitz constant of $f$ is $\sim \ln N$.