# Topic 4: The quantum version of probabilistic concepts

> In mathematics, on often speaks of non-commutative instead of quantum constructions.

**Note, in this section, we will see a lot of mixed used terms used in physics and mathematics. I will use _italic_ to denote the terminology used in physics. It is safe to ignore them if you just care about the mathematics.**

## Section 1: Generalities about classical versus quantum systems

In classical physics, we assume that a system's properties have well-defined values regardless of how we choose to measure them.

### Basic terminology

#### Set of states

The preparation of a system builds a convex set of states as our initial condition for the system. 

For a collection of $N$ system. Let procedure $N_1=\lambda P_1$ be a preparation procedure for state $P_1$, and $N_2=(1-\lambda) P_2$ be a preparation procedure for state $P_2$. The state of the collection is $N=\lambda N_1+(1-\lambda) N_2$.

#### Set of effects

The set of effects is the set of all possible outcomes of a measurement. $\Omega=\{\omega_1, \omega_2, \ldots, \omega_n\}$. Where each $\omega_i$ is an associated effect, or some query problems regarding the system. (For example, is outcome $\omega_i$ observed?)

#### Registration of outcomes

A pair of state and effect determines a probability $E_i(P)=p(\omega_i|P)$. By the law of large numbers, this probability shall converge to $N(\omega_i)/N$ as $N$ increases.

**Quantum states, _observables_ (random variables), and effects can be represented mathematically by linear operators on a Hilbert space.**

## Section 2: Examples of physical experiment in language of mathematics

### Sten-Gernach experiment

_**State preparation:**_ Silver tams are emitted from a thermal source and collimated to form a beam.

_**Measurement:**_ Silver atoms interact with the field produced by the magnet and impinges on the class plate.

_**Registration:**_ The impression left on the glass pace by the condensed silver atoms.

## Section 3: Finite probability spaces in the language of Hilbert space and operators

> Superposition is a linear combination of two or more states.

A quantum coin can be represented mathematically by linear combination of $|0\rangle$ and $|1\rangle$.$\alpha|0\rangle+\beta|1\rangle\in\mathscr{H}\cong\mathbb{C}^2$.

> For the rest of the material, we shall take the $\mathscr{H}$ to be vector space over $\mathbb{C}$.

### Definitions in classical probability under generalized probability theory

#### Definition of states (classical probability)

[definition of states continue here.]

To each event $A\in \Omega$, we associate the operator on $\mathscr{H}$ of multiplication by the indicator function $P_A\coloneqq M_{\mathbb{I}_A}:f\mapsto \mathbb{I}_A f$ that projects onto the subspace of $\mathscr{H}$ corresponding to the event $A$.

$$
P_A=\sum_{k=1}^n a_k|k\rangle\langle k|
$$

where $a_k\in\{0,1\}$, and $a_k=1$ if and only if $k\in A$. Note that $P_A^*=P_A$ and $P_A^2=P_A$.

#### Definition of density operator (classical probability)

Let $(p_1,p_2,\cdots,p_n)$ be a probability distribution on $X$, where $p_k\geq 0$ and $\sum_{k=1}^n p_k=1$. The density operator $\rho$ is defined by

$$
\rho=\sum_{k=1}^n p_k|k\rangle\langle k|
$$

The probability of event $A$ relative to the probability distribution $(p_1,p_2,\cdots,p_n)$ becomes the trace of the product of $\rho$ and $P_A$.

$$
\operatorname{Prob}_\rho(A)\coloneqq\text{Tr}(\rho P_A)
$$

#### Definition of random variables (classical probability)

A random variable is a function $f:X\to\mathbb{R}$. It can also be written in operator form:

$$
F=\sum_{k=1}^n f(k)P_{\{k\}}
$$

The expectation of $f$ relative to the probability distribution $(p_1,p_2,\cdots,p_n)$ is given by

$$
\mathbb{E}_\rho(f)=\sum_{k=1}^n p_k f(k)=\operatorname{Tr}(\rho F)
$$

Note, by our definition of the operator $F,P_A,\rho$ (all diagonal operators) commute among themselves, which does not hold in general, in non-commutative (_quantum_) theory.

## Section 4: Why we need generalized probability theory to study quantum systems

Story of light polarization and violation of Bell's inequality.

### Classical picture of light polarization and Bell's inequality

> An interesting story will be presented here.

## Section 5: The non-commutative (_quantum_) probability theory

Let $\mathscr{H}$ be a Hilbert space. $\mathscr{H}$ consists of complex-valued functions on a finite set $\Omega=\{1,2,\cdots,n\}$. and that the functions $(e_1,e_2,\cdots,e_n)$ form an orthonormal basis of $\mathscr{H}$. We use Dirac notation $|k\rangle$ to denote the basis vector $e_k$.

In classical settings, multiplication operators is now be the full space of bounded linear operators on $\mathscr{H}$. (Denoted by $\mathscr{B}(\mathscr{H})$)

Let $A,B\in\mathscr{F}$ be the set of all events in the classical probability settings. $X$ denotes the set of all possible outcomes.

> A orthogonal projection on a Hilbert space is a projection operator satisfying $P^*=P$ and $P^2=P$. We denote the set of all orthogonal projections on $\mathscr{H}$ by $\mathscr{P}$.
>
> This can be found in linear algebra. [Orthogonal projection](https://notenextra.trance-0.com/Math429/Math429_L28#definition-655)

Let $P,Q\in\mathscr{P}$ be the event in probability space. $R(\cdot)$ is the range of the operator. $P^\perp$ is the orthogonal complement of $P$.

| Classical | Classical interpretation | Non-commutative (_Quantum_) | Non-commutative (_Quantum_) interpretation |
| --------- | ------- | -------- | -------- |
| $A\subset B$| Event $A$ is a subset of event $B$ | $P\leq Q$| $R(P)\subseteq R(Q)$ Range of event $P$ is a subset of range of event $Q$ |
| $A\cap B$| Both event $A$ and $B$ happened | $P\land Q$| projection to $R(P)\cap R(Q)$ Range of event $P$ and event $Q$ happened |
| $A\cup B$| Any of the event $A$ or $B$ happened | $P\lor Q$| projection to $R(P)\cup R(Q)$ Range of event $P$ or event $Q$ happened |
| $X\subset A$ or $A^c$| Event $A$ did not happen | $P^\perp$| projection$R(P)^\perp$ Range of event $P$ is the orthogonal complement of range of event $P$ |

In such setting, some rules of classical probability theory are not valid in quantum probability theory.

In classical probability theory, $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$.

In quantum probability theory, $P\land(Q\lor R)\neq(P\land Q)\lor(P\land R)$ in general.

### Definitions of non-commutative (_quantum_) probability theory under generalized probability theory

#### Definition of states (non-commutative (_quantum_) probability theory)

A state on $(\mathscr{H},\mathscr{P})$ is a map $\mu:\mathscr{P}\to[0,1]$ such that:

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

#### Theorem: Born's rule

Let $\rho$ be a density operator on $\mathscr{H}$. then

$$
\mu(P)\coloneqq\operatorname{Tr}(\rho P)=\sum_{j=1}^n p_j\langle\psi_j|P|\psi_j\rangle
$$

Defines a probability measure on the space $\mathscr{P}$.

[Proof ignored here]

#### Theorem: Gleason's theorem

Let $\mathscr{H}$ be a Hilbert space over $\mathbb{C}$ or $\mathbb{R}$ of dimension $n\geq 3$. Let $\mu$ be a state on the space $\mathscr{P}$ of projections on $\mathscr{H}$. Then there exists a unique density operator $\rho$ such that

$$
\mu(P)=\operatorname{Tr}(\rho P)
$$

for all $P\in\mathscr{P}$. $\mathscr{P}$ is the space of all orthogonal projections on $\mathscr{H}$.

[Proof ignored here]

#### Definition of random variable _or Observables_ (non-commutative (_quantum_) probability theory)

_It is the physical measurement of a system that we are interested in. (kinetic energy, position, momentum, etc.)_

$\mathscr{B}(\mathbb{R})$ is the set of all Borel sets on $\mathbb{R}$.

An random variable on the Hilbert space $\mathscr{H}$ is a projection valued map $P:\mathscr{B}(\mathbb{R})\to\mathscr{P}$.

With the following properties:

1. $P(\emptyset)=O$ (the zero projection)
2. $P(\mathbb{R})=I$ (the identity projection)
3. For any sequence $A_1,A_2,\cdots,A_n\in \mathscr{B}(\mathbb{R})$. the following holds:  
    (a) $P(\bigcup_{i=1}^n A_i)=\bigvee_{i=1}^n P(A_i)$  
    (b) $P(\bigcap_{i=1}^n A_i)=\bigwedge_{i=1}^n P(A_i)$  
    (c) $P(A^c)=I-P(A)$
    (d) If $A_j$ are mutually disjoint (that is $P(A_i)P(A_j)=P(A_j)P(A_i)=O$ for $i\neq j$), then $P(\bigcup_{j=1}^n A_j)=\sum_{j=1}^n P(A_j)$
