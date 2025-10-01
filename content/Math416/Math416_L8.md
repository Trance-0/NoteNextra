# Math416 Lecture 8

## Review

### Sequences of Functions

Let $f_n: G \to \mathbb{C}$ be a sequence of functions.

#### Convergence Pointwise

Definition:

Let $z\in G$, $\forall \epsilon > 0$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(z) - f(z)| < \epsilon$.

#### Convergence Uniformly

Definition:

$\forall \epsilon > 0$, $\forall z\in G$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(z) - f(z)| < \epsilon$.

#### Convergence Locally Uniformly

Definition:

$\forall \epsilon > 0$, $\forall z\in G$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(z) - f(z)| < \epsilon$.

#### Convergence Uniformly on Compact Sets

Definition: $\forall C\subset G$ that is compact, $\forall \epsilon > 0, \exists N \in \mathbb{N} \text{ s.t. } \forall n \geq N, \forall z\in C, |f_n(z) - f(z)| < \epsilon$

#### Power Series

Definition:

$$
\sum_{n=0}^{\infty} c_n (z - z_0)^n
$$

$z_0$ is the center of the power series.

#### Theorem of Power Series

If a power series converges at $z_0$, then it converges absolutely at every point of $\overline{B_r(z_0)}$ that is strictly inside the disk of convergence.

## Continue on Power Series

### Review on $\limsup$

The $\limsup(a_n)$ $a_n\in\mathbb{R}$ is defined as the sup of subsequence of $(a_n)$ as $n$ approaches infinity.

It has the following properties that is useful for proving the remaining parts for this course.

Suppose $(a_n)_1^\infty$ is a sequence of real numbers

1. If $\rho\in \mathbb{R}$ satisfies that $\rho<\limsup_{n\to\infty}a_n$, then $\{a_n : a_n > \rho\}$ is infinite.
2. If $\rho\in \mathbb{R}$ satisfies that $\rho>\limsup_{n\to\infty}a_n$, then $\{a_n : a_n > \rho\}$ is finite.

### Limits of Power Series

#### Theorem 5.12

Cauchy-Hadamard Theorem:

The radius of convergence of the power series is given by $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ is given by

$$
\frac{1}{R} = \limsup_{n\to\infty} |a_n|^{1/n}
$$

<details>
<summary>Proof</summary>

Suppose $(b_n)^{\infty}_{n=0}$ is a sequence of real numbers such that $\lim_{n\to\infty} b_n$ may nor may not exists by $(-1)^n(1-\frac{1}{n})$.

The limit superior of $(b_n)$ is defined as

$$
s_n = \sup_{k\geq n} b_k
$$

$s_n$ is a decreasing sequence, by completeness of $\mathbb{R}$, every bounded sequence has a limit in $\mathbb{R}$.

So $s_n$ converges to some limit $s\in\mathbb{R}$.

Without loss of generality, this also holds for infininum of $s_n$.

Forward direction:

We want to show that the radius of convergence of $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ is greater than or equal to $\frac{1}{\limsup_{n\to\infty} |a_n|^{1/n}}$.

Since $\sum_{n=0}^{\infty} 1z^n=\frac{1}{1-z}$ for $|z|<1$. Assume $\limsup_{n\to\infty} |a_n|^{1/n}$ is finite, then $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ converges absolutely at $z_0$.

Let $\rho>\limsup_{n\to\infty} |a_n|^{1/n}$, then $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|a_n|^{1/n}\leq \rho$. (By property of $\limsup$)

So $\frac{1}{R}=\limsup_{n\to\infty} |a_n|^{1/n}\leq\rho$

So $R\geq\frac{1}{\rho}$

Backward direction:

Suppose $|z|>R$, then $\exists$ number $|z|$ such that $|z|>\frac{1}{\rho}\geq R$.

So $\rho<\limsup_{n\to\infty} |a_n|^{1/n}$

This means that $\exists$ infinitely many $n_j$s such that $|a_{n_j}|^{1/n_j}>\rho$

So $|a_{n_j}z^{n_j}|>\rho^{n_j}|z|^{n_j}$

Series $\sum_{n=1}^{\infty} a_nz^n$ diverges, each individual term is not going to $0$.

So $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ does not converge at $z$ if $|z|> \frac{1}{\rho}\geq R$

So $R=\frac{1}{\rho}$.

</details>

_What if $|z-z_0|=R$?_

For $\sum_{n=0}^{\infty} z^n$, the radius of convergence is $1$.

It diverges eventually on the circle of convergence.

For $\sum_{n=0}^{\infty} \frac{1}{(n+1)^2}z^n$, the radius of convergence is $1$.

This converges everywhere on the circle of convergence.

For $\sum_{n=0}^{\infty} \frac{1}{n+1}z^n$, the radius of convergence is $1$.

This diverges at $z=1$ (harmonic series) and converges at $z=-1$ (alternating harmonic series).

#### Theorem 5.15

Differentiation of power series

Suppose $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ has a positive radius of convergence $R$. Define $f(z)=\sum_{n=0}^{\infty} a_n (z - z_0)^n$, then $f$ is holomorphic on $B_R(0)$ and $f'(z)=\sum_{n=1}^{\infty} n a_n (z - z_0)^{n-1}=\sum_{k=0}^{\infty} (k+1)a_{k+1} (z - z_0)^k$.

> Here below is the proof on book, which will be covered in next lecture.

<details>
<summary>Proof</summary>

Without loss of generality, assume $z_0=0$. Let $R$ be the radius of convergence for the two power series: $\sum_{n=0}^{\infty} a_n z^n$ and $\sum_{n=1}^{\infty} n a_n z ^{n-1}$. The two power series have the same radius of convergence $|R|$.

> For $z,w\in \mathbb{C}, n\in \N$, $$z^n-w^n=(z-w)\sum_{k=0}^{n-1} z^k w^{n-k-1}$$

Let $z_1\in B_R(0)$, $|z_1|<\rho<R$ for some $\rho\in\mathbb{R}$.

$$
\begin{aligned}
\frac{f(z)-f(z_1)}{z-z_1}-g(z_1)&=\frac{1}{z-z_1}\left[\sum_{n=0}^\infty a_n z^n -\sum_{n=0}^\infty a_n z_1^n\right]-\sum_{n=1}^{\infty} n a_n z_1 ^{n-1}\\
&=\sum_{n=1}^{\infty} a_n \left[\frac{z^n-z_1^n}{z-z_1}-nz_1^{n-1}\right]\\
&=\sum_{n=1}^{\infty} a_n \left[\left(\sum_{k=0}^{n-1}z^kz_1^{n-k-1}\right)-nz_1^{n-1}\right]\\
&=\sum_{n=2}^{\infty} a_n \left[\sum_{k=1}^{n-1}z_1^{n-k-1}(z^k-z^k_1)\right]
\end{aligned}
$$

Using the lemma again we get

$$
\begin{aligned}
|z^k-z_1^k|&=|z-z_1|\left|\sum_{j=0}^{k-1}z_jz_1^{k-j-1}\right|\\
&\leq |z-z_1| \sum_{j=0}^{k-1}|z_j||z_1^{k-j-1}|\\
&\leq k\rho^{k-1}|z-z_1|
\end{aligned}
$$

Then,

$$
\begin{aligned}
\left|\frac{f(z)-f(z_1)}{z-z_1}-g(z_1)\right|&=\left|\sum_{n=2}^{\infty} a_n \left[\sum_{k=1}^{n-1}z_1^{n-k-1}(z^k-z^k_1)\right]\right|\\
&\leq \sum_{n=2}^{\infty} |a_n| \left[\sum_{k=1}^{n-1}|z_1|^{n-k-1}|z^k-z_1^k|\right]\\
&\leq \sum_{n=2}^{\infty} |a_n|  \left[ \sum_{k=1}^{n-1} \rho^{n-k-1} (k\rho^{k-1}|z-z_1|) \right]\\
&=|z-z_1|\sum_{n=2}^\infty|a_n|\left[\frac{n(n-1)}{2}\rho^{n-2}\right]
\end{aligned}
$$

One can use ratio test to find that $\sum_{n=2}^\infty|a_n|\left[\frac{n(n-1)}{2}\rho^{n-2}\right]$ converges, we denote the sum using $M$

So $\left|\frac{f(z)-f(z_1)}{z-z_1}-g(z_1)\right|\leq M|z-z_1|$ for $|z|<\rho$.

So $\lim_{z\to z_1}\frac{f(z)-f(z_1)}{z-z_1}=g(z_1)$.

</details>
