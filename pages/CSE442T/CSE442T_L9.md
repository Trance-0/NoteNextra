# Lecture 9

## Continue on Cyclic groups

$$
\begin{aligned}
107^{662}\mod 51&=(107\mod 51)^{662}\mod 51\\
&=5^{662}\mod 51
\end{aligned}
$$

Remind that $\phi(p),p\in\Pi,\phi(p)=p-1$.

$51=3\times 17,\phi(51)=\phi(3)\times \phi(17)=2\times 16=32$, So $5^{32}\mod 1$

$5^2\equiv 25\mod 51=25$  
$5^4\equiv (5^2)^2\equiv(25)^2 \mod 51\equiv 625\mod 51=13$  
$5^8\equiv (5^4)^2\equiv(13)^2 \mod 51\equiv 169\mod 51=16$  
$5^16\equiv (5^8)^2\equiv(16)^2 \mod 51\equiv 256\mod 51=1$  

$$
\begin{aligned}
5^{662}\mod 51&=107^{662\mod 32}\mod 51\\
&=5^{22}\mod 51\\
&=5^{16}\cdot 5^4\cdot 5^2\mod 51\\
&=19
\end{aligned}
$$

For $a\in \mathbb{Z}_N^*$, the order of $a$, $o(a)$ is the smallest positive $k$ such that $a^k\equiv 1\mod N$. $o(a)\leq \phi(N),o(a)|\phi (N)$

In a general finite group

$g^{|G|}=e$ (identity)

$o(g)\vert |G|$

If a group $G=\{a,a^2,a^3,...,e\}$ $G$ is cyclic

In a cyclic group, if $o(a)=|G|$, then a is a generator of $G$.

Fact: $\mathbb{Z}^*_p$ is cyclic

$|\mathbb{Z}^*_p|=p-1$, so $\exists$ generator $g$, and $\mathbb{Z}$, $\phi(\mathbb{Z}_{13}^*)=12$

For example, $2$ is a generator for $\mathbb{Z}_{13}^*$ with $2,4,8,3,6,12,11,9,5,10,7,1$.

If $g$ is a generator, $f:\mathbb{Z}_p^*\to \mathbb{Z}_p^*$, $f(x)=g^x \mod p$ is onto.

What type of prime $p$?

- Large prime.
- If $p-1$ is very factorable, that is very bad.
  - Pohlig-Hellman algorithm
  - $p=2^n+1$ only need polynomial time to invert
- We want $p=2q+1$, where $q$ is prime. (Sophie Germain primes, or safe primes)

There are _probably_ infinitely many safe prime and efficient to sample as well.

If $p$ is safe, $g$ generator.

$$
\mathbb{Z}_p^*=\{g,g^2,..,e\}
$$

Then $\{g^2,...g^{2q}\}S_{g,p}\subseteq \mathbb{Z}_p^*$ is a subgroup; $g^{2k}\cdot g^{2l}=g^{2(k+l)}\in S_{g,p}$

It is cyclic with generator $g^2$.

It is easy to find a generator.

- Pick $a\in \mathbb{Z}_p^*$
- Let $x=a^2$. If $x\neq 1$, it is a generator of subgroup $S_p$
  - $S_p=\{x,x^2,...,x^q\}\mod p$

Example: $p=2\cdot 11+1=23$

we have a subgroup with generator $4$ and $S_4=\{4,16,18,3,12,2,8,9,13,6,1\}$

```python
def get_generator(p):
    """
    p should be a prime, or you need to do factorization
    """
    g=[]
    for i in range(2,p-1):
        k=i
        sg=[]
        step=p
        while k!=1 and step>0:
            if k==0:
                raise ValueError(f"Damn, {i} generates 0 for group {p}")
            sg.append(k)
            k=(k*i)%p
            step-=1
        sg.append(1)
        # if len(sg)!=(p-1): continue
        g.append((i,[j for j in sg]))
    return g
```

### Diffie-Hellman assumption

If $p$ is a randomly sampled safe prime.

Denote safe prime as $\tilde{\Pi}_n=\{p\in \Pi_n:q=\frac{p-1}{2}\in \Pi_{n-1}\}$

Then

$$
P\left[p\gets \tilde{\Pi_n};a\gets\mathbb{Z}_p^*;g=a^2\neq 1;x\gets \mathbb{Z}_q;y=g^x\mod p:\mathcal{A}(y)=x\right]\leq \varepsilon(n)
$$

$p\gets \tilde{\Pi_n};a\gets\mathbb{Z}_p^*;g=a^2\neq 1$ is the function condition when we do the encryption on cyclic groups.

Notes: $f:\Z_q\to \mathbb{Z}_p^*$ is one-to-one, so $f(\mathcal{A}(y))\iff \mathcal{A}(y)=x$


