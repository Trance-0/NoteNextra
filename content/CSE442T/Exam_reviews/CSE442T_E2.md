# CSE442T Exam 2 Review

## Review

### Assumptions used in cryptography (this course)

#### Diffie-Hellman assumption

The Diffie-Hellman assumption is that the following problem is hard.

$$
\text{Given } g,g^a,g^b\text{, it is hard to compute } g^{ab}.
$$

More formally,

If $p$ is a randomly sampled safe prime.

Denote safe prime as $\tilde{\Pi}_n=\{p\in \Pi_n:q=\frac{p-1}{2}\in \Pi_{n-1}\}$

Then

$$
P\left[p\gets \tilde{\Pi_n};a\gets\mathbb{Z}_p^*;g=a^2\neq 1;x\gets \mathbb{Z}_q;y=g^x\mod p:\mathcal{A}(y)=x\right]\leq \varepsilon(n)
$$

$p\gets \tilde{\Pi_n};a\gets\mathbb{Z}_p^*;g=a^2\neq 1$ is the function condition when we do the encryption on cyclic groups.

#### Discrete logarithm assumption

> If Diffie-Hellman assumption holds, then discrete logarithm assumption holds.

This is a corollary of the Diffie-Hellman assumption, it states as follows.

This is collection of one-way functions

$$
p\gets \tilde\Pi_n(\textup{ safe primes }), p=2q+1
$$
$$
a\gets \mathbb{Z}*_{p};g=a^2(\textup{ make sure }g\neq 1)
$$
$$
f_{g,p}(x)=g^x\mod p
$$
$$
f:\mathbb{Z}_q\to \mathbb{Z}^*_p
$$

#### RSA assumption

The RSA assumption is that it is hard to factorize a product of two large primes. (no polynomial time algorithm for factorization product of two large primes with $n$ bits)

Let $e$ be the exponents

$$
P[p,q\gets \Pi_n;N\gets p\cdot q;e\gets \mathbb{Z}_{\phi(N)}^*;y\gets \mathbb{N}_n;x\gets \mathcal{A}(N,e,y);x^e=y\mod N]<\varepsilon(n)
$$

#### Factoring assumption

> If RSA assumption holds, then factoring assumption holds.

The only way to efficiently factorize the product of prime is to iterate all the primes.

### Fancy product of these assumptions

#### Trapdoor permutation

> RSA assumption $\implies$ Trapdoor permutation exists.

Idea: $f:D\to R$ is a one-way permutation.

$y\gets R$.

* Finding $x$ such that $f(x)=y$ is hard.
* With some secret info about $f$, finding $x$ is easy.

$\mathcal{F}=\{f_i:D_i\to R_i\}_{i\in I}$

1. $\forall i,f_i$ is a permutation
2. $(i,t)\gets Gen(1^n)$ efficient. ($i\in I$ paired with $t$), $t$ is the "trapdoor info"
3. $\forall i,D_i$ can be sampled efficiently.
4. $\forall i,\forall x,f_i(x)$ can be computed in polynomial time.
5. $P[(i,t)\gets Gen(1^n);y\gets R_i:f_i(\mathcal{A}(1^n,i,y))=y]<\varepsilon(n)$ (note: $\mathcal{A}$ is not given $t$)
6. (trapdoor) There is a p.p.t. $B$ such that given $i,y,t$, B always finds x such that $f_i(x)=y$. $t$ is the "trapdoor info"

_There is one bit of trapdoor info that without it, finding $x$ is hard._

#### Collision resistance hash function

> If discrete logarithm assumption holds, then collision resistance hash function exists.

Let $h: \{0, 1\}^{n+1} \to \{0, 1\}^n$ be a CRHF.

Base on the discrete log assumption, we can construct a CRHF $H: \{0, 1\}^{n+1} \to \{0, 1\}^n$ as follows:

$Gen(1^n):(g,p,y)$

$p\in \tilde{\Pi}_n(p=2q+1)$

$g$ generator for group of sequence $\mod p$ (G_q)

$y$ is a random element in $G_q$

$h_{g,p,y}(x,b)=y^bg^x\mod p$, $y^bg^x\mod p \in \{0,1\}^n$

$g^x\mod p$ if $b=0$, $y\cdot g^x\mod p$ if $b=1$.

Under the discrete log assumption, $H$ is a CRHF.

- It is easy to sample $(g,p,y)$
- It is easy to compute
- Compressing by 1 bit

#### One-way permutation

> If trapdoor permutation exists, then one-way permutation exists.

A one-way permutation is a function that is one-way and returns a permutation of the input.

#### One-way function

> If one-way permutation exists, then one-way function exists.

One-way function is a class of functions that are easy to compute but hard to invert.

##### Weak one-way function

A weak one-way function is

$$
f:\{0,1\}^n\to \{0,1\}^*
$$

1. $\exists$ a P.P.T. that computes $f(x),\forall x\in\{0,1\}^n$
2. $\forall a$ adversaries, $\exists \varepsilon(n),\forall n$.

$$
P[x\gets \{0,1\}^n;y=f(x):f(a(y,1^n))=y]<1-\frac{1}{p(n)}
$$
_The probability of success should not be too close to 1_


##### Strong one-way function

> If weak one-way function exists, then strong one-way function exists.

A strong one-way function is

$$
f:\{0,1\}^n\to \{0,1\}^*(n\to \infty)
$$

There is a negligible function $\varepsilon (n)$ such that for any adversary $a$ (n.u.p.p.t)

$$
P[x\gets\{0,1\}^n;y=f(x):f(a(y))=y,a(y)=x']\leq\varepsilon(n)
$$

_Probability of guessing correct message is negligible_

#### Hard-core bits

> Strong one-way function $\iff$ hard-core bits exists.

A hard-core bit is a bit that is hard to predict given the output of a one-way function.

#### Pseudorandom generator

> If one-way permutation exists, then pseudorandom generator exists.

We can also use pseudorandom generator to construct one-way function.

And hard-core bits can be used to construct pseudorandom generator.

#### Pseudorandom function

> If pseudorandom generator exists, then pseudorandom function exists.

A pseudorandom function is a function that is indistinguishable from a true random function.

### Multi-message secure private-key encryption

> If pseudorandom function exists, then multi-message secure private-key encryption exists.

A multi-message secure private-key encryption is a function that is secure against an adversary who can see multiple messages.

#### Single message secure private-key encryption

> If multi-message secure private-key encryption exists, then single message secure private-key encryption exists.

#### Message-authentication code

> If pseudorandom function exists, then message-authentication code exists.


### Public-key encryption

> If Diffie-Hellman assumption holds, and Trapdoor permutation exists, then public-key encryption exists.

### Digital signature

A digital signature scheme is a triple $(Gen, Sign, Ver)$ where

- $(pk,sk)\gets Gen(1^k)$ is a p.p.t. algorithm that takes as input a security parameter $k$ and outputs a public key $pk$ and a secret key $sk$.
- $\sigma\gets Sign_{sk}(m)$ is a p.p.t. algorithm that takes as input a secret key $sk$ and a message $m$ and outputs a signature $\sigma$.
- $Ver_{pk}(m, \sigma)$ is a deterministic algorithm that takes as input a public key $pk$, a message $m$, and a signature $\sigma$ and outputs "Accept" if $\sigma$ is a valid signature for $m$ under $pk$ and "Reject" otherwise.

For all $n\in\mathbb{N}$, all $m\in\mathcal{M}_n$.

$$
P[(pk,sk)\gets Gen(1^k); \sigma\gets Sign_{sk}(m); Ver_{pk}(m, \sigma)=\textup{``Accept''}]=1
$$

#### One-time secure digital signature

#### Fixed-length one-time secure digital signature

> If one-way function exists, then fixed-length one-time secure digital signature exists.


