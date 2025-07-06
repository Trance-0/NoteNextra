# Lecture 6

## Review

$$
f_{mult}:\{0,1\}^{2n}\to \{0,1\}^{2n}
$$

is a weak one-way.

$P[\mathcal{A}\ \text{invert}]\leq 1-\frac{1}{8n^2}$ over $x,y\in$ random integers $\{0,1\}^n$

## Chapter 2: Computational Hardness

### Converting weak one-way function to strong one-way function

By factoring assumptions, $\exists$ strong one-way function

$f:\{0,1\}^N\to \{0,1\}^N$ for infinitely many $N$.

$f=\left(f_{mult}(x_1,y_1),f_{mult}(x_2,y_2),\dots,f_{mult}(x_q,y_q)\right)$, $x_i,y_i\in \{0,1\}^n$.

$f:\{0,1\}^{8n^4}\to \{0,1\}^{8n^4}$

Idea: With high probability, at least one pair $(x_i,y_i)$ are both prime.

Factoring assumption: $\mathcal{A}$ has low chance of factoring $f_{mult}(x_i,y_i)$

Use $P[x \textup{ is prime}]\geq\frac{1}{2n}$

$$
P[\forall p,q \in x_i,y_i, p\textup{ and } q \textup{ is not prime }]=P[p,q \in x_i,y_i, p\textup{ and } q \textup{ is not prime }]^q
$$

$$
P[\forall p,q \in x_i,y_i, p\textup{ and } q \textup{ is not prime }]\leq(1-\frac{1}{4n^2})^{4n^3}\leq (e^{-\frac{1}{4n^2}})^{4n^3}=e^{-n}
$$

### Proof of strong one-way function

1. $f_{mult}$ is efficiently computable, and we compute it poly-many times.
2. Suppose it's not hard to invert. Then
    $\exists \text{n.u.p.p.t.}\ \mathcal{A}$such that $P[w\gets \{0,1\}^{8n^4};z=f(w):f(\mathcal{A}(z))=0]=\mu (n)>\frac{1}{p(n)}$

We will use this to construct $\mathcal{B}$ that breaks factoring assumption.

$p\gets \Pi_n,q\gets \Pi_n,N=p\cdot q$

```psudocode
function B:
    Receives N
    Sample (x,y) q times
    Compute z_i = f_mult(x_i,y_i) for each i
    From i=1 to q
        check if both x_i y_i are prime
        If yes,
            z_i = N
            break   // replace first instance
    Let z = (z_1,z_2,...,z_q) // z_k = N hopefully
    ((x_1,y_1),...,(x_k,y_k),...,(x_q,y_q)) <- a(z)
    if (x_k,y_k) was replaced
        return x_k,y_k
    else
        return null
```

Let $E$ be the event that all pairs of sampled integers were not both prime.

Let $F$ be the event that $\mathcal{A}$ failed to invert

$P[\mathcal{B} \text{ fails}]\leq P[E\cup F]\leq P[E]+P[F]\leq e^{-n}+(1-\frac{1}{p(n)})=1-(\frac{1}{p(n)}-e^{-n})\leq 1-\frac{1}{2p(n)}$

$P[\mathcal{B} \text{ succeeds}]=P[p\gets \Pi_n,q\gets \Pi_n,N=p\cdot q:\mathcal{B}(N)\in \{p,q\}]\geq \frac{1}{2p(n)}$

Contradicting factoring assumption

We've defined one-way functions to hae domain $\{0,1\}^n$ for some $n$.

Our strong one-way function $f(n)$

- Takes $4n^3$ pairs of random integers
- Multiplies all pairs
- Hope at least pair are both prime $p,q$ b/c we know $N=p\cdot q$ is hard to factor

### General collection of strong one-way functions

$F=\{f_i:D_i\to R_i\},i\in I$, $I$ is the index set.

1. We can effectively choose $i\gets I$ using $Gen$.
2. $\forall i$ we ca efficiently sample $x\gets D_i$.
3. $\forall i\forall x\in D_i,f_i(x)$ is efficiently computable
4. For any n.u.p.p.t $\mathcal{A}$, $\exists$ negligible function $\epsilon (n)$.
    $P[i\gets Gen(1^n);x\gets D_i;y=f_i(x):f(\mathcal{A}(y,i,1^n))=y]\leq \epsilon(n)$

#### An instance of strong one-way function under factoring assumption

$f_{mult,n}:(\Pi_n\times \Pi_n)\to \{0,1\}^{2n}$ is a collection of strong one way function.

Ideas of proof:

1. $n\gets Gen(1^n)$
2. We can efficiently sample $p,q$ (with justifications)
3. Factoring assumption

Algorithm for sampling a random prime $p\gets \Pi_n$

1. $x\gets \{0,1\}^n$ (n bit integer)
2. Check if $x$ is prime.
   - Deterministic poly-time procedure
   - In practice, a much faster randomized procedure (Miller-Rabin) used

    $P[x\cancel{\in} \text{prime}|\text{test said x prime}]<\epsilon(n)$

3. If not, repeat. Do this for polynomial number of times
