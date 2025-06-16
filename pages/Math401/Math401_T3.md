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

A Hilbert space is a complete inner product space.

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

#### Definition of orthonormal basis

An orthonormal basis of a Hilbert space $\mathscr{H}$ is a set of orthonormal vectors that spans $\mathscr{H}$.