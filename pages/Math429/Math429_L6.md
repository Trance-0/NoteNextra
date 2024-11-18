# Lecture 6

## Chapter II Finite Dimensional Subspaces

### Span and Linear Independence 2A

Recall

#### Proposition 2.22

In a vector space $V$, a spanning list $\{\vec{v_1},...,\vec{v_n}\}$, and an linearly independent list $\{\vec{w_1},...,\vec{w_n}\}$. Then $m\leq n$.

#### Definition 2.26

A list $\{\vec{v_1},...,\vec{v_n}\}$ is called a basis if it is a linearly independent spanning list.

#### Proposition 2.ex.1

A subspace of a finite dimensional vector space is finite-dimensional.

Proof: Let $V$ be a finite-dimensional vector space and let $W$ be a subspace of $V$

* Case 1: $W=\{\vec{0}\}$
* Case 2: $Span\{\vec{v_1},...,\vec{v_{k-1}}\}\subset W$ where $\vec{v_1},...,\vec{v_{k-1}}$ is linearly independent

    If $W=Span\{\vec{v_1},...,\vec{v_{k-1}}\}$, done. If not, then there exists $\vec{v_{k-1}}\in W$ and $\vec{v_k}\cancel{\in} Span\{\vec{v_1},...,\vec{v_{k-1}}\}$. This implies $Span\{\vec{v_1},...,\vec{v_k}\}\subset W$. and $\{\vec{v_1},...,\vec{v_k}\}$ is linearly independent. Continue until $Span\{\vec{v_1},...,\vec{v_n}\}=W\subset V$, $V$ has a finite spanning set,whose size $\geq n$ by **Prop 2.22**

#### Theorem 2.28

A list $\{\vec{v_1},...,\vec{v_n}\}$ is a basis for $V$ if and only if every vector $\vec{v}\in V$ can be uniquely written as 

$$
\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_n\vec{v_n}
$$

where $a_1,...,a_n\in \mathbb{F}$

Proof:

$\Leftarrow$ 

If every $\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_n\vec{v_n}$ with unique choice of $a_1,...,a_n$, we will show $\{\vec{v_1},...,\vec{v_n}\}$ is a basis

Since every $\vec{v}$ is a linear combination of $\{\vec{v_1},...,\vec{v_n}\}$, we deduce $V=Span\{\vec{v_1},...,\vec{v_n}\}$

And by assumption, $\vec{0}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_n\vec{v_n}$ with unique choice of $a_1,...,a_n\in \mathbb{F}$ (this choice is $a_1=...=a_n=0$) It implies $\{\vec{v_1},...,\vec{v_n}\}$ is linearly independent.

So the list $\{\vec{v_1},...,\vec{v_n}\}$ is a basis.

$\Rightarrow$

If $\{\vec{v_1},...,\vec{v_n}\}$ is a basis, we will show that every $\vec{v}$ can be uniquely written as $\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_n\vec{v_n}$ with unique choice of $a_1,...,a_n\in \mathbb{F}$

Since $\{\vec{v_1},...,\vec{v_n}\}$ is a basis, it must spans $V$ with each vector being linearly independent.

Since $\{\vec{v_1},...,\vec{v_n}\}$ spans $V$, there must be some $a_1,...,a_n\in \mathbb{F}$ such that $\vec{v}=a_1\vec{v_1}+a_2\vec{v_2}+...+a_n\vec{v_n}$ 

Then $\vec{0}=(a_1-b_1)\vec{v_1}+...+(a_n-b_n)\vec{v_n}$

Since $\{\vec{v_1},...,\vec{v_n}\}$ is linearly independent, this implies $a_i-b_i=0$

#### Lemma 2.30

Every Spanning set of a vector space can we be reduced into a basis.

ideas of Proof:

If the spanning list is not linearly independent, then use **Lemma 2.19** to remove a vector.

#### Lemma 2.32

Every linearly independent list of vectors in a finite dimensional vector space can be extended with a basis.

ideas of Proof: 

If $\{\vec{v_1},...,\vec{v_{k-1}}\}$, we can always add another vector $\vec{v_k} \cancel{\in} Span\{\vec{v_1},...,\vec{v_{k-1}}\}$ to increase the span.

#### Theorem 2.31

Every **finite dimensional** vector space has a basis

#### Proposition (2.33)

Suppose that $V$ is finite-dimensional and $U\subset V$ is a subspace, then $\exists W\subset V$ such that $V= U \oplus W$

Proof

Since $U$ is a subspace of $V$, then $U$ is also finite dimensional. Thus $U$ has a basis $\{\vec{u_1},...,\vec{u_k}\}$ This list is linearly independent. So we can extend it into a basis for $V$, $\{\vec{u_1},..,\vec{u_k},\vec{w_1},...,\vec{w_s}\}$. Now let $W=Span\{\vec{u_1},..,\vec{u_k},\vec{w_1},...,\vec{w_s}\}$

Now we need to prove $V=U\oplus W$.

Since $U\subset V$ and $W\subset V$ then $V+W\subset V$ because $U+W$ is the smallest vector space containing $U$ and $W$.

Since $\{\vec{u_1},..,\vec{u_k},\vec{w_1},...,\vec{w_s}\}$ is a basis of $V$, every $\vec{v}\in V, \vec{v}\in Span\{\vec{u_1},..,\vec{u_k},\vec{w_1},...,\vec{w_s}\}$

$$
\vec{v}=a_1\vec{u_1}+...+a_k\vec{u_k}+b_1\vec{w_1}+...+b_s\vec{w_s}\\
$$

So $\vec{v}\in V+W$. $V=V+W$

If $\vec{v}\in U\bigcap W$, then $\vec{v}=a_1\vec{u_1}+...+a_k\vec{u_k}\in V$, $\vec{v}=b_1\vec{w_1}+...+b_s\vec{w_s}\in W$, but $\{\vec{u_1},..,\vec{u_k},\vec{w_1},...,\vec{w_s}\}$ should be an linearly independent spanning set. this implies $a_i,b_j=0$ So $\vec{v}=0$ 
