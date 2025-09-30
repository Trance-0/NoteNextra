# Math 401, Fall 2025: Thesis notes, S4, Bargmann space

## Bargmann space (original)

Also known as Segal-Bargmann space or Bargmann-Fock space.

It is the space of [holomorphic functions](../../Math416/Math416_L3#definition-28-holomorphic-functions) that is square-integrable over the complex plane.

> Section belows use [Remarks on a Hilbert Space of Analytic Functions](https://www.jstor.org/stable/71180) as the reference.

A family of Hilbert spaces, $\mathfrak{F}_n(n=1,2,3,\cdots)$, is defined as follows:

The element of $\mathfrak{F}_n$ are [entire](../../Math416/Math416_L13#definition-711) [analytic functions](../../Math416/Math416_L9#definition-analytic) in complex Euclidean space $\mathbb{C}^n$. $f:\mathbb{C}^n\to \mathbb{C}\in \mathfrak{F}_n$

Let $f,g\in \mathfrak{F}_n$. The inner product is defined by

$$
\langle f,g\rangle=\int_{\mathbb{C}^n} \overline{f(z)}g(z) d\mu_n(z)
$$

Let $z_k=x_k+iy_k$ be the complex coordinates of $z\in \mathbb{C}^n$.

The measure $\mu_n$ is the defined by

$$
d\mu_n(z)=\pi^{-n}\exp(-\sum_{i=1}^n |z_i|^2)\prod_{k=1}^n dx_k dy_k
$$

<details>
<summary>Example</summary>

For $n=2$,

$$
\mathfrak{F}_2=\text{ space of entire analytic functions on } \mathbb{C}^2\to \mathbb{C}
$$

$$
\langle f,g\rangle=\int_{\mathbb{C}^2} \overline{f(z)}g(z) d\mu(z),z=(z_1,z_2)
$$

$$
d\mu_2(z)=\frac{1}{\pi^2}\exp(-|z|^2)dx_1 dy_1 dx_2 dy_2
$$

</details>

so that $f$ belongs to $\mathfrak{F}_n$ if and only if $\langle f,f\rangle<\infty$.

This is absolutely terrible early texts, we will try to formulate it in a more modern way.

> The section belows are from the lecture notes [Holomorphic method in analysis and mathematical physics](https://arxiv.org/pdf/quant-ph/9912054)

## Complex function spaces

### Holomorphic spaces

Let $U$ be a non-empty open set in $\mathbb{C}^d$. Let $\mathcal{H}(U)$ be the space of holomorphic (or analytic) functions on $U$.

Let $f\in \mathcal{H}(U)$, note that by definition of holomorphic on several complex variables, $f$ is continuous and holomorphic in each variable with the other variables fixed.

Let $\alpha$ be a continuous, strictly positive function on $U$.

$$
\mathcal{H}L^2(U,\alpha)=\left\{F\in \mathcal{H}(U): \int_U |F(z)|^2 \alpha(z) d\mu(z)<\infty\right\},
$$

where $\mu$ is the Lebesgue measure on $\mathbb{C}^d=\mathbb{R}^{2d}$.

#### Theorem of holomorphic spaces

1. For all $z\in U$, there exists a constant $c_z$ such that
    $$
    |F(z)|^2\le c_z \|F\|^2_{L^2(U,\alpha)}
    $$
    for all $F\in \mathcal{H}L^2(U,\alpha)$.
2. $\mathcal{H}L^2(U,\alpha)$ is a closed subspace of $L^2(U,\alpha)$, and therefore a Hilbert space.

<details>
<summary>Proof</summary>

First we check part 1.

Let $z=(z_1,z_2,\cdots,z_d)\in U, z_k\in \mathbb{C}$. Let $P_s(z)$ be the "polydisk"of radius $s$ centered at $z$ defined as

$$
P_s(z)=\{v\in \mathbb{C}^d: |v_k-z_k|<s, k=1,2,\cdots,d\}
$$

If $z\in U$, we cha choose $s$ small enough such that $P_s(z)\subset U$.

</details>

> [!TIP]
>
> [1.] states that point-wise evaluation of $F$ on $U$ is continuous. That is, for each $z\in U$, the map $\varphi: \mathcal{H}L^2(U,\alpha)\to \mathbb{C}$ that takes $F\in \mathcal{H}L^2(U,\alpha)$ to $F(z)$ is a continuous linear functional on $\mathcal{H}L^2(U,\alpha)$. This is false for ordinary non-holomorphic functions, e.g. $L^2$ spaces.

#### Reproducing kernel

Let $\mathcal{H}L^2(U,\alpha)$ be a holomorphic space. The reproducing kernel of $\mathcal{H}L^2(U,\alpha)$ is a function $K:U\times U\to \mathbb{C}$, $K(z,w),z,w\in U$ with the following properties:

1. $K(z,w)$ is holomorphic in $z$ and anti-holomorphic in $w$.
   $$
   K(w,z)=\overline{K(z,w)}
   $$

2. For each fixed $z\in U$, $K(z,w)$ is a square integrable $d\alpha(w)$. For all $F\in \mathcal{H}L^2(U,\alpha)$,
   $$
   F(z)=\int_U K(z,w)F(w) \alpha(w) dw
   $$

3. If $F\in L^2(U,\alpha)$, let $PF$ denote the orthogonal projection of $F$ onto closed subspace $\mathcal{H}L^2(U,\alpha)$. Then
   $$
   PF(z)=\int_U K(z,w)F(w) \alpha(w) dw
   $$

4. For all $z,u\in U$,
   $$
   \int_U K(z,w)K(w,u) \alpha(w) dw=K(z,u)
   $$

5. For all $z\in U$,
   $$
   |F(z)|^2\leq K(z,z) \|F\|^2_{L^2(U,\alpha)}
   $$

### Bargmann space

The Bargmann spaces are the holomorphic spaces 

$$
\mathcal{H}L^2(\mathbb{C}^d,\mu_t)
$$

where

$$
\mu_t(z)=\text{ CONTINUE HERE }
$$