# Math 401, Topic 6: Postulates of quantum theory and measurement operations

## Section 1: Postulates of quantum theory

This part is a review of the quantum theory, I will keep the content brief.

If you are familiar with the linear algebra defined before, you can jump right into this section to keep your time as viewing those compact notations.

### Pure states

#### Pure state and mixed state

A pure state is a state that is represented by a unit vector in $\mathscr{H}^{\otimes N}$.

A mixed state is a state that is represented by a density operator in $\mathscr{H}^{\otimes N}$. (convex combination of pure states)

if $\rho_j=|\psi_j\rangle\langle\psi_j|$, then $\rho=\sum_{j=1}^N p_j\rho_j$ is a mixed state, where $p_j\geq 0$ and $\sum_{j=1}^N p_j=1$.

#### Coset space

Two non-zero vectors $u,v\in \mathscr{H}$ are said to represent the same state if $u=cv$ for some complex number $c$ with $|c|=1$.

The set of states of a quantum system is called the **coset space** of $\mathscr{H}$, $u\sim v$ if $u=cv$ for some complex number $c$ with $|c|=1$.

The coset space is called the projective space of $\mathscr{H}$, denoted by $P(\mathscr{H})\colon=(\mathscr{H}\setminus\{0\})/\sim$.

Any vector in the form $e^{i\theta}|u\rangle$ for some $u\in \mathscr{H}$ and $\theta\in \mathbb{R}$ represents the same state as $|u\rangle$.

Example: the system of a qubit has a Hilbert space $\mathbb{C}^2$, the coset space is $P(\mathbb{C}^2)\cong S^2$ is the Bloch sphere.

### Composite systems

#### Tensor product

The tensor product of two Hilbert spaces $\mathscr{H}_1$ and $\mathscr{H}_2$ is the Hilbert space $\mathscr{H}_1\otimes\mathscr{H}_2$ with the inner product $\langle u_1\otimes u_2,v_1\otimes v_2\rangle=\langle u_1,v_1\rangle\langle u_2,v_2\rangle$.

The tensor product of two vectors $u_1\in \mathscr{H}_1$ and $u_2\in \mathscr{H}_2$ is the vector $u_1\otimes u_2\in \mathscr{H}_1\otimes\mathscr{H}_2$.

#### Multipartite systems

For each part in a multipartite quantum system, each part is associated a Hilbert space $\mathscr{H}_i$. The total system is associated a Hilbert space $\mathscr{H}=\mathscr{H}_1\otimes\mathscr{H}_2\otimes\cdots\otimes\mathscr{H}_n$.

The state of the total system has the form $u_1\otimes u_2\otimes\cdots\otimes u_n$ for some $u_i\in \mathscr{H}_i$.

#### Entanglement (talk later)

A state $|\psi\rangle$ is entangled if it cannot be expressed as a product state $v_1\otimes v_2$ for any single-qubit states $|v_1\rangle$ and $|v_2\rangle$. In other words, an entangled state is non-separable.

Example: the Bell state $|\psi^+\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$ is entangled.

Assume it can be written as $|\psi\rangle=|\psi_1\rangle\otimes|\psi_2\rangle$ where $|\psi_1\rangle=a|0\rangle+b|1\rangle$ and $|\psi_2\rangle=c|0\rangle+d|1\rangle$. Then:
$$|\psi\rangle=a|00\rangle+b|01\rangle+c|10\rangle+d|11\rangle$$
Setting this equal to $|\psi^+\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$ gives:
$$ac|00\rangle+ad|01\rangle+bc|10\rangle+bd|11\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$$
This requires:
$$ac=bd=\frac{1}{2}$$
$$ad=bc=0$$

This is a contradiction, so $|\psi^+\rangle$ is entangled.

### Mixed states and density operators

#### Density operator

A density operator is a Hermitian, positive semi-definite operator with trace 1.

The density operator of a pure state $|\psi\rangle$ is $\rho=|\psi\rangle\langle\psi|$.

The density operator of a mixed state is given by the unit vector $u_1,u_2,\cdots,u_n$ in $\mathscr{H}$ with the probability $p_1,p_2,\cdots,p_n$, $p_i\geq 0$ such that $\sum_{i=1}^n p_i=1$.

The density operator is $\rho=\sum_{i=1}^n p_i|u_i\rangle\langle u_i|$.

#### Trace 1 proposition

Density operator on the finite dimensional Hilbert space $\mathscr{H}$ are positive operators having trace equal to 1.

#### Pure state lemma

A state is pure if and only if $Tr(\rho^2)=1$.

For any mixed state $\rho$, $Tr(\rho^2)<1$.

[Proof ignored here]

#### Unitary freedom in the ensemble for density operators theorem

Let $v_1,v_2,\cdots,v_l$ and $w_1,w_2,\cdots,w_l$ be two collections of vectors in the finite dimensional Hilbert space $\mathscr{H}$, the vectors being arbitrary (can be zero) except for the requirement that they define the same density operator $\rho$.

$$
\sum_{i=1}^l |v_i\rangle\langle v_i|=\sum_{i=1}^l |w_i\rangle\langle w_i|
$$

Then there exists a unitary matrix $U=(\mu_{ij})_{1\leq i,j\leq l}$ such that:

$$
v_i=\sum_{j=1}^l \mu_{ij}w_j
$$

The converse is also true.

If $\rho$ is a density operator on $\mathscr{H}$ given by: $\sum_{i=1}^l |w_i\rangle\langle w_i|$ and vector $v_i$ is given by: $v_i=\sum_{j=1}^l \mu_{ij}w_j$, then $\rho_1=\sum_{i=1}^l |v_i\rangle\langle v_i|$ is the density operator of the subsystem $\mathscr{H}_1$.

[Proof ignored here]

### Density operator of subsystems

#### Schmidt Decomposition theorem

Let $|u\rangle\in \mathscr{H}_1\otimes\mathscr{H}_2$ be a unit vector (pure state), then there exists orthonormal bases $|v_i\rangle$ of $\mathscr{H}_1$ and $|w_j\rangle$ of $\mathscr{H}_2$ and $\{\lambda_k\},k\leq r$, where $r$ is the Schmidt rank of $|u\rangle$, such that:

$$
|u\rangle=\sum_{k=1}^r \lambda_k|v_k\rangle\otimes|w_k\rangle
$$

where $\lambda_k$ are **non-negative real numbers**. such that $\sum_{k=1}^r \lambda_k^2=1$.

[Proof ignored here]

**Remark**: non-zero vector $u\in \mathscr{H}_1\otimes\mathscr{H}_2$ decomposes as a tensor product $u=u_1\otimes u_2$ if and only if the Schmidt rank of $u$ is 1. **A state** that cannot be decomposed as a tensor product is called **entangled**.

#### Reduced density operator

In $\mathscr{H}_1\otimes\mathscr{H}_2$, the reduced density operator of the subsystem $\mathscr{H}_1$ is:

$$
\rho_1=\operatorname{Tr}_2(\rho)=\sum_{k=1}^r \lambda_k^2|v_k\rangle\langle v_k|
$$

where $\rho$ is the density operator in $\mathscr{H}_1\otimes\mathscr{H}_2$.

Example:

Let $\rho=\frac{1}{2}(|01\rangle+|10\rangle)\in \mathbb{C}^2\otimes\mathbb{C}^2$,

Expand the expression of $\rho$ in the basis of $\mathbb{C}^2\otimes\mathbb{C}^2$:

$$
\rho=\frac{1}{2}(|01\rangle\langle 01|+|01\rangle\langle 10|+|10\rangle\langle 01|+|10\rangle\langle 10|)
$$

then the reduced density operator of the subsystem $\mathbb{C}^2$ in first qubit is:

$$
\begin{aligned}
\rho_1&=\operatorname{Tr}_2(\rho)\\
&=\frac{1}{2}(\langle 1|1\rangle|0\rangle\langle 0|+\langle 1|0\rangle|0\rangle\langle 1|+\langle 0|1\rangle|1\rangle\langle 0|+\langle 0|0\rangle|1\rangle\langle 1|)\\
&=\frac{1}{2}(|0\rangle\langle 0|+|1\rangle\langle 1|)\\
&=\frac{1}{2}I
\end{aligned}
$$

### State purification

Every mixed state can be derived as the reduction of a pure state on an enlarged Hilbert space.

#### State purification theorem

Let $\rho$ be a mixed state in a finite dimensional Hilbert space $\mathscr{H}$, then there exists a unit vector $|w\rangle\in \mathscr{H}\otimes\mathscr{H}$ such that:

$$
\rho=\operatorname{Tr}_2(|w\rangle\langle w|)
$$

Hint of proof:

Let $u_1,u_2,\cdots,u_d$ be an orthonormal basis of $\mathscr{H}$, $\sum_{i=1}^d p_i=1$, $p_i\geq 0$, then:

$$
\rho=\sum_{i=1}^d p_i|u_i\rangle\langle u_i|
$$

Let $w=\sum_{i=1}^d \sqrt{p_i}u_i\otimes u_i$.

### Observables

The observables in the quantum theory are self-adjoint operators on the Hilbert space $\mathscr{H}$, denoted by $A\in \mathscr{O}$

In finite dimensional Hilbert space, $A$ can be written as $\sum_{\lambda\in \operatorname{sp}{(A)}}\lambda P_\lambda$, where $P_\lambda$ is the projection operator onto the eigenspace of $A$ corresponding to the eigenvalue $\lambda$. $P_\lambda=P_\lambda^2=P_\lambda^*$.


### Effects and Busch's theorem for effect operators

Below is a section on Topic 4, about Gleason's theorem and definition of states, and Born's rule for describing the states using density operators.

#### Definition of states (non-commutative (_quantum_) probability theory)

A state on $(\mathscr{B}(\mathscr{H}),\mathscr{P})$ is a map $\mu:\mathscr{P}\to[0,1]$ such that:

1. $\mu(O)=0$, where $O$ is the zero projection.
2. If $P_1,P_2,\cdots,P_n$ are pairwise disjoint orthogonal projections, then $\mu(P_1\lor P_2\lor\cdots\lor P_n)=\sum_{i=1}^n\mu(P_i)$.

Where projections are disjoint if $P_iP_j=P_jP_i=O$.

#### Definition of density operator (non-commutative (_quantum_) probability theory)

A density operator $\rho$ on the finite-dimensional Hilbert space $\mathscr{H}$ is:

1. self-adjoint ($A^*=A$, that is $\langle Ax,y\rangle=\langle x,Ay\rangle$ for all $x,y\in\mathscr{H}$)
2. positive semi-definite (all eigenvalues are non-negative)
3. $\operatorname{Tr}(\rho)=1$.

If $(|\psi_1\rangle,|\psi_2\rangle,\cdots,|\psi_n\rangle)$ is an orthonormal basis of $\mathscr{H}$ consisting of eigenvectors of $\rho$, for the eigenvalue $p_1,p_2,\cdots,p_n$, then $p_j\geq 0$ and $\sum_{j=1}^n p_j=1$.

We can write $\rho$ as

$$
\rho=\sum_{j=1}^n p_j|\psi_j\rangle\langle\psi_j|
$$

(under basis $|\psi_j\rangle$, it is a diagonal matrix with $p_j$ on the diagonal)

Every basis of $\mathscr{H}$ can be decomposed to these forms.

#### Theorem: Born's rule

Let $\rho$ be a density operator on $\mathscr{H}$. then

$$
\mu(P)\coloneqq\operatorname{Tr}(\rho P)=\sum_{j=1}^n p_j\langle\psi_j|P|\psi_j\rangle
$$

Defines a probability measure on the space $\mathscr{P}$.

[Proof ignored here]

#### Theorem: Gleason's theorem (very important)

Let $\mathscr{H}$ be a Hilbert space over $\mathbb{C}$ or $\mathbb{R}$ of dimension $n\geq 3$. Let $\mu$ be a state on the space $\mathscr{P}(\mathscr{H})$ of projections on $\mathscr{H}$. Then there exists a unique density operator $\rho$ such that

$$
\mu(P)=\operatorname{Tr}(\rho P)
$$

for all $P\in\mathscr{P}(\mathscr{H})$. $\mathscr{P}(\mathscr{H})$ is the space of all orthogonal projections on $\mathscr{H}$.

[Proof ignored here]

Extending the experimental procedure in quantum physics, **many of the outcome probabilities are expectation of effects instead of projections.** (POVMs)

#### Definition of effect

An effect is a positive (self-adjoint) operator $E$ on $\mathscr{H}$ such that $0\leq E\leq I$.

The set of effects on $\mathscr{H}$ is denoted by $\mathscr{E}(\mathscr{H})$.

An operator $E$ is said to be the **extreme point** of the convex set $\mathscr{E}(\mathscr{H})$ if it cannot be written as a convex combination of two other effects.

That is, If $E$ is an extreme point, then $E=\lambda E_1+(1-\lambda)E_2$ for some $0\leq \lambda\leq 1$ and $E_1,E_2\in \mathscr{E}(\mathscr{H})$ implies $E=E_1=E_2$.

#### Effect operator lemma

The set of orthogonal projections on $\mathscr{H}$, $\mathscr{P}(\mathscr{H})$, is the set of extreme points of $\mathscr{E}(\mathscr{H})$.

#### Projection operator and effect operator





### Measurements

### Quantum operations and CPTP maps

### Conditional operations

## Section 2: Quantum entanglement

### Bell states and the EPR phenomenon

### Von Neumann entropy and maximally entangled states

## Section 3: Information transmission by quantum systems

### Transmission of classical information

### Making use of entanglement and local operations

### Superdense coding [very important]

## Section 4: Quantum automorphisms and dynamics

