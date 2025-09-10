# Math 401, Fall 2025: Thesis notes, R3, Page's lemma

> Progress: 0/4=0% (denominator and enumerator may change)

The page's lemma is a fundamental result in quantum information theory that provides a lower bound on the probability of error in a quantum channel.

## Statement

Choosing a random pure quantum state $\rho$ from the bi-partite pure state space $\mathcal{H}_A\otimes\mathcal{H}_B$ with the uniform distribution, the expected entropy of the reduced state $\rho_A$ is:

$$
\mathbb{E}[H(\rho_A)]\geq \ln d_A -\frac{1}{2\ln 2} \frac{d_A}{d_B}
$$

## Page's conjecture

A quantum system $AB$ with the Hilbert space dimension $mn$ in a pure state $\rho_{AB}$ has entropy $0$ but the entropy of the reduced state $\rho_A$, assume $m\leq n$, then entropy of the two subsystem $A$ and $B$ is greater than $0$.

unless $A$ and $B$ are separable.

In the original paper, the entropy of the average state taken under the unitary invariant Haar measure is:

$$
S_{m,n}=\sum_{k=n+1}^{mn}\frac{1}{k}-\frac{m-1}{2n}\simeq \ln m-\frac{m}{2n}
$$

## References to begin with

- [The random Matrix Theory of the Classical Compact groups](https://case.edu/artsci/math/esmeckes/Haar_book.pdf)

- [Page's conjecture](https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.71.1291)

- [Page's conjecture simple proof](https://journals.aps.org/pre/pdf/10.1103/PhysRevE.52.5653)

- [Geometry of quantum states an introduction to quantum entanglement second edition](https://www.cambridge.org/core/books/geometry-of-quantum-states/46B62FE3F9DA6E0B4EDDAE653F61ED8C)