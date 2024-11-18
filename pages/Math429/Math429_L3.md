# Lecture 3

## Chapter I Vector Spaces

### Subspaces 1C

Given a vector space $V$, a subset $W\subset V$ is called a subspace if 

$$
\begin{cases}
W\neq \phi\\
W\textup{ is closed under addition and scalar multiplication}
\end{cases}
$$

#### Definition 1.41

 Direct Sum

Suppose $V_1,...,V_m$ are subspace of $V$. Their sum $V_1+...+V_m$ is called a direct sum if **each element** $\vec{v_1}+...+\vec{v_m}\in V_1+...+V_m$ in a unique way.

If $v_1+....+v_m$ is a direct sum, we write it as 

$$
v_1\oplus v_2\oplus ...\oplus v_m
$$

Example:

$V=\mathbb{R}^3$

$$
V_1=\{(x,y,0):x,y\in \mathbb{R}\}\\
V_2=\{(0,a,b):a,b\in \mathbb{R}\}
$$

Is $V_1+V_2$ a direct sum?

**No, because there are other ways to build (0,0,0) in such space, which is not unique**

For vector $(0,0,0)=(x,y,0)+(0,a,b)$, as long as $y=-a$, there are other ways to build up the vector.

### Theorem 1.45

Suppose $V_1,...,V_m$ are subspaces of $V$, then $V_1+...+V_m$ is a direct sum if and only if the only way to write $\vec{0}=\vec{v_1}+...+\vec{v_m}$ with $\vec{v_1}\in V_1,...,\vec{v_m}\in V_m$. is $\vec{v_1}=...=\vec{v_m}=\vec{0}$

Proof:

$\Rightarrow$

If $\vec{v_1}=...=\vec{v_m}$ is a direct sum, then the only way to write $\vec{0}=\vec{v_1}+...+\vec{v_m}$ where $\vec{v_i}\in V_i$ is $\vec{0}=\vec{0}+...+\vec{0}$ **follows from the definition of direct sum**

$\Leftarrow$

Need to show if the property holds for $\vec{0}$, then it holds for any $\vec{v}\in V_1+...+V_m$ $\iff$ If the property fails for any $\vec{v}\in V_1+...+V_m$, then it fails for $\vec{0}$

If a vector $\vec{v}\in V_1+...+V_m$ satisfies $\vec{v}=\vec{v_1}+\vec{v_2}+...+\vec{v_m}=\vec{u_1}+\vec{u_2}+...+\vec{u_m}$, $\vec{v_i},\vec{u_i}\in V_i$ and there exists $i\in\{1,...,m\}\vec{v_i}\neq \vec{u_i}$,

then $(\vec{v_1}+\vec{v_2}+...+\vec{v_m})-(\vec{u_1}+\vec{u_2}+...+\vec{u_m})=\vec{0}$
