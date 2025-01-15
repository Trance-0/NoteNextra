# Lecture 1

## Chapter 1: Complex Numbers

### Preface

I don't know what happened to the first class. I will try to rewrite the notes from my classmates here.

#### Rigidity

Integral is preserved for any closed path.

#### Group

A set with a multiplication operator. $(G,\cdot)$ such that: for all $a,b,c\in G$:

1. $a\cdot b\in G$
2. $a\cdot (b\cdot c)=(a\cdot b)\cdot c$
3. $a\cdot 1=a$
4. $a\cdot a^{-1}=1$

#### Ring

A group with two operations: addition and multiplication. $(R,+,\cdot)$ such that: for all $a,b,c\in R$:

1. Commutative under addition: $a+b=b+a$
2. Associative under multiplication: $(a\cdot b)\cdot c=a\cdot (b\cdot c)$
3. Distributive under addition: $a\cdot (b+c)=a\cdot b+a\cdot c$

Example:

$\{a+\sqrt{6}b\mid a,b\in \mathbb{Z}\}$ is a ring

#### Definition 1.1

the complex number is defined to be the set $\mathbb{C}$ of ordered pairs $(x,y)$ with $x,y\in \mathbb{R}$ and the operations:

- Addition: $(x_1,y_1)+(x_2,y_2)=(x_1+x_2,y_1+y_2)$
- Multiplication: $(x_1,y_1)(x_2,y_2)=(x_1x_2-y_1y_2,x_1y_2+x_2y_1)$

#### Axiom 1.2

The operation of addition and multiplication on $\mathbb{C}$ satisfies the following conditions (The field axioms):

For all $z_1,z_2,z_3\in \mathbb{C}$:

1. $z_1+z_2=z_2+z_1$ (commutative law of addition)
2. $(z_1+z_2)+z_3=z_1+(z_2+z_3)$ (associative law of addition)
3. $z_1\cdot z_2=z_2\cdot z_1$ (commutative law of multiplication)
4. $(z_1\cdot z_2)\cdot z_3=z_1\cdot (z_2\cdot z_3)$ (associative law of multiplication)
5. $z_1\cdot (z_2+z_3)=z_1\cdot z_2+z_1\cdot z_3$ (distributive law)
6. There exists an additive identity element $0=(0,0)$ such that $z+0=z$ for all $z\in \mathbb{C}$.
7. There exists a multiplicative identity element $1=(1,0)$ such that $z\cdot 1=z$ for all $z\in \mathbb{C}$.
8. There exists an additive inverse $-z=(-x,-y)$ for all $z=(x,y)\in \mathbb{C}$ such that $z+(-z)=0$.
9. There exists a multiplicative inverse $z^{-1}=\left(\frac{x}{x^2+y^2},-\frac{y}{x^2+y^2}\right)$ for all $z=(x,y)\in \mathbb{C}$ such that $z\cdot z^{-1}=1$.

$$
(a,b)^{-1}=\left(\frac{a}{a^2+b^2},-\frac{b}{a^2+b^2}\right)
$$

#### Embedding of $\mathbb{R}$ in $\mathbb{C}$ 1.3

Let $z=x+iy\in \mathbb{C}$ where $a,b\in \mathbb{R}$.

- $x$ is called the real part of $z$ and
- $y$ is called the imaginary part of $z$.
- $|z|=\sqrt{x^2+y^2}$ is called the absolute value or modulus of $z$.
- The angle between the positive real axis and the line segment from $0$ to $z$ is called the argument of $z$ and is denoted by $\theta$ (argument of $z$).
- $\overline{z}=x-iy$ is called the conjugate of $z$. ($z\cdot \overline{z}=|z|^2$)
- $z_1+z_2=(x_1+x_2,y_1+y_2)$ (vector addition)

#### Lemma 1.3

$$
|z_1z_2|=|z_1||z_2|
$$

#### Theorem 1.5 (Triangle Inequality)

$$
|z_1+z_2|\leq |z_1|+|z_2|
$$

Proof:

Geometrically, the triangle inequality states that the sum of the lengths of any two sides of a triangle is greater than the length of the third side.

Algebraically,

$$
\begin{aligned}
(|z_1+z_2|)^2-|z_1+z_2|^2&=|z_1+z_2|^2-2|z_1+z_2|-(z_1+z_2)(\overline{z_1}+\overline{z_2})\\
&=|z_1|^2+|z_2|^2+2|z_1||z_2|-(|z_1|^2+|z_2|^2+\overline{z_1}z_2+\overline{z_2}z_1)\\
&=2|z_1||z_2|-2Re(\overline{z_1}z_2)\\
&=2(|z_1||z_2|-|z_1z_2|)\\
&\geq 0
\end{aligned}
$$

Suppose $2(|z_1||z_2|-|z_1z_2|)=0$, and $\overline{z_1}z_2$ is a non-negative real number $c$, then $|z_1||z_2|=|z_1z_2|$...

> What is the use of this?

Let $\arg(z)=\theta\in (-\pi,\pi]$, $z_1=r_1(\cos\theta_1+i\sin\theta_1)$, $z_2=r_2(\cos\theta_2+i\sin\theta_2)$.

$$
z_1z_2=r_1r_2[cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)]
$$

(Define $\text{cis}(\theta)=\cos\theta+i\sin\theta$)

### De Howtes' Formula

Let $z=r\text{cis}(\theta)$, then

$\forall n\in \mathbb{Z}$:

$$
z^n=r^n\text{cis}(n\theta)
$$

Proof:

For $n=0$, $z^0=1=1\text{cis}(0)$.

For $n=-1$, $z^{-1}=\frac{1}{z}=\frac{1}{r}\text{cis}(-\theta)=\frac{1}{r}(cos(-\theta)+i\sin(-\theta))$.

Application:

$$
\begin{aligned}
(\text{cis}(\theta))^3&=\text{cis}(3\theta)\\
&=\cos(3\theta)+i\sin(3\theta)\\
&=cos^3(\theta)-3cos(\theta)sin^2(\theta)+i(3cos^2(\theta)sin(\theta)-sin^3(\theta))\\
\end{aligned}
$$
