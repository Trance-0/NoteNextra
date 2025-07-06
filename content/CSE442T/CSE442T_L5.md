# Lecture 5

## Chapter 2: Computational Hardness

Proving that there are one-way functions relies on assumptions.

Factoring Assumption: $\forall \mathcal{A}, \exist \epsilon (n)$, let $p,q\in \Pi_n,p,q<2^n$

$$
P[p\gets \Pi_n;q\gets \Pi_n;N=p\cdot q:\mathcal{A}(N)\in \{p,q\}]<\epsilon(n)
$$

Evidence: To this point, best known procedure to always factor has run time $O(2^{\sqrt{n}\sqrt{log(n)}})$

Distribution of prime numbers:

- We have infinitely many prime
- Prime Number Theorem $\pi(n)\approx\frac{n}{\ln(n)}$, that means, $\frac{1}{\ln n}$ of all integers are prime.

We want to (guaranteed to) find prime:

$\pi(n)>\frac{2^n}{2n}$

e.g.
$$
P[x\gets \{0,1\}^n:x\in prime]\geq {\frac{2^n}{2n}\over 2^n}=\frac{1}{2n}
$$

Theorem:

$$
f_{mult}:\{0,1\}^{2n}\to \{0,1\}^{2n},f_{mult}(x_1,x_2)=x_1\cdot x_2
$$

Idea: There are enough pairs of primes to make this difficult.

> Reminder: Weak on-way if easy to compute and $\exist p(n)$,
> $P[\mathcal{A}\ \text{inverts=success}]<1-\frac{1}{p(n)}$
> $P[\mathcal{A}\ \text{inverts=failure}]>\frac{1}{p(n)}$ high enough

### Prove one-way function (under assumptions)

To prove $f$ is on-way (under assumption)

1. Show $\exists p.p.t$ solves $f(x),\forall x$.
2. Proof by contradiction.
   - For weak: Provide $p(n)$ that we know works.
     - Assume $\exists \mathcal{A}$ such that $P[\mathcal{A}\ \text{inverts}]>1-\frac{1}{p(n)}$
   - For strong: Provide $p(n)$ that we know works.
     - Assume $\exists \mathcal{A}$ such that $P[\mathcal{A}\ \text{inverts}]>\frac{1}{p(n)}$

Construct p.p.t $\mathcal{B}$
which uses $\mathcal{A}$ to solve a problem, which contradicts assumption or known fact.

Back to Theorem:

We will show that $p(n)=8n^2$ works.

We claim $\forall \mathcal{A}$,

$$
P[(x_1,x_2)\gets \{0,1\}^{2n};y=f_{mult}(x_1,x_2):f(\mathcal{A}(y))=y]<1-\frac{1}{8n^2}
$$

For the sake of contradiction, suppose

$$
\exists \mathcal{A} \textup{ such that} P[\mathcal{A}\ \text{inverts}]>1-\frac{1}{8n^2}
$$

We will use this $\mathcal{A}$ to design p.p.t $B$ which can factor 2 random primes with non-negligible prob.

```python
def A(y):
    # the adversary algorithm
    # expecting N to be product of random integer, don't need to be prime

def is_prime(x):
    # test if x is a prime

def gen(n):
    # generate number up to n bits

def B(y):
    # N is the input cipher
    x1,x2=gen(n),gen(n)
    p=x1*x2
    if is_prime(x1) and is_prime(x2):
        return A(p)
    return A(y)
```

How often does $\mathcal{B}$ succeed/fail?

$\mathcal{B}$ fails to factor $N=p\dot q$, if:

- $x$ and $y$ are not both prime
  - $P_e=1-P(x\in \Pi_n)P(y\in \Pi_n)\leq 1-(\frac{1}{2n})^2=1-\frac{1}{4n^2}$
- if $\mathcal{A}$ fails to factor
  - $P_f<\frac{1}{8n^2}$

So

$$
P[\mathcal{B} \text{ fails}]\leq P[E\cup F]\leq P[E]+P[F]\leq (1-\frac{1}{4n^2}+\frac{1}{8n^2})=1-\frac{1}{8n^2}
$$

So

$$
P[\mathcal{B} \text{ succeed}]\geq \frac{1}{8n^2} (\text{non-negligible})
$$

This contradicting factoring assumption. Therefore, our assumption that $\mathcal{A}$ exists was wrong.

Therefore $\forall \mathcal{A}$, $P[(x_1,x_2)\gets \{0,1\}^{2n};y=f_{mult}(x_1,x_2):f(\mathcal{A}(y))=y]<1-\frac{1}{8n^2}$ is wrong.
