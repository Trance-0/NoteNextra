# Math416 Lecture 6

## Review

### Linear Fractional Transformations

Transformations of the form $f(z)=\frac{az+b}{cz+d}$,$a,b,c,d\in\mathbb{C}$ and $ad-bc\neq 0$ are called linear fractional transformations.

#### Theorem 3.8 Preservation of clircles

We defined clircle to be a circle or a line.

The circle equation is:

Let $z=u+iv$ be the center of the circle, $r$ be the radius of the circle.

$$
circle=\{z\in\mathbb{C}:|z-c|=r\}
$$

This is:

$$
|z|^2-c\overline{z}-\overline{c}z+|c|^2-r^2=0
$$

If $\phi$ is a non-constant linear fractional transformation, then $\phi$ maps clircles to clircles.

We claim that a map is circle preserving if and only if for some $\alpha,\beta,\gamma,\delta\in\mathbb{R}$.

$$
\alpha|z|^2+\beta Re(z)+\gamma Im(z)+\delta=0
$$

when $\alpha=0$, it is a line.

when $\alpha\neq 0$, it is a circle.

Proof:

Let $w=u+iv=\frac{1}{z}$, so $\frac{1}{w}=\frac{u}{u^2+v^2}-i\frac{v}{u^2+v^2}$.

Then the original equation becomes:

$$
\alpha\left(\frac{u}{u^2+v^2}\right)^2+\beta\left(\frac{u}{u^2+v^2}\right)+\gamma\left(-\frac{v}{u^2+v^2}\right)+\delta=0
$$

Which is in the form of circle equation.

QED

## Chapter 4 Elementary functions

> $e^t=\sum_{n=0}^{\infty}\frac{t^n}{n!}$

So, following the definition of $e^z$, we have:

$$
\begin{aligned}
e^{x+iy}&=e^xe^{iy} \\
&=e^x\left(\sum_{n=0}^{\infty}\frac{(iy)^n}{n!}\right) \\
&=e^x\left(\sum_{n=0}^{\infty}\frac{(-1)^ny^n}{n!}\right) \\
&=e^x(\cos y+i\sin y)
\end{aligned}
$$

### $e^z$

The exponential of $e^z=x+iy$ is defined as:

$$
e^z=exp(z)=e^x(\cos y+i\sin y)
$$

So,

$$
|e^z|=|e^x||\cos y+i\sin y|=e^x
$$

#### Theorem 4.3 $e^z$ is holomorphic

$e^z$ is holomorphic on $\mathbb{C}$.

Proof:

$$
\begin{aligned}
\frac{\partial}{\partial z}e^z&=\frac{1}{2}\left(\frac{\partial}{\partial x}+\frac{i}{\partial y}\right)e^x(\cos y+i\sin y) \\
&=\frac{1}{2}e^x(\cos y+i\sin y)+ie^x(-\sin y+i\cos y) \\
&=0
\end{aligned}
$$

QED

#### Theorem 4.4 $e^z$ is periodic

$e^z$ is periodic with period $2\pi i$.

Proof:

$$
e^{z+2\pi i}=e^z e^{2\pi i}=e^z\cdot 1=e^z
$$

QED

#### Theorem 4.5 $e^z$ as a map

$e^z$ is a map from $\mathbb{C}$ to $\mathbb{C}$ with period $2\pi i$.

$$
e^{\pi i}+1=0
$$

This is a map from cartesian coordinates to polar coordinates, where $e^x$ is the radius and $y$ is the angle.

This map attains every value in $\mathbb{C}\setminus\{0\}$.

#### Definition 4.6-8 $\cos z$ and $\sin z$

$$
\cos z=\frac{1}{2}(e^{iz}+e^{-iz})
$$

$$
\sin z=\frac{1}{2i}(e^{iz}-e^{-iz})
$$

$$
\cosh z=\frac{1}{2}(e^z+e^{-z})
$$

$$
\sinh z=\frac{1}{2}(e^z-e^{-z})
$$

From this definition, we can see that $\cos z$ and $\sin z$ are no longer bounded in the complex plane.

And this definition is still compatible with the previous definition of $\cos$ and $\sin$ when $z$ is real.

Moreover,

$$
\cosh(iz)=\cos z
$$

$$
\sinh(iz)=i\sin z
$$

### Logarithm

#### Definition 4.9 Logarithm

A logarithm of $a$ is any $b$ such that $e^b=a$.

If $a=0$, then no logarithm exists.

If $a\neq 0$, then there exists infinitely many logarithms of $a$.

Let $a=re^{i\theta}$, $b=x+iy$ be a logarithm of $a$.

Then,

$$
e^{x+iy}=re^{i\theta}
$$

Since logarithm is not unique, we can always add $2k\pi i$ to the angle.

If $y\in(-\pi,\pi]$, then $\log a=b$ means $e^b=a$ and $Im(b)\in(-\pi,\pi]$.

If $a=re^{i\theta}$, then $\log a=\log r+i(\theta_0+2k\pi)$.

#### Definition 4.10 of Branch of $\arg z$ and $\log z$

Let $G$ be an open connected subset of $\mathbb{C}\setminus\{0\}$.

A branch of $\arg(z)$ in $G$ is a continuous function $\alpha:G\to G$, such that $\alpha(z)$ is a value of $\arg(z)$.

A branch of $\log(z)$ in $G$ is a continuous function $\beta$, such that $e^{\beta(z)}=z$.

Note: $G$ has a branch of $\arg(z)$ if and only if it has a branch of $\log(z)$.

Proof:

Suppose there exists $\alpha(z)$ such that $\forall z\in G$, $\alpha(z)\in G$, then $l(z)=\ln|z|+i\alpha(z)$ is a branch of $\log(z)$.

Suppose there exists $l(z)$ such that $\forall z\in G$, $l(z)\in G$, then $\alpha(z)=Im(z)$ is a branch of $\arg(z)$.

QED

If $G=\mathbb{C}\setminus\{0\}$, then  not branch of $\arg(z)$ exists.

#### Corollary of 4.10

Suppose $\alpha_1$ and $\alpha_2$ are two branches of $\arg(z)$ in $G$.

Then,

$$
\alpha_1(z)-\alpha_2(z)=2k\pi
$$

for some $k\in\mathbb{Z}$.


Suppose $l_1$ and $l_2$ are two branches of $\log(z)$ in $G$.

Then,

$$
l_1(z)-l_2(z)=2k\pi i
$$

for some $k\in\mathbb{Z}$.

#### Theorem 4.11

$\log(z)$ is holomorphic on $\mathbb{C}\setminus\{0\}$.

Proof:

Method 1: Use polar coordinates. (See in homework)

Method 2: Use the fact that $\log(z)$ is the inverse of $e^z$.

Suppose $h=s+it$, $e^h=e^s(\cos t+i\sin t)$, $e^h-1=e^s(\cos t-1)+i\sin t$. So

$$
\begin{aligned}
\frac{e^h-1}{h}&=\frac{(s+it)e^s(\cos t-1)+i\sin t}{s^2+t^2} \\
&=\frac{e^s(\cos t-1)}{s^2+t^2}+i\frac{\sin t}{s^2+t^2}
\end{aligned}
$$

Continue next time.
