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

> Example:
>
> $f(z)=\frac{e^z-1}{z^2}$ has a removable singularity at $z=0$.
>
> The Laurent series of $f$ at $z=0$ can be found using the Taylor series of $e^z-1$ at $z=0$.
>
> $$e^z-1=z+\frac{z^2}{2!}+\frac{z^3}{3!}+\cdots$$
>
> So the Laurent series of $f$ at $z=0$ is
>
> $$f(z)=\frac{1}{z^2}+\frac{1}{z}+\sum_{n=0}^{\infty}\frac{z^n}{n!}$$
>
> The principle part is zero, so $z=0$ is a removable singularity.

#### Poles





















