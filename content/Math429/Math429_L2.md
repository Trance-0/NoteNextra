# Lecture 2

## Chapter I Vector Spaces

### Subspaces 1C

#### Definition 1.33

A subset $U$ of $V$ is called subspace of $V$ is $U$ is also a vector space with the same additive identity, addition and scalar multiplication as on $V$.

#### Theorem 1.34

Condition for a subspace.

* Additive identity: $0\in U$
* Closure under addition: $\forall u,w\in U,u+w\in V$
* Closure under **scalar multiplication**: $a\in \mathbb{F}$ and $u\in V$, $a\cdot u\in V$

Proof If $U$ is a subspace of $V$, then $U$ satisfies the three conditions above by the definition of vector space.

Conversely, suppose $U$ satisfies the three conditions above. The first condition ensures that the additive identity of
$V$ is in $U$. 

The second condition ensures that addition makes sense on $U$. The third condition ensures that scalar multiplication makes sense on $U$.

If $u\in U$, then $-u$ is also in $U$ by the third condition above. Hence every element of $U$ has an additive inverse in $U$. The other parts of the definition of a vector space, such as associativity and commutativity, are automatically satisfied for $U$ because they hold on the larger space $V$. Thus $U$ is a vector space and hence is a subspace of $V$.

### Definition 1.36

Sum of subspaces

Suppose $V_1,...,V_m$ are subspace of $V$. The sum of $V_1,...,V_m$, denoted by $V_1+...+V_m$ is the set of all possible sum of elements of $V_1,...,V_m$.

$$
V_1+...+V_m=\{v_1+...+v_m:v_1\in V_1, ..., v_m\in V_m\}
$$

Example

a sum of subspaces of $\mathbb{F}^3$

Suppose $U$ is the set of all elements of $\mathbb{F}^3$ whose second and third coordinates equal 0, and 𝑊 is the set of all elements of $\mathbb{F}^3$ whose first and third coordinates equal 0:

$$
U = \{(x,0,0) \in \mathbb{F}^3 : x\in \mathbb{F}\} \textup{ and } W = \{(0,y,0) \in \mathbb{F}^3 :y\in  \mathbb{F}\}.
$$

Then

$$
U+W= \{(x,y,0)  \in \mathbb{F}^3 : x,y \in \mathbb{F}\}
$$