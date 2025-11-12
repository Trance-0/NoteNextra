# Math 401, Fall 2025: Thesis notes, S4, Complex manifolds

## Complex Manifolds

> This section extends from our previous discussion of smooth manifolds in Math 401, R2.
>
> For this week [10/21/2025], our goal is to understand the Riemann-Roch theorem and its applications.
>
> References:
>
> - [Introduction to Complex Manifolds](https://bookstore.ams.org/gsm-244)

### Holomorphic vector bundles

#### Definition of real vector bundle

Let $M$ be a topological space, A **real vector bundle** over $M$ is a topological space $E$ together with a surjective continuous map $\pi:E\to M$ such that:

1. For each $p\in M$, the fiber $E_p=\pi^{-1}(p)$ over $p$ is endowed with the structure of a $k$-dimensional real vector space.
2. For each $p\in M$, there exists an open neighborhood $U$ of $p$ and a homeomorphism $\Phi: \pi^{-1}(U)\to U\times \mathbb{R}^k$ called a **local trivialization** such that:
    - $\pi^{-1}(U)=\pi$(where $\pi_U:U\times \mathbb{R}^k\to \pi^{-1}(U)$ is the projection map)
    - For each $q\in U$, the map $\Phi_q: E_q\to \mathbb{R}^k$ is isomorphism from $E_q$ to $\{q\}\times \mathbb{R}^k\cong \mathbb{R}^k$.

#### Definition of complex vector bundle

Let $M$ be a topological space, A **complex vector bundle** over $M$ is a real vector bundle $E$ together with a complex structure on each fiber $E_p$ that is compatible with the complex vector space structure.

1. For each $p\in M$, the fiber $E_p=\pi^{-1}(p)$ over $p$ is endowed with the structure of a $k$-dimensional complex vector space.
2. For each $p\in M$, there exists an open neighborhood $U$ of $p$ and a homeomorphism $\Phi: \pi^{-1}(U)\to U\times \mathbb{C}^k$ called a **local trivialization** such that:
    - $\pi^{-1}(U)=\pi$(where $\pi_U:U\times \mathbb{C}^k\to \pi^{-1}(U)$ is the projection map)
    - For each $q\in U$, the map $\Phi_q: E_q\to \mathbb{C}^k$ is isomorphism from $E_q$ to $\{q\}\times \mathbb{C}^k\cong \mathbb{C}^k$.

#### Definition of smooth complex vector bundle

If above $M$ and $E$ are smooth manifolds, $\pi$ is a smooth map, and the local trivializations can be chosen to be diffeomorphisms (smooth bijections with smooth inverses), then the vector bundle is called a **smooth complex vector bundle**.

#### Definition of holomorphic vector bundle

If above $M$ and $E$ are complex manifolds, $\pi$ is a holomorphic map, and the local trivializations can be chosen to be biholomorphic maps (holomorphic bijections with holomorphic inverses), then the vector bundle is called a **holomorphic vector bundle**.

### Holomorphic line bundles

A **holomorphic line bundle** is a holomorphic vector bundle with rank 1.

> Intuitively, a holomorphic line bundle is a complex vector bundle with a complex structure on each fiber.

### Simplicial, Sheafs, Cohomology and homology

What is homology and cohomology?

> This section is based on extension for conversation with Professor Feres on [11/05/2025].

#### Definition of meromorphic function

Let $Y$ be an open subset of $X$. A function $f$ is called meromorphic function on $Y$, if there exists a non-empty open subset $Y'\subset Y$ such that

1. $f:Y'\to \mathbb{C}$ is a holomorphic function.
2. $A=Y\setminus Y'$ is a set of isolated points (called the set of poles)
3. $\lim_{x\to p}|f(x)|=+\infty$ for all $p\in A$

> Basically, a local holomorphic function on $Y$.

#### De Rham Theorem

This is analogous to the Stoke's Theorem on chains, $\int_c d\omega=\int_{\partial c} \omega$.

$$
H_k(X)\cong H^k(X)
$$

Where $H_k(X)$ is the $k$-th homology of $X$, and $H^k(X)$ is the $k$-th cohomology of $X$.

#### Simplicial Cohomology

Riemann surfaces admit triangulations. The triangle are 2 simplices. The edges are 1 simplices. the vertices are 0 simplices.

Our goal is to build global description of Riemann surfaces using local description on each triangulation.

#### Singular Cohomology

### Riemann-Roch Theorem (Theorem 9.64)

Suppose $M$ is a connected compact Riemann surface of genus $g$, and $L\to M$ is a holomorphic line bundle. Then

$$
\dim \mathcal{O}(M;L)=\deg L+1-g+\dim \mathcal{O}(M;K\otimes L^*)
$$

