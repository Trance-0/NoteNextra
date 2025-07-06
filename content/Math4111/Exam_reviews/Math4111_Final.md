# Math 4111 Final Review

## Weierstrass M-test

Let $\sum_{n=1}^{\infty} f_n(x)$ be a series of functions.

The weierstrass M-test goes as follows:

1. $\exists M_n \geq 0$ such that $\forall x\in E, |f_n(x)| \leq M_n$.
2. $\sum M_n$ converges.

Then $\sum_{n=1}^{\infty} f_n(x)$ converges uniformly.

Example:

### Ver.0

$\forall x\in [-1,1)$,

$$
\sum_{n=1}^{\infty} \frac{x^n}{n}
$$

converges. (point-wise convergence on $[-1,1)$)

$\forall x\in [-1,1)$,

$$
\left| \frac{x^n}{n} \right| \leq \frac{1}{n}
$$

Since $\sum_{n=1}^{\infty} \frac{1}{n}$ diverges, we don't know if the series converges uniformly or not using the weierstrass M-test.

### Ver.1

However, if we consider the series on $[-1,1]$,

$$
\sum_{n=1}^{\infty} \frac{x^n}{n^2}
$$

converges uniformly. Let $M_n = \frac{1}{n^2}$. This satisfies the weierstrass M-test. And this series converges uniformly on $[-1,1]$.

### Ver.2

$\forall x\in [-\frac{1}{2},\frac{1}{2}]$,

$$
\sum_{n=1}^{\infty} \frac{x^n}{n}
$$

converges uniformly. Since $\left| \frac{x^n}{n} \right|=\frac{|x|^n}{n}\leq \frac{(1/2)^n}{n}\leq \frac{1}{2^n}=M_n$, by geometric series test, $\sum_{n=1}^{\infty} M_n$ converges.

M-test still not applicable here.

$$
\sum_{n=1}^{\infty} \frac{x^n}{n}
$$

converges uniformly on $[-\frac{1}{2},\frac{1}{2}]$.

> Comparison test:  
> 
> For a series $\sum_{n=1}^{\infty} a_n$, if
> 
> 1. $\exists M_n$ such that $|a_n|\leq M_n$
> 2. $\sum_{n=1}^{\infty} M_n$ converges
> 
> Then $\sum_{n=1}^{\infty} a_n$ converges.

## Proving continuity of a function

If $f:E\to Y$ is continuous at $p\in E$, then for any $\epsilon>0$, there exists $\delta>0$ such that for any $x\in E$, if $|x-p|<\delta$, then $|f(x)-f(p)|<\epsilon$.

Example:

Let $f(x)=2x+1$. For $p=1$, prove that $f$ is continuous at $p$.

Let $\epsilon>0$ be given. Let $\delta=\frac{\epsilon}{2}$. Then for any $x\in \mathbb{R}$, if $|x-1|<\delta$, then

$$
|f(x)-f(1)|=|2x+1-3|=|2x-2|=2|x-1|<2\delta=\epsilon.
$$

Therefore, $f$ is continuous at $p=1$.

_You can also use smaller $\delta$ and we don't need to find the "optimal" $\delta$._

## Play of open covers

Example of non compact set:

$\mathbb{Q}$ is not compact, we can construct an open cover $G_n=(-\infty,\sqrt{2})\cup (\sqrt{2}+\frac{1}{n},\infty)$.

Every unbounded set is not compact, we construct an open cover $G_n=(-n,n)$.

Every k-cell is compact.

Every finite set is compact.

Let $p\in A$ and $A$ is compact. Then $A\backslash \{p\}$ is not compact, we can construct an open cover $G_n=(\inf(A)-1,p)\cup (p+\frac{1}{n},\sup(A)+1)$.

If $K$ is closed in $X$ and $X$ is compact, then $K$ is compact.

Proof: 

Let $\{G_\alpha\}_{\alpha\in A}$ be an open cover of $K$.

> $A$ is open in $X$, if and only if $X\backslash A$ is closed in $X$.

Since $X\backslash K$ is opened in $X$, $\{G_\alpha\}_{\alpha\in A}\cup \{X\backslash K\}$ is an open cover of $X$.

Since $X$ is compact, there exists a finite subcover $\{G_{\alpha_1},\cdots,G_{\alpha_n},X\backslash K\}$ of $X$.

Since $X\backslash K$ is not in the subcover, $\{G_{\alpha_1},\cdots,G_{\alpha_n}\}$ is a finite subcover of $K$.

Therefore, $K$ is compact.

## Cauchy criterion

### In sequences

Def: A sequence $\{a_n\}$ is Cauchy if for any $\epsilon>0$, there exists $N$ such that for any $m,n\geq N$, $|a_m-a_n|<\epsilon$.

Theorem: In $\mathbb{R}$, every sequence is Cauchy if and only if it is convergent.

### In series

Let $s_n=\sum_{k=1}^{n} a_k$.

Def: A series $\sum_{n=1}^{\infty} a_n$ converges if the sequence of partial sums $\{s_n\}$ converges.

$\forall \epsilon>0$, there exists $N$ such that for any $m>n\geq N$,

$$
|s_m-s_n|=\left|\sum_{k=n+1}^{m} a_k\right|<\epsilon.
$$

## Comparison test

If $|a_n|\leq b_n$ and $\sum_{n=1}^{\infty} b_n$ converges, then $\sum_{n=1}^{\infty} a_n$ converges.

Proof:

Since $\sum_{n=1}^{\infty} b_n$ converges, $\forall \epsilon>0$, there exists $N$ such that for any $m>n\geq N$,

$$
\left|\sum_{k=n+1}^{m} b_k\right|<\epsilon.
$$

By triangle inequality,

$$
\left|\sum_{k=n}^{m}a_k\right|\leq \sum_{k=n+1}^{m} |a_k|\leq \sum_{k=n+1}^{m} b_k<\epsilon.
$$

Therefore, $\forall \epsilon>0$, there exists $N$ such that for any $m>n\geq N$,

$$
|s_m-s_n|=\left|\sum_{k=n+1}^{m} a_k\right|<\epsilon.
$$

Therefore, $\{s_n\}$ is Cauchy, and $\sum_{n=1}^{\infty} a_n$ converges.

