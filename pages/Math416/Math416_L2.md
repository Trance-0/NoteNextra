# Lecture 2

## Review?

$$
z_1=r_1(\cos\theta_1+i\sin\theta_1)=r_1\text{cis}(\theta_1)
$$

$$
z_2=r_2(\cos\theta_2+i\sin\theta_2)=r_2\text{cis}(\theta_2)
$$

$$
z_1z_2=r_1r_2\text{cis}(\theta_1+\theta_2)
$$

$$
\forall n\in \mathbb{Z}, z^n=r^n\text{cis}(n\theta)
$$

### De Moivre's Formula

$$
\forall n\in \mathbb{Z}, z^n=r^n\text{cis}(n\theta)
$$

## New Fancy stuff

Claim:

$$
\forall n\in \mathbb{Z}, z^{\frac{1}{n}}=\sqrt[n]{r}\text{cis}\left(\frac{1}{n}\theta\right)
$$

Proof:

Take an $n$th power, De Moivre's formula holds $\forall$ rational $k\in \mathbb{Q}$.

Example:

we calculate $1^{\frac{1}{3}}$

$$
1=\text{cis}\left(2k\pi\right)
$$

$$
1^{\frac{1}{3}}=\text{cis}\left(\frac{2k\pi}{3}\right)
$$

When $k=0$, we get $1$

When $k=1$, we get $\text{cis}\left(\frac{2\pi}{3}\right)=-\frac{1}{2}+i\frac{\sqrt{3}}{2}$

When $k=2$, we get $\text{cis}\left(\frac{4\pi}{3}\right)=-\frac{1}{2}-i\frac{\sqrt{3}}{2}$

#### Strange example

Let $p(x)=a_3x^3+a_2x^2+a_1x+a_0$ be a polynomial with real coefficients.

Without loss of generality, Let $a_3=1$, $x=y-\beta$

We claim $\beta=\frac{a_2}{3}$

$$
\begin{aligned}
p(x)&=(y-\beta)^3+a_2(y-\beta)^2+a_1(y-\beta)+a_0\\
&=y^3+\left(a_2-3\beta\right)y^2+\left(a_1-3\beta^2-2a_2\beta\right)y+\left(a_0-3\beta^3-3a_1\beta-a_2\beta^2\right)\\
\end{aligned}
$$

It's sufficient to know how to solve real cubic equations.

$$
q(x)=x^3+ax+b
$$

Let $x=w+\frac{c}{w}$

Solve

$$
\begin{aligned}
(w+\frac{c}{w})^3+a(w+\frac{c}{w})+b=0\\
w^3+3w\frac{c}{w}+3\frac{c^2}{w^2}+aw+\frac{ac}{w}+b=0\\
\end{aligned}
$$

We choose $c$ such that $3c+a=0$, $c=-\frac{a}{3}$

$$
\begin{aligned}
w^3+3\frac{c^2}{w}+b=0\\
w^6+bw^3+c^2=0\\
\end{aligned}
$$

Notice that $w^6+bw^3+c^2=0$ is a quadratic equation in $w^3$.

$$
w^3=\frac{-b\pm\sqrt{b^2-4c^3}}{2}
$$

So $w$ is a cube root of $\frac{-b\pm\sqrt{b^2-4c^3}}{2}$

$x=w+\frac{c}{w}=w-\frac{a}{3w}$

Example:

$$
p(x)=x^3-3x+1=0
$$

$a=-3$, $b=1$, $c=-\frac{a}{3}=-\frac{-3}{3}=1$

$$
\begin{aligned}
w^3&=\frac{-b\pm\sqrt{b^2-4c^3}}{2}\\
&=\frac{-1\pm\sqrt{1-4}}{2}\\
&=\frac{-1\pm\sqrt{3}i}{2}\\
\end{aligned}
$$

To take cube root of $w$,

$$
w^3=\text{cis}\left(\frac{2\pi}{3}+2k\pi\right)
$$

So

Case 1:

$$
w=\text{cis}\left(\frac{2\pi}{9}+\frac{2k\pi}{3}\right)
$$

It is sufficient to check $k=0,1,2$ by nth root of unity.

When $k=0$, $w=\text{cis}\left(\frac{2\pi}{9}\right)$

When $k=1$, $w=\text{cis}\left(\frac{8\pi}{9}\right)$

When $k=2$, $w=\text{cis}\left(\frac{14\pi}{9}\right)$

Case 2:

$$
w=\text{cis}\left(\frac{4\pi}{9}+\frac{2k\pi}{3}\right)
$$

When $k=0$, $w=\text{cis}\left(\frac{4\pi}{9}\right)$

When $k=1$, $w=\text{cis}\left(\frac{10\pi}{9}\right)$

When $k=2$, $w=\text{cis}\left(\frac{16\pi}{9}\right)$

So the final roots are:

$$
w+\frac{c}{w}=w+\frac{1}{w}
$$

$$
\text{cis}(\theta)+\frac{1}{\text{cis}(\theta)}=\text{cis}(\theta)+\text{cis}(-\theta)=2\cos(\theta)
$$

So the final roots are:

$$
2\cos\left(\frac{2\pi}{9}\right), 2\cos\left(\frac{8\pi}{9}\right), 2\cos\left(\frac{14\pi}{9}\right), 2\cos\left(\frac{4\pi}{9}\right), 2\cos\left(\frac{10\pi}{9}\right), 2\cos\left(\frac{16\pi}{9}\right)
$$

Remember $\cos(2\pi-\theta)=\cos(\theta)$

So the final roots are:

$$
2\cos\left(\frac{2\pi}{9}\right), 2\cos\left(\frac{8\pi}{9}\right), 2\cos\left(\frac{14\pi}{9}\right)
$$

### Compact

A set $K\in \mathbb{R}^n$ is compact if and only if it is closed and bounded. [Compact Theorem in Math 4111](https://notenextra.trance-0.com/Math4111/Math4111_L12#theorem-241)

If $\{x_n\}\in K$, then there must be some point $w$ such that every disk $D(w,\epsilon)$ contains infinitely many points of $K$. [Infinite Point Theorem about Compact Set in Math 4111](https://notenextra.trance-0.com/Math4111/Math4111_L11#theorem-237)

Unfortunately, $\mathbb{C}$ is not compact.

### Riemann Sphere and Complex Projective Space

Let $\mathbb{C}\sim \mathbb{R}^2\subset \mathbb{R}^3$

We put a unit sphere on the origin, and project the point on sphere to $\mathbb{R}^2$ by drawing a line through the north pole and the point on the sphere.

So all the point on the north pole is mapped to outside of the unit circle in $\mathbb{R}^2$.

all the point on the south pole is mapped to inside of the unit circle in $\mathbb{R}^2$.

The line through $(0,0,1)$ and $(\xi,\eta,\zeta)$ intersects the unit sphere at $(x,y,0)$

Line $(tx,ty,1-t)$ intersects $\zeta^2$ at $t^2x^2+t^2y^2+(1-t)^2=1$

So $t=\frac{2}{1+x^2+y^2}$

$$
\zeta=x+iy\mapsto \frac{1}{1+|\zeta|^2}(2Re(\zeta),2Im(\zeta),|\zeta|^2-1)
$$

$$
(\xi,\eta,\zeta)\mapsto \frac{\xi+i\eta}{1-\zeta}
$$

This is a homeomorphism. $\mathbb{C}\setminus\{\infty\}\simeq S^2$

#### Derivative of a function

Suppose $\Omega$ is an open subset of $\mathbb{C}$.

A function $f:\Omega\to \mathbb{C}$'s derivative is defined as

$$
f'(\zeta_0)=\lim_{\zeta\to \zeta_0}\frac{f(\zeta)-f(\zeta_0)}{\zeta-\zeta_0}
$$

$f=u+iv$, $u,v:\Omega\to \mathbb{R}$

How are $f'$ and derivatives of $u$ and $v$ related?

1. Differentiation and complex linearity applies to $f$

Chain rule applies

$$
\frac{d}{d\zeta}(f(g(\zeta)))=f'(g(\zeta))g'(\zeta)
$$

Polynomials

$$
\frac{d}{d\zeta}\zeta^n=n\zeta^{n-1}
$$
