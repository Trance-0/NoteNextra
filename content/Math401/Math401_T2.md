# Math401 Topic 2: Finite-dimensional Hilbert spaces

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

$\|v\|$ is the length of $v$.

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

### Dual spaces and adjoints of linear maps

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

is the inner product of $v$ and $w$. That is, $\langle v|w\rangle: \mathscr{H}\to \mathbb{C}$ is a linear functional satisfying the property of inner product.

$$
|v\rangle
$$

is the vector (or linear map) $v$.

$$
|u\rangle\langle v|
$$

is a linear map from $\mathscr{H}$ to $\mathscr{H}$.

### The spectral theorem for self-adjoint operators

### Spectral theorem for self-adjoint operators

#### Definition of spectral theorem

Let $\mathscr{H}$ be a Hilbert space. A self-adjoint operator $T: \mathscr{H}\to \mathscr{H}$ is a linear operator that is equal to its adjoint.

Then all the eigenvalues of $T$ are real and there exists an orthonormal basis of $\mathscr{H}$ consisting of eigenvectors of $T$.

#### Definition of spectrum

The spectrum of a linear operator on finite-dimensional Hilbert space $T: \mathscr{H}\to \mathscr{H}$ is the set of all distinct eigenvalues of $T$.

$$
\operatorname{sp}(T)=\{\lambda: \lambda\text{ is an eigenvalue of } T\}\subset \mathbb{C}
$$

#### Definition of Eigenspace

If $\lambda$ is an eigenvalue of $T$, the eigenspace of $T$ corresponding to $\lambda$ is the set of all eigenvectors of $T$ corresponding to $\lambda$.

$$
E_\lambda(T)=\{v\in \mathscr{H}: Tv=\lambda v\}
$$

We denote $P_\lambda(T):\mathscr{H}\to E_\lambda(T)$ the orthogonal projection onto $E_\lambda(T)$.

#### Definition of Operator norm

The operator norm of a linear operator $T: \mathscr{H}\to \mathscr{H}$ is the largest eigenvalue of $T$.

$$
\|T\|=\max_{\|v\|=1} \|Tv\|
$$

We say $T$ is **bounded** if $\|T\|<\infty$.

We denote $B(\mathscr{H})$ the set of all bounded linear operators on $\mathscr{H}$.

### Partial trace

#### Definition of trace

Let $T$ be a linear operator on $\mathscr{H}$, $(e_1,e_2,\cdots,e_n)$ be a basis of $\mathscr{H}$ and $(\epsilon_1,\epsilon_2,\cdots,\epsilon_n)$ be a basis of dual space $\mathscr{H}^*$. Then the trace of $T$ is defined by

$$
\operatorname{Tr}(T)=\sum_{i=1}^n \epsilon_i(T(e_i))=\sum_{i=1}^n \langle e_i,T(e_i)\rangle
$$

This is equivalent to the sum of the diagonal elements of $T$.

> Note, I changed the order of the definitions for the trace to pack similar concepts together. Check the rest of the section defining the partial trace by viewing the [tensor product section](https://notenextra.trance-0.com/Math401/Math401_T2#tensor-products-of-finite-dimensional-hilbert-spaces) first, and return to this section after reading the tensor product of linear operators.

#### Definition of partial trace

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

Or we can define the map $L_v: \mathscr{A}\to \mathscr{A}\otimes \mathscr{B}$ by

$$
L_v(u)=u\otimes v
$$

Note that $\langle u,L_v^*(u')\otimes v'\rangle=\langle u,u'\rangle \langle v,v'\rangle=\langle u\otimes v,u'\otimes v'\rangle=\langle L_v(u),u'\otimes v'\rangle$.

Therefore, $L_v^*\sum_{j} u_j\otimes v_j=\sum_{j} \langle v,v_j\rangle u_j$.

Then the partial trace of $T$ can also be defined by

**Let $\{v_j\}$ be a set of orthonormal basis of $\mathscr{B}$.**

$$
\operatorname{Tr}_{\mathscr{B}}(T)=\sum_{j} L^*_{v_j}(T)L_{v_j}
$$

#### Definition of partial trace with respect to a state

Let $T$ be a linear operator on $\mathscr{H}=\mathscr{A}\otimes \mathscr{B}$, where $\mathscr{A}$ and $\mathscr{B}$ are finite-dimensional Hilbert spaces.

Let $\rho$ be a state on $\mathscr{B}$ consisting of orthonormal basis $\{v_j\}$ and eigenvalue $\{\lambda_j\}$.

The partial trace of $T$ with respect to $\rho$ is the linear operator on $\mathscr{A}$ defined by

$$
\operatorname{Tr}_{\mathscr{A}}(T)=\sum_{j} \lambda_j L^*_{v_j}(T)L_{v_j}
$$

### Space of Bounded Linear Operators

> Recall the trace of a matrix is the sum of its diagonal elements.

#### Hilbert-Schmidt inner product

Let $T,S\in B(\mathscr{H})$. The Hilbert-Schmidt inner product of $T$ and $S$ is defined by

$$
\langle T,S\rangle=\operatorname{Tr}(T^*S)
$$

> Note here, $T^*$ is the complex conjugate transpose of $T$.

If we introduce the basis $\{e_i\}$ in $\mathscr{H}$, then we can write the the space of bounded linear operators as $n\times n$ complex-valued matrices $M_n(\mathbb{C})$.

For $T=(a_{ij})$, $S=(b_{ij})$, we have

$$
\operatorname{Tr}(A^*B)=\sum_{i=1}^n \sum_{j=1}^n \overline{a_{ij}}b_{ij}
$$

The inner product is the standard Hermitian inner product in $\mathbb{C}^{n\times n}$.

#### Definition of Hilbert-Schmidt norm (also called Frobenius norm)

The Hilbert-Schmidt norm of a linear operator $T: \mathscr{H}\to \mathscr{H}$ is defined by

$$
\|T\|=\sqrt{\sum_{i=1}^n \sum_{j=1}^n |a_{ij}|^2}
$$

**[The trace of operator does not depend on the basis.](https://notenextra.trance-0.com/Math429/Math429_L38#theorem-850)**

### Tensor products of finite-dimensional Hilbert spaces

Let $X=X_1\times X_2\times \cdots \times X_n$ be a Cartesian product of $n$ sets.

Let $x=(x_1,x_2,\cdots,x_n)$ be a vector in $X$.
$x_j\in X_j$ for $j=1,2,\cdots,n$.

Let $a\in X_j$ for $j=1,2,\cdots,n$.

Let's denote the space of all functions from $X$ to $\mathbb{C}$ by $\mathscr{H}$ and the space of all functions from $X_j$ to $\mathbb{C}$ by $\mathscr{H}_j$.

$$
\epsilon_{a}^{(j)}(x_j)=\begin{cases}
1 & \text{if } x_j=a \\
0 & \text{if } x_j\neq a
\end{cases}
$$

Then we can define a basis of $\mathscr{H}_j$ by $\{\epsilon_{a}^{(j)}(x_j)\}_{a\in X_j}$.

_Any function $f:X_j\to \mathbb{C}$ can be written as a linear combination of the basis vectors._

$$
f(x_j)=\sum_{a\in X_j} f(a)\epsilon_{a}^{(j)}(x_j)
$$

<details>
<summary>Proof</summary>

Note that a function is a map for all elements in the domain.

For each $a\in X_j$, $\epsilon_{a}^{(j)}(x_j)=1$ if $x_j=a$ and $0$ otherwise. So 

$$
f(x_j)=\sum_{a\in X_j} f(a)\epsilon_{a}^{(j)}(x_j)=f(x_j)
$$

QED.

</details>

Now, let $a=(a_1,a_2,\cdots,a_n)$ be a vector in $X$, and $x=(x_1,x_2,\cdots,x_n)$ be a vector in $X$. Note that $a_j,x_j\in X_j$ for $j=1,2,\cdots,n$.

Define

$$
\epsilon_a(x)=\prod_{j=1}^n \epsilon_{a_j}^{(j)}(x_j)=\begin{cases}
1 & \text{if } a_j=x_j \text{ for all } j=1,2,\cdots,n \\
0 & \text{otherwise}
\end{cases}
$$

Then we can define a basis of $\mathscr{H}$ by $\{\epsilon_a\}_{a\in X}$.

_Any function $f:X\to \mathbb{C}$ can be written as a linear combination of the basis vectors._

$$
f(x)=\sum_{a\in X} f(a)\epsilon_a(x)
$$

<details>
<summary>Proof</summary>

This basically follows the same rascal as the previous proof. This time, the epsilon function only returns $1$ when $x_j=a_j$ for all $j=1,2,\cdots,n$.

$$
f(x)=\sum_{a\in X} f(a)\epsilon_a(x)=f(x)
$$

QED.

</details>

#### Definition of tensor product of basis elements

**The tensor product of basis elements** is defined by

$$
\epsilon_a\coloneqq\epsilon_{a_1}^{(1)}\otimes \epsilon_{a_2}^{(2)}\otimes \cdots \otimes \epsilon_{a_n}^{(n)}
$$

This is a basis of $\mathscr{H}$, here $\mathscr{H}$ is the set of all functions from $X=X_1\times X_2\times \cdots \times X_n$ to $\mathbb{C}$.

#### Definition of tensor product of two finite-dimensional Hilbert spaces

**The tensor product of two finite-dimensional Hilbert spaces** (in $\mathscr{H}$) is defined by

Let $\mathscr{H}_1$ and $\mathscr{H}_2$ be two finite dimensional Hilbert spaces. Let $u_1\in \mathscr{H}_1$ and $v_1\in \mathscr{H}_2$.

$$
u_1\otimes v_1
$$

is a bi-anti-linear map from $\mathscr{H}_1\times \mathscr{H}_2$ (the Cartesian product of $\mathscr{H}_1$ and $\mathscr{H}_2$, a tuple of two elements where first element is in $\mathscr{H}_1$ and second element is in $\mathscr{H}_2$) to $\mathbb{F}$ (in this case, $\mathbb{C}$). And $\forall u\in \mathscr{H}_1, v\in \mathscr{H}_2$,

$$
(u_1\otimes v_1)(u, v)=\langle u,u_1\rangle \langle v,v_1\rangle
$$

We call such forms **decomposable**. The tensor product of two finite-dimensional Hilbert spaces, denoted by $\mathscr{H}_1\otimes \mathscr{H}_2$, is the set of all linear combinations of decomposable forms. Represented by the following:

$$
\left(\sum_{i=1}^n a_i u_i\otimes v_i\right)(u, v) \coloneqq \sum_{i=1}^n a_j(u_j\otimes v_j)(u,v)=\sum_{i=1}^n a_i \langle v,u_i\rangle \langle v_i,u\rangle
$$

Note that $a_i\in \mathbb{C}$ for complex-vector spaces.

This is a linear space of dimension $\dim \mathscr{H}_1\times \dim \mathscr{H}_2$.

We define the inner product of two elements of $\mathscr{H}_1\otimes \mathscr{H}_2$ ($u_1\otimes v_1:(\mathscr{H}_1\otimes \mathscr{H}_2)\to \mathbb{C}$, $u_2\otimes v_2:(\mathscr{H}_1\otimes \mathscr{H}_2)\to \mathbb{C}$ $\in \mathscr{H}_1\otimes \mathscr{H}_2$) by

$$
\langle u_1\otimes v_1, u_2\otimes v_2\rangle\coloneqq\langle u_1,u_2\rangle \langle v_1,v_2\rangle=(u_1\otimes v_1)(u_2,v_2)
$$

### Tensor products of linear operators

Let $T_1$ be a linear operator on $\mathscr{H}_1$ and $T_2$ be a linear operator on $\mathscr{H}_2$, where $\mathscr{H}_1$ and $\mathscr{H}_2$ are finite-dimensional Hilbert spaces. The tensor product of $T_1$ and $T_2$ (denoted by $T_1\otimes T_2$) on $\mathscr{H}_1\otimes \mathscr{H}_2$, such that **on decomposable elements** is defined by

$$
(T_1\otimes T_2)(v_1\otimes v_2)=T_1(v_1)\otimes T_2(v_2)=\langle v_1,T_1(v_1)\rangle \langle v_2,T_2(v_2)\rangle
$$

for all $v_1\in \mathscr{H}_1$ and $v_2\in \mathscr{H}_2$.

The tensor product of two linear operators $T_1$ and $T_2$ is a linear combination in the form as follows:

$$
\sum_{i=1}^n a_i T_1(u_i)\otimes T_2(v_i)
$$

for all $u_i\in \mathscr{H}_1$ and $v_i\in \mathscr{H}_2$.

Such tensor product of linear operators is well defined.

<details>
<summary>Proof</summary>

If $\sum_{i=1}^n a_i u_i\otimes v_i=\sum_{j=1}^m b_j u_j\otimes v_j$, then $a_i=b_j$ for all $i=1,2,\cdots,n$ and $j=1,2,\cdots,m$.

Then $\sum_{i=1}^n a_i T_1(u_i)\otimes T_2(v_i)=\sum_{j=1}^m b_j T_1(u_j)\otimes T_2(v_j)$.

QED
</details>

An example of 

#### Tensor product of linear operators on Hilbert spaces

Let $T_1$ be a linear operator on $\mathscr{H}_1$ and $T_2$ be a linear operator on $\mathscr{H}_2$, where $\mathscr{H}_1$ and $\mathscr{H}_2$ are finite-dimensional Hilbert spaces. The tensor product of $T_1$ and $T_2$ (denoted by $T_1\otimes T_2$) on $\mathscr{H}_1\otimes \mathscr{H}_2$, such that **on decomposable elements** is defined by

$$
(T_1\otimes T_2)(v_1\otimes v_2)=T_1(v_1)\otimes T_2(v_2)=\langle v_1,T_1(v_1)\rangle \langle v_2,T_2(v_2)\rangle
$$

#### Extended Dirac notation

Suppose $\mathscr{H}=\mathbb{C}^n$ with the standard basis $\{e_i\}$.

$e_j=|j\rangle$ and

$$
|j_1\dots j_n\rangle=e_{j_1}\otimes e_{j_2}\otimes \cdots \otimes e_{j_n}=
$$

#### The Hadamard Transform

Let $\mathscr{H}=\mathbb{C}^2$ with the standard basis $\{e_1,e_2\}=\{|0\rangle,|1\rangle\}$.

The linear operator $H_2$ is defined by

$$
H_2=\frac{1}{\sqrt{2}}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}=\frac{1}{\sqrt{2}}(|0\rangle\langle 0|+|1\rangle\langle 0|+|0\rangle\langle 1|-|1\rangle\langle 1|)
$$

The Hadamard transform is the linear operator $H_2$ on $\mathbb{C}^2$.

### Singular value and Schmidt decomposition

#### Definition of SVD (Singular Value Decomposition)

Let $T:\mathscr{U}\to \mathscr{V}$ be a linear operator between two finite-dimensional Hilbert spaces $\mathscr{U}$ and $\mathscr{V}$.

We denote the inner product of $\mathscr{U}$ and $\mathscr{V}$ by $\langle \cdot, \cdot \rangle$.

Then there exists a decomposition of $T$

$$
T=d_1 T_1+d_2 T_2+\cdots +d_n T_n
$$

with $d_1>d_2>\cdots >d_n>0$ and $T_i:\mathscr{U}\to \mathscr{V}$ such that:

1. $T_iT_j^*=0$, $T_i^*T_j=0$ for $i\neq j$(
2. $T_i|_{\mathscr{R}(T_i^*)}:\mathscr{R}(T_i^*)\to \mathscr{R}(T_i)$ is an isomorphism with inverse $T_i^*$ where $\mathscr{R}(\cdot)$ is the range of the operator.

The $d_i$ are called the singular values of $T$.

[Gram-Schmidt Decomposition](https://notenextra.trance-0.com/Math429/Math429_L27#theorem-632-gram-schmidt)

## Basic Group Theory

### Finite groups

#### Definition of group

A group is a set $G$ with a binary operation $\cdot$ that satisfies the following axioms:

1. **Closure**: For all $a,b\in G$, $a\cdot b\in G$.
2. **Associativity**: For all $a,b,c\in G$, $(a\cdot b)\cdot c=a\cdot (b\cdot c)$.
3. **Identity**: There exists an element $e\in G$ such that for all $a\in G$, $a\cdot e=e\cdot a=a$.
4. **Inverses**: For all $a\in G$, there exists an element $b\in G$ such that $a\cdot b=b\cdot a=e$.

#### Symmetric group $S_n$

The symmetric group $S_n$ is the group of all permutations of $n$ elements.

$$
S_n=\{f: \{1,2,\cdots,n\}\to \{1,2,\cdots,n\} \text{ is a bijection}\}
$$

#### Unitary group $U(n)$

The unitary group $U(n)$ is the group of all $n\times n$ unitary matrices.

Such that $A^*=A$, where $A^*$ is the complex conjugate transpose of $A$. $A^*=(\overline{A})^T$.

#### Cyclic group $\mathbb{Z}_n$

The cyclic group $\mathbb{Z}_n$ is the group of all integers modulo $n$.

$$
\mathbb{Z}_n=\{0,1,2,\cdots,n-1\}
$$

#### Definition of group homomorphism

A group homomorphism is a function $\varPhi:G\to H$ between two groups $G$ and $H$ that satisfies the following axiom:

$$
\varPhi(a\cdot b)=\varPhi(a)\cdot \varPhi(b)
$$

A bijective group homomorphism is called group isomorphism.

#### Homomorphism sends identity to identity, inverses to inverses

Let $\varPhi:G\to H$ be a group homomorphism. $e_G$ and $e_H$ are the identity elements of $G$ and $H$ respectively. Then

1. $\varPhi(e_G)=e_H$
2. $\varPhi(a^{-1})=\varPhi(a)^{-1}$. $\forall a\in G$

### More on the symmetric group

#### General linear group over $\mathbb{C}$

The general linear group over $\mathbb{C}$ is the group of all $n\times n$ invertible complex matrices.

$$
GL(n,\mathbb{C})=\{A\in M_n(\mathbb{C}) \text{ is invertible}\}
$$

The map $T: S_n\to GL(n,\mathbb{C})$ is a group homomorphism.

#### Definition of sign of a permutation

Let $T:S_n\to GL(n,\mathbb{C})$ be the group homomorphism. The sign of a permutation $\sigma\in S_n$ is defined by

$$
\operatorname{sgn}(\sigma)=\det(T(\sigma))
$$

We say $\sigma$ is even if $\operatorname{sgn}(\sigma)=1$ and odd if $\operatorname{sgn}(\sigma)=-1$.

### Fourier Transform in $\mathbb{Z}_N$.

The vector space $L^2(\mathbb{Z}_N)$ is the set of all complex-valued functions on $\mathbb{Z}_N$ with the inner product

$$
\langle f,g\rangle=\sum_{k=0}^{N-1} \overline{f(k)}g(k)
$$

An orthonormal basis of $L^2(\mathbb{Z}_N)$ is given by $\delta_y,y\in \mathbb{Z}_N$.

$$
\delta_y(k)=\begin{cases}
1 & \text{if } k=y \\
0 & \text{otherwise}
\end{cases}
$$

in Dirac notation, we have

$$
\delta_y=|y\rangle=|y+N\rangle
$$

#### Definition of Fourier transform

Define $\varphi_k(x)=\frac{1}{\sqrt{N}}e^{2\pi i kx/N}$ for $k\in \mathbb{Z}_N$. $\varphi_k:\mathbb{Z}\to \mathbb{C}$ is a function.

The Fourier transform of a function $F\in L^2(\mathbb{Z}_N)$ such that $(Ff)(k)=\langle \varphi_k,f\rangle$ is defined by

$$
F=\frac{1}{\sqrt{N}}\sum_{j=0}^{N-1} \sum_{k=0}^{N-1} e^{2\pi i kj/N}|k\rangle\langle j|
$$

### Symmetric and anti-symmetric tensors

Let $\mathscr{H}^{\otimes n}$ be the $n$-fold tensor product of a Hilbert space $\mathscr{H}$.

We define the $S_n$ on $\mathscr{H}^{\otimes n}$ by

Let $\eta\in S_n$ be a permutation.

$$
\prod(\eta)v_1\otimes v_2\otimes \cdots \otimes v_n=v_{\eta^{-1}(1)}\otimes v_{\eta^{-1}(2)}\otimes \cdots \otimes v_{\eta^{-1}(n)}
$$

And extend to $\mathscr{H}^{\otimes n}$ by linearity.

This gives the property that $\zeta,\eta\in S_n$, $\prod(\zeta\eta)=\prod(\zeta)\prod(\eta)$.

#### Definition of symmetric and anti-symmetric tensors

Let $\mathscr{H}$ be a finite-dimensional Hilbert space.

An element in $\mathscr{H}^{\otimes n}$ is called symmetric if it is invariant under the action of $S_n$. Let $\alpha\in \mathscr{H}^{\otimes n}$

$$\prod(\eta)\alpha=\alpha \text{ for all } \eta\in S_n.$$

It is called anti-symmetric if

$$
\prod(\eta)\alpha=\operatorname{sgn}(\eta)\alpha \text{ for all } \eta\in S_n.
$$
