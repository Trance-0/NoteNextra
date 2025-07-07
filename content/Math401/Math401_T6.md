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

> Do a double check on this section, this notation is slightly different from the one in Topic 4.

A state on $(\mathscr{B}(\mathscr{H}),\mathscr{P})$ is a map $\mu:\mathscr{P}\to[0,1]$ such that:

1. $0\leq \mu(E)\leq 1$ for all $E\in \mathscr{P}(\mathscr{H})$.
2. $\mu(I_{\mathscr{H}})=1$.
3. If $E_1,E_2,\cdots,E_n$ are pairwise disjoint orthogonal projections, whose sum is also in $\mathscr{P}(\mathscr{H})$ then $\mu(E_1\lor E_2\lor\cdots\lor E_n)=\sum_{i=1}^n\mu(E_i)$.

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

#### Proposition: Effect operator lemma

The set of orthogonal projections on $\mathscr{H}$, $\mathscr{P}(\mathscr{H})$, is the set of extreme points of $\mathscr{E}(\mathscr{H})$.

#### Theorem: Generalized measures on effects

Let $\mathscr{H}$ be a finite-dimensional Hilbert space. Then any generalized probability measure

$$
\mu:E\in \mathscr{E}(\mathscr{H})\to \mu(E)\in[0,1]
$$

with the properties (same as the definition of states):

1. $0\leq \mu(E)\leq 1$ for all $E\in \mathscr{E}(\mathscr{H})$.
2. $\mu(I_{\mathscr{H}})=1$.
3. If $E_1,E_2,\cdots,E_n$ are pairwise disjoint orthogonal effects, whose sum is also in $\mathscr{E}(\mathscr{H})$ then $\mu(E_1\lor E_2\lor\cdots\lor E_n)=\sum_{i=1}^n\mu(E_i)$.

is the form:

$\mu(E)=\operatorname{Tr}(\rho E)$

for some density operator $\rho$ on $\mathscr{H}$.

[Proof ignored here]

> If $\mu$ is a positive linear functional on the space of self-adjoint operators on the finite dimensional Hilbert space $\mathscr{H}$.
>
> Then, there exists a density operator $\rho$ on $\mathscr{H}$ such that $\mu(E)=\operatorname{Tr}(\rho E)$.

### Measurements

A measurement (observation) of a system prepared in a given state produces an outcome $x$, $x$ is a physical event that is a subset of the set of all possible outcomes.

To each $x\in X$, we associate a measurement operator $M_x$ on $\mathscr{H}$.

Given the initial state (pure state, unit vector) $u$, the probability of measurement outcome $x$ is given by:

$$
p(x)=\|M_xu\|^2
$$

After the measurement, the state of the system is given by:

$$
v=\frac{M_xu}{\|M_xu\|}
$$

Note that to make sense of this definition, the collection of measurement operators $\{M_x\}$ must satisfy the **completeness** requirement:

$$
1=\sum_{x\in X} p(x)=\sum_{x\in X}\|M_xu\|^2=\sum_{x\in X}\langle M_xu,M_xu\rangle=\langle u,(\sum_{x\in X}M_x^*M_x)u\rangle
$$

So $\sum_{x\in X}M_x^*M_x=I$.

An example of measurement is the projective measurements (von Neumann measurements).

It is given by the set of orthogonal projections $M_x$ on $\mathscr{H}$ with the property:

1. $M_x=M_x^*$
2. $M_xM_y=\delta_{xy}M_x$ for all $x,y\in X$
3. $\sum_{x\in X}M_x=I$

#### Composition of measurements

Given two complete collections of measurement operators $\{M_x\}$ and $\{N_y\}$ on $\mathscr{H}_1$ and $\mathscr{H}_2$ respectively, the composition of the two measurements is given by the collection of measurement operators $\{M_xN_y\}$ on $\mathscr{H}_1\otimes\mathscr{H}_2$.

#### Proposition of indistinguishability

Suppose that we have two system $u_1,u_2\in \mathscr{H}_1$, the two states are distinguishable if and only if they are orthogonal.

Ways to distinguish the two states:

1. set $X=\{0,1,2\}$ and $M_i=|u_i\rangle\langle u_i|$, $M_0=I-M_1-M_2$
2. then $\{M_0,M_1,M_2\}$ is a complete collection of measurement operators on $\mathscr{H}$.
3. suppose the prepared state is $u_1$, then $p(1)=\|M_1u_1\|^2=\|u_1\|^2=1$, $p(2)=\|M_2u_1\|^2=0$, $p(0)=\|M_0u_1\|^2=0$.

If they are not orthogonal, then there are no choice of measurement operators to distinguish the two states.

[Proof ignored here]

_intuitively, if the two states are not orthogonal, then for any measurement there exists non-zero probability of getting the same outcome for both states._

#### Effects and POVM measurements

An effect on the finite dimension Hilbert space $\mathscr{H}$ is a positive operator $E$ on $\mathscr{H}$ such that $0\leq E\leq I$. A positive operator valued measure POVM consists of an index set $\mathscr{I}$ and a collection of effects $\{E_i,i\in \mathscr{I}\}$ satisfying the identity $\sum_{i\in \mathscr{I}}E_i=I$. 

The probabilty of measurement outcome $i\in \mathscr{I}$ is given by $p(i)=\langle v,E_iv\rangle$ on a ysstem prepared in the state described by the unit vector $v$.

For a mixed state $\rho$, the probability of measurement outcome $i\in \mathscr{I}$ is given by $p(i)=\operatorname{Tr}(\rho E_i)$.

Example, suppose we have a system prepared in the following two states:

$$
u_1=|0\rangle, u_2=\frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)
$$

Since they are not orthogonal, there is no measurement that can definitely distinguish the two states.

Consider the following POVM:

$$
E_1=\frac{\sqrt{2}}{1+\sqrt{2}}|1\rangle \langle 1|, E_2=\frac{\sqrt{2}}{1+\sqrt{2}}\frac{(|0\rangle-|1\rangle)(\langle 0|-\langle 1|)}{2},E_3=I-E_1-E_2
$$

Then, suppose we have an unknown state $u$, the probability of given $u_1$, measurement outcome $1$ is:

$$
p(1)=\langle u_1,E_1u_1\rangle=0
$$

So if the measurement outcome is $1$, we can conclude that the state is $u_2$.

The probability of given $u_2$, measurement outcome $2$ is:

$$
p(2)=\langle u_2,E_2u_2\rangle=0
$$

So if the measurement outcome is $2$, we can conclude that the state is $u_1$.

If the measurement outcome is $3$, then we cannot conclude anything about the state.

#### Proposition: Ancilla system

A general measurement of a system having Hilbert space $\mathscr{H}$ is equivalent to a projective measurement composed with a unitary transformation on the Hilbert space $\mathscr{H}\otimes\mathscr{A}$ of a composite system. The system described by $\mathscr{A}$ is called the ancilla system. This equivalent measurement is not unique.

[Further details ignored here]

### Quantum operations and CPTP maps

$L^1(\Omega,\mathscr{F},\mu)$ is the space of intergrable functions on $\mathscr{H}$, that is $\int_{\Omega} |f(\omega)| d\mu(\omega)<\infty$ for some measure $\mu$ on $\Omega$.

We define $\mathscr{L}_1(\mathscr{H})$, the space of trace class operators on $\mathscr{H}$, as the space of operators $A$ such that $\operatorname{Tr}(\sqrt{A^*A})<\infty$.

$L_2(\Omega,\mathscr{F},\mu)$ is the space of square intergrable functions on $\mathscr{H}$, that is $\int_{\Omega} |f(\omega)|^2 d\mu(\omega)<\infty$ for some measure $\mu$ on $\Omega$.

We define $\mathscr{L}_2(\mathscr{H})$, the space of Hilbert-Schmidt operators on $\mathscr{H}$, as the space of operators $A$ such that $\operatorname{Tr}(A^*A)<\infty$.

The space of $\mathscr{L}_2(\mathscr{H})$ is a Hilbert space equipped with the inner product $\langle A,B\rangle=\operatorname{Tr}(B^*A)$.

with Cauchy-Schwarz inequality:

$$
\operatorname{Tr}(A^*B)\leq \operatorname{Tr}(A^*A)^{1/2}\operatorname{Tr}(B^*B)^{1/2}
$$

The space of density operators $\mathscr{S}(\mathscr{H})$ is a convex subset (for $\rho_1,\rho_2\in \mathscr{S}(\mathscr{H})$, $\lambda\in[0,1]$, $\lambda\rho_1+(1-\lambda)\rho_2\in \mathscr{S}(\mathscr{H})$) of $\mathscr{L}_1(\mathscr{H})$ with trace $1$.

#### Definition of CPTP map

A completely positive trace preserving (CPTP) map is a linear map $\mathscr{E}:\mathscr{L}_1(\mathscr{H})\to \mathscr{L}_1(\mathscr{H})$ such that:

1. $\mathscr{E}(\operatorname{Tr}(\rho))=\operatorname{Tr}(\rho)$ for all $\rho\in \mathscr{S}(\mathscr{H})$.
2. $\mathscr{E}$ is completely positive, that is $\mathscr{E}\otimes I_{\mathscr{H}}:\mathscr{L}_1(\mathscr{H}_1\otimes\mathscr{K})\to\mathscr{L}_1(\mathscr{H}_2\otimes\mathscr{K})$ is positive for every finite-dimensional or separable Hilbert space $\mathscr{K}$.

_note that the condition for completely positive is stronger than the condition for positive. Because if we only require the map to be positive, then the map may assign negative values to some entangled states._

Example:

A map $\mathscr{E}:\mathscr{L}_1(\mathscr{H})\to \mathscr{L}_1(\mathscr{H})$ is given by:

$$
\mathscr{E}(\rho):\sum_{i,j} \alpha_{ij}|i\rangle\langle j|\to \sum_{i,j} \overline{\alpha_{ij}}|i\rangle\langle j|
$$

This map is positive but will assign negative values to some entangled states given by:

$$
\rho=|\phi\rangle\langle\phi|
$$

where $|\phi\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$.

#### Definition of quantum channel

Let $\mathscr{H}$ and $\mathscr{K}$ be Hilbert spaces, $U$ be a unitary operator on $\mathscr{H}\otimes\mathscr{K}$, and $\omega$ be a density operator on $\mathscr{K}$. The CPTP map

$$
\mathscr{E}:T\in \mathscr{L}_1(\mathscr{H})\to \operatorname{Tr}_\mathscr{K}(U (T\otimes \omega)U^*)
$$

is a quantum channel.

We skipped few exercises here and jump right into the definition.

In short, the quantum channel describes the following process:

Initialization: The ancilla $\mathscr{K}$ is prepared in a fixed state $\omega$ (density operator).

Coupling: The input state $T$ (on $\mathscr{H}$) is combined with $\omega$ to form $T\otimes\omega$ on $\mathscr{H}\otimes\mathscr{K}$.

Unitary evolution: The joint system evolves under $U$ (unitary on $\mathscr{H}\otimes\mathscr{K}$).

Discarding ancilla: The ancilla $\mathscr{K}$ is traced out, leaving a state on $\mathscr{H}$.

This is a Stinespring dilation, representing any CPTP map.

#### Proposition: Stinespring dilation theorem (to be checked)

Any CPTP map $\mathscr{E}:\mathscr{L}_1(\mathscr{H})\to \mathscr{L}_1(\mathscr{H})$ can be represented as:

$$
\mathscr{E}(T)=\operatorname{Tr}_\mathscr{K}(U (T\otimes \omega)U^*)
$$

### Conditional operations

#### Definition of controlled-unitary operations

A controlled-unitary operation is 

$$
U\coloneqq\sum_{a=1}^{n_1}|a\rangle\langle a|\otimes U_a
$$

where $U_a$ is a unitary operator on $\mathscr{H}$ and $|a\rangle$ is a basis of $\mathscr{K}$.

#### Principle of deferred measurement

All measurements that may occur in the process of executing a quantum computation may be relegated to the end of the quantum circuit, prior to which all operations are unitary.

## Section 2: Quantum entanglement

### Bell states and the EPR phenomenon

#### Definition of Bell states

The Bell states are the following four states:

$$
|\Phi^+\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle), |\Phi^-\rangle=\frac{1}{\sqrt{2}}(|00\rangle-|11\rangle)
$$

$$
|\Psi^+\rangle=\frac{1}{\sqrt{2}}(|01\rangle+|10\rangle), |\Psi^-\rangle=\frac{1}{\sqrt{2}}(|01\rangle-|10\rangle)
$$

These are the basis of the two-qubit Hilbert space.

[The section discussing the EPR phenomenon is ignored here, the key to remember is that there exists no classical (local) explanation for the correlation between the two qubits.]

### Von Neumann entropy and maximally entangled states

#### Definition of EPR state

A vector $|\psi\rangle$ on tensor product space $\mathscr{H}_1\otimes\mathscr{H}_2$ is called an EPR state if it is of the form:

$$
|\psi\rangle=\frac{1}{\sqrt{n}}\sum_{i=1}^n |i\rangle_1|i\rangle_2
$$

where $|i\rangle_1$ and $|i\rangle_2$ are basis of $\mathscr{H}_1$ and $\mathscr{H}_2$ respectively.

This describes a maximally entangled state.

#### Weyl operators

Let $\mathscr{H}$ be a Hilbert space with orthonormal basis $(|i\rangle)$.

The shift operator $X$ is defined as:

$$
X|i\rangle=|i+1\rangle
$$

Note that $X$ permutes basis element cyclically. Let $\omega=e^{2\pi i/n}$, then $1,\omega,\omega^2,\cdots,\omega^{n-1}$ are the $n$-th roots of unity.

The phase operator $Z$ is defined as:

$$
Z|i\rangle=\omega^i|i\rangle
$$

The Weyl operators are the following operators:

$$
W_{ab}=X^aZ^b
$$

where $a,b\in\{0,1,\cdots,n-1\}$.

#### Definition of von Neumann entropy

The von Neumann entropy of a density operator $\rho$ is defined as:

$$
S(\rho)=-\operatorname{Tr}(\rho\log\rho)=-\sum_{i}\mu_i\log\mu_i
$$

where $\mu_i$ are the eigenvalues of $\rho$.

## Section 3: Information transmission by quantum systems

### Transmission of classical information

#### Transmission over information channels

Let the measurement operation defined by POVM $\{E_y\}$, the conditional probability of obtaining signal $y$ at the output given the input is $x$ is given by:

$$
p_E(y|x)=\operatorname{Tr}(\rho_x E_y)
$$

where $\rho_x$ is the density operator of the input state, $E_y$ is the measurement operator for the output signal $y$.

#### Holevo bound

The maximal amount of classical information that can be transmitted by a quantum system is given by the Holevo bound. $\log_2(d)$ is the maximum amount of classical information that can be transmitted by a quantum system with $d$ levels.

> The fact that Hilbert space contains infinitely many different state vectors does not aid us in transmitting an unlimited amount of information. The more states are used for transmission, the closer they are to each other and hence they become less and less distinguishable.

### Making use of entanglement and local operations

No information can be gained by measuring a pair of entangled qubits.

### Superdense coding [very important]

It is a procedure defined as follows:

Suppose $A$ and $B$ share a Bell state $|\Phi^+\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$, where $A$ holds the first part and $B$ holds the second part.

$A$ wish to send 2 classical bits to $B$.

$A$ performs one of four Pauli unitaries on the combined state of entangled qubits $\otimes$ one qubit. Then $A$ sends the resulting one qubit to $B$.

This operation extends the initial one entangled qubit to a system of one of four orthogonal Bell states.

$B$ performs a measurement on the combined state of the one qubit and the entangled qubits he holds.

$B$ decodes the result and obtains the 2 classical bits sent by $A$.

![Superdense coding](https://notenextra.trance-0.com/Math401/Superdense_coding.png)

## Section 4: Quantum automorphisms and dynamics

Section ignored.