# Lecture 8

## Chapter III Linear maps

**Assumption: $U,V,W$ are vector spaces (over $\mathbb{F}$)**

### Vector Space of Linear Maps 3A

#### Definition 3.1

A **linear map** from $V$ to $W$ is a function from $T:V\to W$ with the following properties:

1. Additivity: $T(u+v)=T(u)+T(v),\forall u,v\in V$
2. Homogeneity: $T(\lambda v)=\lambda T(v),\forall \lambda \in \mathbb{F},v\in V$

#### Notation

* $Tv=T(v)$
* $\mathscr{L}(V,W)$ denotes the set of linear maps from $V$ to $W$. (homomorphism, $Hom(V,W)$)
* $\mathscr{L}(V)$ denotes the set of linear maps from $V$ to $V$. (endomorphism, $End(V)$)

#### Example

* zero map $0(v)\in \mathscr{L}(V,W)$ $0(v)=0$
* identity map $I\in \mathscr{L}(V,W)$, $I(v)=v$
* scaling map $T\in \mathscr{L}(V,W)$, $T(v)=av,a\in \mathbb{F}$
* differentiation map $D\in \mathscr{L}(\mathscr{P}_m(\mathbb{F}),\mathscr{P}_{m-1}(\mathbb{F}))$, $D(f)=f'$

#### Lemma 3.10

$T0=0$ for $T\in \mathscr{L}(V,W)$

Proof:

$T(0+0)=T(0)+T(0)$


#### Theorem 3.4 Linear map lemma

Suppose $v_1,...,v_n$ is a basis for $V$, and suppose $w_1,...,w_n\in W$ are arbitrary vector. Then, there exists a unique linear map. $T:V\to W$ such that $T_{v_i}=w_i$ for $i=1,...,n$

Proof:

First we show existence.

by constrains,

$T(c_1 v_1,...+c_n v_n)=c_1w_1+...+c_n  w_n$

T is well defined because $v_1,....v_n$ are a basis.

Need to show that $T$ is a linear map.

* Additivity: let $u,v\in V$ and suppose $a_1,...,a_n,b_1,...,b_n\in \mathbb{F}$
with $u=a_1v_1+....+a_n v_n ,v=b_1v_1+...+b_2v_n$, then $T(u+v)=T((a_1+b_1)v_1+...+(a_n+b_n)v_n)=Tu+Tv$

Proof for homogeneity used for exercise.

Need to show $T$ is unique. Let $S\in\mathscr{L}(V,W)$ such that $Sv_i=w_i,i=1,...,n$

$$
S(c_1 v_1+...+c_n v_n)=S(c_1v_1)+S(...)+S(c_n v_n)=c_1S(v_1)+...+c_nS(v_n)
+c_1w_1+...+c_nw_n
$$

Then $S=T$

#### Definition 3.5

Let $S,T\in \mathscr{L}(V,W)$, then define

* $(S+T)\in\mathscr{L}(V,W)$ by $(S+T)(v)=Sv+Tv$
* for $\lambda \in \mathbb{F}$, $(\lambda T)\in \mathscr{L}(V,W)$, $(\lambda T)(v)=\lambda T(v)$

Exercises: Show that $S+T$ and $\lambda T$ are linear maps.

#### Theorem 3.6

$\mathscr{L}(V,W)$ is a vector space.

Sketch of proof:

* additive identity: $0(v)=0$
* associativity:
* commutativity:
* additive inverse: $T\to (-1)T=-T$
* scalar multiplication $1T=T$
* distributive

#### Definition 3.7

Multiplication for linear map: $(ST)v=S(T(v))=(S\circ T)(v)$ **Not commutative but associative**.
