# Lecture 2

## Probability review

Sample space $S=$ set of outcomes (possible results of experiments)

Event $A\subseteq S$

$P[A]=P[$ outcome $x\in A]$

$P[\{x\}]=P(x)$

Conditional probability:

$P[A|B]={P[A\cap B]\over P[B]}$

Assuming $B$ is the known information. Moreover, $P[B]>0$

Probability that $A$ and $B$ occurring: $P[A\cap B]=P[A|B]\cdot P[B]$

$P[B\cap A]=P[B|A]\cdot P[A]$

So  $P[A|B]={P[B|A]\cdot P[A]\over P[B]}$ (Bayes Theorem)

**There is always a chance that random guess would be the password... Although really, really, low...**

### Law of total probability

Let $S=\bigcup_{i=1}^n B_i$. and $B_i$ are disjoint events.

$A=\bigcup_{i=1}^n A\cap B_i$ ($A\cap B_i$ are all disjoint)

$P[A]=\sum^n_{i=1} P[A|B_i]\cdot P[B_i]$

## Back to cryptography

Defining security.

### Perfect Secrecy (Shannon Secrecy)

$K\gets Gen()$ $K\in\mathcal{K}$

$c\gets Enc_K(m)$ or we can also write as $c\gets Enc(K,m)$ for $m\in \mathcal{M}$

And the decryption procedure:

$m'\gets Dec_K(c')$, $m'$ might be null.

$P[K\gets Gen(): Dec_K(Enc_K(m))=m]=1$

#### Shannon Secrecy

Distribution $D$ over the message space $\mathcal{M}$

$P[K\gets Gen;m\gets D: m=m'|c\gets Enc_K(m)]=P[m\gets D: m=m']$

Basically, we cannot gain any information from the encoded message.

Code shall not contain any information changing the distribution of expectation of message after viewing the code.

**NO INFO GAINED**

#### Perfect Secrecy

For any 2 messages, say $m_1,m_2\in \mathcal{M}$ and for any possible cipher $c$,

$P[K\gets Gen:c\gets Enc_K(m_1)]=P[K\gets Gen():c\gets Enc_K(m_2)]$

For a fixed $c$, any message could be encrypted to that...

#### Theorem 

Shannon secrecy is equivalent to perfect secrecy.

Proof:

If a crypto-system satisfy perfect secrecy, then it also satisfy Shannon secrecy.

Let $(Gen, Enc,Dec)$ be a perfectly secret crypto-system with $\mathcal{K}$ and $\mathcal{M}$.

Let $D$ be any distribution over messages.

Let $m'\in \mathcal{M}$.

$$
={P_K[c\gets Enc_K(m')]\cdot P[m=m']\over P_{K,m}[c\gets Enc_K(m)]}\\
$$

$$
P[K\gets Gen();m\gets D:m=m'|c\gets Enc_K(m)]={P_{K,m}[c\gets Enc_K(m)\vert m=m']\cdot P[m=m']\over P_{K,m}[c\gets Enc_K(m)]}\\
P_{K,m}[c\gets Enc_K(m)]=\sum^n_{i=1}P_{K,m}[c\gets Enc_k(m)|m=m_i]\cdot P[m=m_i]\\
=\sum^n_{i=1}P_{K,m_i}[c\gets Enc_k(m_i)]\cdot P[m=m_i]
$$

and $P_{K,m_i}[c\gets Enc_K(m_i)]$ is constant due to perfect secrecy

$\sum^n_{i=1}P_{K,m_i}[c\gets Enc_K(m_i)]\cdot P[m=m_i]=\sum^n_{i=1} P[m=m_i]=1$