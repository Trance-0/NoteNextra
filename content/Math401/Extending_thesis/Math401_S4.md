# Math 401, Fall 2025: Thesis notes, S4, Complex function spaces and complex manifold

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

If $z\in U$, we cha choose $s$ small enough such that $\overline{P_s(z)}\subset U$ so that we can claim that $F(z)=(\pi s^2)^{-d}\int_{P_s(z)}F(v)d\mu(v)$ is well-defined.

If $d=1$. Then by Taylor series at $v=z$, since $F$ is analytic in $U$ we have

$$
F(v)=F(z)+\sum_{k=1}^{\infty}a_n(v-z)^n
$$

Since the series converges uniformly to $F$ on the compact set $\overline{P_s(z)}$, we can interchange the integral and the sum.

Using polar coordinates with origin at $z$, $(v-z)^n=r^n e^{in\theta}$ where $r=|v-z|, \theta=\arg(v-z)$.

For $n\geq 1$, the integral over $P_s(z)$ (open disk) is zero (by Cauchy's theorem).

So,

$$
\begin{aligned}
F(z)&=(\pi s^2)^{-1}\int_{P_s(z)}F(z)+\sum_{k=1}^{\infty}a_n(v-z)^n d\mu(v)\\
&=(\pi s^2)^{-1}F(z)+(\pi s^2)^{-1}\sum_{k=1}^{\infty}a_n\int_{P_s(z)}r^n e^{in\theta} d\mu(v)\\
&=(\pi s^2)^{-1}F(z)
\end{aligned}
$$

For $d>1$, we can use the same argument to show that

Let $\mathbb{I}_{P_s(z)}(v)=\begin{cases}1 & v\in P_s(z) \\0 & v\notin P_s(z)\end{cases}$ be the indicator function of $P_s(z)$.

$$
\begin{aligned}
F(z)&=(\pi s^2)^{-d}\int_{U}\mathbb{I}_{P_s(z)}(v)\frac{1}{\alpha(v)}F(v)\alpha(v) d\mu(v)\\
&=(\pi s^2)^{-d}\langle \mathbb{I}_{P_s(z)}\frac{1}{\alpha},F\rangle_{L^2(U,\alpha)}
\end{aligned}
$$

By definition of inner product.

So $\|F(z)\|^2\leq (\pi s^2)^{-2d}\|\mathbb{I}_{P_s(z)}\frac{1}{\alpha}\|^2_{L^2(U,\alpha)} \|F\|^2_{L^2(U,\alpha)}$.

All the terms are bounded and finite.

For part 2, we need to show that $\forall z\in U$, we can find a neighborhood $V$ of $z$ and a constant $d_z$ such that

$$
|F(z)|^2\leq d_z \|F\|^2_{L^2(U,\alpha)}
$$

Suppose we have a sequence $F_n\in \mathcal{H}L^2(U,\alpha)$ such that $F_n\to F$, $F\in L^2(U,\alpha)$.

Then $F_n$ is a cauchy sequence in $L^2(U,\alpha)$. So,

$$
\sup_{v\in V}|F_n(v)-F_m(v)|\leq \sqrt{d_z}\|F_n-F_m\|_{L^2(U,\alpha)}\to 0\text{ as }n,m\to \infty
$$

So the sequence $F_m$ converges locally uniformly to some limit function which must be $F$ ($\mathbb{C}^d$ is Hausdorff, unique limit point).

Locally uniform limit of holomorphic functions is holomorphic. (Use Morera's Theorem to show that the limit is still holomorphic in each variable.) So the limit function $F$ is actually in $\mathcal{H}L^2(U,\alpha)$, which shows that $\mathcal{H}L^2(U,\alpha)$ is closed.

which shows that $\mathcal{H}L^2(U,\alpha)$ is closed.

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

<details>
<summary>Proof</summary>

For part 1, By [Riesz Theorem](../../Math429/Math429_L27#theorem-642-riesz-representation-theorem), the linear functional evaluation at $z\in U$ on $\mathcal{H}L^2(U,\alpha)$ can be represented uniquely as inner product with some $\phi_z\in \mathcal{H}L^2(U,\alpha)$.

$$
F(z)=\langle F,\phi_z\rangle_{L^2(U,\alpha)}=\int_U F(w)\overline{\phi_z(w)} \alpha(w) dw
$$

And assume part 2 is true, then we have

$K(z,w)=\overline{\phi_z(w)}$

So part 1 is true.

For part 2, we can use the same argument

$$
\phi_z(w)=\langle \phi_z,\phi_w\rangle_{L^2(U,\alpha)}=\overline{\langle \phi_w,\phi_z\rangle_{L^2(U,\alpha)}}=\overline{\phi_w(z)}
$$

... continue if needed.

</details>

#### Construction of reproducing kernel

Let $\{e_j\}$ be any orthonormal basis of $\mathcal{H}L^2(U,\alpha)$. Then for all $z,w\in U$,

$$
\sum_{j=1}^{\infty} |e_j(z)\overline{e_j(w)}|<\infty
$$

and

$$
K(z,w)=\sum_{j=1}^{\infty} e_j(z)\overline{e_j(w)}
$$

### Bargmann space

The Bargmann spaces are the holomorphic spaces 

$$
\mathcal{H}L^2(\mathbb{C}^d,\mu_t)
$$

where

$$
\mu_t(z)=(\pi t)^{-d}\exp(-|z|^2/t)
$$

> For this research, we can tentatively set $t=1$ and $d=2$ for simplicity so that you can continue to read the next section.

#### Reproducing kernel for Bargmann space

For all $d\geq 1$, the reproducing kernel of the space $\mathcal{H}L^2(\mathbb{C}^d,\mu_t)$ is given by

$$
K(z,w)=\exp(z\cdot \overline{w}/t)
$$

where $z\cdot \overline{w}=\sum_{k=1}^d z_k\overline{w_k}$.

This gives the pointwise bounds

$$
|F(z)|^2\leq \exp(\|z\|^2/t) \|F\|^2_{L^2(\mathbb{C}^d,\mu_t)}
$$

For all $F\in \mathcal{H}L^2(\mathbb{C}^d,\mu_t)$, and $z\in \mathbb{C}^d$.

> Proofs are intentionally skipped, you can refer to the lecture notes for details.

#### Lie bracket of vector fields

Let $X,Y$ be two vector fields on a smooth manifold $M$. The Lie bracket of $X$ and $Y$ is an operator $[X,Y]:C^\infty(M)\to C^\infty(M)$ defined by

$$
[X,Y](f)=X(Y(f))-Y(X(f))
$$

This operator is a vector field.

## Complex Manifolds

> This section extends from our previous discussion of smooth manifolds in Math 401, R2.
>
> For this week [10/21/2025], our goal is to understand the Riemann-Roch theorem and its applications.
>
> References:
>
> - [Introduction to Complex Manifolds](https://bookstore.ams.org/gsm-244)

### Riemann-Roch Theorem (Theorem 9.64)

Suppose $M$ is a connected compact Riemann surface of genus $g$, and $L\to M$ is a holomorphic line bundle. Then

$$
\dim \mathcal{O}(M;L)=\deg L+1-g+\dim \mathcal{O}(M;K\otimes L^*)
$$

