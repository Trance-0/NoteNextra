# Topic 4: The quantum version of probabilistic concepts

> In mathematics, on often speaks of non-commutative instead of quantum constructions.

## Section 1: Generalities about classical versus quantum systems

In classical physics, we assume that a systema's properties have well-defined values regardless of how we choose to measure them.

### Basic terminology

#### Observables

#### Set of states

The preparation of a system builds a convex set of states as our initial condition for the system. 

For a collection of $N$ system. Let procedure $N_1=\lambda P_1$ be a preparation procedure for state $P_1$, and $N_2=(1-\lambda) P_2$ be a preparation procedure for state $P_2$. The state of the collection is $N=\lambda N_1+(1-\lambda) N_2$.

#### Set of effects

The set of effects is the set of all possible outcomes of a measurement. $\Omega=\{\omega_1, \omega_2, \ldots, \omega_n\}$. Where each $\omega_i$ is an associated effect, or some query problems regarding the system. (For example, is outcome $\omega_i$ observed?)

#### Registration of outcomes

A pair of state and effect determines a probability $E_i(P)=p(\omega_i|P)$. By the law of large numbers, this probability shall converge to $N(\omega_i)/N$ as $N$ increases.

**Quantum states, observables, and effects can be represented mathematically by linear operators on a Hilbert space.**

## Section 2: Examples of physical experiment in language of mathematics

### Sten-Gernach experiment

**State preparation:** Silver tams are emitted from a thermal source and collimated to form a beam.

**Measurement:** Silver atoms interact with the field produced by the magnet and impinges on the class plate.

**Registration:** The impression left on the glass pace by the condensed silver atoms.

## Section 3: Finite probability spaces in the language of Hilbert space and operators

> Superposition is a linear combination of two or more states.

A quantum coin can be represented mathematically by linear combination of $|0\rangle$ and $|1\rangle$.$\alpha|0\rangle+\beta|1\rangle\in\mathscr{H}\cong\mathbb{C}^2$.

> For the rest of the material, we shall take the $\mathscr{H}$ to be vector space over $\mathbb{C}$.

### Rewrite the language of probability

To each event $A\in \Omega$, we associate the operator on $\mathscr{H}$ of multiplication by the indicator function $M_{\mathbb{I}_A}:f\mapsto \mathbb{I}_A f$ that projects onto the subspace of $\mathscr{H}$ corresponding to the event $A$.

$$
P_A=\sum_{k=1}^n a_k|k\rangle\langle k|
$$

where $a_k\in\{0,1\}$, and $a_k=1$ if and only if $k\in A$. Note that $P_A^*=P_A$ and $P_A^2=P_A$.

#### Density operator

Let $(p_1,p_2,\cdots,p_n)$ be a probability distribution on $X$, where $p_k\geq 0$ and $\sum_{k=1}^n p_k=1$. The density operator $\rho$ is defined by

$$
\rho=\sum_{k=1}^n p_k|k\rangle\langle k|
$$

The probability of event $A$ relative to the probability distribution $(p_1,p_2,\cdots,p_n)$ becomes the trace of the product of $\rho$ and $P_A$.

$$
\operatorname{Prob}_\rho(A)=\text{Tr}(\rho P_A)
$$

#### Random variables

A random variable is a function $f:X\to\mathbb{R}$. It can also be written in operator form:

$$
F=\sum_{k=1}^n f(k)P_{\{k\}}
$$

The expectation of $f$ relative to the probability distribution $(p_1,p_2,\cdots,p_n)$ is given by

$$
\mathbb{E}_\rho(f)=\sum_{k=1}^n p_k f(k)=\operatorname{Tr}(\rho F)
$$

Note, by our definition of the operator $F,P_A,\rho$ (all diagonal operators) commute among themselves, which does not hold in general quantum theory.

## Section 4: Why we need generalized probability theory to study quantum systems

Story of light polarization.

### Classical picture of light polarization and Bell's inequality

> An interesting story will be presented here.

## Section 5: The quantum probability theory

Let $\mathscr{H}$ be a Hilbert space. $\mathscr{H}$ consists of complex-valued functions on a finite set $\Omega=\{1,2,\cdots,n\}$. and that the functions $(e_1,e_2,\cdots,e_n)$ form an orthonormal basis of $\mathscr{H}$. We use Dirac notation $|k\rangle$ to denote the basis vector $e_k$.

In classical settings, multiplication operators is now be the full space of bounded linear operators on $\mathscr{H}$. (Denoted by $\mathscr{B}(\mathscr{H})$)

