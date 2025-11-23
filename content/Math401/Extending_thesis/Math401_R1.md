# Math 401, Fall 2025: Thesis notes, R1, Non-commutative probability theory

> Progress: 0/NaN=NaN% (denominator and enumerator may change)

## Notations and definitions

This part will cover the necessary notations and definitions for the remaining parts of the recollection.

### Notations of Linear algebra

#### Definition of vector space

[link to vector space](../../Math429/Math429_L1#definition-1.20)

A vector space over $\mathbb{f}$ is a set $V$ along with two operators $v+w\in V$ for $v,w\in V$, and $\lambda \cdot  v$ for $\lambda\in \mathbb{F}$ and $v\in V$ satisfying the following properties:

* Commutativity: $\forall v, w\in V,v+w=w+v$
* Associativity: $\forall u,v,w\in V,(u+v)+w=u+(v+w)$
* Existence of additive identity: $\exists 0\in V$ such that $\forall v\in V, 0+v=v$
* Existence of additive inverse: $\forall v\in V, \exists w \in V$ such that $v+w=0$
* Existence of multiplicative identity: $\exists 1 \in \mathbb{F}$ such that $\forall v\in V,1\cdot v=v$
* Distributive properties: $\forall v, w\in V$ and $\forall a,b\in \mathbb{F}$, $a\cdot(v+w)=a\cdot v+ a\cdot w$ and $(a+b)\cdot v=a\cdot v+b\cdot v$

#### Definition of inner product

[link to inner product](../../Math429/Math429_L25#definition-6.2)

An inner product is a bilinear function $\langle,\rangle:V\times V\to \mathbb{F}$ satisfying the following properties:

* Positivity: $\langle v,v\rangle\geq 0$
* Definiteness: $\langle v,v\rangle=0\iff v=0$
* Additivity: $\langle u+v,w\rangle=\langle u,w\rangle+\langle v,w\rangle$
* Homogeneity: $\langle \lambda u, v\rangle=\lambda\langle u,v\rangle$
* Conjugate symmetry: $\langle u,v\rangle=\overline{\langle v,u\rangle}$

<details>
<summary>Examples of inner product</summary>

Let $V=\mathbb{R}^n$.

The dot product is defined by

$$
\langle u,v\rangle=u_1v_1+u_2v_2+\cdots+u_nv_n
$$

is an inner product.

---

Let $V=L^2(\mathbb{R}, \lambda)$, where $\lambda$ is the Lebesgue measure. $f,g:\mathbb{R}\to \mathbb{C}$ are complex-valued square integrable functions.

The Hermitian inner product is defined by
$$
\langle f,g\rangle=\int_\mathbb{R} \overline{f(x)}g(x) d\lambda(x)
$$

is an inner product.

---

Let $A,B$ be two linear transformation on $\mathbb{R}^n$.

The Hilbert-Schmidt inner product is defined by

$$
\langle A,B\rangle=\operatorname{Tr}(A^*B)=\sum_{i=1}^n \sum_{j=1}^n \overline{a_{ij}}b_{ij}
$$

is an inner product.

</details>

#### Definition of inner product space

A inner product space is a vector space equipped with an inner product.

#### Definition of completeness

[link to completeness](../../Math4111/Math4111_L17#definition-312)

Note that every inner product space is a metric space.

Let $X$ be a metric space. We say $X$ is **complete** if every Cauchy sequence (that is, a sequence such that $\forall \epsilon>0, \exists N$ such that $\forall m,n\geq N, d(p_m,p_n)<\epsilon$) in $X$ converges.

#### Definition of Hilbert space

A Hilbert space is a complete inner product space.

#### Motivation of Tensor product

Recall from the traditional notation of product space of two vector spaces $V$ and $W$, that is, $V\times W$, is the set of all ordered pairs $(v,w)$ where $v\in V$ and $w\in W$.

The space has dimension $\dim V+\dim W$.

We want to define a vector space with notation of multiplication of two vectors from different vector spaces.

That is

$$
(v_1+v_2)\otimes w=(v_1\otimes w)+(v_2\otimes w)\text{ and } v\otimes (w_1+w_2)=(v\otimes w_1)+(v\otimes w_2)
$$

and enables scalar multiplication by

$$
\lambda (v\otimes w)=(\lambda v)\otimes w=v\otimes (\lambda w)
$$

And we wish to build a way associates the basis of $V$ and $W$ to the basis of $V\otimes W$. That makes the tensor product a vector space with dimension $\dim V\times \dim W$.

#### Definition of linear functional

> [!TIP]
>
> Note the difference between a linear functional and a linear map.
>
> A generalized linear map is a function $f:V\to W$ satisfying the condition
>
> 1. $f(u+v)=f(u)+f(v)$
> 2. $f(\lambda v)=\lambda f(v)$

A linear functional is a linear map from $V$ to $\mathbb{F}$.

#### Definition of bilinear functional

A bilinear functional is a bilinear function $\beta:V\times W\to \mathbb{F}$ satisfying the condition that $v\to \beta(v,w)$ is a linear functional for all $w\in W$ and $w\to \beta(v,w)$ is a linear functional for all $v\in V$.

The vector space of all bilinear functionals is denoted by $\mathcal{B}(V,W)$.

#### Definition of tensor product

Let $V,W$ be two vector spaces.

Let $V'$ and $W'$ be the dual spaces of $V$ and $W$, respectively, that is $V'=\{\psi:V\to \mathbb{F}\}$ and $W'=\{\phi:W\to \mathbb{F}\}$, $\psi, \phi$ are linear functionals.

The tensor product of vectors $v\in V$ and $w\in W$ is the bilinear functional defined by $\forall (\psi,\phi)\in V'\times W'$ given by the notation

$$
(v\otimes w)(\psi,\phi)\coloneqq\psi(v)\phi(w)
$$

The tensor product of two vector spaces $V$ and $W$ is the vector space $\mathcal{B}(V',W')$

Notice that the basis of such vector space is the linear combination of the basis of $V'$ and $W'$, that is, if $\{e_i\}$ is the basis of $V'$ and $\{f_j\}$ is the basis of $W'$, then $\{e_i\otimes f_j\}$ is the basis of $\mathcal{B}(V',W')$.

That is, every element of $\mathcal{B}(V',W')$ can be written as a linear combination of the basis.

Since $\{e_i\}$ and $\{f_j\}$ are bases of $V'$ and $W'$, respectively, then we can always find a set of linear functionals $\{\phi_i\}$ and $\{\psi_j\}$ such that $\phi_i(e_j)=\delta_{ij}$ and $\psi_j(f_i)=\delta_{ij}$.

Here $\delta_{ij}=\begin{cases}
1 & \text{if } i=j \\
0 & \text{otherwise}
\end{cases}$ is the Kronecker delta.

$$
V\otimes W=\left\{\sum_{i=1}^n \sum_{j=1}^m a_{ij} \phi_i(v)\psi_j(w): \phi_i\in V', \psi_j\in W'\right\}
$$

Note that $\sum_{i=1}^n \sum_{j=1}^m a_{ij} \phi_i(v)\psi_j(w)$ is a bilinear functional that maps $V'\times W'$ to $\mathbb{F}$.

This enables basis free construction of vector spaces with proper multiplication and scalar multiplication.

This vector space is equipped with the unique inner product $\langle v\otimes w, u\otimes x\rangle_{V\otimes W}$ defined by

$$
\langle v\otimes w, u\otimes x\rangle=\langle v,u\rangle_V\langle w,x\rangle_W
$$

In practice, we ignore the subscript of the vector space and just write $\langle v\otimes w, u\otimes x\rangle=\langle v,u\rangle\langle w,x\rangle$.

> [!NOTE]
>
> All those definitions and proofs can be found in Linear Algebra Done Right by Sheldon Axler.

### Notations in measure theory

#### Definition of Sigma algebra

[link to measure theory](../../Math4121/Math4121_L25#definition-of-sigma-algebra)

A collection of sets $\mathcal{A}$ is called a sigma-algebra if it satisfies the following properties:

1. $\emptyset \in \mathcal{A}$
2. If $\{A_j\}_{j=1}^\infty \subset \mathcal{A}$, then $\bigcup_{j=1}^\infty A_j \in \mathcal{A}$
3. If $A \in \mathcal{A}$, then $A^c \in \mathcal{A}$

#### Definition of Measure

A measure is a function $v:\mathcal{A}\to \mathbb{R}$ satisfying the following properties:

1. $v(\emptyset)=0$
2. If $\{A_j\}_{j=1}^\infty \subset \mathcal{A}$ are pairwise disjoint, then $v(\bigcup_{j=1}^\infty A_j)=\sum_{j=1}^\infty v(A_j)$ (countable additivity)
3. If $A\in \mathcal{A}$, then $v(A)\geq 0$ (non-negativity)

<details>
<summary>Examples of measure</summary>

The [Borel measure on $\mathbb{R}$](../../Math4121/Math4121_L25#definition-of-borel-measure) is the collection of all closed, open, and half-open intervals with $m(U)=\ell(U)$ for any open set $U$.

The [Lebesgue measure on $\mathbb{R}$](../../Math4121/Math4121_L27#definition-of-lebesgue-measure) is the collection of all Lebesgue measurable sets with $m_i=\sup_{K\text{ closed},K\subseteq S}m(K)$ and $m_e=\inf_{U\text{ open},S\subseteq U}m(U)$. and $m(S)=m_e(S)=m_i(S)$ for any Lebesgue measurable set $S$.

</details>

#### Definition of Probability measure

Let $\mathscr{F}$ be a sigma-algebra on a set $\Omega$. A probability measure is a function $P:\mathscr{F}\to [0,1]$ satisfying the following properties:

1. $P(\Omega)=1$
2. $P$ is a measure on $\mathscr{F}$

#### Definition of Measurable space

A measurable space is a pair $(X, \mathscr{B}, v)$, where $X$ is a set and $\mathscr{B}$ is a sigma-algebra on $X$.

In some literatures, $\mathscr{B}$ is ignored and we only denote it as $(X, v)$.

<details>
<summary>Examples of measurable space</summary>

Let $\Omega$ be arbitrary set.

Let $\mathscr{B}(\mathbb{C})$ be the Borel sigma-algebra on $\mathbb{C}$ generated from rectangles over complex plane with real number axes and $\lambda$ be the Lebesgue measure associated with it.

Let $\mathscr{F}$ be the set of square integrable, that is,

$$
\int_\Omega |f(x)|^2 d\lambda(x)<\infty
$$

complex-valued functions on $\Omega$, that is, $f:\Omega\to \mathbb{C}$.

Then the measurable space $(\Omega, \mathscr{B}(\mathbb{C}), \lambda)$ is a measurable space. We usually denote this as $L^2(\Omega, \mathscr{B}(\mathbb{C}), \lambda)$.

If $\Omega=\mathbb{R}$, then we denote such measurable space as $L^2(\mathbb{R}, \lambda)$.

</details>

#### Probability space

A probability space is a triple $(\Omega, \mathscr{F}, P)$, where $\Omega$ is a set, $\mathscr{F}$ is a sigma-algebra on $\Omega$, and $P$ is a probability measure on $\mathscr{F}$.

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

#### $SO(n)$

The special orthogonal group $SO(n)$ is the set of all **distance preserving** linear transformations on $\mathbb{R}^n$.

It is the group of all $n\times n$ orthogonal matrices ($A^\top A=I_n$) on $\mathbb{R}^n$ with determinant $1$.

$$
SO(n)=\{A\in \mathbb{R}^{n\times n}: A^\top A=I_n, \det(A)=1\}
$$

<details>
<summary>Extensions</summary>

In [The random Matrix Theory of the Classical Compact groups](https://case.edu/artsci/math/esmeckes/Haar_book.pdf), the author gives a more general definition of the Haar measure on the compact group $SO(n)$,

$O(n)$ (the group of all $n\times n$ **orthogonal matrices** over $\mathbb{R}$),

$$
O(n)=\{A\in \mathbb{R}^{n\times n}: AA^\top=A^\top A=I_n\}
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
Sp(2n)=\{U\in U(2n): U^\top J U=UJU^\top=J\}
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

### Pure state and mixed state

A pure state is a state that is represented by a unit vector in $\mathscr{H}^{\otimes N}$.

> As analogy, a pure state is the basis element of the vector space, a mixed state is a linear combination of basis elements.

A mixed state is a state that is represented by a density operator (linear combination of pure states) in $\mathscr{H}^{\otimes N}$.

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

## Drawing the connection between the space $S^{2n+1}$, $\mathbb{C}P^n$, and $\mathbb{R}$

A pure quantum state of size $N$ can be identified with a **Hopf circle** on the sphere $S^{2N-1}$.

A random pure state $|\psi\rangle$ of a bipartite $N\times K$ system such that $K\geq N\geq 3$.

The partial trace of such system produces a mixed state $\rho(\psi)=\operatorname{Tr}_K(|\psi\rangle\langle \psi|)$, with induced measure $\mu_K$. When $K=N$, the induced measure $\mu_K$ is the Hilbert-Schmidt measure.

Consider the function $f:S^{2N-1}\to \mathbb{R}$ defined by $f(x)=S(\rho(\psi))$, where $S(\cdot)$ is the von Neumann entropy. The Lipschitz constant of $f$ is $\sim \ln N$.