# Lecture 7

## Chapter II Finite Dimensional Subspaces

### Dimension 2C

Intuition: $\mathbb{R}^2$ is two dimensional. $\mathbb{R}^n$ is $n$ dimensional.

#### Definition 2.35

The **dimension** of a finite dimensional vector space denoted $dim(V)$ is the length of any basis of $V$.

Potential issue:

* Why does it not matter which basis I take...

#### Theorem 2.34

Any two basis of a finite dimensional vector spaces have the same length.

Proof: 

Let $V$ be a finite dimensional vector space, and let $B_1,B_2$ (list of vectors) be two basis of $V$. $B_1$ is linearly independent and $B_2$ spans $V$, so by (Theorem 2.22) the length of $B_1$ is less than or equal to $B_2$, By symmetry the length of $B_2$ is less than or equal to the length of $B_1$ so length of $B_1$ = length of $B_2$.

Examples:

$dim\{\mathbb{F}^2\}=2$ because $(0,1),(1,0)$ forms a basis

$dim\{\mathscr{P}_m\}=m+1$ because $z^0,...,z^m$ forms a basis

$dim_{\mathbb{C}}\{\mathbb{C}\}=1$ as a $\mathbb{C}$ vector space, because $1$ forms a basis

$dim_{\mathbb{R}}\{\mathbb{C}\}=2$ as a $\mathbb{R}$ vector space, because $1,i$ forms a basis

#### Proposition 2.37

If a vector space is finite dimensional, then every linearly independent list of length $dim\{V\}$ is a basis.

#### Proposition 2.42

If a vector space is finite dimensional, then every spanning list of length $dim\{V\}$ is a basis for $V$.

Sketch of Proof:

If it's not a basis, extend reduce to a basis, but then that contradicts with **Theorem 2.34**

#### Proposition 2.39

If $U$ is a subspace of a finite dimensional vector space $V$ and $dim\{V\}=dim\{U\}$ then $U=V$

Proof:

Suppose $u_1,...,u_n$ is basis for $U$, then it is linearly independent in $V$. but $dim\{V\}=dim\{U\}$, by **Proposition 2.37**, $u_1,...,u_n$ is a basis of $V$.

So $U=V$.

#### Theorem 2.43   

Let $V_1$ and $V_2$ be subspaces of a finite dimensional vector space $V$, then $dim\{V_1+V_2\}=dim\{V_1\}+dim\{V_2\}-dim\{V_1\bigcap V_2\}$

Proof:

Let $u_1,...,u_m$ be a basis for $V_1\bigcap V_2$,   
then extend by $v_1,...,v_k,u_1,...,u_m$ to a basis of $V_1$,  
then extend to $u_1,...,u_m,w_1,..,w_l$ a basis of $V_2$.

Then I claim $v_1,...,v_k,u_1,...,u_m,w_1,...,w_l$ is a basis of $V_1+V_2$

Note: given the above statement, we have $dim\{V_1+V_2\}=k+m+l=(k+m)+(m+l)-m=dim\{V_1\}+dim\{V_2\}-dim\{V_1\bigcap V_2\}$

So showing $v_1,...,v_k,u_1,...,u_m,w_1,...,w_l$ is a basis suffices.

Since $V_1,V_2\subseteq Span\{v_1,...,v_k,u_1,...,u_m,w_1,...,w_l\}$, $V_1+V_2\subseteq Span\{v_1,...,v_k,u_1,...,u_m,w_1,...,w_l\}$.

Since $V_1+V_2$ is the smallest subspace contains both $V_1,V_2$, $v_i,u_k,w_j\in V_1+V_2$, $V_1+V_2= Span\{v_1,...,v_k,u_1,...,u_m,w_1,...,w_l\}$

So the list above spans $V_1+V_2$.

Suppose $a_1 v_1+...+a_k v_k=-b_1 u_1-...-b_m u_m-c_1 w_1-...- c_e w_l\in V_1\bigcap V_2$...