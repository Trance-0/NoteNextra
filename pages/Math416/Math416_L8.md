# Math416 Lecture 8

## Review

### Sequences of Functions

Let $f_n: G \to \mathbb{C}$ be a sequence of functions.

#### Convergence Pointwise

Definition:

Let $\zeta\in G$, $\forall \epsilon > 0$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(\zeta) - f(\zeta)| < \epsilon$.

#### Convergence Uniformly

Definition:

$\forall \epsilon > 0$, $\forall \zeta\in G$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(\zeta) - f(\zeta)| < \epsilon$.

#### Convergence Locally Uniformly

Definition:

$\forall \epsilon > 0$, $\forall \zeta\in G$, $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|f_n(\zeta) - f(\zeta)| < \epsilon$.

#### Convergence Uniformly on Compact Sets

Definition: $\forall C\subset G$ that is compact, $\forall \epsilon > 0, \exists N \in \mathbb{N} \text{ s.t. } \forall n \geq N, \forall \zeta\in C, |f_n(\zeta) - f(\zeta)| < \epsilon$

#### Power Series

Definition:

$$
\sum_{n=0}^{\infty} c_n (\zeta - \zeta_0)^n
$$

$\zeta_0$ is the center of the power series.

#### Theorem of Power Seriess

If a power series converges at $\zeta_1$, then it converges absolutely at every point of $\overline{B(0,r)}$ that is strictly inside the disk of convergence.

## Continue on Power Series

### Limits of Power Series

#### Theorem 5.12

Cauchy-Hadamard Theorem:

The radius of convergence of the power series is given by $\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$ is given by

$$
\frac{1}{R} = \limsup_{n\to\infty} |a_n|^{1/n}
$$

Proof:

Suppose $(b_n)^{\infty}_{n=0}$ is a sequence of real numbers such that $\lim_{n\to\infty} b_n$ may nor may not exists by $(-1)^n(1-\frac{1}{n})$.

The limit superior of $(b_n)$ is defined as

$$
s_n = \sup_{k\geq n} b_k
$$

$s_n$ is a decreasing sequence, by completeness of $\mathbb{R}$, every bounded sequence has a limit in $\mathbb{R}$.

So $s_n$ converges to some limit $s\in\mathbb{R}$.

Without loss of generality, this also holds for infininum of $s_n$.

Forward direction:

We want to show that the radius of convergence of $\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$ is greater than or equal to $\frac{1}{\limsup_{n\to\infty} |a_n|^{1/n}}$.

Since $\sum_{n=0}^{\infty} 1\zeta^n=\frac{1}{1-\zeta}$ for $|\zeta|<1$. Assume $\limsup_{n\to\infty} |a_n|^{1/n}$ is finite, then $\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$ converges absolutely at $\zeta_0$.

Let $\rho>\limsup_{n\to\infty} |a_n|^{1/n}$, then $\exists N \in \mathbb{N}$ such that $\forall n \geq N$, $|a_n|^{1/n}\leq \rho$.

So $\frac{1}{R}=\limsup_{n\to\infty} |a_n|^{1/n}<\rho$

So $R>\frac{1}{\rho}$

/*TRACK LOST*/

Backward direction:

Suppose $|\zeta|>R$, then $\exists$ number $|\zeta|$ such that $|\zeta|>\frac{1}{\rho}>R$.

So $\rho<\limsup_{n\to\infty} |a_n|^{1/n}$

This means that $\exists$ infinitely many $n_j$s such that $|a_{n_j}|^{1/n_j}>\rho$

So $|a_{n_j}\zeta^{n_j}|>\rho^{n_j}|\zeta|^{n_j}$

Series $\sum_{n=1}^{\infty} a_n\zeta^n$ diverges, each individual term is not going to $0$.

So $\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$ does not converge at $\zeta$

EOP

_What if $|\zeta-\zeta_0|=R$?_

For $\sum_{n=0}^{\infty} \zeta^n$, the radius of convergence is $1$.

It diverges eventually on the circle of convergence.

For $\sum_{n=0}^{\infty} \frac{1}{(n+1)^2}\zeta^n$, the radius of convergence is $1$.

This converges everywhere on the circle of convergence.

For $\sum_{n=0}^{\infty} \frac{1}{n+1}\zeta^n$, the radius of convergence is $1$.

This diverges at $\zeta=1$ (harmonic series) and converges at $\zeta=-1$ (alternating harmonic series).

#### Theorem 5.15

Suppose $\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$ has a positive radius of convergence $R$. Define $f(\zeta)=\sum_{n=0}^{\infty} a_n (\zeta - \zeta_0)^n$, then $f$ is holomorphic on $B(0,R)$ and $f'(\zeta)=\sum_{n=1}^{\infty} n a_n (\zeta - \zeta_0)^{n-1}=\sum_{k=0}^{\infty} (k+1)a_{k+1} (\zeta - \zeta_0)^k$.

Proof:

/*TRACK LOST*/
