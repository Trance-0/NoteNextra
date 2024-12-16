# Lecture 3

All algorithms $C(x)\to y$, $x,y\in \{0,1\}^*$ 

P.P.T= Probabilistic Polynomial-time Turing Machine.

## Chapter 2: Computational Hardness

### Turing Machine: Mathematical model for a computer program

A machine that can:

1. Read in put
2. Read/Write working tape move left/right
3. Can change state

### Assumptions

Anything can be accomplished by a real computer program can be accomplished by a "sufficiently complicated" Turing Machine (TM).

### Polynomial time

We say $C(x),|x|=n,n\to \infty$ runs in polynomial time if it uses at most $T(n)$ operations bounded by some polynomials. $\exist c>0$ such that $T(n)=O(n^c)$

If we can argue that algorithm runs in polynomially-many constant-time operations, then this is true for the T.M.

$p,q$ are polynomials in $n$,

$p(n)+q(n),p(n)q(n),p(q(n))$ are polynomial of $n$.

Polynomial-time $\approx$ "efficient" for this course.

### Probabilistic

Our algorithm's have access to random "coin-flips" we can produce poly(n) random bits.

$P[C(x)\text{ takes at most }T(n)\text{ steps }]=1$

Our adversary $a(x)$ will be a P.P.T which is non-uniform (n.u.) (programs description size can grow polynomially in n)

### Efficient private key encryption scheme

#### Definition 3.2 (Efficient private key encryption scheme)

The triple $(Gen,Enc,Dec)$ is an efficient private key encryption scheme over the message space $M$  and key space $K$ if:

1. $Gen(1^n)$ is a randomized p.p.t that outputs $k\in K$
2. $Enc_k(m)$ is a potentially randomized p.p.t that outputs $c$ given $m\in M$
3. $Dec_k(c')$ is a deterministic p.p.t that outputs $m$ or "null"
4. $P_k[Dec_k(Enc_k(m))=m]=1,\forall m\in M$

### Negligible function

$\epsilon:\mathbb{N}\to \mathbb{R}$ is a negligible function if $\forall c>0$, $\exists N\in\mathbb{N}$ such that $\forall n\geq N, \epsilon(n)<\frac{1}{n^c}$ (looks like definition of limits huh) (Definition 27.2)

Idea: for any polynomial, even $n^{100}$, in the long run $\epsilon(n)\leq \frac{1}{n^{100}}$

Example: $\epsilon (n)=\frac{1}{2^n}$, $\epsilon (n)=\frac{1}{n^{\log (n)}}$

Non-example: $\epsilon (n)=O(\frac{1}{n^c})\forall c$

### One-way function

Idea: We are always okay with our chance of failure being negligible.

Foundational concept of cryptography

Goal: making $Enc_k(m),Dec_k(c')$ easy and $Dec^{-1}(c')$ hard.

#### Definition 27.3 (Strong one-way function)

$$
f:\{0,1\}^n\to \{0,1\}^*(n\to \infty)
$$

There is a negligible function $\epsilon (n)$ such that for any adversary $\mathcal{A}$ (n.u.p.p.t)

$$
P[x\gets\{0,1\}^n;y=f(x):f(\mathcal{A}(y))=y]\leq\epsilon(n)
$$

_Probability of guessing a message $x'$ with the same output as the correct message $x$ is negligible_

and

there is a p.p.t which computes $f(x)$ for any $x$.

- Hard to go back from output
- Easy to find output

$a$ sees output y, they wan to find some $x'$ such that $f(x')=y$.

Example: Suppose $f$ is one-to-one, then $a$ must find our $x$, $P[x'=x]=\frac{1}{2^n}$, which is negligible.

Why do we allow $a$ to get a different $x'$?

> Suppose the definition is $P[x\gets\{0,1\}^n;y=f(x):\mathcal{A}(y)=x]\neq\epsilon(n)$, then a trivial function $f(x)=x$ would also satisfy the definition.

To be technically fair, $\mathcal{A}(y)=\mathcal{A}(y,1^n)$, size of input $\approx n$, let them use $poly(n)$ operations. (we also tells the input size is $n$ to $\mathcal{A}$)

#### Do one-way function exists?

Unknown, actually...

But we think so!

We will need to use various assumptions. one that we believe very strongly based on evidence/experience

Example:

$p,q$ are large random primes

$N=p\cdot q$

Factoring $N$ is hard. (without knowing $p,q$)
