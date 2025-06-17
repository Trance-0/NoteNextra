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

