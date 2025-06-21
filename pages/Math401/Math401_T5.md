# Topic 5: Introducing dynamics: classical and non-commutative

## Section 1: Dynamics in classical probability

### Basic definitions

#### Definition of orbit

Let $T:\Omega\to\Omega$ be a map (may not be invertible) generating a dynamical system on $\Omega$. Given $\omega\in \Omega$, the (forward) orbit of $\omega$ is the set $\mathscr{O}(\omega)=\{T^n(\omega)\}_{n\in\mathbb{Z}}$.

The theory of dynamics is the study of properties of orbits.

#### Definition of measure-preserving map

Let $P$ be a probability measure on a $\sigma$-algebra $\mathscr{F}$ of subsets of $\Omega$. A measurable transformation $T:\Omega\to\Omega$ is said to be measure-preserving if for all random variables $\psi:\Omega\to\mathbb{R}$, we have $\mathbb{E}(\psi\circ T)=\mathbb{E}(\psi)$, that is:

$$
\int_\Omega (\psi\circ T)(\omega)dP(\omega)=\int_\Omega \psi(\omega)dP(\omega)
$$

#### Definition of ergodic map

A measurable transformation $T:\Omega\to\Omega$ is said to be ergodic if for all random variables $\psi:\Omega\to\mathbb{R}$, we have $\mathbb{E}(\psi\circ T)=\mathbb{E}(\psi)$, that is:

$$
\int_\Omega (\psi\circ T)(\omega)dP(\omega)=\int_\Omega \psi(\omega)dP(\omega)
$$

#### Definition of isometry

The composition operator $\psi\mapsto U\psi=\psi\circ T$, where $T$ is a measure preserving map defined on $\mathscr{H}=L^2(\Omega,\mathscr{F},P)$ is isometry of $\mathscr{H}$ if $\langle U\psi,U\phi\rangle=\langle\psi,\phi\rangle$ for all $\psi,\phi\in\mathscr{H}$.

#### Definition of unitary

The composition operator $\psi\mapsto U\psi=\psi\circ T$, where $T$ is a measure preserving map defined on $\mathscr{H}=L^2(\Omega,\mathscr{F},P)$ is unitary of $\mathscr{H}$ if $U$ is an isometry and $T$ is invertible with measurable inverse.

## Section 2: Continuous time (classical) dynamical systems