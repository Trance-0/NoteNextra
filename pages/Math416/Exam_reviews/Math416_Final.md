# Math 416 Final Review

Story after Cauchy's theorem

## Chapter 7: Cauchy's Theorem

### Existence of harmonic conjugate

Suppose $f=u+iv$ is holomorphic on a domain $U\subset\mathbb{C}$. Then $u=\Re f$ is harmonic on $U$. That is $\Delta u=\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}=0$.

Moreover, there exists $g\in O(U)$ such that $g$ is unique up to an additive imaginary constant.

> Example:
>
> Find a harmonic conjugate of $u(x,y)=\log|\frac{z}{z-1}|$
>
> Note that $\log(\frac{z}{z-1})=\log \left|\frac{z}{z-1}\right|+i(\arg(z)-\arg(z-1))$ is harmonic on $\mathbb{C}\setminus\{1\}$.
>
> So the harmonic conjugate of $u(x,y)=\log|\frac{z}{z-1}|$ is $v(x,y)=\arg(z)-\arg(z-1)+C$ where $C$ is a constant.
>
> Note that the harmonic conjugate may exist locally but not globally. (e.g. $u(x,y)=\log|z(z-1)|$ has a local harmonic conjugate $i(\arg(z)+\arg(z-1)+C)$ but this is not a well defined function since $\arg(z)+\arg(z-1)$ is not single-valued.)

### Corollary for harmonic functions

#### Theorem 7.19

Harmonic function are infinitely differentiable.

#### Theorem 7.20

Mean value property of harmonic functions.

Let $u$ be harmonic on an open set of $\Omega$, then 

$$u(z_0)=\frac{1}{2\pi}\int_0^{2\pi} u(z_0+re^{i\theta}) d\theta$$

for any $z_0\in\Omega$ and $r>0$ such that $D(z_0,r)\subset\Omega$.

#### Theorem 7.21

Identity theorem for harmonic functions.

Let $u$  be harmonic on a domain $\Omega$. If $u=0$ on some open set $G\subset\Omega$, then $u\equiv 0$ on $\Omega$.

#### Theorem 7.22

Maximum principle for harmonic functions.

Let $u$ be a non-constant real-valued harmonic function on a domain $\Omega$. Then $|u|$ does not attain a maximum value in $\Omega$.

## Chapter 8: Laurent Series and Isolated Singularities

### Laurent Series

Laurent series is a generalization of Taylor series.

Laurent series is a power series of the form

$$f(z)=\sum_{n=-\infty}^{\infty} a_n (z-z_0)^n$$

where

$$
a_k=\frac{1}{2\pi i}\int_{C_r}\frac{f(z)}{(z-z_0)^{k+1}}dz
$$

The series converges on an annulus $R_1<|z-z_0|<R_2$.

where $R_1=\limsup_{n\to\infty} |a_{-n}|^{1/n}$ and $R_2=\frac{1}{\limsup_{n\to\infty} |a_n|^{1/n}}$.

### Cauchy's Formula for an Annulus

Let $f$ be holomorphic on an annulus $R_1<r_1<|z-z_0|<r_2<R_2$. And $w\in A(z_0;R_1,R_2)$. Find the Annulus $w\in A(z_0;r_1,r_2)$

Then

$$
f(w)=\frac{1}{2\pi i}\int_{C_{r_1}}\frac{f(z)}{z-w}dz-\frac{1}{2\pi i}\int_{C_{r_2}}\frac{f(z)}{z-w}dz
$$

### Isolated singularities

Let $f$ be holomorphic on $0<|z-z_0|<R$ (The punctured disk of radius $R$ centered at $z_0$). If there exists a Laurent series of $f$ convergent on $0<|z-z_0|<R$, then $z_0$ is called an isolated singularity of $f$.

The series $f(z)=\sum_{n=-\infty}^{-1}a_n(z-z_0)^n$ is called the principle part of Laurent series of $f$ at $z_0$.

#### Removable singularities

If the principle part of Laurent series of $f$ at $z_0$ is zero, then $z_0$ is called a removable singularity of $f$.

Criterion for a removable singularity:

If $f$ is bounded on $0<|z-z_0|<R$, then $z_0$ is a removable singularity.

> Example:
>
> $f(z)=\frac{1}{e^z-1}$ has a removable singularity at $z=0$.
>
> The Laurent series of $f$ at $z=0$ is
>
> $$f(z)=\frac{1}{z}+\sum_{n=0}^{\infty}\frac{z^n}{n!}$$
>
> The principle part is zero, so $z=0$ is a removable singularity.

#### Poles

If the principle part of Laurent series of $f$ at $z_0$ is a finite sum, then $z_0$ is called a pole of $f$.

Criterion for a pole:

If $f$ has an isolated singularity at $z_0$, and $\lim_{z\to z_0}|f(z)|=\infty$, then $z_0$ is a pole of $f$.

> Example:
>
> $f(z)=\frac{1}{z^2}$ has a pole at $z=0$.
>
> The Laurent series of $f$ at $z=0$ is
>
> $$f(z)=\frac{1}{z^2}$$
>
> The principle part is $\frac{1}{z^2}$, so $z=0$ is a pole.

#### Essential singularities

If $f$ has an isolated singularity at $z_0$, and it is neither a removable singularity nor a pole, then $z_0$ is called an essential singularity of $f$.

"Criterion" for an essential singularity:

If the principle part of Laurent series of $f$ at $z_0$ has infinitely many non-zero coefficients corresponding to negative powers of $z-z_0$, then $z_0$ is called an essential singularity of $f$.

> Example:
>
> $f(z)=\sin(\frac{1}{z})$ has an essential singularity at $z=0$.
>
> The Laurent series of $f$ at $z=0$ is
>
> $$f(z)=\frac{1}{z}-\frac{1}{6z^3}+\frac{1}{120z^5}-\cdots$$
>
> Since there are infinitely many non-zero coefficients corresponding to negative powers of $z$, $z=0$ is an essential singularity.

#### Singularities at infinity

We say $f$ has a singularity (removable, pole, or essential) at infinity if $f(1/z)$ has an isolated singularity (removable, pole, or essential) at $z=0$.

> Example:
>
> $f(z)=\frac{z^4}{(z-1)(z-3)}$ has a pole of order 2 at infinity.
>
> Plug in $z=1/w$, we get $f(1/w)=\frac{1}{w^2}\frac{1}{(1/w-1)(1/w-3)}=\frac{1}{w^2}\frac{1}{(1-w)(1-3w)}=\frac{1}{w^2}(1+O(w))$, which has pole of order 2 at $w=0$.

#### Residue

The residue of $f$ at $z_0$ is the coefficient of the term $(z-z_0)^{-1}$ in the Laurent series of $f$ at $z_0$.

> Example:
>
> $f(z)=\frac{1}{z^2}$ has a residue of 0 at $z=0$.
>
> $f(z)=\frac{z^3}{z-1}$ has a residue of 1 at $z=1$.

Residue for pole with higher order:

If $f$ has a pole of order $n$ at $z_0$, then the residue of $f$ at $z_0$ is

$$
\operatorname{res}(f,z_0)=\frac{1}{(n-1)!}\lim_{z\to z_0}\frac{d^{n-1}}{dz^{n-1}}((z-z_0)^nf(z))
$$

## Chapter 9: Generalized Cauchy's Theorem

### Winding number

The winding number of a closed curve $C$ with respect to a point $z_0$ is

$$
\operatorname{ind}_C(z_0)=\frac{1}{2\pi i}\int_C\frac{1}{z-z_0}dz
$$

_the winding number is the number of times the curve $C$ winds around the point $z_0$ counterclockwise. (May be negative)_

### Contour integrals

A contour is a piecewise continuous curve $\gamma:[a,b]\to\mathbb{C}$ with integer coefficients.

$$
\Gamma=\sum_{i=1}^p n_j\gamma_j
$$

where $\gamma_j:[a_j,b_j]\to\mathbb{C}$ is continuous closed curve and $n_j\in\mathbb{Z}$.

### Interior of a curve

The interior of a curve is the set of points $z\in\mathbb{C}$ such that $\operatorname{ind}_{\Gamma}(z)\neq 0$.

The winding number of contour $\Gamma$ is the sum of the winding numbers of the components of $\Gamma$ around $z_0$.

$$
\operatorname{ind}_{\Gamma}(z)=\sum_{j=1}^p n_j\operatorname{ind}_{\gamma_j}(z)
$$

### Separation lemma

Let $\Omega\subseteq\mathbb{C}$ be a domain and $K\subset \Omega$ be compact. Then there exists a simple contour $\Gamma\subset \Omega\setminus K$ such that $K\subset \operatorname{int}_{\Gamma}(\Gamma)\subset \Omega$.

Key idea:

Let $0<\delta<d(K,\partial \Omega)$, then draw the grid lines and trace the contour.

### Residue theorem

Let $\Omega$ be a domain, $\Gamma$ be a contour such that $\Gamma\cap \operatorname{int}(\Gamma)\subset \Omega$. Let $f$ be holomorphic on $\Omega\setminus \{z_1,z_2,\cdots,z_p\}$ and $z_1,z_2,\cdots,z_p$ are finitely many points in $\Omega$, where $z_1,z_2,\cdots,z_p\notin \Gamma$. Then

$$
\int_{\Gamma}f(z)dz=2\pi i\sum_{j=1}^p \operatorname{res}(f,z_j)
$$

Key: Prove by circle around each singularity and connect them using two way paths.


### Homotopy*

Suppose $\gamma_0, \gamma_1$ are two curves from
$[0,1]$ to $\Omega$ with same end points $P,Q$.

A homotopy is a continuous function of curves $\gamma_t, 0\leq t\leq 1$, deforming $\gamma_0$ to $\gamma_1$, keeping the end points fixed.

Formally, if $H:[0,1]\times [0,1]\to \Omega$ is a continuous function satsifying

1. $H(s,0)=\gamma_0(s)$, $\forall s\in [0,1]$
2. $H(s,1)=\gamma_1(s)$, $\forall s\in [0,1]$
3. $H(0,t)=P$, $\forall t\in [0,1]$
4. $H(1,t)=Q$, $\forall t\in [0,1]$

Then we say $H$ is a homotopy between $\gamma_0$ and $\gamma_1$. (If $\gamma_0$ and $\gamma_1$ are closed curves, $Q=P$)

#### Lemma 9.12 Technical Lemma

Let $\phi:[0,1]\times [0,1]\to \mathbb{C}\setminus \{0\}$ is continuous. Then there exists a continuous map $\psi:[0,1]\times [0,1]\to \mathbb{C}$ such that $e^\phi=\psi$. Moreover, $\psi$ is unique up to an additive constant in $2\pi i\mathbb{Z}$.


### General approach to evaluate definite integrals

Choose a contour so that one side is the desired integral.

Handle the other sides using:

- Symmetry
- Favorite estimate
- Bound function by another function whose integral goes to 0






























