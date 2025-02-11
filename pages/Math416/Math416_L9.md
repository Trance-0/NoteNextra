# Math416 Lecture 9

## Review

### Power Series

Let $f(\zeta)=\sum_{n=0}^{\infty}a_n(\zeta-\zeta_0)^n$ be a power series.

#### Radius of Convergence

The radius of convergence of a power series is

$$
R=\frac{1}{\limsup_{n\to\infty}|a_n|^{1/n}}.
$$

## New Material on Power Series

### Derivative of Power Series

Let $f(\zeta)=\sum_{n=0}^{\infty}a_n(\zeta-\zeta_0)^n$ be a power series.

Let $g(\zeta)=\sum_{n=0}^{\infty}na_n(\zeta-\zeta_0)^{n-1}$ be another power series.

Then $g$ is holomorphic on $D(\zeta_0,R)$ and $g'(\zeta)=f(\zeta)$ for all $\zeta\in D(\zeta_0,R)$. and $f'(\zeta)=g(\zeta)$.

Proof:

Note radius of convergence of $g$ is also $R$.

$\limsup_{n\to\infty}|na_n|^{1/(n-1)}=\limsup_{n\to\infty}|a_n|^{1/n}$.

Let $\zeta\in D(\zeta_0,R)$.

let $|\zeta-\zeta_0|<\rho<R$.

Without loss of generality, assume $\zeta_0=0$. Let $|w|<\rho$.

$$
\begin{aligned}
\frac{f(\zeta)-f(w)}{\zeta-w}-g(\zeta)&=\sum_{n=0}^{\infty}\left[\frac{1}{\zeta-w}\left(a_n(\zeta^n-w^n)\right)-na_n\zeta^{n-1}\right] \\
&=\sum_{n=0}^{\infty}a_n\left[\frac{\zeta^n-w^n}{\zeta-w}-n\zeta^{n-1}\right]
\end{aligned}
$$

Notice that

$$
\begin{aligned}
\frac{\zeta^n-w^n}{\zeta-w}&=\sum_{k=0}^{n-1}\zeta^{n-1-k}w^k \\
&=\zeta^{n-1}+\zeta^{n-2}w+\cdots+w^{n-1}
\end{aligned}
$$

Since

$$
|w^k-\zeta^k|=\left|(w-\zeta)\left(\sum_{j=0}^{k-1}w^{k-1-j}\zeta^j\right)\right|\leq|w-\zeta|k\rho^{k-1}
$$

$$
\begin{aligned}
\frac{\zeta^n-w^n}{\zeta-w}-n\zeta^{n-1}&=(\zeta^{n-1}-\zeta^{n-1})+(\zeta^{n-2}w-\zeta^{n-1})+\cdots+(\zeta w^{n-1}-\zeta^{n-1}) \\
&=\zeta^{n-2}(w-\zeta)+\zeta^{n-3}(w^2-\zeta^2)+\cdots+\zeta^0(w^{n-1}-\zeta^{n-1}) \\
&=\sum_{k=0}^{n-1}\zeta^{n-1-k}(w^k-\zeta^k)\\
&\leq\sum_{k=0}^{n-1}\zeta^{n-1-k}|w-\zeta|k\rho^{k-1} \\
&\leq|w-\zeta|\sum_{k=0}^{n-1}k\rho^{k-1} \\
\end{aligned}
$$

Apply absolute value,

$$
\begin{aligned}
\left|\frac{f(\zeta)-f(w)}{\zeta-w}-g(\zeta)\right|&\leq\sum_{n=0}^{\infty}|a_n||w-\zeta|\left[\sum_{k=1}^{n-1}\rho^{n-1-k}k\rho^{k-1}\right] \\
&=|w-\zeta|\sum_{n=0}^{\infty}|a_n|\left[\sum_{k=1}^{n-1}\rho^{n-2}k\right] \\
&=|w-\zeta|\sum_{n=0}^{\infty}|a_n|\frac{n(n-1)}{2}\rho^{n-2} \\
\end{aligned}
$$

Using Cauchy-Hadamard theorem, the radius of convergence of $\sum_{n=0}^{\infty}\frac{ n(n-1)}{2}|a_n|\zeta^{n-2}$ is at least

$$
1/\limsup_{n\to\infty}\left[\frac{n(n-1)}{2}|a_n|\right]^{1/(n-1)}=R.
$$

Therefore,

$$
|w-\zeta|\sum_{n=0}^{\infty}|a_n|\frac{n(n-1)}{2}\rho^{n-2} \leq C|w-\zeta|
$$

where $C$ is dependent on $\rho$.

So $lim_{w\to\zeta}\left|\frac{f(\zeta)-f(w)}{\zeta-w}-g(\zeta)\right|=0$. as desired.

#### Corollary of power series

If $f(\zeta)=\sum_{n=0}^{\infty}a_n(\zeta-\zeta_0)^n$ in $D(\zeta_0,R)$, then $a_0=f(\zeta_0), a_1=f'(\zeta_0)/1!, a_2=f''(\zeta_0)/2!$, etc.

#### Definition (Analytic)

A function $h$ on an open set $U\subset\mathbb{C}$ is called analytic if for every $\zeta\in U$, $\exists \epsilon>0$ such that on $D(\zeta,\epsilon)\subset U$, $h$ can be represented as a power series $\sum_{n=0}^{\infty}a_n(\zeta-\zeta_0)^n$.

#### Theorem (Analytic implies holomorphic)

If $f$ is analytic on $U$, then $f$ is holomorphic on $U$.

$\sum_{n=0}^{\infty}\frac{1}{n!}f^{(n)}(\zeta)^n$

Radius of convergence is $\infty$.

So $f(0)=1=ce^0=c$

$\sum_{n=0}^{\infty}\frac{1}{n}\zeta^n$

Radius of convergence is $1$.

$f'=\sum_{n=1}^{\infty}\zeta^{n-1}=\frac{1}{1-\zeta}$ (Geometric series)

So $g(\zeta)=c+\log(\frac{1}{1-\zeta})=c+2\pi k i=\log(\frac{1}{1-\zeta})+2\pi k i$

#### Cauchy Product of power series

Let $f(\zeta)=\sum_{n=0}^{\infty}a_n\zeta^n$ and $g(\zeta)=\sum_{n=0}^{\infty}b_n\zeta^n$ be two power series.

Then $f(\zeta)g(\zeta)=\sum_{n=0}^{\infty}=\sum_{n=0}^{\infty}c_n\zeta^n=\sum_{n=0}^{\infty}\sum_{k=0}^{n}a_kb_{n-k}\zeta^n$

#### Theorem of radius of convergence of Cauchy product

Let $f(\zeta)=\sum_{n=0}^{\infty}a_n\zeta^n$ and $g(\zeta)=\sum_{n=0}^{\infty}b_n\zeta^n$ be two power series.

Then the radius of convergence of $f(\zeta)g(\zeta)$ is at least $\min(R_f,R_g)$.

Without loss of generality, assume $\zeta_0=0$.

$$
\begin{aligned}
\left(\sum_{j=0}^{N}a_j\zeta^j\right)\left(\sum_{k=0}^{N}b_k\zeta^k\right)-\sum_{l=0}^{N}c_l\zeta^l&=\sum_{j=0}^{N}\sum_{k=N-j}^{N}a_jb_k\zeta^{j+k}\\
&\leq\sum_{N/2\leq\max(j,k)\leq N}|a_j||b_k||\zeta^{j+k}|\\
&\leq\left(\sum_{j=N/2}^{N}|a_j||\zeta^j|\right)\left(\sum_{k=0}^{\infty}|b_k||\zeta^k|\right)+\left(\sum_{j=0}^{\infty}|a_j||\zeta^j|\right)\left(\sum_{k=N/2}^{\infty}|b_k||\zeta^k|\right)\\
\end{aligned}
$$

Since $\sum_{j=0}^{\infty}|a_j||\zeta^j|$ and $\sum_{k=0}^{\infty}|b_k||\zeta^k|$ are convergent, and $\sum_{j=N/2}^{N}|a_j||\zeta^j|$ and $\sum_{k=N/2}^{\infty}|b_k||\zeta^k|$ converges to zero.

So $\left|\left(\sum_{j=0}^{N}a_j\zeta^j\right)\left(\sum_{k=0}^{N}b_k\zeta^k\right)-\sum_{l=0}^{N}c_l\zeta^l\right|\leq\left(\sum_{j=N/2}^{N}|a_j||\zeta^j|\right)\left(\sum_{k=0}^{\infty}|b_k||\zeta^k|\right)+\left(\sum_{j=0}^{\infty}|a_j||\zeta^j|\right)\left(\sum_{k=N/2}^{\infty}|b_k||\zeta^k|\right)\to 0$ as $N\to\infty$.

So $\sum_{n=0}^{\infty}c_n\zeta^n$ converges to $f(\zeta)g(\zeta)$ on $D(0,R_fR_g)$.
