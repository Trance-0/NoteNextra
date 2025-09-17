# CSE442T Introduction to Cryptography (Lecture 2)

## Probability review

Sample space $S=\text{set of outcomes (possible results of experiments)}$

Event $A\subseteq S$

$P[A]=P[$ outcome $x\in A]$

$P[\{x\}]=P[x]$

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

## Chapter 1: Introduction

### Defining security

#### Perfect Secrecy (Shannon Secrecy)

$k\gets Gen()$ $k\in K$

$c\gets Enc_k(m)$ or we can also write as $c\gets Enc(k,m)$ for $m\in M$

And the decryption procedure:

$m'\gets Dec_k(c')$, $m'$ might be null.

$P[k\gets Gen(): Dec_k(Enc_k(m))=m]=1$

#### Definition 11.1 (Shannon Secrecy)

Distribution $D$ over the message space $M$

$P[k\gets Gen;m\gets D: m=m'|c\gets Enc_k(m)]=P[m\gets D: m=m']$

Basically, we cannot gain any information from the encoded message.

Code shall not contain any information changing the distribution of expectation of message after viewing the code.

**NO INFO GAINED**

#### Definition 11.2 (Perfect Secrecy)

For any 2 messages, say $m_1,m_2\in M$ and for any possible cipher $c$,

$P[k\gets Gen:c\gets Enc_k(m_1)]=P[k\gets Gen():c\gets Enc_k(m_2)]$

For a fixed $c$, any message (have a equal probability) could be encrypted to that...

#### Theorem 12.3

Shannon secrecy is equivalent to perfect secrecy.

Proof:

If a crypto-system satisfy perfect secrecy, then it also satisfy Shannon secrecy.

Let $(Gen,Enc,Dec)$ be a perfectly secret crypto-system with $K$ and $M$.

Let $D$ be any distribution over messages.

Let $m'\in M$.

$$
={P_k[c\gets Enc_k(m')]\cdot P[m=m']\over P_{k,m}[c\gets Enc_k(m)]}\\
$$

$$
P[k\gets Gen();m\gets D:m=m'|c\gets Enc_k(m)]={P_{k,m}[c\gets Enc_k(m)\vert m=m']\cdot P[m=m']\over P_{k,m}[c\gets Enc_k(m)]}\\
P_{k,m}[c\gets Enc_k(m)]=\sum^n_{i=1}P_{k,m}[c\gets Enc_k(m)|m=m_i]\cdot P[m=m_i]\\
=\sum^n_{i=1}P_{K,m_i}[c\gets Enc_k(m_i)]\cdot P[m=m_i]
$$

and $P_{k,m_i}[c\gets Enc_k(m_i)]$ is constant due to perfect secrecy

$\sum^n_{i=1}P_{k,m_i}[c\gets Enc_k(m_i)]\cdot P[m=m_i]=\sum^n_{i=1} P[m=m_i]=1$