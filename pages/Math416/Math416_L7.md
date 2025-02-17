# Math416 Lecture 7

## Review

### Exponential function

$$
e^z=e^{x+iy}=e^x(\cos y+i\sin y)
$$

### Logarithm

#### Definition 4.9 Logarithm

A logarithm of $a$ is any $b$ such that $e^b=a$.

### Branch of Logarithm

A branch of logarithm is a continuous function $f$ on a domain $D$ such that $e^{f(z)}=\exp(f(z))=z$ for all $z\in D$.

## Continue on Chapter 4 Elementary functions

### Logarithm

#### Theorem 4.11

$\log(\zeta)$ is holomorphic on $\mathbb{C}\setminus\{0\}$.

Proof:

We proved that $\frac{\partial}{\partial\overline{z}}e^{\zeta}=0$ on $\mathbb{C}\setminus\{0\}$.

Then $\frac{d}{dz}e^{\zeta}=\frac{\partial}{\partial x}e^{\zeta}=0$ if we know that $e^{\zeta}$ is holomorphic.

Since $\frac{d}{dz}e^{\zeta}=e^{\zeta}$, we know that $e^{\zeta}$ is conformal, so any branch of logarithm is also conformal.

Since $\exp(\log(\zeta))=\zeta$, we know that $\log(\zeta)$ is the inverse of $\exp(\zeta)$, so $\frac{d}{dz}\log(\zeta)=\frac{1}{e^{\log(\zeta)}}=\frac{1}{\zeta}$.

EOP

We call $\frac{f'}{f}$ the logarithmic derivative of $f$.

## Chapter 5. Power series

If $\sum_{n=0}^{\infty}c_n$ converges, then $\lim_{n\to\infty}c_n=0$ exists.

### Geometric series

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

EOP

### Convergence

#### Definition 5.4

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

#### Theorem 5.?

If the subsequence of a converging sequence of functions converges (a), then the original sequence converges (a).

You can replace (a) with locally uniform convergence, uniform convergence, pointwise convergence, etc.

#### UNKNOWN

We defined $a^b=\{e^{b\log a}\}$ if $b$ is real, then $a^b$ is unique, if $b$ is complex, then $a^b=e^{b\log a}\{e^{2k\pi ik b}\},k\in\mathbb{Z}$.

### Power series

#### Definition 5.8

A power series is a series of the form $\sum_{n=0}^{\infty}c_n(\zeta-\zeta_0)^n$.

#### Theorem 5.10

For every power series, there exists a radius of convergence $R$ such that the series converges absolutely and locally uniformly on $B(\zeta_0,R)$.

And it diverges pointwise outside $B(\zeta_0,R)$.

Proof:

Without loss of generality, we can assume that $\zeta_0=0$.

Suppose that the power series is $\sum_{n=0}^{\infty}c_n (\zeta)^n$ converges at $\zeta=re^{i\theta}$.

We want to show that the series converges absolutely and uniformly on $\overline{B(0,r)}$ (_closed disk, I prefer to use this notation, although they use $\mathbb{D}$ for the disk (open disk)_).

We know $c_n r^ne^{in\theta}\to 0$ as $n\to\infty$.

So there exists $M\geq|c_n r^ne^{in\theta}|$ for all $n\in\mathbb{N}$.

So $\forall \zeta\in\overline{B(0,r)}$, $|c_n\zeta^n|\leq |c_n| |\zeta|^n \leq M \left(\frac{|\zeta|}{r}\right)^n$.

So $\sum_{n=0}^{\infty}|c_n\zeta^n|$ converges absolutely.

So the series converges absolutely and uniformly on $\overline{B(0,r)}$.

If $|\zeta| > r$, then $|c_n \zeta^n|$ does not tend to zero, and the series diverges.

EOP

#### Possible Cases for the Convergence of Power Series

1. **Convergence Only at $\zeta = 0$**:
   - **Proof**: If the power series $\sum_{n=0}^{\infty} c_n (\zeta - \zeta_0)^n$ converges only at $\zeta = 0$, it means that the radius of convergence $R = 0$. This occurs when the terms $c_n (\zeta - \zeta_0)^n$ do not tend to zero for any $\zeta \neq 0$. The series diverges for all $\zeta \neq 0$ because the terms grow without bound.

2. **Convergence Everywhere**:
   - **Proof**: If the power series converges for all $\zeta \in \mathbb{C}$, the radius of convergence $R = \infty$. This implies that the terms $c_n (\zeta - \zeta_0)^n$ tend to zero for all $\zeta$. This can happen if the coefficients $c_n$ decrease rapidly enough, such as in the exponential series.

3. **Convergence Within a Finite Radius**:
   - **Proof**: For a power series with a finite radius of convergence $R$, the series converges absolutely and uniformly for $|\zeta - \zeta_0| < R$ and diverges for $|\zeta - \zeta_0| > R$. On the boundary $|\zeta - \zeta_0| = R$, the series may converge or diverge depending on the specific series. This is determined by the behavior of the terms on the boundary.
