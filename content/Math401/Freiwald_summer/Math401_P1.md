# Math 401 Paper 1: Concentration of measure effects in quantum information (Patrick Hayden)

[Concentration of measure effects in quantum information](https://www.ams.org/books/psapm/068/2762144)

A more comprehensive version of this paper is in [Aspect of generic entanglement](https://arxiv.org/pdf/quant-ph/0407049).

## Quantum codes

### Preliminaries

#### Daniel Gottesman's mathematics of quantum error correction

##### Quantum channels

Encoding channel and decoding channel

That is basically two maps that encode and decode the qbits. You can think of them as a quantum channel.

#### Quantum capacity for a quantum channel

The quantum capacity of a quantum channel is governed by the HSW noisy coding theorem, which is the counterpart for the Shannon's noisy coding theorem in quantum information settings.

#### Lloyd-Shor-Devetak theorem

Note, the model of the noisy channel in quantum settings is a map $\eta$: that maps a state $\rho$ to another state $\eta(\rho)$. This should be a CPTP map.

Let $A'\cong A$ and $|\psi\rangle\in A'\otimes A$.

Then $Q(\mathcal{N})\geq H(B)_\sigma-H(A'B)_\sigma$.

where $\sigma=(I_{A'}\otimes \mathcal{N})\circ|\psi\rangle\langle\psi|$.

(above is the official statement in the paper of Patrick Hayden)

That should means that in the limit of many uses, the optimal rate at which A can reliably sent qbits to $B$ ($1/n\log d$) through $\eta$ is given by the regularization of the formula

$$
Q(\eta)=\max_{\phi_{AB}}[-H(B|A)_\sigma]
$$

where $H(B|A)_\sigma$ is the conditional entropy of $B$ given $A$ under the state $\sigma$.

$\phi_{AB}=(I_{A'}\otimes \eta)\circ\omega_{AB}$

(above formula is from the presentation of Patrick Hayden.)

For now we ignore this part if we don't consider the application of the following sections. The detailed explanation will be added later (hopefully very soon).

---

### Surprise in high-dimensional quantum systems

#### Levy's lemma

Given an $\eta$-Lipschitz function $f:S^n\to \mathbb{R}$ with median $M$, the probability that a random $x\in_R S^n$ is further than $\epsilon$ from $M$ is bounded above by $\exp(-\frac{C(n-1)\epsilon^2}{\eta^2})$, for some constant $C>0$.

$$
\operatorname{Pr}[|f(x)-M|>\epsilon]\leq \exp(-\frac{C(n-1)\epsilon^2}{\eta^2})
$$

[Decomposing the statement in detail as side note 3](Math401_P1_3.md)

### Random states and random subspaces

Choose a random pure state $\sigma=|\psi\rangle\langle\psi|$ from $A'\otimes A$.

The expected value of the entropy of entanglement is known and satisfies a concentration inequality.

$$
\mathbb{E}[H(\psi_A)] \geq \log_2(d_A)-\frac{1}{2\ln(2)}\frac{d_A}{d_B}
$$

[Decomposing the statement in detail as side note 2](Math401_P1_2.md)

From the Levy's lemma, we have

If we define $\beta=\frac{d_A}{\log_2(d_B)}$, then we have

$$
\operatorname{Pr}[H(\psi_A) < \log_2(d_A)-\alpha-\beta] \leq \exp\left(-\frac{(d_Ad_B-1)C\alpha^2}{(\log_2(d_A))^2}\right)
$$
where $C$ is a small constant and $d_B\geq d_A\geq 3$.

> Noted in [Aspect of generic entanglement](https://arxiv.org/pdf/quant-ph/0407049) $C_3=(8\pi^2\ln(2))^{-1}$.

#### ebits and qbits

### Superdense coding of quantum states

It is a procedure defined as follows:

Suppose $A$ and $B$ share a Bell state $|\Phi^+\rangle=\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$, where $A$ holds the first part and $B$ holds the second part.

$A$ wish to send 2 classical bits to $B$.

$A$ performs one of four Pauli unitaries on the combined state of entangled qubits $\otimes$ one qubit. Then $A$ sends the resulting one qubit to $B$.

This operation extends the initial one entangled qubit to a system of one of four orthogonal Bell states.

$B$ performs a measurement on the combined state of the one qubit and the entangled qubits he holds.

$B$ decodes the result and obtains the 2 classical bits sent by $A$.

### Consequences for mixed state entanglement measures

#### Quantum mutual information

### Multipartite entanglement

> The role of the paper in Physics can be found in (15.86) on book Geometry of Quantum states.