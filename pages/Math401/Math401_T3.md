# Topic 3: Separable Hilbert spaces

## Infinite-dimensional Hilbert spaces

Recall from Topic 1.

[$L^2$ space](https://notenextra.trance-0.com/Math401/Math401_T1#section-3-further-definitions-in-measure-theory-and-integration)

Let $\lambda$ be a measure on $\mathbb{R}$, or any other field you are interested in.

A function is square integrable if

$$
\int_\mathbb{R} |f(x)|^2 d\lambda(x)<\infty
$$

### $L^2$ space and general Hilbert spaces

#### Definition of $L^2(\mathbb{R},\lambda)$

The space $L^2(\mathbb{R},\lambda)$ is the space of all square integrable, measurable functions on $\mathbb{R}$ with respect to the measure $\lambda$ (The Lebesgue measure).

The Hermitian inner product is defined by

$$
\langle f,g\rangle=\int_\mathbb{R} \overline{f(x)}g(x) d\lambda(x)
$$

The norm is defined by

$$
\|f\|=\sqrt{\int_\mathbb{R} |f(x)|^2 d\lambda(x)}
$$

The space $L^2(\mathbb{R},\lambda)$ is complete.

[Proof ignored here]

> Recall the definition of [complete metric space](https://notenextra.trance-0.com/Math4111/Math4111_L17#definition-312).

The inner product space $L^2(\mathbb{R},\lambda)$ is complete.

#### Definition of general Hilbert space

A Hilbert space is a complete inner product vector space.

#### General Pythagorean theorem

Let $u_1,u_2,\cdots,u_N$ be an orthonormal set in an inner product space $\mathscr{V}$ (may not be complete). Then for all $v\in \mathscr{V}$,

$$
\|v\|^2=\sum_{i=1}^N |\langle v,u_i\rangle|^2+\left\|v-\sum_{i=1}^N \langle v,u_i\rangle u_i\right\|^2
$$

[Proof ignored here]

#### Bessel's inequality

Let $u_1,u_2,\cdots,u_N$ be an orthonormal set in an inner product space $\mathscr{V}$ (may not be complete). Then for all $v\in \mathscr{V}$,

$$
\sum_{i=1}^N |\langle v,u_i\rangle|^2\leq \|v\|^2
$$

Immediate from the general Pythagorean theorem.

### Orthonormal bases

An orthonormal subset $S$ of a Hilbert space $\mathscr{H}$ is a set all of whose elements have norm 1 and are mutually orthogonal. ($\forall u,v\in S, \langle u,v\rangle=0$)

#### Definition of orthonormal basis

An orthonormal subset of $S$ of a Hilbert space $\mathscr{H}$ is an orthonormal basis of $\mathscr{H}$ if there are no other orthonormal subsets of $\mathscr{H}$ that contain $S$ as a proper subset.

#### Theorem of existence of orthonormal basis

Every separable Hilbert space has an orthonormal basis.

[Proof ignored here]

#### Theorem of Fourier series

Let $\mathscr{H}$ be a separable Hilbert space with an orthonormal basis $\{e_n\}$. Then for any $f\in \mathscr{H}$,

$$
f=\sum_{n=1}^\infty \langle f,e_n\rangle e_n
$$

The series converges to some $g\in \mathscr{H}$.

[Proof ignored here]

#### Fourier series in $L^2([0,2\pi],\lambda)$

Let $f\in L^2([0,2\pi],\lambda)$.

$$
f_N(x)=\sum_{n:|n|\leq N} c_n\frac{e^{inx}}{\sqrt{2\pi}}
$$

where $c_n=\frac{1}{2\pi}\int_0^{2\pi} f(x)e^{-inx} dx$.

The series converges to some $f\in L^2([0,2\pi],\lambda)$ as $N\to \infty$.

This is the Fourier series of $f$.

#### Hermite polynomials

The subspace spanned by polynomials is dense in $L^2(\mathbb{R},\lambda)$.

An orthonormal basis of $L^2(\mathbb{R},\lambda)$ can be obtained by the Gram-Schmidt process on $\{1,x,x^2,\cdots\}$.

The polynomials are called the Hermite polynomials.

### Isomorphism and $\ell_2$ space

#### Definition of isomorphic Hilbert spaces

Let $\mathscr{H}_1$ and $\mathscr{H}_2$ be two Hilbert spaces.

$\mathscr{H}_1$ and $\mathscr{H}_2$ are isomorphic if there exists a surjective linear map $U:\mathscr{H}_1\to \mathscr{H}_2$ that is bijective and preserves the inner product.

$$
\langle Uf,Ug\rangle=\langle f,g\rangle
$$

for all $f,g\in \mathscr{H}_1$.

When $\mathscr{H}_1=\mathscr{H}_2$, the map $U$ is called unitary.

#### $\ell_2$ space

The space $\ell_2$ is the space of all square summable sequences.

$$
\ell_2=\left\{(a_n)_{n=1}^\infty: \sum_{n=1}^\infty |a_n|^2<\infty\right\}
$$

An example of element in $\ell_2$ is $(1,0,0,\cdots)$.

With inner product

$$
\langle (a_n)_{n=1}^\infty, (b_n)_{n=1}^\infty\rangle=\sum_{n=1}^\infty \overline{a_n}b_n
$$

It is a Hilbert space (every Cauchy sequence in $\ell_2$ converges to some element in $\ell_2$).

### Bounded operators and continuity

Let $T:\mathscr{V}\to \mathscr{W}$ be a linear map between two vector spaces $\mathscr{V}$ and $\mathscr{W}$.

We define the norm of $\|\cdot\|$ on $\mathscr{V}$ and $\mathscr{W}$.

Then $T$ is continuous if for all $u\in \mathscr{V}$, if $u_n\to u$ in $\mathscr{V}$, then $T(u_n)\to T(u)$ in $\mathscr{W}$.

Using the delta-epsilon language, we can say that $T$ is continuous if for all $\epsilon>0$, there exists a $\delta>0$ such that if $\|u-v\|<\delta$, then $\|T(u)-T(v)\|<\epsilon$.

#### Definition of bounded operator

A linear map $T:\mathscr{V}\to \mathscr{W}$ is bounded if

$$
\|T\|=\sup_{\|u\|=1}\|T(u)\|< \infty
$$

#### Theorem of continuity and boundedness

A linear map $T:\mathscr{V}\to \mathscr{W}$ is continuous if and only if it is bounded.

[Proof ignored here]

#### Definition of bounded Hilbert space

The set of all bounded linear operators in $\mathscr{V}$ is denoted by $\mathscr{B}(\mathscr{V})$.
