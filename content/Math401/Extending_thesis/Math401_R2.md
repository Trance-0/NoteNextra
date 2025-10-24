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

## Differential Geometry

> This section is designed for stupids like me skipping too much essential materials in the book.

> This part might be extended to a separate note, let's check how far we can go from this part.
>
> References:
>
> - [Introduction to Smooth Manifolds by John M. Lee]
>
> - [Riemannian Geometry by John M. Lee](https://www.amazon.com/Introduction-Riemannian-Manifolds-Graduate-Mathematics/dp/3319917544?dib=eyJ2IjoiMSJ9.88u0uIXulwPpi3IjFn9EdOviJvyuse9V5K5wZxQEd6Rto5sCIowzEJSstE0JtQDW.QeajvjQEbsDmnEMfPzaKrfVR9F5BtWE8wFscYjCAR24&dib_tag=se&keywords=riemannian+manifold+by+john+m+lee&qid=1753238983&sr=8-1)

### Manifold

> Unexpectedly, a good definition of the manifold is defined in the topology I.
>
> Check section 36. This topic extends to a wonderful chapter 8 in the book where you can hardly understand chapter 2.

#### Definition of m-manifold

An $m$-manifold is a [Hausdorff space](../../Math4201/Math4201_L9#hausdorff-space) $X$ with a **countable basis** (second countable) such that each point of $x$ of $X$ has a neighborhood [homeomorphic](../../Math4201/Math4201_L10#definition-of-homeomorphism) to an open subset of $\mathbb{R}^m$.

<details>
<summary>Example of second countable space</summary>

Let $X=\mathbb{R}$ and $\mathcal{B}=\{(a,b)|a,b\in \mathbb{R},a<b\}$ (collection of all open intervals with rational endpoints).

Since the rational numbers are countable, so $\mathcal{B}$ is countable.

So $\mathbb{R}$ is second countable.

Likewise, $\mathbb{R}^n$ is also second countable.
</details>

<details>
<summary>Example of manifold</summary>

1-manifold is a curve and 2-manifold is a surface.

</details>

#### Theorem of imbedded space

If $X$ is a compact $m$-manifold, then $X$ can be imbedded in $\mathbb{R}^n$ for some $n$.

This theorem might save you from imagining abstract structures back to real dimension. Good news, at least you stay in some real numbers.

### Smooth manifolds and Lie groups

> This section is waiting for the completion of book Introduction to Smooth Manifolds by John M. Lee.

#### Partial derivatives

Let $U\subseteq \mathbb{R}^n$ and $f:U\to \mathbb{R}^n$ be a map.

For any $a=(a_1,\cdots,a_n)\in U$, $j\in \{1,\cdots,n\}$, the $j$-th partial derivative of $F$ at $a$ is defined as

$$
\begin{aligned}
\frac{\partial f}{\partial x_j}(a)&=\lim_{h\to 0}\frac{f(a_1,\cdots,a_j+h,\cdots,a_n)-f(a_1,\cdots,a_j,\cdots,a_n)}{h} \\
&=\lim_{h\to 0}\frac{f(a+he_j)-f(a)}{h}
\end{aligned}
$$

#### Continuously differentiable maps

Let $U\subseteq \mathbb{R}^n$ and $f:U\to \mathbb{R}^n$ be a map.

If for any $j\in \{1,\cdots,n\}$, the $j$-th partial derivative of $f$ is continuous at $a$, then $f$ is continuously differentiable at $a$.

If $\forall a\in U$, $\frac{\partial f}{\partial x_j}$ exists and is continuous at $a$, then $f$ is continuously differentiable on $U$. or $C^1$ map. (Note that $C^0$ map is just a continuous map.)

#### Smooth maps

A function $f:U\to \mathbb{R}^n$ is smooth if it is of class $C^k$ for every $k\geq 0$ on $U$. Such function is called a diffeomorphism if it is also a **bijection** and its **inverse is also smooth**.

#### Charts

Let $M$ be a smooth manifold. A **chart** is a pair $(U,\varphi)$ where $U\subseteq M$ is an open subset and $\varphi:U\to \hat{U}\subseteq \mathbb{R}^n$ is a homeomorphism (a continuous bijection map and its inverse is also continuous).

If $p\in U$ and $\varphi(p)=0$, then we say that $p$ is the origin of the chart $(U,\varphi)$.

For $p\in U$, we note that the continuous function $\varphi(p)=(x_1(p),\cdots,x_n(p))$ gives a vector in $\mathbb{R}^n$. The $(x_1(p),\cdots,x_n(p))$ is called the **local coordinates** of $p$ in the chart $(U,\varphi)$.

#### Atlas

Let $M$ be a smooth manifold. An **atlas** is a collection of charts $\mathcal{A}=\{(U_\alpha,\phi_\alpha)\}_{\alpha\in I}$ such that $M=\bigcup_{\alpha\in I} U_\alpha$.

An atlas is said to be **smooth** if the transition maps $\phi_\alpha\circ \phi_\beta^{-1}:\phi_\beta(U_\alpha\cap U_\beta)\to \phi_\alpha(U_\alpha\cap U_\beta)$ are smooth for all $\alpha, \beta\in I$.

#### Smooth manifold

A smooth manifold is a pair $(M,\mathcal{A})$ where $M$ is a topological manifold and $\mathcal{A}$ is a smooth atlas.

#### Fundamental group

A **fundamental group** of a point $p$ in a topological space $X$ is the group of all paths (continuous map $f:I\to X$, $I=[0,1]\subseteq \mathbb{R}$) from $p$ to $p$.

- Product defined as composition of paths.
- Identity element is the constant path from $p$ to $p$.
- Inverse is the reverse path.

#### smooth local coordinate representations

If $M$ is a smooth manifold, then any chart $(U,\varphi)$ contained in the given maximal smooth atlas is called a **smooth chart**, and the map $\varphi$ is called a **smooth coordinate map** because it gives a coordinate 

#### Lie group

Lie group is a group (satisfying group axioms: closure, associativity, identity, inverses) that is also a smooth manifold. with the operator $m:G\times G\to G$, and the inverse operation $i:G\to G$ that are both smooth.

In short, a Lie group is a group that is also a smooth manifold with map $G\times G\to G$ given by $(g,h)\mapsto gh^-1$ that is smooth.

<details>
<summary>Example of Lie group</summary>

The general linear group $GL(n,\mathbb{R})$ is the group of all $n\times n$ invertible matrices over $\mathbb{R}$.

This is a Lie group since

1. Multiplication is a smooth map $GL(n,\mathbb{R})\times GL(n,\mathbb{R})\to GL(n,\mathbb{R})$ since it is a polynomial map.
2. Inverse is a smooth map $GL(n,\mathbb{R})\to GL(n,\mathbb{R})$ by cramer's rule.

---

If $G$ is a Lie group, then any open subgroup (with subgroup topology and open set in $G$) $H$ of $G$ is also a Lie group.  

</details>

#### Translation map on Lie group

If $G$ is a Lie group, then the translation map $L_g:G\to G$ given by $L_g(h)=gh$ and $R_g:G\to G$ given by $R_g(h)=hg$ are both smooth and are diffeomorphisms on $G$.

#### Derivation and tangent vectors

The directional derivative of a geometric tangent vector $v_a\in \mathbb{R}^n_a$ yields a map $D_v\vert_a:C^\infty(\mathbb{R}^n)\to \mathbb{R}$ given by the formula

$$
D_v\vert_a(f)=D_v f(a)=\frac{d}{dt}\bigg\vert_{t=0}f(a+tv_a)
$$

Note that this is a linear over $\mathbb{R}$, and satisfies the product rule.

$$
D_v\vert_a(f\cdot g)=f(a)D_v\vert_a(g)+g(a)D_v\vert_a(f)
$$

We can generalize this representation to the following definition:

If $a$ is a point of $\mathbb{R}^n$, then a **derivation at $a$** is a linear map $w:C^\infty(\mathbb{R}^n)\to \mathbb{R}$ such that it is linear over $\mathbb{R}$ and satisfies the product rule.

$$
w(f\cdot g)=w(f)\cdot g(a)+f(a)\cdot w(g)
$$

Let $T_a\mathbb{R}^n$ denote the set of all derivations of $C^\infty(\mathbb{R}^n)$ at $a$. So $T_a\mathbb{R}^n$ is a vector space over $\mathbb{R}$.

$$
(w_1+w_2)(f)=w_1(f)+w_2(f),\quad (cw)(f)=c(w(f))
$$

Some key properties are given below and check the proof in the book for details.

1. If $f$ is a constant function, then $w(f)=0$.
2. If $f(a)=g(a)=0$, then $w(f\cdot g)=0$.
3. For each geometric tangent vector $v_a\in \mathbb{R}^n_a$, the map $D_v\vert_a:C^\infty(\mathbb{R}^n)\to \mathbb{R}$ is a derivation at $a$.
4. The map $v_a\mapsto D_v\vert_a$ is an isomorphism of vector spaces from $\mathbb{R}^n_a$ to $T_a\mathbb{R}^n$.

#### Tangent vector on Manifolds

Let $M$ be a smooth manifold. Let $p\in M$. A **tangent vector to $M$ at $p$** is a derivation at $p$ if it satisfies:

$$
v(f\cdot g)=f(p)vg+g(p)vf\prod \text{ for all } f,g\in C^\infty(M)
$$

The set of all derivations of $C^\infty(M)$ at $p$ is denoted by $T_pM$ is called tangent space to $M$ at $p$. An element of $T_pM$ is called a tangent vector to $M$ at $p$.

#### Tangent bundle

We define the tangent bundle of $M$ as the disjoint union of all the tangent spaces:

$$
TM=\bigsqcup_{p\in M} T_pM
$$

We write the element in $TM$ as pair $(p,v)$ where $p\in M$ and $v\in T_pM$.

The tangent bundle comes with a natural projection map $\pi:TM\to M$ given by $\pi(p,v)=p$.

#### Section of map

If $\pi:M\to N$ is any continuous map, a **section of $\pi$** is a continuous right inverse of $\pi$. For example $\sigma:N\to M$ is a section of $\pi$ if $\sigma\circ \pi=Id_N$.

#### Vector field

A vector field on $M$ is a section of the map $\pi:TM\to M$.

More concretely, a vector field is a continuous map $X:M\to TM$, usually written $p\mapsto X_p$, with property that

$$
\pi\circ X=Id_M
$$

> That is a map from element on the manifold to the tangent space of the manifold.



### Riemannian manifolds and geometry

#### Riemannian metric

A Riemannian metric is a smooth assignment of an inner product to each tangent space $T_pM$ of the manifold.

More formally, let $M$ be a smooth manifold. A **Riemannian metric** on $M$ is a smooth covariant 2-tensor field $g\in \mathcal{T}^2(M)$ whose value $g_p$ at each $p\in M$ is an inner product on $T_p M$.

Thus $g$ is a symmetric 2-tensor field that is positive definite in the sense that $g_p(v,v)\geq 0$ for each $p\in M$ and each $v\in T_p M$, with equality if and only if $v=0$.

Riemannian metric exists in great abundance.

A good news for smooth manifold is that every smooth manifold admits a Riemannian metric.

<details>
<summary> Example of Riemannian metrics</summary>

An example of Riemannian metric is the Euclidean metric, the bilinear form of $d(p,q)=\|p-q\|_2$ on $\mathbb{R}^n$.

More formally, the Riemannian metric $\overline{g}$ on $\mathbb{R}^n$ at each $x\in \mathbb{R}^n$ , for $v,w\in T_x \mathbb{R}^n$ with stardard coordinates $(x^1,\ldots,x^n)$ as $v=\sum_{i=1}^n v_i \partial_x^i$ and $w=\sum_{

</details>

#### Riemannian manifolds

A Riemannian manifold is a smooth manifold equipped with a **Riemannian metric**, which is a smooth assignment of an inner product to each tangent space $T_pM$ of the manifold.

More formally, a **Riemannian manifold** is a pair $(M,g)$, where $M$ is a smooth manifold and $g$ is a specific choice of Riemannian metric on $M$.

An example of Riemannian manifold is the sphere $\mathbb{C}P^n$.

### Notion of Connection

A connection is a way to define the directional derivative of a vector field along a curve on a Riemannian manifold.

For every $p\in M$, where $M$ denote the manifold, suppose $M=\mathbb{R}^n$, then let $X=(f_1,\cdots,f_n)$ be a vector field on $M$. The directional derivative of $X$ along the point $p$ is defined as

$$
D_VX=\lim_{h\to 0}\frac{X(p+h)-X(p)}{h}
$$

### Notion of Curvatures

> [!NOTE]
> 
> Geometrically, the curvature of the manifold is radius of the tangent sphere of the manifold.

#### Nabla notation and Levi-Civita connection



#### Fundamental theorem of Riemannian geometry

Let $(M,g)$ be a Riemannian or pseudo-Riemannian manifold (with or without boundary). There exist sa unique connection $\nabla$ on $TM$ that is compatible with $g$ and symmetric. It is called the **Levi-Civita** connection of $g$ (or also, when $g$ is a positive definite, the Riemannian connection).

#### Ricci curvature
