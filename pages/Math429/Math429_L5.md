# Lecture 5

## Chapter II Finite Dimensional Subspaces

### Span and Linear Independence 2A

#### Definition 2.15

A list of vector $\vec{v_1},...,\vec{v_m}$ in $V$ is called linearly independent if the only choice for $a_1,...,a_m\in \mathbb{F}$ such that $a_1\vec{v_1}+...+a_m\vec{v_m}=\vec{0}$ is $a_1=...=a_m=0$

If $\{\vec{v_1},...,\vec{v_m}\}$ is NOT linearly independent then we call them linearly dependent.

Examples:

* The empty list is linearly independent.
* Consider the list with a single vector, $\{\vec{v}\}$, is lienarly independent, if $a\vec{v}=\vec{0}\implies a=0$. This implication holds when as long as $\vec{v}\neq \vec{0}$.
* Consider $V=\mathbb{F}^3$ $\{(1,2,3),(1,1,1)\}$, more generally, $\{\vec{v_1},\vec{v_2}\}$, by the definition of linear independence, $\vec{0}=a_1\vec{v_1}+a_2\vec{v_2}$. This is equivalent to $a_1\vec{v_1}=-a_2\vec{v_2}$
  * Case 1: if any of the vector is a zero vector $\vec{v_1}=\vec{0}$ or $\vec{v_2}=\vec{0}$, assume ( $\vec{v_2}=\vec{0}$ )
    then for $a_1=0$ and any $a_2$, $a_1\vec{v_1}=-a_2\vec{v_2}$.

  * Case 2: if $\vec{v_1}\neq \vec{0}$ and $\vec{v_2}\neq \vec{0}$
    $a_1\vec{v_1}=-a_2\vec{v_2}$ implies that they lie on the same line.

  $\{(1,2,3),(1,1,1)\}$ is linearly independent.
* Consider the list  $\{(1,2,3),(1,1,1),(-1,0,1)\}$, since we can get $\vec{0}$ from a non-trivial solution $(1,2,3)-2(1,1,1)-(-1,0,1)=\vec{0}$

#### Lemma (weak version)

A list of $\{\vec{v_1},...,\vec{v_m}\}$ is linearly dependent $\iff$ there is a $\vec{v_k}$ satisfying $\vec{v_k}=a_1\vec{v_1}+...+a_{k-1}\vec{v_{k-1}}+a_{k+1}\vec{v_{k+1}}+...+a_m\vec{v_m}$  ($v_k\in Span\{\vec{v_1},...,\vec{v_{k-1}},\vec{v_{k+1}},...,\vec{v_k}\}$)

Proof:

$\{\vec{v_1},...,\vec{v_m}\}$ is linearly dependent $\iff$  $a_1\vec{v_1}+...+a_m\vec{v_m}=\vec{0}$ (with at least one $a_k\neq 0$)

If $a_k\vec{v_k}=-(a_1\vec{v_1}+...+a_{k-1}\vec{v_{k-1}}+a_{k+1}\vec{v_{k+1}}+...+a_m\vec{v_m})$, then $\vec{v_k}=-\frac{1}{a_k}(a_1\vec{v_1}+...+a_{k-1}\vec{v_{k-1}}+a_{k+1}\vec{v_{k+1}}+...+a_m\vec{v_m})$

#### Lemma (2.19) (strong version)

If $\{\vec{v_1},...,\vec{v_m}\}$ is linearly dependent, then $\exists \vec{v_k} \in Span\{\vec{v_1},...,\vec{v_{k-1}}\}$. Moreover, $Span\{\vec{v_1},...,\vec{v_m}\}=Span\{\vec{v_1},...,\vec{v_{k-1}},\vec{v_{k+1}},...,\vec{v_k}\}$

Proof:

$\{\vec{v_1},...,\vec{v_m}\}$ is linearly dependent $\implies$ $a_1\vec{v_1}+...+a_m\vec{v_m}=\vec{0}$. Let $k$ be the maximal $i$ such that $a_i\neq 0$

If $\vec{v}=b_1\vec{v_1}+...+b_m\vec{v_m}$, then $\vec{v}=b_1\vec{v_1}+...+b_{k-1}\vec{v_{k-1}}+b_{k}(-\frac{1}{a_k}(a_1\vec{v_1}+....+a_{k-1}\vec{v_{k-1}}))+b_{k+1}\vec{v_{k+1}}+...+b_m\vec{v_m}\in Span\{\vec{v_1},...,\vec{v_{k-1}},\vec{v_{k+1}},...,\vec{v_k}\}$

#### Proposition 2.22

In a finite dimensional vector space, if $\{\vec{v_1},...,\vec{v_m}\}$ is linearly independent set, and $\{\vec{u_1},...,\vec{u_n}\}$ is a Spanning set, then $m\leq n$.

Since $Span\{\vec{u_1},...,\vec{u_n}\}=V$ , for each $\vec{v_i}=a_1\vec{u_1}+...+a_n\vec{u_n}$ for some scalar $a_1,...,a_n$. Consider the equation $x_1\vec{v_1}+...+x_m\vec{v_m}=\vec{0}$, (if we write it to the matrix form, it will have more columns than the rows. It is guaranteed to have free variables.) 

Proof:

We will construct a new Spanning set with elements $\vec{u_i}$ being replaced by $\vec{v-j}$'s

Step 1. Consider set $\{\vec{v_1},\vec{u_1},\vec{u_2},...,\vec{u_n}\}=V$. Because $\vec{v_1}\in Span\{\vec{u_1},...,\vec{u_n}\}$ then the set is linearly dependent. by lemma 2.19, $\exists i$ such that $\vec{u_i}\in Span\{\vec{v_1},\vec{u_1},\vec{u_2},...,\vec{u_n}\}$. The lemma 2.19 also implies that  we cna remove $\vec{u_i}$ such that the set is still a Spanning set $V=\{\vec{v_1},\vec{u_1},\vec{u_2},...,\vec{u_{i-1}},\vec{u_{i+1}},...,\vec{u_n}\}$

Step 2. Consider set $\{\vec{v_1},...,\vec{v_k},\vec{u_s},...,\vec{u_t}\}=V$

Step k-1. Consider set $\{\vec{v_1},...,\vec{v_{k-1}},\vec{v_k},\vec{u_s},...,\vec{u_t}\}=V$ which is linearly dependent. Apply lemma 2.19 again, we can find there is a $\vec{u_j}\in Span\{\vec{v_1},...,\vec{v_{k-1}},\vec{v_k},\vec{u_s},...,\vec{u_r}\}$. with $r<j$. Then we remove $\vec{u_j}$ and update the set.

### Basis 2B

#### Definition 2.26

A linearly independent Spanning set is called a basis. "smallest spanning set"