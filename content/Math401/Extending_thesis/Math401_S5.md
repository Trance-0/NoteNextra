# Math 401, Fall 2025: Thesis notes, S5, Differential Forms

This note aim to investigate  What is homology and cohomology?

To answer this question, it's natural to revisit some concepts we have in Calc III. Particularly, Stoke's Theorem and De Rham Theorem.

Recall that the Stock's theorem states that:

$$
\int_c d\omega=\int_{\partial c} \omega
$$

Where $\partial c$ is a closed curve and $\omega$ is a 1-form.

What is form means here?

> This section is based on extension for conversation with Professor Feres on [11/12/2025].

## Differential Forms and applications

> Main reference: [Differential Forms and its applications](https://link.springer.com/book/10.1007/978-3-642-57951-6)

### Differential Forms in our sweet home, $\mathbb{R}^n$

> [!NOTE]
>
> I'm a bit deviated form the notation we used in the book, in the actual text, they use $\mathbb{R}^n_p$ to represent the tangent space of $\mathbb{R}^n$ at $p$. But to help you link those concepts as we see in smooth manifolds, $T_pM$, we will use $T_p\mathbb{R}^n$ to represent the tangent space of $\mathbb{R}^n$ at $p$.

Let $p$ be a point in $\mathbb{R}^n$. The tangent space of $\mathbb{R}^n$ at $p$ is denoted by $T_p\mathbb{R}^n$, is the set of all vectors in $\mathbb{R}^n$ that use $p$ as origin.

#### Definition of a vector field

A vector field is a map that associates to each point $p$ in $\mathbb{R}^n$ a vector $v(p)$ in $T_p\mathbb{R}^n$.

That is

$$
v(p)=a_1(p)e_1+...+a_n(p)e_n
$$

where $e_1,...,e_n$ is the standard basis of $\mathbb{R}^n$, (in fact could be anything you like)

And $a_i(p)$ is a function that maps $\mathbb{R}^n$ to $\mathbb{R}$.

$v$ is differentiable at $p$ if the function $a_i$ is differentiable at $p$.

This gives a vector field $v$ on $\mathbb{R}^n$.

#### Definition of dual space of tangent space

To each tangent space $T_p\mathbb{R}^n$ we can associate the dual space $(T_p\mathbb{R}^n)^*$, the set of all linear maps from $T_p\mathbb{R}^n$ to $\mathbb{R}$. ($\varphi:T_p\mathbb{R}^n\to \mathbb{R}$)

The basis for $(T_p\mathbb{R}^n)^*$ is obtained by taking $(dx_i)_p$ for $i=1,...,n$.

This is the dual basis for $\{(e_i)_p\}$ since.

$$
(dx_i)_p(e_j)=\frac{\partial x_i}{\partial x_j}=\begin{cases}0 \text{ if } i\neq j\\
1 \text{ if } i=j
\end{cases}
$$

#### Definition of a 1-form

A 1-form is a linear map from $(T_p\mathbb{R}^n)^*$ to $\mathbb{R}$.

$$
\omega(p)=a_1(p)(dx_1)_p+...+a_n(p)(dx_n)_p
$$

where $a_i(p)$ is a function that maps $\mathbb{R}^n$ to $\mathbb{R}$.

Generalization of 1-form is $k$-form defined as follows:

#### Definition of a $k$-form

We can define the set of linear map $\Lambda^2(\mathbb{R}^n_p)^*$ where $\varphi$ maps from $(T_p\mathbb{R}^n)^*\times ... \times (T_p\mathbb{R}^n)^*$ to $\mathbb{R}$, that are bilinear and alternate ($\varphi(v_1,v_2)=-\varphi(v_2,v_1$).

when $\varphi_1$ and $\varphi_2$ are linear maps from $(T_p\mathbb{R}^n)^*$ to $\mathbb{R}$, then $\varphi_1\wedge \varphi_2$ is a bilinear map from $(T_p\mathbb{R}^n)^*\times (T_p\mathbb{R}^n)^*$ to $\mathbb{R}$ by setting

$$
(\varphi_1\wedge \varphi_2)(v_1,v_2)=\varphi_1(v_1)\varphi_2(v_2)-\varphi_1(v_2)\varphi_2(v_1)=\det(\varphi_i(v_j))
$$

where $i,j=1,\ldots,k$, $k$ is the degree of the exterior form

More generally, $(\varphi_1\wedge \varphi_2\wedge\dots \wedge \varphi_k)(v_1,v_2,\dots,v_k)=\det(\varphi_i(v_j))$.

And $\{(dx_i\wedge dx_j)_p,i<j\}$ forms a basis for $\Lambda^2(\mathbb{R}^n_p)^*$.

- $(dx_i\wedge dx_j)_p=-(dx_j\wedge dx_i)_p$
- $(dx_i\wedge dx_i)_p=0$

An exterior fom of degree 2 in $\mathbb{R}^n$ is a correspondence $\omega$ that associates to each point $p$ in $\mathbb{R}^n$ an element $\omega(p)\in \Lambda^2(\mathbb{R}^n_p)^*$.

That is

$$
\omega(p)=a_{12}(p)(dx_1\wedge dx_2)_p+a_{13}(p)(dx_1\wedge dx_3)_p+a_{23}(p)(dx_2\wedge dx_3)_p
$$

In the case of $\mathbb{R}^3$.

<details>
<summary>Example for real space 4 product</summary>

0-forms: functino in $\mathbb{R}^4$

1-forms: $a_1(p)(dx_1)_p+a_2(p)(dx_2)_p+a_3(p)(dx_3)_p+a_4(p)(dx_4)_p$

2-forms: $a_{12}(p)(dx_1\wedge dx_2)_p+a_{13}(p)(dx_1\wedge dx_3)_p+a_{14}(p)(dx_1\wedge dx_4)_p+a_{23}(p)(dx_2\wedge dx_3)_p+a_{24}(p)(dx_2\wedge dx_4)_p+a_{34}(p)(dx_3\wedge dx_4)_p$

3-forms: $a_{123}(p)(dx_1\wedge dx_2\wedge dx_3)_p+a_{124}(p)(dx_1\wedge dx_2\wedge dx_4)_p+a_{134}(p)(dx_1\wedge dx_3\wedge dx_4)_p+a_{234}(p)(dx_2\wedge dx_3\wedge dx_4)_p$

4-forms: $a_{1234}(p)(dx_1\wedge dx_2\wedge dx_3\wedge dx_4)_p$
</details>

#### Exterior product of forms

Let $\omega=\sum a_{I}dx_I$ be a k form where $I=(i_1,i_2,\ldots,i_k)$ and $i_1<i_2<\cdots<i_k$.

$\varphi\wedge \omega=\sum b_jdx_j$ be a s form where $j=(j_1,j_2,\ldots,j_s)$ and $j_1<j_2<\cdots<j_s$.

The exterior product is defined as

$$
(\varphi\wedge \omega)(v_1,\ldots,v_k)=\sum_{IJ}a_I b_J dx_I\wedge dx_J
$$

<details>
<summary>Example for exterior product of forms</summary>

Let $\omega=x_1dx_1+x_2dx_2+x_3dx_3$ be a 1-form in $\mathbb{R}^3$ and $\varphi=x_1dx_1\wedge dx_1\wedge dx_3$ be a 2-form in $\mathbb{R}^3$.

Then

$$
\begin{aligned}
\omega\wedge \varphi&=x_2 dx_2\wedge dx_1\wedge dx_3+x_3x_1 dx_3\wedge dx_1\wedge dx_2\\
&=(x_1x_3-x_2)dx_1\wedge dx_2\wedge dx_3
\end{aligned}
$$

Note $dx_1\wedge dx_1=0$ therefore $dx_1\wedge dx_1\wedge dx_3=0$
</details>

#### Additional properties of exterior product

Let $\omega$ be a $k$ form, $\varphi$ be a $s$ form, and $\theta$ be an $r$ form.

- $(\omega\wedge\varphi)\wedge\theta=\omega\wedge(\varphi\wedge\theta)$
- $(\omega\wedge\varphi)=(-1)^{k+s}(\varphi\wedge\omega)$
- $\omega\wedge(\varphi+\theta)=\omega\wedge\varphi+\omega\wedge\theta$

#### Important implications with differential maps

Let $f:\mathbb{R}^n\to \mathbb{R}^m$ be a differentiable map. Then $f$ induces a map $f^*$ from k-forms in $\mathbb{R}^n$ to k-forms in $\mathbb{R}^m$.

That is

$$
(f^*\omega)(p)(v_1,\ldots,v_k)=\omega(f(p))(df(p)_1v_1,\ldots,df(p)_kv_k)
$$

Here $p\in \mathbb{R}^n$, $v_1,\ldots,v_k\in T_p\mathbb{R}^n$, and $df(p):T_p\mathbb{R}^n\to T_{f(p)}\mathbb{R}^m$.

If $g$ is a 0-form, we have

$f^*(g)=g\circ f$

#### Additional properties for differential maps

Let $f:\mathbb{R}^n\to \mathbb{R}^m$ be a differentiable map, $\omega,\varphi$ be k-forms on $\mathbb{R}^m$ and $g:\mathbb{R}^m\to \mathbb{R}$ be a 0-form on $\mathbb{R}^m$. Then:

- $f^*(\omega+\varphi)=f^*\omega+f^*\varphi$
- $f^*(g\omega)=f^*(g)f^*\omega$
- If $\varphi_1,\dots,\varphi_k$ are 1-forms in $\mathbb{R}^m$, $f^*(\varphi_1\wedge\cdots\wedge\varphi_k)=f^*\varphi_1\wedge\cdots\wedge f^*\varphi_k$

If $g:\mathbb{R}^p\to \mathbb{R}^n$ is a differential map and $\varphi,\omega$ are any two-forms in $\mathbb{R}^m$.

- $f^*(\omega\wedge\varphi)=f^*\omega\wedge f^*\varphi$
- $(f\circ g)^*omega=g^*(f^*\omega)$

#### Exterior Differential

Let $\omega=\sum a_{I}dx_I$ be a k form in $mathbb{R}^n$. The exterior differential $d\omega$ of $\omega$ is defined by

$$
d\omega=\sum da_{I}\wedge dx_I
$$

#### Additional properties of exterior differential

- $d(\omega_1+\omega_2)=d\omega_1+d\omega_2$ where $\omega_1,\omega_2$ are k-forms
- $d(\omega\wedge\varphi)=d\omega\wedge\varphi+(-1)^kw\wedge d\varphi$ where $\omega$ is a k-form and $\varphi$ is a s-form
- $d(d\omega)=d^2\omega=0$
- $d(f^*\omega)=f^*d\omega$ where $f$ is a differentiable map and $\omega$ is a k-form

## Differentiable manifolds

### A different flavor of differential manifolds

#### Definition of differentiable manifold

An $n$-dimensional differentiable manifold is a set $M$ together with a family of of injective maps $f_\alpha:U_\alpha\subseteq \mathbb{R}^n\to M$ of open sets $U_\alpha$ in $\mathbb{R}^n$ in to $M$ such that:

- $\bigcup_\alpha f_\alpha(U_\alpha)=M$
- For each pair $\alpha,\beta$, with $f_\alpha(U_\alpha)\cap f_\beta(U_\beta)=W\neq \emptyset$, the sets $f_\alpha^{-1}(W)$ and $f_\beta^{-1}(W)$ are open sets in $\mathbb{R}^n$ and the maps $f_\beta^{-1}\circ f_\alpha$ and $f_\alpha^{-1}\circ f_\beta$ are differentiable.
- The family $\{(U_\alpha,f_\alpha)\}$ is the maximal relative to the two properties above.

> This condition is weaker than smooth manifold, in smooth manifold, we require the function to be class of $C^\infty$ (continuous differentiable of all order), now we only needs it to be differentiable.

#### Definition of differentiable map between differentiable manifolds

Let $M_1^n$ and $M_2^M$ be differentiable manifolds. A map $\varphi:M_1\to M_2$ is a differentiable at a point $p\in M_1$ if given a parameterization $g:V\subset \mathbb{R}^m\to M_2$ around $\varphi(p)$, there exists a parameterization $f:U\subseteq \mathbb{R}^n\to M_1$ around $p$ such that:

$\varphi(f(U))\subset g(V)$ and the map

$$
g^{-1}\circ \varphi\circ f: U\subset \mathbb{R}^n\to \mathbb{R}^m
$$

is differentiable at $f^{-1}(p)$.

It is differentiable in an open set of $M_1$ if it is differentiable at all points in such set.

The map $g^{-1}\circ \varphi\circ f$ is the expression of parameterization of $f$ and $g$. (Since the change of parameterization is differentiable, the property that $f$ is differentiable does not depends on the choice of parameterization.)

#### Tangent vector over differentiable curve

Let $\alpha: I\to M$ be a differentiable curve on a differentiable manifold $M$, with $\alpha(0)=p\in M$, and let $D$ be the set of functions of $M$ which are differentiable at $p$. then tangent vector to the curve $\alpha$ at $p$ is the map $\alpha'(0):D\to \mathbb{R}$ given by

$$
\alpha'(0)\varphi=\frac{d}{dt}(\varphi\cdot \alpha(t))|_{t=0}
$$

A tangent vector at $p\in M$ is the 

[2025.12.03]

Goal: Finish the remaining parts of this book