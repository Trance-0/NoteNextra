# Topic 5: Introducing dynamics: classical and non-commutative

## Section 1: Dynamics in classical probability

### Basic definitions

#### Definition of orbit

Let $T:\Omega\to\Omega$ be a map (may not be invertible) generating a dynamical system on $\Omega$. Given $\omega\in \Omega$, the (forward) orbit of $\omega$ is the set $\mathscr{O}(\omega)=\{T^n(\omega)\}_{n\in\mathbb{Z}}$.

The theory of dynamics is the study of properties of orbits.

#### Definition of measure-preserving map

Let $P$ be a probability measure on a $\sigma$-algebra $\mathscr{F}$ of subsets of $\Omega$. (that is, $P:\mathscr{F}\to$ anything) A measurable transformation $T:\Omega\to\Omega$ is said to be measure-preserving if for all random variables $\psi:\Omega\to\mathbb{R}$, we have $\mathbb{E}(\psi\circ T)=\mathbb{E}(\psi)$, that is:

$$
\int_\Omega (\psi\circ T)(\omega)dP(\omega)=\int_\Omega \psi(\omega)dP(\omega)
$$

Example:

The doubling map $T:\Omega\to\Omega$ is defined as $T(x)=2x\mod 1$, is a Lebesgue measure preserving map on $\Omega=[0,1]$.

#### Definition of isometry

The composition operator $\psi\mapsto U\psi=\psi\circ T$, where $T$ is a measure preserving map defined on $\mathscr{H}=L^2(\Omega,\mathscr{F},P)$ is isometry of $\mathscr{H}$ if $\langle U\psi,U\phi\rangle=\langle\psi,\phi\rangle$ for all $\psi,\phi\in\mathscr{H}$.

#### Definition of unitary

The composition operator $\psi\mapsto U\psi=\psi\circ T$, where $T$ is a measure preserving map defined on $\mathscr{H}=L^2(\Omega,\mathscr{F},P)$ is unitary of $\mathscr{H}$ if $U$ is an isometry and $T$ is invertible with measurable inverse.

## Section 2: Continuous time (classical) dynamical systems

### Spring-mass system

![Spring-mass system](https://notenextra.com/Math401/Spring-mass_system.png)

The pure state of the system is given by the position and velocity of the mass. $(x,v)$ is a point in $\mathbb{R}^2$. $\mathbb{R}^2$ is the state space of the system. (or phase space)

The motion of the system in its state space is a closed curve.

$$
\Phi_t(x,v)=\left(\cos(\omega t)x-\frac{1}{\omega}\sin(\omega t)v, \cos(\omega t)v-\omega\sin(\omega t)x\right)
$$

Such system with closed curve is called **integrable system**. Where the doubling map produces orbits having distinct dynamical properties (**chaotic system**).

> Note, some section is intentionally ignored here. They are about in the setting of operators on Hilbert spaces, the evolution of (classical, non-dissipative e.g. linear spring-mass system) system, is implemented by a one-parameter group of unitary operators.
>
> The detailed construction is omitted here.

#### Definition of Hermitian operator

A linear operator $A$ on a Hilbert space $\mathscr{H}$ is said to be Hermitian if $\forall \psi,\phi\in$ **domain of $A$**, we have $\langle A\psi,\phi\rangle=\langle\psi,A\phi\rangle$.

It is skew-Hermitian if $\langle A\psi,\phi\rangle=-\langle\psi,A\phi\rangle$.




