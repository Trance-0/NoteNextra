# Lecture 3

All algorithms $C(x)\to y$, $x,y\in \{0,1\}^*$ 

P.P.T= Probabilistic Polynomial-time Turing Machine.

## Turing Machine: Mathematical model for a computer program

A machine that can:

1. Read in put
2. Read/Write working tape move left/right
3. Can change state

### Assumptions

Anything can be accomplished by a real computer program can be accomplished by a "sufficiently complicated" Turing Machine (TM).

## Polynomial time

We say $C(x),|x|=n,n\to \infty$ runs in polynomial time if it uses at most $T(n)$ operations bounded by some polynomials. $\exist c>0$ such that $T(n)=O(n^c)$

If we can argue that algorithm runs in polynomially-many constant-time operations, then this is true for the T.M.

$p,q$ are polynomials in $n$,

$p(n)+q(n),p(n)q(n),p(q(n))$ are polynomial of $n$.

Polynomial-time $\approx$ "efficient" for this course.

## Probabilistic

Our algorithm's have access to random "coin-flips" we can produce poly(n) random bits.

$P[C(x)$ takes at most $T(n)$ steps $]=1$

Our adversary $a(x)$ will be a P.P.T which is non-uniform (n.u.) (programs description size can grow polynomially in n)

## Efficient private key encryption scheme 

$m=\{0,1\}^n$

$Gen(1^n)$ p.p.t output $k\in \mathcal{K}$

$Enc_k(m)$ p.p.t outputs $c$

$Dec_k(c')$ p.p.t outputs $m$ or "null"

$P_k[Dec_k(Enc_k(m))=m]=1$

## Negligible function

$\epsilon:\mathbb{N}\to \mathbb{R}$ is a negligible function if $\forall c>0$, $\exists N\in\mathbb{N}$ such that $\forall n\geq N, \epsilon(n)<\frac{1}{n^c}$

Idea: for any polynomial, even $n^{100}$, in the long run $\epsilon(n)\leq \frac{1}{n^{100}}$

Example: $\epsilon (n)=\frac{1}{2^n}$, $\epsilon (n)=\frac{1}{n^{\log (n)}}$

Non-example: $\epsilon (n)=O(\frac{1}{n^c})\forall c$

## One-way function

Idea: We are always okay with our chance of failure being negligible.

Foundational concept of cryptography

Goal: making $Enc_k(m),Dec_k(c')$ easy and $Dec^{-1}(c')$ hard.

### Strong one-way function

#### Definition: Strong one-way function

$$
f:\{0,1\}^n\to \{0,1\}^*(n\to \infty)
$$

There is a negligible function $\epsilon (n)$ such that for any adversary $a$ (n.u.p.p.t)

$$
P[x\gets\{0,1\}^n;y=f(x):f(a(y))=y,a(y)=x']\leq\epsilon(n)
$$

_Probability of guessing correct message is negligible_

and

there is a p.p.t which computes $f(x)$ for any $x$.

- Hard to go back from output
- Easy to find output

$a$ sees output y, they wan to find some $x'$ such that $f(x')=y$.

Example: Suppose $f$ is one-to-one, then $a$ must find our $x$, $P[x'=x]=\frac{1}{2^n}$, which is negligible.

Why do we allow $a$ to get a different $x'$?

> Suppose the definition is $P[x\gets\{0,1\}^n;y=f(x):a(y)=x]\neq\epsilon(n)$, then a trivial function $f(x)=x$ would also satisfy the definition.

To be technically fair, $a(y)=a(y,1^n)$, size of input $\approx n$, let them use $poly(n)$ operations.

### Do one-way function exists?

Unknown, actually...

But we think so!

We will need to use various assumptions. one that we believe very strongly based on evidence/experience

Ex. $p,q$ are large random primes

$N=p\cdot q$

Factoring $N$ is hard. (without knowing $p,q$)
