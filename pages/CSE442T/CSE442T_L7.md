# Lecture 7

## Chapter 2: Computational Hardness

### Letter choosing experiment

For 100 letter tiles,

$p_1,...,p_{27}$ (with one blank)

$(p_1)^2+\dots +(p_{27})^2\geq\frac{1}{27}$

For any $p_1,...,p_n$, $0\leq p_i\leq 1$.

$\sum p_i=1$

$P[\text{the same event twice in a row}]=p_1^2+p_2^2....+p_n^2$

By Cauchy-Schwarz: $|u\cdot v|^2 \leq ||u||\cdot ||v||^2$.

let $\vec{u}=(p_1,...,p_n)$, $\vec{v}=(1,..,1)$, so $(p_1^2+p_2^2....+p_n)^2\leq (p_1^2+p_2^2....+p_n^2)\cdot n$. So $p_1^2+p_2^2....+p_n^2\geq \frac{1}{n}$

So for an adversary $\mathcal{A}$, who random choose $x'$ and output $f(x')=f(x)$ if matched. $P[f(x)=f(x')]\geq\frac{1}{|Y|}$

So $P[x\gets f(x);y=f(x):\mathcal{A}(y,1^n)=y]\geq \frac{1}{|Y|}$

### Modular arithmetic

For $a,b\in \mathbb{Z}$, $N\in \mathbb{Z}^2$

$a\equiv b \mod N\iff N|(a-b)\iff \exists k\in \mathbb{Z}, a-b=kN,a=kN+b$

Ex: $N=23$, $-20\equiv 3\equiv 26\equiv 49\equiv 72\mod 23$.

#### Equivalent relations for any $N$ on $\mathbb{Z}$

$a\equiv a\mod N$

$a\equiv b\mod N\iff b\equiv a\mod N$

$a\equiv b\mod N$ and $b\equiv c\mod N\implies a\equiv c\mod N$

#### Division Theorem

For any $a\in \mathbb{Z}$, and $N\in\mathbb{Z}^+$, $\exists unique\ r,0\leq r<N$.

$\mathbb{Z}_N=\{0,1,2,...,N-1\}$ with modular arithmetic.

$a+b\mod N,a\cdot b\mod N$

Theorem: If $a\equiv b\mod N$ and$c\equiv d\mod N$, then $a\cdot c\equiv b\cdot d\mod N$.

Definition: $gcd(a,b)=d,a,b\in \mathbb{Z}^+$, is the maximum number such that $d|a$ and $d|b$.

Using normal factoring is slow... (Example: large $p,q,r$, $N=p\cdot q,,M=p\cdot r$)

##### Euclidean algorithm

Recursively relying on fact that $(a>b>0)$

$gcd(a,b)=gcd(b,a\mod b)$

```python
def euclidean_algorithm(a,b):
    if a<b: return euclidean_algorithm(b,a)
    if b==0: return a
    return euclidean_algorithm(b,a%b)
```

Proof:

We'll show $d|a$ and $d|b\iff d|b$ and $d|(a\mod b)$

$\impliedby$ $a=q\cdot b+r$, $r=a\mod b$

$\implies$ $d|r$, $r=a\mod b$

Runtime analysis:

Fact: $b_{i+2}<\frac{1}{2}b_i$

Proof:

Since $a_i=q_i\cdot b_i+b_{i+1}$, and $b_1=q_2\cdot b_2+b_3$, $b_2>b_3$, and $q_2$ in worst case is $1$, so $b_3<\frac{b_1}{2}$

$T(n)=2\Theta(\log b)=O(\log n)$ (linear in size of bits input)

##### Extended Euclidean algorithm

Our goal is to find $x,y$ such that $ax+by=gcd(a,b)$

Given $a\cdot x\equiv b\mod N$, we do euclidean algorithm to find $gcd(a,b)=d$, then reverse the steps to find $x,y$ such that $ax+by=d$

```python
def extended_euclidean_algorithm(a,b):
    if a%b==0: return (0,1)
    x,y=extended_euclidean_algorithm(b,a%b)
    return (y,x-y*(a//b))
```

Example: $a=12,b=43$, $gcd(12,43)=1$

$$
\begin{aligned}
43&=3\cdot 12+7\\
12&=1\cdot 7+5\\
7&=1\cdot 5+2\\
5&=2\cdot 2+1\\
2&=2\cdot 1+0\\
1&=1\cdot 5-2\cdot 2\\
1&=1\cdot 5-2\cdot (7-1\cdot 5)\\
1&=3\cdot 5-2\cdot 7\\
1&=3\cdot (12-1\cdot 7)-2\cdot 7\\
1&=3\cdot 12-5\cdot 7\\
1&=3\cdot 12-5\cdot (43-3\cdot 12)\\
1&=-5\cdot 43+18\cdot 12\\
\end{aligned}
$$

So $x=-5,y=18$
