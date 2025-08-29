# CSE442T Lecture 4

## Recap

Negligible function $\epsilon(n)$ if $\forall c>0,\exist N$ such that $n>N$, $\epsilon (n)<\frac{1}{n^c}$

Example:

$\epsilon(n)=2^{-n},\epsilon(n)=\frac{1}{n^{\log (\log n)}}$

## Chapter 2: Computational Hardness

### One-way function

#### Strong One-Way Function

1. $\exists$ a P.P.T. that computes $f(x),\forall x\in\{0,1\}^n$
2. $\forall \mathcal{A}$ adversaries, $\exists \epsilon(n),\forall n$.

$$
P[x\gets \{0,1\}^n;y=f(x):f(\mathcal{A}(y,1^n))=y]<\epsilon(n)
$$

_That is, the probability of success guessing should decreasing (exponentially) as encrypted message increase (linearly)..._

To negate statement 2:

$$
P[x\gets \{0,1\}^n;y=f(x):f(\mathcal{A}(y,1^n))=y]=\mu(n)
$$

is a negligible function.

Negation:

$\exists \mathcal{A}$, $P[x\gets \{0,1\}^n;y=f(x):f(\mathcal{A}(y,1^n))=y]=\mu(n)$ is not a negligible function.

That is, $\exists c>0,\forall N \exists n>N \epsilon(n)>\frac{1}{n^c}$

$\mu(n)>\frac{1}{n^c}$ for infinitely many $n$. or infinitely often.

> Keep in mind: $P[success]=\frac{1}{n^c}$, it can try $O(n^c)$ times and have a good chance of succeeding at least once.

#### Definition 28.4 (Weak one-way function)

$f:\{0,1\}^n\to \{0,1\}^*$

1. $\exists$ a P.P.T. that computes $f(x),\forall x\in\{0,1\}^n$
2. $\forall \mathcal{A}$ adversaries, $\exists \epsilon(n),\forall n$.

$$
P[x\gets \{0,1\}^n;y=f(x):f(\mathcal{A}(y,1^n))=y]<1-\frac{1}{p(n)}
$$

_The probability of success should not be too close to 1_

### Probability

#### Useful bound $0<p<1$

$1-p<e^{-p}$

(most useful when $p$ is small)

For an experiment has probability $p$ of failure and $1-p$ of success.

We run experiment $n$ times independently.

$P[\text{success all n times}]=(1-p)^n<(e^{-p})^n=e^{-np}$

#### Theorem 35.1 (Strong one-way function from weak one-way function)

If there exists a weak one-way function, there there exists a strong one-way function

In particular, if $f:\{0,1\}^n\to \{0,1\}^*$ is weak one-way function.

$\exists$ polynomial $q(n)$ such that

$$
g(x):\{0,1\}^{nq(n)}\to \{0,1\}^*
$$

and for every $n$ bits $x_i$

$$
g(x_1,x_2,..,x_{q(n)})=(f(x_1),f(x_2),...,f(x_{q(n)}))
$$

is a strong one-way function.

<details>
<summary>Proof</summary>

1. Since $\exist P.P.T.$ that computes $f(x),\forall x$ we use this $q(n)$ polynomial times to compute $g$.
2. (Idea) $a$ has to succeed in inverting $f$ all $q(n)$ times.
    Since $x$ is a weak one-way, $\exists$ polynomial $p(n)$. $\forall q, P[q$ inverts $f]<1-\frac{1}{p(n)}$ (Here we use $<$ since we can always find a polynomial that works)

    Let $q(n)=np(n)$.

    Then $P[a$ inverting $g]\sim P[a$ inverts $f$ all $q(n)]$ times. $<(1-\frac{1}{p(n)})^{q(n)}=(1-\frac{1}{p(n)})^{np(n)}<(e^{-\frac{1}{p(n)}})^{np(n)}=e^{-n}$ which is negligible function.

</details>

_we can always force the adversary to invert the weak one-way function for polynomial time to reach the property of strong one-way function_

Example: $(1-\frac{1}{n^2})^{n^3}<e^{-n}$

### Some candidates of one-way function

#### Multiplication

$$
Mult(m_1,m_2)=\begin{cases}
    1,m_1=1 | m_2=1\\
    m_1\cdot m_2
\end{cases}
$$

But we don't want trivial answers like (1,1000000007)

Idea: Our "secret" is 373 and 481, Eve can see the product 179413.

Not strong one-way for all integer inputs because there are trivial answer for $\frac{3}{4}$ of all outputs. `Mult(2,y/2)`

Factoring Assumption:

The only way to efficiently factorizing the product of prime is to iterate all the primes.

In other words:

$\forall a\exists \epsilon(n)$ such that $\forall n$. $P[p_1\gets \prod n_j]$

We'll show this is a weak one-way function under the Factoring Assumption.

$\forall a,\exists \epsilon(n)$ such that $\forall n$,

$$
P[p_1\gets \Pi_n;p_2\gets \Pi_n;N=p_1\cdot p_2:a(n)=\{p_1,p_2\}]<\epsilon(n)
$$

where $\Pi_n=\{p\text{ all primes }p<2^n\}$