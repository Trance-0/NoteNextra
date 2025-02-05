# Lecture 6

## Review

### Linear Fractional Transformations

Transformations of the form $f(z)=\frac{az+b}{cz+d}$,$a,b,c,d\in\mathbb{C}$ and $ad-bc\neq 0$ are called linear fractional transformations.

#### Theorem 3.8 Preservation of clircles

We defined clircle to be a circle or a line.

The circle equation is:

Let $\zeta=u+iv$ be the center of the circle, $r$ be the radius of the circle.

$$
circle=\{z\in\mathbb{C}:|\zeta-c|=r\}
$$

This is:

$$
|\zeta|^2-c\overline{\zeta}-\overline{c}\zeta+|c|^2-r^2=0
$$

If $\phi$ is a non-constant linear fractional transformation, then $\phi$ maps clircles to clircles.

We claim that a map is circle preserving if and only if for some $\alpha,\beta,\gamma,\delta\in\mathbb{R}$.

$$
\alpha|\zeta|^2+\beta Re(\zeta)+\gamma Im(\zeta)+\delta=0
$$

when $\alpha=0$, it is a line.

when $\alpha\neq 0$, it is a circle.

Proof:

Let $w=u+iv=\frac{1}{\zeta}$, so $\frac{1}{w}=\frac{u}{u^2+v^2}-i\frac{v}{u^2+v^2}$.

Then the original equation becomes:

$$
\alpha\left(\frac{u}{u^2+v^2}\right)^2+\beta\left(\frac{u}{u^2+v^2}\right)+\gamma\left(-\frac{v}{u^2+v^2}\right)+\delta=0
$$

Which is in the form of circle equation.

EOP

## Chapter 4 Elementary functions

> $e^t=\sum_{n=0}^{\infty}\frac{t^n}{n!}$

So, following the definition of $e^\zeta$, we have:

$$
\begin{aligned}
e^{x+iy}&=e^xe^{iy} \\
&=e^x\left(\sum_{n=0}^{\infty}\frac{(iy)^n}{n!}\right) \\
&=e^x\left(\sum_{n=0}^{\infty}\frac{(-1)^ny^n}{n!}\right) \\
&=e^x(\cos y+i\sin y)
\end{aligned}
$$

### $e^\zeta$

The exponential of $e^\zeta=x+iy$ is defined as:

$$
e^\zeta=exp(\zeta)=e^x(\cos y+i\sin y)
$$

So,

$$
|e^\zeta|=|e^x||\cos y+i\sin y|=e^x
$$

#### Theorem 4.3 $e^\zeta$ is holomorphic

$e^\zeta$ is holomorphic on $\mathbb{C}$.

Proof:

$$
\begin{aligned}
\frac{\partial}{\partial\zeta}e^\zeta&=\frac{1}{2}\left(\frac{\partial}{\partial x}+\frac{i}{\partial y}\right)e^x(\cos y+i\sin y) \\
&=\frac{1}{2}e^x(\cos y+i\sin y)+ie^x(-\sin y+i\cos y) \\
&=0
\end{aligned}
$$

EOP

#### Theorem 4.4 $e^\zeta$ is periodic

$e^\zeta$ is periodic with period $2\pi i$.

Proof:

$$
e^{\zeta+2\pi i}=e^\zeta e^{2\pi i}=e^\zeta\cdot 1=e^\zeta
$$

EOP

#### Theorem 4.5 $e^\zeta$ as a map

$e^\zeta$ is a map from $\mathbb{C}$ to $\mathbb{C}$ with period $2\pi i$.

$$
e^{\pi i}+1=0
$$

This is a map from cartesian coordinates to polar coordinates, where $e^x$ is the radius and $y$ is the angle.

This map attains every value in $\mathbb{C}\setminus\{0\}$.

#### Definition 4.6-8 $\cos\zeta$ and $\sin\zeta$

$$
\cos\zeta=\frac{1}{2}(e^{i\zeta}+e^{-i\zeta})
$$

$$
\sin\zeta=\frac{1}{2i}(e^{i\zeta}-e^{-i\zeta})
$$

$$
\cosh\zeta=\frac{1}{2}(e^\zeta+e^{-\zeta})
$$

$$
\sinh\zeta=\frac{1}{2}(e^\zeta-e^{-\zeta})
$$

From this definition, we can see that $\cos\zeta$ and $\sin\zeta$ are no longer bounded.

And this definition is still compatible with the previous definition of $\cos$ and $\sin$ when $\zeta$ is real.

Moreover,

$$
\cosh(i\zeta)=\cos\zeta
$$

$$
\sinh(i\zeta)=i\sin\zeta
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

#### Definition 4.10

Let $G$ be an open connected subset of $\mathbb{C}\setminus\{0\}$.

A branch of $\arg(\zeta)$ in $G$ is a continuous function $\alpha$, such that $\alpha(\zeta)$ is a value of $\arg(\zeta)$.

A branch of $\log(\zeta)$ in $G$ is a continuous function $\beta$, such that $e^{\beta(\zeta)}=\zeta$.

Note: $G$ has a branch of $\arg(\zeta)$ if and only if it has a branch of $\log(\zeta)$.

If $G=\mathbb{C}\setminus\{0\}$, then  not branch of $\arg(\zeta)$ exists.

Suppose $\alpha_1$ and $\alpha_2$ are two branches of $\arg(\zeta)$ in $G$.

Then,

$$
\alpha_1(\zeta)-\alpha_2(\zeta)=2k\pi i
$$

for some $k\in\mathbb{Z}$.

#### Theorem 4.11

$\log(\zeta)$ is holomorphic on $\mathbb{C}\setminus\{0\}$.

Proof:

Method 1: Use polar coordinates. (See in homework)

Method 2: Use the fact that $\log(\zeta)$ is the inverse of $e^\zeta$.

Suppose $h=s+it$, $e^h=e^s(\cos t+i\sin t)$, $e^h-1=e^s(\cos t-1)+i\sin t$. So

$$
\begin{aligned}
\frac{e^h-1}{h}&=\frac{(s+it)e^s(\cos t-1)+i\sin t}{s^2+t^2} \\
&=\frac{e^s(\cos t-1)}{s^2+t^2}+i\frac{\sin t}{s^2+t^2}
\end{aligned}
$$

Continue next time.
