# Math416 Lecture 9

## Review

### Power Series

Let $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ be a power series.

#### Radius of Convergence

The radius of convergence of a power series is

$$
R=\frac{1}{\limsup_{n\to\infty}|a_n|^{1/n}}.
$$

## New Material on Power Series

### Derivative of Power Series

Let $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ be a power series.

Let $g(z)=\sum_{n=0}^{\infty}na_n(z-z_0)^{n-1}$ be another power series.

Then $g$ is holomorphic on $D(z_0,R)$ and $g'(z)=f(z)$ for all $z\in D(z_0,R)$. and $f'(z)=g(z)$.

Proof:

Note radius of convergence of $g$ is also $R$.

$\limsup_{n\to\infty}|na_n|^{1/(n-1)}=\limsup_{n\to\infty}|a_n|^{1/n}$.

Let $z\in D(z_0,R)$.

let $|z-z_0|<\rho<R$.

Without loss of generality, assume $z_0=0$. Let $|w|<\rho$.

$$
\begin{aligned}
\frac{f(z)-f(w)}{z-w}-g(z)&=\sum_{n=0}^{\infty}\left[\frac{1}{z-w}\left(a_n(z^n-w^n)\right)-na_nz^{n-1}\right] \\
&=\sum_{n=0}^{\infty}a_n\left[\frac{z^n-w^n}{z-w}-nz^{n-1}\right]
\end{aligned}
$$

Notice that

$$
\begin{aligned}
\frac{z^n-w^n}{z-w}&=\sum_{k=0}^{n-1}z^{n-1-k}w^k \\
&=z^{n-1}+z^{n-2}w+\cdots+w^{n-1}
\end{aligned}
$$

Since

$$
|w^k-z^k|=\left|(w-z)\left(\sum_{j=0}^{k-1}w^{k-1-j}z^j\right)\right|\leq|w-z|k\rho^{k-1}
$$

$$
\begin{aligned}
\frac{z^n-w^n}{z-w}-nz^{n-1}&=(z^{n-1}-z^{n-1})+(z^{n-2}w-z^{n-1})+\cdots+(z w^{n-1}-z^{n-1}) \\
&=z^{n-2}(w-z)+z^{n-3}(w^2-z^2)+\cdots+z^0(w^{n-1}-z^{n-1}) \\
&=\sum_{k=0}^{n-1}z^{n-1-k}(w^k-z^k)\\
&\leq\sum_{k=0}^{n-1}z^{n-1-k}|w-z|k\rho^{k-1} \\
&\leq|w-z|\sum_{k=0}^{n-1}k\rho^{k-1} \\
\end{aligned}
$$

Apply absolute value,

$$
\begin{aligned}
\left|\frac{f(z)-f(w)}{z-w}-g(z)\right|&\leq\sum_{n=0}^{\infty}|a_n||w-z|\left[\sum_{k=1}^{n-1}\rho^{n-1-k}k\rho^{k-1}\right] \\
&=|w-z|\sum_{n=0}^{\infty}|a_n|\left[\sum_{k=1}^{n-1}\rho^{n-2}k\right] \\
&=|w-z|\sum_{n=0}^{\infty}|a_n|\frac{n(n-1)}{2}\rho^{n-2} \\
\end{aligned}
$$

Using Cauchy-Hadamard theorem, the radius of convergence of $\sum_{n=0}^{\infty}\frac{ n(n-1)}{2}|a_n|z^{n-2}$ is at least

$$
1/\limsup_{n\to\infty}\left[\frac{n(n-1)}{2}|a_n|\right]^{1/(n-1)}=R.
$$

Therefore,

$$
|w-z|\sum_{n=0}^{\infty}|a_n|\frac{n(n-1)}{2}\rho^{n-2} \leq C|w-z|
$$

where $C$ is dependent on $\rho$.

So $\lim_{w\to z}\left|\frac{f(z)-f(w)}{z-w}-g(z)\right|=0$. as desired.

QED

#### Corollary of power series

If $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ in $D(z_0,R)$, then $a_0=f(z_0), a_1=f'(z_0)/1!, a_2=f''(z_0)/2!$, etc.

#### Definition (Analytic)

A function $h$ on an open set $U\subset\mathbb{C}$ is called analytic if for every $z\in U$, $\exists \epsilon>0$ such that on $D(z,\epsilon)\subset U$, $h$ can be represented as a power series $\sum_{n=0}^{\infty}a_n(z-z_0)^n$.

#### Theorem (Analytic implies holomorphic)

If $f$ is analytic on $U$, then $f$ is holomorphic on $U$.

$\sum_{n=0}^{\infty}\frac{1}{n!}f^{(n)}(z)^n$

Radius of convergence is $\infty$.

So $f(0)=1=ce^0=c$

$\sum_{n=0}^{\infty}\frac{1}{n}z^n$

Radius of convergence is $1$.

$f'=\sum_{n=1}^{\infty}z^{n-1}=\frac{1}{1-z}$ (Geometric series)

So $g(z)=c+\log(\frac{1}{1-z})=c+2\pi k i=\log(\frac{1}{1-z})+2\pi k i$

#### Cauchy Product of power series

Let $f(z)=\sum_{n=0}^{\infty}a_nz^n$ and $g(z)=\sum_{n=0}^{\infty}b_nz^n$ be two power series.

Then $f(z)g(z)=\sum_{n=0}^{\infty}=\sum_{n=0}^{\infty}c_nz^n=\sum_{n=0}^{\infty}\sum_{k=0}^{n}a_kb_{n-k}z^n$

#### Theorem of radius of convergence of Cauchy product

Let $f(z)=\sum_{n=0}^{\infty}a_nz^n$ and $g(z)=\sum_{n=0}^{\infty}b_nz^n$ be two power series.

Then the radius of convergence of $f(z)g(z)$ is at least $\min(R_f,R_g)$.

Without loss of generality, assume $z_0=0$.

$$
\begin{aligned}
\left(\sum_{j=0}^{N}a_jz^j\right)\left(\sum_{k=0}^{N}b_kz^k\right)-\sum_{l=0}^{N}c_lz^l&=\sum_{j=0}^{N}\sum_{k=N-j}^{N}a_jb_kz^{j+k}\\
&\leq\sum_{N/2\leq\max(j,k)\leq N}|a_j||b_k||z^{j+k}|\\
&\leq\left(\sum_{j=N/2}^{N}|a_j||z^j|\right)\left(\sum_{k=0}^{\infty}|b_k||z^k|\right)+\left(\sum_{j=0}^{\infty}|a_j||z^j|\right)\left(\sum_{k=N/2}^{\infty}|b_k||z^k|\right)\\
\end{aligned}
$$

Since $\sum_{j=0}^{\infty}|a_j||z^j|$ and $\sum_{k=0}^{\infty}|b_k||z^k|$ are convergent, and $\sum_{j=N/2}^{N}|a_j||z^j|$ and $\sum_{k=N/2}^{\infty}|b_k||z^k|$ converges to zero.

So $\left|\left(\sum_{j=0}^{N}a_jz^j\right)\left(\sum_{k=0}^{N}b_kz^k\right)-\sum_{l=0}^{N}c_lz^l\right|\leq\left(\sum_{j=N/2}^{N}|a_j||z^j|\right)\left(\sum_{k=0}^{\infty}|b_k||z^k|\right)+\left(\sum_{j=0}^{\infty}|a_j||z^j|\right)\left(\sum_{k=N/2}^{\infty}|b_k||z^k|\right)\to 0$ as $N\to\infty$.

So $\sum_{n=0}^{\infty}c_nz^n$ converges to $f(z)g(z)$ on $D(0,R_fR_g)$.
