# Math 401, Paper 1: Concentration of measure effects in quantum information (Patrick Hayden)

[PDF](https://www.ams.org/books/psapm/068/2762144)

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

For now we ignore this part if we don't consider the application of the following sections. The detailed explanation will be added later.

### Surprise in high-dimensional quantum systems

#### Levy's lemma

Given an $\eta$-Lipschitz function $f:S^n\to \mathbb{R}$ with median $M$, the probability that a random $x\in_R S^n$ is further than $\epsilon$ from $M$ is bounded above by $\exp(-\frac{C(n-1)\epsilon^2}{\eta^2})$, for some constant $C>0$.

$$
\operatorname{Pr}[|f(x)-M|>\epsilon]\leq \exp(-\frac{C(n-1)\epsilon^2}{\eta^2})
$$

Decomposing the statement in detail,

#### $\eta$-Lipschitz function

Let $(X,\operatorname{dist}_X)$ and $(Y,\operatorname{dist}_Y)$ be two metric spaces. A function $f:X\to Y$ is said to be $\eta$-Lipschitz if there exists a constant $L\in \mathbb{R}$ such that

$$
\operatorname{dist}_Y(f(x),f(y))\leq L\operatorname{dist}_X(x,y)
$$

for all $x,y\in X$. And $\eta=\|f\|_{\operatorname{Lip}}=\inf_{L\in \mathbb{R}}L$.

That basically means that the function $f$ should not change the distance between any two pairs of points in $X$ by more than a factor of $L$.

> This theorem is exactly the 5.1.4 on the _High-dimensional probability_ by Roman Vershynin.

#### Isoperimetric inequality on $\mathbb{R}^n$

Among all subsets $A\subset \mathbb{R}^n$ with a given volume, the Euclidean ball has the minimal area.

That is, for any $\epsilon>0$, Euclidean balls minimize the volume of the $\epsilon$-neighborhood of $A$.

Where the volume of the $\epsilon$-neighborhood of $A$ is defined as

$$
A_\epsilon(A)\coloneqq \{x\in \mathbb{R}^n: \exists y\in A, \|x-y\|_2\leq \epsilon\}=A+\epsilon B_2^n
$$

Here the $\|\cdot\|_2$ is the Euclidean norm. (The theorem holds for both geodesic metric on sphere and Euclidean metric on $\mathbb{R}^n$.)

#### Isoperimetric inequality on the sphere

Let $\sigma_n(A)$ denotes the normalized area of $A$ on $n$ dimensional sphere $S^n$. That is $\sigma_n(A)\coloneqq\frac{\operatorname{Area}(A)}{\operatorname{Area}(S^n)}$.

Let $\epsilon>0$. Then for any subset $A\subset S^n$, given the area $\sigma_n(A)$, the spherical caps minimize the volume of the $\epsilon$-neighborhood of $A$.

The above two inequalities is not proved in the Book _High-dimensional probability_.

To continue prove the theorem, we use sub-Gaussian concentration *(Chapter 3 of _High-dimensional probability_ by Roman Vershynin)* of sphere $\sqrt{n}S^n$. 

This will leads to some constant $C>0$ such that the following lemma holds:

#### The "Blow-up" lemma

Let $A$ be a subset of sphere $\sqrt{n}S^n$, and $\sigma$ denotes the normalized area of $A$. Then if $\sigma\geq \frac{1}{2}$, then for every $t\geq 0$,

$$
\sigma(A_t)\geq 1-2\exp(-ct^2)
$$

where $A_t=\{x\in S^n: \operatorname{dist}(x,A)\leq t\}$ and $c$ is some positive constant.

#### Proof of the Levy's concentration theorem

Proof:

Without loss of generality, we can assume that $\eta=1$. Let $M$ denotes the median of $f(X)$.

So $\operatorname{Pr}[|f(X)\leq M|]\geq \frac{1}{2}$, and $\operatorname{Pr}[|f(X)\geq M|]\geq \frac{1}{2}$.

Consider the sub-level set $A\coloneqq \{x\in \sqrt{n}S^n: |f(x)|\leq M\}$.

Since $\operatorname{Pr}[X\in A]\geq \frac{1}{2}$, by the blow-up lemma, we have

$$
\operatorname{Pr}[X\in A_t]\geq 1-2\exp(-ct^2)
$$

And since

$$
\operatorname{Pr}[X\in A_t]\leq \operatorname{Pr}[f(X)\leq M+t]
$$

Combining the above two inequalities, we have

$$
\operatorname{Pr}[f(X)\leq M+t]\geq 1-2\exp(-ct^2)
$$

> The Levy's lemma can also be found in _Metric Structures for Riemannian and Non-Riemannian Spaces_ by M. Gromov. $3\frac{1}{2}.19$ The Levy concentration theory.

#### Theorem $3\frac{1}{2}.19$ Levy concentration theorem:

An arbitrary 1-Lipschitz function $f:S^n\to \mathbb{R}$ concentrates near a single value $a_0\in \mathbb{R}$ as strongly as the distance function does.

That is

$$
\mu\{x\in S^n: |f(x)-a_0|\geq\epsilon\} < \kappa_n(\epsilon)\leq 2\exp(-\frac{(n-1)\epsilon^2}{2})
$$

where 

$$
\kappa_n(\epsilon)=\frac{\int_\epsilon^{\frac{\pi}{2}}\cos^{n-1}(t)dt}{\int_0^{\frac{\pi}{2}}\cos^{n-1}(t)dt}
$$

Hardcore computing may generates the bound but M. Gromov did not make the detailed explanation here.

### Random states and random subspaces

Choose a random pure state $\sigma=|\psi\rangle\langle\psi|$ from $A'\otimes A$.

The expected value of the entropy of entanglement is known and satisfies a concentration inequality.

$$
\mathbb{E}[H(\psi_A)] \geq \log_2(d_A)-\frac{1}{2\ln(2)}\frac{d_A}{d_B}
$$

From the Levy's lemma, we have

If we define $\beta=\frac{d_A}{\log_2(d_B)}$, then we have

$$
\operatorname{Pr}[H(\psi_A) < \log_2(d_A)-\alpha-\beta] \leq \exp\left(-\frac{(d_Ad_B-1)C\alpha^2}{(\log_2(d_A))^2}\right)
$$
where $C$ is a small constant and $d_B\geq d_A\geq 3$.

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

