# System check for exam list

**The exam will take place in class on Monday, October 21.**

The topics will cover Chapters 1 and 2, as well as the related probability discussions we've had (caveats below).  Assignments 1 through 3 span this material.

## Specifics on material:

NOT "match-making game" in 1.2 (seems fun though)

NOT the proof of Theorem 31.3 (but definitely the result!)

NOT 2.4.3 (again, definitely want to know this result, and we have discussed the idea behind it)

NOT 2.6.5, 2.6.6

NOT 2.12, 2.13

The probability knowledge/techniques I've expanded on include conditional probability, independence, law of total probability, Bayes' Theorem, union bound, 1-p bound (or "useful bound"), collision

I expect you to demonstrate understanding of the key definitions, theorems, and proof techniques.  The assignments are designed to reinforce all of these.  However, exam questions will be written with the understanding of the time limitations.

The exam is "closed-book," with no notes of any kind allowed.  The advantage of this is that some questions might be very basic.  However, I will expect that you will have not just memorized definitions and theorems, but you can also explain their meaning and apply them.

## Chapter 1

### Prove security

#### Definition 11.1 Shannon secrecy

$(\mathcal{M},\mathcal{K}, Gen, Enc, Dec)$ (A crypto-system) is said to be private-key encryption scheme that is *Shannon-secrete with respect to distribution $D$ over the message space $\mathcal{M}$* if for all $m'\in \mathcal{M}$ and for all $c$,

$$
P[k\gets Gen;m\gets D:m=m'|Enc_k(m)=c]=P[m\gets D:m=m']
$$

(The adversary cannot learn all, part of, any letter of, any function off, or any partial information about the plaintext)

#### Definition 11.2 Perfect Secrecy

$(\mathcal{M},\mathcal{K}, Gen, ENc, Dec)$ (A crypto-system) is said to be private-key encryption scheme that is *perfectly secret* if forall $m_1,m_2\in \mathcal{M},\forall c$:

$$
P[k\gets Gen:Enc_k(m_1)=c]=P[k\gets Gen:Enc_k(m_2)=c]
$$

(For all coding scheme in the crypto system, for any two different message, they are equally likely to be mapped to $c$)

#### Definition 12.3

A private-key encryption scheme is perfectly secret if and only if it is Shannon secret.

## Chapter 2

### Efficient Private-key Encryption

#### Definition 24.7

A triplet of algorithms $(Gen,Enc,Dec)$ is called an efficient private-key encryption scheme if the following holds.

1. $k\gets Gen(1^n)$ is a p.p.t. such that for every $n\in \mathbb{N}$, it samples a key $k$.
2. $c\gets Enc_k(m)$ is a p.p.t. that given $k$ and $m\in \{0,1\}^n$ produces a ciphertext $c$.
3. $m\gets Dec_c(c)$ is a p.p.t. that given a ciphertext $c$ and key $k$ produces a message $m\in \{0,1\}^n\cup \perp$.
4. For all $n\in \mathbb{N},m\in \{0,1\}^n$

$$
Pr[k\gets Gen(1^n);Dec_k(Enc_k(m))=m]=1
$$

### One-Way functions

#### Definition 26.1

A function $f:\{0,1\}^*\to\{0,1\}^*$ is worst-case one-way if the function is:

1. Easy to compute. There is a p.p.t $C$ that computes $f(x)$ on all inputs $x\in \{0,1\}^*$, and 
2. Hard to invert. There is no adversary $\mathcal{A}$ such that

$$
\forall x,P[\mathcal{A}(f(x))\in f^{-1}(f(x))]=1
$$

#### Definition 27.2 Negligible function

A function $\varepsilon(n)$ is negligible if for every $c$. there exists some $n_0$ such that for all $n>n_0$, $\epsilon (n)\leq \frac{1}{n^c}$.

#### Definition 27.3 Strong One-Way Function

A function mapping strings to strings $f:\{0,1\}^*\to \{0,1\}^*$ is a strong one-way function if it satisfies the following two conditions:

1. Easy to compute. There is a p.p.t $C$ that computes $f(x)$ on all inputs $x\in \{0,1\}^*$, and 
2. Hard to invert. There is no adversary $\mathcal{A}$ such that

$$
P[x\gets\{0,1\}^n;y\gets f(x):f(\mathcal{A}(1^n,y))=y]\leq \epsilon(n)
$$

#### Definition 28.4 (Weak One-Way Function)

A function mapping strings to strings $f:\{0,1\}^*\to \{0,1\}^*$ is a strong one-way function if it satisfies the following two conditions:

1. Easy to compute. There is a p.p.t $C$ that computes $f(x)$ on all inputs $x\in \{0,1\}^*$, and 
2. Hard to invert. There is no adversary $\mathcal{A}$ such that

$$
P[x\gets\{0,1\}^n;y\gets f(x):f(\mathcal{A}(1^n,y))=y]\leq 1-\frac{1}{q(n)}
$$

#### Notation for prime numbers

Denote the (finite) set of primes that are smaller than $2^n$ as

$$
\Pi_n=\{q|q<2^n\textup{ and } q \textup{ is prime}\}
$$

#### Assumption 30.1 (Factoring)

For every adversary $\mathcal{A}$, there exists a negligible function $\epsilon$ such that

$$
P[p\gets \Pi_n;q\gets \Pi_n;N\gets pq:\mathcal{A}(N)\in \{p,q\}]<\epsilon(n)
$$

(For every product of random 2 primes, the probability for any adversary to find the prime factors is negligible.)

(There is no polynomial function that can decompose the product of two $n$ bit prime, the best function is $2^{O(n^{\frac{1}{3}}\log^{\frac{2}{3}}n)}$)

#### Theorem 35.1

For any weak one-way function $f:\{0,1\}^n\to \{0,1\}^*$, there exists a polynomial $m(\cdot)$ such that function

$$
f'(x_1,x_2,\dots, x_{m(n)})=(f(x_1),f(x_2),\dots, f(x_{m(n)})).
$$

from $f'=(\{0,1\}^n)^{m(n)}\to(\{0,1\}^*)^{m(n)}$ is strong one-way.

### RSA

#### Definition 46.7

A group $G$ is a set of elements with a binary operator $\oplus:G\times G\to G$ that satisfies the following properties

1. Closure: $\forall a,b\in G, a\oplus b\in G$
2. Identity: $\exists i\in G$ such that $\forall a\in G, i\oplus a=a\oplus i=a$
3. Associativity: $\forall a,b,c\in G,(a\oplus b)\oplus c=a\oplus(b\oplus c)$.
4. Inverse: $\forall a\in G$, there is an element $b\in G$ such that $a\oplus b=b\oplus a=i$

#### Definition Euler totient function $\Phi(N)$.

$$
\Phi(p)=p-1
$$ if $p$ is prime
$$
\Phi(N)=(p-1)(q-1)
$$ if $N=pq$ and $p,q$ are primes

#### Theorem 47.10

$\forall a\in \mathbb{Z}_N^*,a^{\Phi(N)}=1\mod N$

#### Corollary 48.11

$\forall a\in \mathbb{Z}_p^*,a^{p-1}\equiv 1\mod p$.

#### Corollary 48.12

$a^x\mod N=a^{x\mod \Phi(N)}\mod N$

## Some other important results

### Exponent

$$
(1-\frac{1}{n})^n\approx e
$$
when $n$ is large.

### Primes

Let $\pi(x)$ be the lower-bounds for prime less than or equal to $x$.

#### Theorem 31.3 Chebyshev

For $x>1$,$\pi(x)>\frac{x}{2\log x}$

#### Corollary 31.3

For $2^n>1$, $p(n)>\frac{1}{n}$

(The probability that a uniformly sampled n-bit integer is prime is greater than $\frac{1}{n}$)

### Modular Arithmetic

#### Extended Euclid Algorithm

```python
def eea(a,b)->tuple(int):
    # assume a>b
    # return x,y such that ax+by=gcd(a,b)=d.
    # so y is the modular inverse of b mod a
    # so x is the modular inverse of a mod b
    # so gcd(a,b)=ax+by
    if a%b==0:
        return (0,1)
    x,y=eea(b,a%b)
    return (y,x-y(a//b))
```

