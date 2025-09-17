# Math 401, Fall 2025: Thesis notes, R2, Levy's concentration theorem and Levy's family

> Progress: 2/5=40% (denominator and enumerator may change)

## Levy's concentration theorem

> [!TIP]
>
> This version of Levy's concentration theorem can be found in [Geometry of Quantum states](https://www.cambridge.org/core/books/geometry-of-quantum-states/46B62FE3F9DA6E0B4EDDAE653F61ED8C) 15.84 and 15.85.

Our goal is to prove the generalized version of Levy's concentration theorem used in Hayden's work for $\eta$-Lipschitz functions.

Let $f:S^{n-1}\to \mathbb{R}$ be a $\eta$-Lipschitz function. Let $M_f$ denote the median of $f$ and $\langle f\rangle$ denote the mean of $f$. (Note this can be generalized to many other manifolds.)

Select a random point $x\in S^{n-1}$ with $n>2$ according to the uniform measure (Haar measure). Then the probability of observing a value of $f$ much different from the reference value is exponentially small.

$$
\operatorname{Pr}[|f(x)-M_f|>\epsilon]\leq \exp(-\frac{n\epsilon^2}{2\eta^2})
$$
$$
\operatorname{Pr}[|f(x)-\langle f\rangle|>\epsilon]\leq 2\exp(-\frac{(n-1)\epsilon^2}{2\eta^2})
$$

### Levy's concentration theorem via sub-Gaussian concentration

> [!TIP]
>
> This version of Levy's concentration theorem can be found in [High-dimensional probability](https://www.math.uci.edu/~rvershyn/papers/HDP-book/HDP-2.pdf) 5.1.4.

#### Isoperimetric inequality on $\mathbb{R}^n$

Among all subsets $A\subset \mathbb{R}^n$ with a given volume, the Euclidean ball has the minimal area.

That is, for any $\epsilon>0$, Euclidean balls minimize the volume of the $\epsilon$-neighborhood of $A$.

Where the volume of the $\epsilon$-neighborhood of $A$ is defined as

$$
A_\epsilon(A)\coloneqq \{x\in \mathbb{R}^n: \exists y\in A, \|x-y\|_2\leq \epsilon\}=A+\epsilon B_2^n
$$

Here the $\|\cdot\|_2$ is the Euclidean norm. (The theorem holds for both geodesic metric on sphere and Euclidean metric on $\mathbb{R}^n$.)

#### Isoperimetric inequality on the sphere

Let $\sigma_n(A)$ denotes the normalized area of $A$ on $n$ dimensional sphere $S^n$. That is $\sigma_n(A)\coloneqq\frac{\operatorname{Area}(A)}{\operatorname{Area}(S^n)}$.

Let $\epsilon>0$. Then for any subset $A\subset S^n$, given the area $\sigma_n(A)$, the spherical caps minimize the volume of the $\epsilon$-neighborhood of $A$.

> The above two inequalities is not proved in the Book _High-dimensional probability_. But you can find it in the Appendix C of Gromov's book _Metric Structures for Riemannian and Non-Riemannian Spaces_.

To continue prove the theorem, we use sub-Gaussian concentration *(Chapter 3 of _High-dimensional probability_ by Roman Vershynin)* of sphere $\sqrt{n}S^n$. 

This will leads to some constant $C>0$ such that the following lemma holds:

#### The "Blow-up" lemma

Let $A$ be a subset of sphere $\sqrt{n}S^n$, and $\sigma$ denotes the normalized area of $A$. Then if $\sigma\geq \frac{1}{2}$, then for every $t\geq 0$,

$$
\sigma(A_t)\geq 1-2\exp(-ct^2)
$$

where $A_t=\{x\in S^n: \operatorname{dist}(x,A)\leq t\}$ and $c$ is some positive constant.

#### Proof of the Levy's concentration theorem

Proof:

Without loss of generality, we can assume that $\eta=1$. Let $M$ denotes the median of $f(X)$.

So $\operatorname{Pr}[|f(X)\leq M|]\geq \frac{1}{2}$, and $\operatorname{Pr}[|f(X)\geq M|]\geq \frac{1}{2}$.

Consider the sub-level set $A\coloneqq \{x\in \sqrt{n}S^n: |f(x)|\leq M\}$.

Since $\operatorname{Pr}[X\in A]\geq \frac{1}{2}$, by the blow-up lemma, we have

$$
\operatorname{Pr}[X\in A_t]\geq 1-2\exp(-ct^2)
$$

And since

$$
\operatorname{Pr}[X\in A_t]\leq \operatorname{Pr}[f(X)\leq M+t]
$$

Combining the above two inequalities, we have

$$
\operatorname{Pr}[f(X)\leq M+t]\geq 1-2\exp(-ct^2)
$$

## Levy's concentration theorem via Levy family

> [!TIP]
>
> This version of Levy's concentration theorem can be found in:
> - [Metric Structures for Riemannian and Non-Riemannian Spaces by M. Gromov](https://www.amazon.com/Structures-Riemannian-Non-Riemannian-Progress-Mathematics/dp/0817638989/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.Tp8dXvGbTj_D53OXtGj_qOdqgCgbP8GKwz4XaA1xA5PGjHj071QN20LucGBJIEps.9xhBE0WNB0cpMfODY5Qbc3gzuqHnRmq6WZI_NnIJTvc&qid=1750973893&sr=8-1)
> - [Metric Measure Geometry by Takashi Shioya](https://arxiv.org/pdf/1410.0428)


### Levy's concentration theorem (Gromov's version)

> The Levy's lemma can also be found in _Metric Structures for Riemannian and Non-Riemannian Spaces_ by M. Gromov. $3\frac{1}{2}.19$ The Levy concentration theory.

#### Theorem $3\frac{1}{2}.19$ Levy concentration theorem:

An arbitrary 1-Lipschitz function $f:S^n\to \mathbb{R}$ concentrates near a single value $a_0\in \mathbb{R}$ as strongly as the distance function does.

That is

$$
\mu\{x\in S^n: |f(x)-a_0|\geq\epsilon\} < \kappa_n(\epsilon)\leq 2\exp(-\frac{(n-1)\epsilon^2}{2})
$$

where 

$$
\kappa_n(\epsilon)=\frac{\int_\epsilon^{\frac{\pi}{2}}\cos^{n-1}(t)dt}{\int_0^{\frac{\pi}{2}}\cos^{n-1}(t)dt}
$$

$a_0$ is the **Levy mean** of function $f$, that is the level set of $f^{-1}:\mathbb{R}\to S^n$ divides the sphere into equal halves, characterized by the following equality:

$$
\mu(f^{-1}(-\infty,a_0])\geq \frac{1}{2} \text{ and } \mu(f^{-1}[a_0,\infty))\geq \frac{1}{2}
$$

Hardcore computing may generates the bound but M. Gromov did not make the detailed explanation here.

> Detailed proof by Takashi Shioya.
>
> The central idea is to draw the connection between the given three topological spaces, $S^{2n+1}$, $CP^n$ and $\mathbb{R}$.

First, we need to introduce the following distribution and lemmas/theorems:

**OBSERVATION**

consider the orthogonal projection from $\mathbb{R}^{n+1}$, the space where $S^n$ is embedded, to $\mathbb{R}^k$, we denote the restriction of the projection as $\pi_{n,k}:S^n(\sqrt{n})\to \mathbb{R}^k$. Note that $\pi_{n,k}$ is a 1-Lipschitz function (projection will never increase the distance between two points).

We denote the normalized Riemannian volume measure on $S^n(\sqrt{n})$ as $\sigma^n(\cdot)$, and $\sigma^n(S^n(\sqrt{n}))=1$.

#### Definition of Gaussian measure on $\mathbb{R}^k$

We denote the Gaussian measure on $\mathbb{R}^k$ as $\gamma^k$.

$$
d\gamma^k(x)\coloneqq\frac{1}{\sqrt{2\pi}^k}\exp(-\frac{1}{2}\|x\|^2)dx
$$

$x\in \mathbb{R}^k$, $\|x\|^2=\sum_{i=1}^k x_i^2$ is the Euclidean norm, and $dx$ is the Lebesgue measure on $\mathbb{R}^k$.

Basically, you can consider the Gaussian measure as the normalized Lebesgue measure on $\mathbb{R}^k$ with standard deviation $1$.

#### Maxwell-Boltzmann distribution law

> It is such a wonderful fact for me, that the projection of $n+1$ dimensional sphere with radius $\sqrt{n}$ to $\mathbb{R}^k$ is a Gaussian distribution as $n\to \infty$.

For any natural number $k$,

$$
\frac{d(\pi_{n,k})_*\sigma^n(x)}{dx}\to \frac{d\gamma^k(x)}{dx}
$$

where $(\pi_{n,k})_*\sigma^n$ is the push-forward measure of $\sigma^n$ by $\pi_{n,k}$.

In other words,

$$
(\pi_{n,k})_*\sigma^n\to \gamma^k\text{ weakly as }n\to \infty
$$

<details>
<summary>Proof</summary>

We denote the $n$ dimensional volume measure on $\mathbb{R}^k$ as $\operatorname{vol}_k$.

Observe that $\pi_{n,k}^{-1}(x),x\in \mathbb{R}^k$ is isometric to $S^{n-k}(\sqrt{n-\|x\|^2})$, that is, for any $x\in \mathbb{R}^k$, $\pi_{n,k}^{-1}(x)$ is a sphere with radius $\sqrt{n-\|x\|^2}$ (by the definition of $\pi_{n,k}$).

So,

$$
\begin{aligned}
\frac{d(\pi_{n,k})_*\sigma^n(x)}{dx}&=\frac{\operatorname{vol}_{n-k}(\pi_{n,k}^{-1}(x))}{\operatorname{vol}_k(S^n(\sqrt{n}))}\\
&=\frac{(n-\|x\|^2)^{\frac{n-k}{2}}}{\int_{\|x\|\leq \sqrt{n}}(n-\|x\|^2)^{\frac{n-k}{2}}dx}\\
\end{aligned}
$$

as $n\to \infty$.

note that $\lim_{n\to \infty}{(1-\frac{a}{n})^n}=e^{-a}$ for any $a>0$.

$(n-\|x\|^2)^{\frac{n-k}{2}}=\left(n(1-\frac{\|x\|^2}{n})\right)^{\frac{n-k}{2}}\to n^{\frac{n-k}{2}}\exp(-\frac{\|x\|^2}{2})$

So

$$
\begin{aligned}
\frac{(n-\|x\|^2)^{\frac{n-k}{2}}}{\int_{\|x\|\leq \sqrt{n}}(n-\|x\|^2)^{\frac{n-k}{2}}dx}&=\frac{e^{-\frac{\|x\|^2}{2}}}{\int_{x\in \mathbb{R}^k}e^{-\frac{\|x\|^2}{2}}dx}\\
&=\frac{1}{(2\pi)^{\frac{k}{2}}}e^{-\frac{\|x\|^2}{2}}\\
&=\frac{d\gamma^k(x)}{dx}
\end{aligned}
$$

QED

</details>

#### Proof of the Levy's concentration theorem via the Maxwell-Boltzmann distribution law

We use the Maxwell-Boltzmann distribution law and Levy's isoperimetric inequality to prove the Levy's concentration theorem.

The goal is the same as the Gromov's version, first we bound the probability of the sub-level set of $f$ by the $\kappa_n(\epsilon)$ function by Levy's isoperimetric inequality. Then we claim that the $\kappa_n(\epsilon)$ function is bounded by the Gaussian distribution.

Note, this section is not rigorous enough in sense of mathematics and the author should add sections about Levy family and observable diameter to make the proof more rigorous and understandable.

<details>
<summary>Proof</summary>

Let $f:S^n\to \mathbb{R}$ be a 1-Lipschitz function.

Consider the two sets of points on the sphere $S^n$ with radius $\sqrt{n}$:

$$
\Omega_+=\{x\in S^n: f(x)\leq a_0-\epsilon\}, \Omega_-=\{x\in S^n: f(x)\geq a_0+\epsilon\}
$$

Note that $\Omega_+\cup \Omega_-$ is the whole sphere $S^n(\sqrt{n})$.

By the Levy's isoperimetric inequality, we have

$$
\operatorname{vol}_{n-k}(\pi_{n,k}^{-1}(\epsilon))\leq \operatorname{vol}_{n-k}(\pi_{n,k}^{-1}(\Omega_+))+\operatorname{vol}_{n-k}(\pi_{n,k}^{-1}(\Omega_-))
$$

We define $\kappa_n(\epsilon)$ as the following:

$$
\kappa_n(\epsilon)=\frac{\operatorname{vol}_{n-k}(\pi_{n,k}^{-1}(\epsilon))}{\operatorname{vol}_k(S^n(\sqrt{n}))}=\frac{\int_\epsilon^{\frac{\pi}{2}}\cos^{n-1}(t)dt}{\int_0^{\frac{\pi}{2}}\cos^{n-1}(t)dt}
$$

By the Levy's isoperimetric inequality, and the Maxwell-Boltzmann distribution law, we have

$$
\mu\{x\in S^n: |f(x)-a_0|\geq\epsilon\} < \kappa_n(\epsilon)\leq 2\exp(-\frac{(n-1)\epsilon^2}{2})
$$
</details>

## Levy's Isoperimetric inequality

> This section is from the Appendix $C_+$ of Gromov's book _Metric Structures for Riemannian and Non-Riemannian Spaces_.

Not very edible for undergraduates.

## Crash course on Riemannian Geometry

> This section is designed for stupids like me skipping too much essential materials in the book.

### Manifold

Unexpectedly, a good definition of the manifold is defined in the topology I.

Check section 36. This topic extends to a wonderful chapter 8 in the book where you can hardly understand chapter 2.

#### Definition of m-manifold

An $m$-manifold is a Hausdorff space $X$ with a countable basis such that each point of $x$ of $X$ has a neighborhood <text style="color: red;"> homeomorphic</text> to an open subset of $\mathbb{R}^m$.

Example is trivial that 1-manifold is a curve and 2-manifold is a surface.

#### Theorem of imbedded space

If $X$ is a compact $m$-manifold, then $X$ can be imbedded in $\mathbb{R}^n$ for some $n$.

This theorem might save you from imagining abstract structures back to real dimension. Good news, at least you stay in some real numbers.

### Riemannian manifold



## Crash course on Riemannian manifolds

> This part might be extended to a separate note, let's check how far we can go from this part.
>
> References:
>
> - [Riemannian Geometry by John M. Lee](https://www.amazon.com/Introduction-Riemannian-Manifolds-Graduate-Mathematics/dp/3319917544?dib=eyJ2IjoiMSJ9.88u0uIXulwPpi3IjFn9EdOviJvyuse9V5K5wZxQEd6Rto5sCIowzEJSstE0JtQDW.QeajvjQEbsDmnEMfPzaKrfVR9F5BtWE8wFscYjCAR24&dib_tag=se&keywords=riemannian+manifold+by+john+m+lee&qid=1753238983&sr=8-1)

### Riemannian manifolds

A Riemannian manifold is a smooth manifold equipped with a **Riemannian metric**, which is a smooth assignment of an inner product to each tangent space $T_pM$ of the manifold.

An example of Riemannian manifold is the sphere $\mathbb{C}P^n$.

### Riemannian metric

A Riemannian metric is a smooth assignment of an inner product to each tangent space $T_pM$ of the manifold.

An example of Riemannian metric is the Euclidean metric on $\mathbb{R}^n$.

### Notion of Connection

A connection is a way to define the directional derivative of a vector field along a curve on a Riemannian manifold.

For every $p\in M$, where $M$ denote the manifold, suppose $M=\mathbb{R}^n$, then let $X=(f_1,\cdots,f_n)$ be a vector field on $M$. The directional derivative of $X$ along the point $p$ is defined as

$$
D_VX=\lim_{h\to 0}\frac{X(p+h)-X(p)}{h}
$$

### Nabla notation and Levi-Civita connection


### Ricci curvature


