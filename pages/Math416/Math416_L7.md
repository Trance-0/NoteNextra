# Math416 Lecture 7

## Review

### Exponential function

$$
e^z=e^{x+iy}=e^x(\cos y+i\sin y)
$$

### Logarithm Reviews

#### Definition 4.9 Logarithm

A logarithm of $a$ is any $b$ such that $e^b=a$.

### Branch of Logarithm

A branch of logarithm is a continuous function $f$ on a domain $D$ such that $e^{f(z)}=\exp(f(z))=z$ for all $z\in D$.

## Continue on Chapter 4 Elementary functions

### Logarithm

#### Theorem 4.11

$\log(z)$ is holomorphic on $\mathbb{C}\setminus\{0\}$.

Proof:

We proved that $\frac{\partial}{\partial\overline{z}}e^{z}=0$ on $\mathbb{C}\setminus\{0\}$.

Then $\frac{d}{dz}e^{z}=\frac{\partial}{\partial x}e^{z}=0$ if we know that $e^{z}$ is holomorphic.

Since $\frac{d}{dz}e^{z}=e^{z}$, we know that $e^{z}$ is conformal, so any branch of logarithm is also conformal.

Since $\exp(\log(z))=z$, we know that $\log(z)$ is the inverse of $\exp(z)$, so $\frac{d}{dz}\log(z)=\frac{1}{e^{\log(z)}}=\frac{1}{z}$.

QED

We call $\frac{f'}{f}$ the logarithmic derivative of $f$.

#### Definition 4.16

_I don't know if this material is covered or not, so I will add it here to prevent confusion for future readers_

If $a$ and $c$ are complex numbers, with $a\neq 0$, then by the values of $a^c$ one means the value of $e^{c\log a}$.

For example, $1^i=e^{i (2\pi n i)}$

If you accidentally continue on this section and find it interesting, you will find Riemann zeta function

$$
z(s)=\sum_{n=1}^{\infty}\frac{1}{n^s}
$$

And analytic continuation for such function for number less than or equal to $1$.

And perhaps find trivial zeros for negative integers on real line. It is important to note that the Riemann zeta function has non-trivial zeros, which are located in the critical strip where the real part of $s$ is between 0 and 1. The famous Riemann Hypothesis conjectures that all non-trivial zeros lie on the critical line where the real part of $s$ is $\frac{1}{2}$.

## Chapter 5. Power series

### Convergence

#### Necessary Condition for Convergence

If $\sum_{n=0}^{\infty}c_n$ converges, then $\lim_{n\to\infty}c_n=0$ exists.

### Geometric series

Let $c$ be a complex number

$$
\sum_{n=0}^{N}c^n=\frac{1-c^{N+1}}{1-c}
$$

If $|c|<1$, then $\lim_{N\to\infty}\sum_{n=0}^{N}c^n=\frac{1}{1-c}$.

otherwise, the series diverges.

Proof:

The geometric series converges if $\frac{c^{N+1}}{1-c}$ converges.

$$
(1-c)(1+c+c^2+\cdots+c^N)=1-c^{N+1}
$$

If $|c|<1$, then $\lim_{N\to\infty}c^{N+1}=0$, so $\lim_{N\to\infty}(1-c)(1+c+c^2+\cdots+c^N)=1$.

If $|c|\geq 1$, then $c^{N+1}$ does not converge to 0, so the series diverges.

QED

#### Theorem 5.4 (Triangle Inequality for Series)

If the series $\sum_{n=0}^{\infty}c_n$ converges, then $\left|\sum_{n=0}^\infty c_n\right|\leq \sum_{n=0}^{\infty}|c_n|$.

#### Definition 5.5

$$
\sum_{n=0}^{\infty}c_n
$$

converges absolutely if $\sum_{n=0}^{\infty}|c_n|$ converges.

Note: _Some other properties of converging series covered in Math4111, bad, very bad._

#### Definition 5.6 Convergence of sequence of functions

A sequence of functions $f_n$ **converges pointwise** to $f$ on a set $G$ if for every $z\in G$, $\forall\epsilon>0$, $\exists N$ such that for all $n\geq N$, $|f_n(z)-f(z)|<\epsilon$.

(choose $N$ based on $z$)

A sequence of functions $f_n$ **converges uniformly** to $f$ on a set $G$ if for every $\epsilon>0$, there exists a positive integer $N$ such that for all $n\geq N$ and all $z\in G$, $|f_n(z)-f(z)|<\epsilon$.

(choose $N$ based on $\epsilon$)

A sequence of functions $f_n$ **converges locally uniformly** to $f$ on a set $G$ if for every $z\in G$, $\forall\epsilon>0$, $\exists r>0$ such that for all $z\in B(z,r)$, $\forall n\geq N$, $|f_n(z)-f(z)|<\epsilon$.

(choose $N$ based on $z$ and $\epsilon$)

A sequence of functions $f_n$ **converges uniformly on compacta** to $f$ on a set $G$ if it converges uniformly on every compact subset of $G$.

#### Theorem 5.7

If the subsequence (or partial sum) of a converging sequence of functions converges (a), then the original sequence converges (a).

The N-th partial sum of the series $\sum_{n=0}^\infty f_n$ is $\sum_{n=0}^{N}f_n$

You can replace (a) with locally uniform convergence, uniform convergence, pointwise convergence, etc.

> Corollary from definition of $a^b$ in complex plane
> 
> We defined $a^b=\{e^{b\log a}\}$ if $b$ is real, then $a^b$ is unique, if $b$ is complex, then $a^b=e^{b\log a}\{e^{2k\pi ik b}\},k\in\mathbb{Z}$.

### Power series

#### Definition 5.8

A power series is a series of the form $\sum_{n=0}^{\infty}c_n(z-z_0)^n$.

#### Definition 5.9 Region of Convergence

For every power series, there exists a radius of convergence $r$ such that the series converges absolutely and locally uniformly on $B_r(z_0)$.

And it diverges pointwise outside $B_r(z_0)$.

Proof:

Without loss of generality, we can assume that $z_0=0$.

Suppose that the power series is $\sum_{n=0}^{\infty}c_n (z)^n$ converges at $z=re^{i\theta}$.

We want to show that the series converges absolutely and uniformly on $\overline{B_r(0)}$ (_closed disk, I prefer to use this notation, although they use $\mathbb{D}$ for the disk (open disk)_).

We know $c_n r^ne^{in\theta}\to 0$ as $n\to\infty$.

So there exists $M\geq|c_n r^ne^{in\theta}|$ for all $n\in\mathbb{N}$.

So $\forall z\in\overline{B_r(0)}$, $|c_nz^n|\leq |c_n| |z|^n \leq M \left(\frac{|z|}{r}\right)^n$.

So $\sum_{n=0}^{\infty}|c_nz^n|$ converges absolutely.

So the series converges absolutely and uniformly on $\overline{B_r(0)}$.

If $|z| > r$, then $|c_n z^n|$ does not tend to zero, and the series diverges.

QED

We denote this $r$ captialized by te radius of convergence

#### Possible Cases for the Convergence of Power Series

1. **Convergence Only at $z = 0$**:
   - **Proof**: If the power series $\sum_{n=0}^{\infty} c_n (z - z_0)^n$ converges only at $z = 0$, it means that the radius of convergence $R = 0$. This occurs when the terms $c_n (z - z_0)^n$ do not tend to zero for any $z \neq 0$. The series diverges for all $z \neq 0$ because the terms grow without bound.

2. **Convergence Everywhere**:
   - **Proof**: If the power series converges for all $z \in \mathbb{C}$, the radius of convergence $R = \infty$. This implies that the terms $c_n (z - z_0)^n$ tend to zero for all $z$. This can happen if the coefficients $c_n$ decrease rapidly enough, such as in the exponential series.

3. **Convergence Within a Finite Radius**:
   - **Proof**: For a power series with a finite radius of convergence $R$, the series converges absolutely and uniformly for $|z - z_0| < R$ and diverges for $|z - z_0| > R$. On the boundary $|z - z_0| = R$, the series may converge or diverge depending on the specific series. This is determined by the behavior of the terms on the boundary.
