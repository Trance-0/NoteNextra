# Math4121 Final Review

## Guidelines

There is one question from Exam 2 material.

3 T/F from Exam 1 material.

The remaining questions cover the material since Exam 2 (Chapters 5 and 6 of Bressoud and my lecture notes for the final week). 

The format of the exam is quite similar to Exam 2, maybe a tad longer (but not twice as long, don't worry).

## Chapter 5: Measure Theory

### Jordan Measure

> Content
>
> Let $\mathcal{C}_S^e$ be the set of all finite covers of $S$ by closed intervals ($S\subset C$, where $C$ is a finite union of closed intervals).
>
> Let $\mathcal{C}_S^i$ be the set of disjoint intervals that contained in $S$ ($\bigcup_{i=1}^n I_i\subset S$, where $I_i$ are disjoint intervals).
>
> Let $c_e(S)=\sup_{C\in\mathcal{C}_S^e} \sum_{i=1}^n |I_i|$ be the outer content of $S$.
>
> Let $c_i(S)=\inf_{I\in\mathcal{C}_S^i} \sum_{i=1}^n |I_i|$ be the inner content of $S$.
>
> _Here we use $|I|$ to denote the length of the interval $I$, in book we use volume but that's not important here._
>
> The content of $S$ is defined if $c(S)=c_e(S)=c_i(S)$

Note that from this definition, **for any pairwise disjoint collection of sets** $S_1, S_2, \cdots, S_N$, we have

$$
\sum_{i=1}^N c_i(S_i)\leq c_i(\bigcup_{i=1}^N S_i)\leq c_e(\bigcup_{i=1}^N S_i)\leq \sum_{i=1}^N c_e(S_i)
$$

by $\sup$ and $\inf$ in the definition of $c_e(S)$ and $c_i(S)$.

#### Proposition 5.1

$$
c_e(S)=c_i(S)+c_e(\partial S)
$$

Note the boundary of $S$ is defined as $\partial S=\overline{S}\setminus S^\circ$ (corrected by Nathan Zhou).

> Some common notations for sets:
> 
> $S^\circ$ is the interior of $S$. $S^\circ=\{x\in S| \exists \epsilon>0, B(x,\epsilon)\subset S\}$ (largest open set contained in $S$)
>
> $S'$ is the set of limit points of $S$ (derived set of $S$). $S'=\{x\in \mathbb{R}^n|\forall \epsilon>0, B(x,\epsilon)\setminus \{x\}\cap S\neq \emptyset\}$ (Topological definition of limit point).
>
> $\overline{S}$ is the closure of $S$. $\overline{S}=S\cup S'$ (smallest closed set containing $S$)

Equivalently, $\forall x\in \partial S$, $\forall \epsilon>0$, $\exists p\notin S$ and $q\notin S$ s.t. $d(x,p)<\epsilon$ and $d(x,q)<\epsilon$.

So the content of $S$ is defined if and only if $c_e(\partial S)=0$.

> Jordan Measurable
>
> A set $S$ is Jordan measurable if and only if $c_e(\partial S)=0$, ($c(S)=c_e(S)=c_i(S)$)

#### Proposition 5.2

Finite additivity of content:

Let $S_1, S_2, \cdots, S_N$ be a finite collection of pairwise disjoint Jordan measurable sets.

$$
c(\bigcup_{i=1}^N S_i)=\sum_{i=1}^N c(S_i)
$$

Example for Jordan measure of sets

| Set | Inner Content | Outer Content | Content |
| --- | --- | --- | --- |
| $\emptyset$ | 0 | 0 | 0 |
| $\{q\},q\in \mathbb{R}$ | 0 | 0 | 0 |
| $\{\frac{1}{n}\}_{n=1}^\infty$ | 0 | 0 | 0 |
| $\{[n,n+\frac{1}{2^n}]\}_{n=1}^\infty$ | 1 | 1 | 1 |
| $SVC(3)$ | 0 | 1 | Undefined |
| $SVC(4)$ | 0 | $\frac{1}{2}$ | Undefined |
| $Q\cap [0,1]$ | 0 | 1 | Undefined |
| $[0,1]\setminus Q$ | 0 | 1 | Undefined |
| $[a,b], a<b\in \mathbb{R}$ | $b-a$ | $b-a$ | $b-a$ |
| $[a,b),a<b\in \mathbb{R}$ | $b-a$ | $b-a$ | $b-a$ |
| $(a,b],a<b\in \mathbb{R}$ | $b-a$ | $b-a$ | $b-a$ |
| $(a,b),a<b\in \mathbb{R}$ | $b-a$ | $b-a$ | $b-a$ |

### Borel Measure

Our desired property of measures:

1. Measure of interval is the length of the interval. $m([a,b])=m((a,b))=m([a,b))=m((a,b])=b-a$

2. Countable additivity: If $S_1, S_2, \cdots, S_N$ are pairwise disjoint Borel measurable sets, then $m(\bigcup_{i=1}^N S_i)=\sum_{i=1}^N m(S_i)$

3. Closure under set minus: If $S$ is Borel measurable and $T$ is Borel measurable, then $S\setminus T$ is Borel measurable with $m(S\setminus T)=m(S)-m(T)$

#### Borel Measurable Sets

$\mathcal{B}$ is the smallest $\sigma$-algebra that contains all closed intervals.

> Sigma algebra: A $\sigma$-algebra is a collection of sets that is closed under **countable** union, intersection, and complement.
>
> That is:
>
> 1. $\emptyset\in \mathcal{B}$
> 2. If $A\in \mathcal{B}$, then $A^c\in \mathcal{B}$
> 3. If $A_1, A_2, \cdots, A_N\in \mathcal{B}$, then $\bigcup_{i=1}^N A_i\in \mathcal{B}$

#### Proposition 5.3

Borel measurable sets does not contain all Jordan measurable sets.

Proof by cardinality of sets.

Example for Borel measure of sets

| Set | Borel Measure |
| --- | --- |
| $\emptyset$ | 0 |
| $\{q\},q\in \mathbb{R}$ | 0 |
| $\{\frac{1}{n}\}_{n=1}^\infty$ | 0 |
| $\{[n,n+\frac{1}{2^n}]\}_{n=1}^\infty$ | 1 |
| $SVC(3)$ | 0 |
| $SVC(4)$ | 0 |
| $Q\cap [0,1]$ | 0 |
| $[0,1]\setminus Q$ | 1 |
| $[a,b], a<b\in \mathbb{R}$ | $b-a$ |
| $[a,b),a<b\in \mathbb{R}$ | $b-a$ |
| $(a,b],a<b\in \mathbb{R}$ | $b-a$ |
| $(a,b),a<b\in \mathbb{R}$ | $b-a$ |


### Lebesgue Measure

> Lebesgue measure
>
> Let $\mathcal{C}$ be the set of all countable covers of $S$.
>
> The Lebesgue outer measure of $S$ is defined as:
>
> $$m_e(S)=\inf_{C\in\mathcal{C}} \sum_{i=1}^\infty |I_i|$$
>
> If $S\subset[a,b]$, then the inner measure of $S$ is defined as:
>
> $$m_i(S)=(b-a)-m_e([a,b]\setminus S)$$
>
> If $m_i(S)=m_e(S)$, then $S$ is Lebesgue measurable.

#### Proposition 5.4

Subadditivity of Lebesgue outer measure:

For any collection of sets $S_1, S_2, \cdots, S_N$,

$$m_e(\bigcup_{i=1}^N S_i)\leq \sum_{i=1}^N m_e(S_i)$$

#### Theorem 5.5

If $S$ is bounded, then any of the following conditions imply that $S$ is Lebesgue measurable:

1. $m_e(S)=0$
2. $S$ is countable (measure of countable set is 0)
3. $S$ is an interval

> Alternative definition of Lebesgue measure
>
> The outer measure of $S$ is defined as the infimum of all the open sets that contain $S$.
>
> The inner measure of $S$ is defined as the supremum of all the closed sets that are contained in $S$.

#### Theorem 5.6

Caratheodory's criterion:

A set $S$ is Lebesgue measurable if and only if for any set $X$ with finite outer measure,

$$m_e(X-S)=m_e(X)-m_e(X\cap S)$$

#### Lemma 5.7

Local additivity of Lebesgue outer measure:

If $I_1, I_2, \cdots, I_N$ are any countable collection of **pairwise disjoint intervals** and $S$ is a bounded set, then

$$
m_e\left(S\cup \bigcup_{i=1}^N I_i\right)=\sum_{i=1}^N m_e(S\cap I_i)
$$

#### Theorem 5.8

Countable additivity of Lebesgue outer measure:

If $S_1, S_2, \cdots, S_N$ are any countable collection of pairwise disjoint Lebesgue measurable sets, **whose union has a finite outer measure,** then

$$
m_e\left(\bigcup_{i=1}^N S_i\right)=\sum_{i=1}^N m_e(S_i)
$$

#### Theorem 5.9

Any finite union or intersection of Lebesgue measurable sets is Lebesgue measurable.

#### Theorem 5.10

Any countable union or intersection of Lebesgue measurable sets is Lebesgue measurable.

#### Corollary 5.12

Limit of a monotone sequence of Lebesgue measurable sets is Lebesgue measurable.

If $S_1\subseteq S_2\subseteq S_3\subseteq \cdots$ are Lebesgue measurable sets, then $\bigcup_{i=1}^\infty S_i$ is Lebesgue measurable. And $m(\bigcup_{i=1}^\infty S_i)=\lim_{i\to\infty} m(S_i)$

If $S_1\supseteq S_2\supseteq S_3\supseteq \cdots$ are Lebesgue measurable sets, **and $S_1$ has finite measure**, then $\bigcap_{i=1}^\infty S_i$ is Lebesgue measurable. And $m(\bigcap_{i=1}^\infty S_i)=\lim_{i\to\infty} m(S_i)$

#### Theorem 5.13

Non-measurable sets (under axiom of choice)

Note that $(0,1)\subseteq \bigcup_{q\in \mathbb{Q}\cap (-1,1)}(\mathcal{N}+q)\subseteq (-1,2)$

$$
\bigcup_{q\in \mathbb{Q}\cap (-1,1)}(\mathcal{N}+q)
$$

is not Lebesgue measurable.

## Chapter 6: Lebesgue Integration

### Lebesgue Integral

Let the partition on y-axis be $l=l_0<l_1<\cdots<l_n=L$, and $S_i=\{x|l_i<f(x)<l_{i+1}\}$

The Lebesgue integral of $f$ over $[a,b]$ is bounded by:

$$
\sum_{i=0}^{n-1} l_i m(S_i)\leq \int_a^b f(x) \, dx\leq \sum_{i=0}^{n-1} l_{i+1} m(S_i)
$$

> Definition of measurable function:
>
> A function $f$ is measurable if for all $c\in \mathbb{R}$, the set $\{x\in [a,b]|f(x)>c\}$ is Lebesgue measurable.
>
> Equivalently, a function $f$ is measurable if any of the following conditions hold:
>
> 1. For all $c\in \mathbb{R}$, the set $\{x\in [a,b]|f(x)>c\}$ is Lebesgue measurable.
> 2. For all $c\in \mathbb{R}$, the set $\{x\in [a,b]|f(x)\geq c\}$ is Lebesgue measurable.
> 3. For all $c\in \mathbb{R}$, the set $\{x\in [a,b]|f(x)<c\}$ is Lebesgue measurable.
> 4. For all $c\in \mathbb{R}$, the set $\{x\in [a,b]|f(x)\leq c\}$ is Lebesgue measurable.
> 5. For all $c<d\in \mathbb{R}$, the set $\{x\in [a,b]|c\leq f(x)<d\}$ is Lebesgue measurable.
>
> Prove by using the fact$\{x\in [a,b]|f(x)\geq c\}=\bigcap_{n=1}^\infty \{x\in [a,b]|f(x)>c-\frac{1}{n}\}$

#### Proposition 6.3

If $f,g$ is a measurable function, and $k\in \mathbb{R}$, then $f+g,kf,f^2,fg,|f|$ is measurable.

> Definition of almost everywhere:
>
> A property holds almost everywhere if it holds everywhere except for a set of Lebesgue measure 0.

#### Proposition 6.4

If $f_n$ is a sequence of measurable functions, then $\limsup_{n\to\infty} f_n, \liminf_{n\to\infty} f_n$ is measurable.

#### Theorem 6.5

Limit of measurable functions is measurable.

> Definition of simple function:
>
> A simple function is a linear combination of indicator functions of Lebesgue measurable sets.

#### Theorem 6.6

Measurable function as limit of simple functions.

$f$ is a measurable function if and only if ffthere exists a sequence of simple functions $f_n$ s.t. $f_n\to f$ almost everywhere.

### Integration

#### Proposition 6.10

Let $\phi,\psi$ be simple functions, $c\in \mathbb{R}$ and $E=E_1\cup E_2$ where $E_1\cap E_2=\emptyset$.

Then

1. $\int_E \phi(x) \, dx=\int_{E_1} \phi(x) \, dx+\int_{E_2} \phi(x) \, dx$
2. $\int_E (c\phi)(x) \, dx=c\int_E \phi(x) \, dx$
3. $\int_E (\phi+\psi)(x) \, dx=\int_E \phi(x) \, dx+\int_E \psi(x) \, dx$
4. If $\phi\leq \psi$ for all $x\in E$, then $\int_E \phi(x) \, dx\leq \int_E \psi(x) \, dx$

> Definition of Lebesgue integral of simple function:
>
> Let $\phi$ be a simple function, $\phi=\sum_{i=1}^n l_i \chi_{S_i}$
>
> $$\int_E \phi(x) \, dx=\sum_{i=1}^n l_i m(S_i\cap E)$$

> Definition of Lebesgue integral of measurable function:
>
> Let $f$ be a nonnegative measurable function, then
>
> $$\int_E f(x) \, dx=\sup_{\phi\leq f} \int_E \phi(x) \, dx$$
>
> If $f$ is not nonnegative, then
>
> $$\int_E f(x) \, dx=\int_E f^+(x) \, dx-\int_E f^-(x) \, dx$$
>
> where $f^+(x)=\max(f(x),0)$ and $f^-(x)=\max(-f(x),0)$

#### Proposition 6.12

Integral over a set of measure 0 is 0.

#### Theorem 6.13

If a nonnegative measurable function $f$ has integral 0 on a set $E$, then $f(x)=0$ almost everywhere on $E$.

#### Theorem 6.14

Monotone convergence theorem:

If $f_n$ is a sequence of monotone increasing measurable functions and $f_n\to f$ almost everywhere, and $\exists A>0$ s.t. $|\int_E f_n(x) \, dx|\leq A$ for all $n$, then $f(x)=\lim_{n\to\infty} f_n(x)$ exists almost everywhere and it's integrable on $E$ with

$$
\int_E f(x) \, dx=\lim_{n\to\infty} \int_E f_n(x) \, dx
$$

#### Theorem 6.19

Dominated convergence theorem:

If $f_n$ is a sequence of integrable functions and $f_n\to f$ almost everywhere, and there exists a nonnegative integrable function $g$ s.t. $|f_n(x)|\leq g(x)$ for all $x\in E$ and all $n$, then $f(x)=\lim_{n\to\infty} f_n(x)$ exists almost everywhere and it's integrable on $E$ with

$$
\int_E f(x) \, dx=\lim_{n\to\infty} \int_E f_n(x) \, dx
$$

#### Theorem 6.20

Fatou's lemma:

If $f_n$ is a sequence of nonnegative integrable functions, then

$$
\int_E \liminf_{n\to\infty} f_n(x) \, dx\leq \liminf_{n\to\infty} \int_E f_n(x) \, dx
$$

> Definition of Hardy-Littlewood maximal function
>
> Given integrable $f$m and an interval $I$, look at the averaging operator $A_I f(x)=\frac{\chi_I(x)}{m(I)}\int_I f(y)dy$.
>
> The maximal function is defined as
>
> $$f^*(x)=\sup_{I \text{ is an open interval}} A_I f(x)$$

### Lebesgue's Fundamental theorem of calculus

If $f$ is Lebesgue integrable on $[a,b]$, then $F(x) = \int_a^x f(t)dt$ is differentiable **almost everywhere** and $F'(x) = f(x)$ **almost everywhere**.

Outline:

Let $\lambda,\epsilon > 0$. Find $g$ continuous such that $\int_{\mathbb{R}}|f-g|dm < \frac{\lambda \epsilon}{5}$.

To control $A_I f(x)-f(x)=(A_I(f-g)(x))+(A_I g(x)-g(x))+(g(x)-f(x))$, we need to estimate the three terms separately.

Our goal is to show that $\lim_{r\to 0^+}\sup_{I\text{ is open interval}, m(I)<r, x\in I}|A_I f(x)-f(x)|=0$. For $x$ almost every $x\in[a,b]$.

