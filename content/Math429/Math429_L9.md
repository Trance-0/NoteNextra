# Lecture 9

## Chapter III Linear maps

**Assumption: $U,V,W$ are vector spaces (over $\mathbb{F}$)**

### Vector Space of Linear Maps 3A

Review

$\mathscr{L}(V,W) =$ space of linear maps form $V$ to $W$.

$\mathscr{L}(V)=\mathscr{L}(V,V)$

Key facts:

* $\mathscr{L}(V,W)$ is a vector space
* given $T\in\mathscr{L}(U,V),S\in \mathscr{L}(V,W)$, we have $TS\in \mathscr{L}(V,W)$
* not commutative

### Null spaces and Range 3B

#### Definition 3.11

Null space and injectivity

For $T\in \mathscr{L}(V,W)$, the **null space** of $T$, denoted as $null(T)$ (sometime also noted as $ker\ T$), is a subset of $V$ given by

$$
ker\ T=null(T)=\{v\in V \vert Tv=0\}
$$

Examples:

* $0\in \mathscr{L}(V,W)$, then $null\ 0=V$, $null(I)=\{0\}$
* $T\in \mathscr{L}(\mathbb{R}^3,\mathbb{R}^2),T(x,y,z)=(x+y,y+z)$, to find the null space, we set $T(x,y,z)=0$, then $x+y=0,y+z=0$, $x=-y,x=z$. So $null(T)=\{(x,-x,x)\in \mathbb{R}^2\vert x\in \mathbb{R}\}$
* Let $D\in \mathscr{L}(\mathscr{P}(\mathbb{R})),D(f)=f'$, $null (D)=$ the set of constant functions. (because the derivatives of them are zero.)

#### Theorem 3.13

Given $T\in \mathscr{L}(V,W)$, $null(T)$ is a subspace of $V$.

Proof:

We check the conditions for the subspace.
* $T0=0$, so $0\in null(T)$
* $u,v\in null(T)$, then consider $T(u+v)=Tu+Tv=0+0=0$, so $u+v\in null(T)$
* Let $v\in null (T),\lambda \in \mathbb{F}$, then $T(\lambda v)=\lambda (Tv)=\lambda 0=0$, so $\lambda v \in null (T)$

So $null(T)$ is a subspace.

#### Definition 3.14

A function $f:V\to W$ is **injective** (also called one-to-one, 1-1) if for all $u,v\in V$, if $Tv=Tu$, then $T=U$.

#### Lemma 3.15

Let $T\in \mathscr{L}(V,W)$ then $T$ is injective if and only if $null(T)=\{0\}$

Proof:

$\Rightarrow$

Let $T\in \mathscr{L}(V,W)$ be injective, and let $v\in null (T)$. Then $Tv=0=T0$ so because $T$ is injective $v=0\implies null (T)=\{0\}$

$\Leftarrow$

Suppose $T\in \mathscr{L}(V,W)$ with $null (T)=\{0\}$. Let $u,v\in V$ with $Tu=Tv$, $Tu-Tv=0,T(u-v)=0,u-v=0,u=v$, so $T$ is injective

#### Definition 3.16

Range and surjectivity

For $T\in \mathscr{L}(V,W)$ the range of $T$ denoted $range(T)$, is given by 

$$
range(T)=\{Tv\vert v\in V\}
$$

Example:

* $0\in \mathscr{L}(V,W)$, $range(0)=\{0\}$
* $I\in \mathscr{L}(V,W)$, $range(I)=V$
* Let $T:\mathbb{R}\to \mathbb{R}^2$ given by $T(x)=(x,2x)$, $range(T)=\{(x,2x)\vert x\in \mathbb{R}\}$

#### Theorem 3.18

Given $T\in \mathscr{L}(V,W)$, $range(T)$ is a subspace of $W$

Proof:

Exercise, not interesting.

#### Definition 3.19

A function $T:V\to W$ is surjective (also called onto) if $range(T)=W$

#### Theorem 3.21 (The Fundamental Theorem of Linear Maps, Rank-nullity Theorem)

Suppose $V$ is finite dimensional, and $T\in \mathscr{L}(V,W)$, then $range(T)$ is finite dimensional ($W$ don't need to be finite dimensional). and 

$$
dim(V)=dim(null (T))+dim(range(T))
$$

#### Theorem 3.22

Let $T\in \mathscr{L}(V,W)$ and suppose $dim(V)>dim(W)$. Then $T$ is not injective.

Proof:

By **Theorem 3.21**, $dim(V)=dim(null (T))+dim(range(T))$,  $dim(V)=dim(null (T))+dim(W)$, $0<dim (V)-dim(W)\leq dim(null(T))\implies dim(null(T))>0\implies null (T)\neq \{0\}$

So $T$ is not injective.
