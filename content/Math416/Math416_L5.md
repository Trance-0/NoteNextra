# Math416 Lecture 5

## Review

Let $f$ be a complex function. that maps $\mathbb{R}^2$ to $\mathbb{R}^2$. $f(x+iy)=u(x,y)+iv(x,y)$.

$$
Df(x+iy)=\begin{pmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y}\\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
\end{pmatrix}=\begin{pmatrix}
\alpha & \beta\\
\sigma & \delta
\end{pmatrix}
$$

So,

$$
\begin{aligned}
\frac{\partial f}{\partial z}&=\frac{1}{2}\left(u_x+v_y\right)-i\frac{1}{2}\left(v_x+u_y\right)\\
&=\frac{1}{2}\left(\alpha+\delta\right)-i\frac{1}{2}\left(\beta-\sigma\right)\\
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial f}{\partial \overline{z}}&=\frac{1}{2}\left(u_x+v_y\right)+i\frac{1}{2}\left(v_x+u_y\right)\\
&=\frac{1}{2}\left(\alpha-\delta\right)+i\frac{1}{2}\left(\beta+\sigma\right)\\
\end{aligned}
$$

When $f$ is conformal, 

$$
Df(x+iy)=\begin{pmatrix}
\alpha & \beta\\
-\beta & \alpha
\end{pmatrix}
$$

So,

$$
\frac{\partial f}{\partial z}=\frac{1}{2}(\alpha+\alpha)+i\frac{1}{2}(\beta+\beta)=a
$$

$$
\frac{\partial f}{\partial \overline{z}}=\frac{1}{2}(\alpha-\alpha)+i\frac{1}{2}(\beta-\beta)=0
$$

> Less pain to represent a complex function using four real numbers.

## Chapter 3: Linear fractional Transformations

Let $a,b,c,d$ be complex numbers. such that $ad-bc\neq 0$.

The linear fractional transformation is defined as

$$
\phi(z)=\frac{az+b}{cz+d}
$$

If we let $\psi(z)=\frac{ez-f}{-gz+h}$ also be a linear fractional transformation, then $\phi\circ\psi$ is also a linear fractional transformation.

New coefficients can be solved by

$$
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\begin{pmatrix}
e & f\\
g & h
\end{pmatrix}
=
\begin{pmatrix}
k&l\\
m&n
\end{pmatrix}
$$

So $\phi\circ\psi(z)=\frac{kz+l}{mz+n}$

### Complex projective space

$\mathbb{R}P^1$ is the set of lines through the origin in $\mathbb{R}^2$.

We defined $(a,b)\sim(c,d),(a,b),(c,d)\in\mathbb{R}^2\setminus\{(0,0)\}$ if $\exists t\neq 0,t\in\mathbb{R}\setminus\{0\}$ such that $(a,b)=t(c,d)$.

$R\mathbb{P}^1=S^1\setminus\{\pm x\}\cong S^1$

Equivalently,

$\mathbb{C}P^1$ is the set of lines through the origin in $\mathbb{C}$.

We defined $(a,b)\sim(c,d),(a,b),(c,d)\in\mathbb{C}\setminus\{(0,0)\}$ if $\exists t\neq 0,t\in\mathbb{C}\setminus\{0\}$ such that $(a,b)=(tc,td)$.

So, $\forall z\in\mathbb{C}\setminus\{0\}$:

If $a\neq 0$, then $(a,b)\sim(1,\frac{b}{a})$.

If $a=0$, then $(0,b)\sim(0,-b)$.

So, $\mathbb{C}P^1$ is the set of lines through the origin in $\mathbb{C}$.

### Linear fractional transformations

Let $M=\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}$ be a $2\times 2$ matrix with complex entries. That maps $\mathbb{C}^2$ to $\mathbb{C}^2$.

Suppose $M$ is non-singular. Then $ad-bc\neq 0$.

If $M\begin{pmatrix}
z_1\\
z_2
\end{pmatrix}=\begin{pmatrix}
\omega_1\\
\omega_2
\end{pmatrix}$, then $M\begin{pmatrix}
tz_1\\
tz_2
\end{pmatrix}=\begin{pmatrix}
t\omega_1\\
t\omega_2
\end{pmatrix}$.

So, $M$ induces a map $\phi_M:\mathbb{C}P^1\to\mathbb{C}P^1$ defined by $M\begin{pmatrix}
z\\
1
\end{pmatrix}=\begin{pmatrix}
\frac{az+b}{cz+d}\\
1
\end{pmatrix}$.

$\phi_M(z)=\frac{az+b}{cz+d}$.

If we let $M_2=\begin{pmatrix}
e &f\\
g &h
\end{pmatrix}$, where $ad-bc\neq 0$ and $eh-fg\neq 0$, then $\phi_{M_2}(z)=\frac{ez+f}{gz+h}$.

So, $M_2M_1=\begin{pmatrix}
a&b\\
c&d
\end{pmatrix}\begin{pmatrix}
e&f\\
g&h
\end{pmatrix}=\begin{pmatrix}
z\\
1
\end{pmatrix}$.

This also gives $\begin{pmatrix}
kz+l\\
mz+n
\end{pmatrix}\sim\begin{pmatrix}
\frac{kz+l}{mz+n}\\
1
\end{pmatrix}$.

So, if $ab-cd\neq 0$, then $\exists M^{-1}$ such that $M_2M_1=I$.

So non-constant linear fractional transformations form a group under composition.

When do two matrices gives the $t_0$ same linear fractional transformation?

$M_2^{-1}M_1=\alpha I$

We defined $GL(2,\mathbb{C})$ to be the group of general linear transformations of order 2 over $\mathbb{C}$.

This is equivalent to the group of invertible $2\times 2$ matrices over $\mathbb{C}$ under matrix multiplication.

Let $F$ be the function that maps $M$ to $\phi_M$.

$F:GL(2,\mathbb{C})\to\text{Homeo}(\mathbb{C}P^1)$

So the kernel of $F$ is the set of matrices that represent the identity transformation. $\ker F=\left\{\alpha I\right\},\alpha\in\mathbb{C}\setminus\{0\}$.

#### Corollary of conformality

If $\phi$ is a non-constant linear fractional transformation, then $\phi$ is conformal.

<details>
<summary>Proof</summary>

Know that $\phi_0\circ\phi(z)=z$,

Then $\phi(z)=\phi_0^{-1}\circ\phi\circ\phi_0(z)$.

So $\phi(z)=\frac{az+b}{cz+d}$.

$\phi:\mathbb{C}\cup\{\infty\}\to\mathbb{C}\cup\{\infty\}$ which gives $\phi(\infty)=\frac{a}{c}$ and $\phi(-\frac{d}{c})=\infty$.

So, $\phi$ is conformal.

</details>

#### Proposition 3.4 of Fixed points

Any non-constant linear fractional transformation except the identity transformation has 1 or 2 fixed points.

<details>
<summary>Proof</summary>

Let $\phi(z)=\frac{az+b}{cz+d}$.

Case 1: $c=0$

Then $\infty$ is a fixed point.

Case 2: $c\neq 0$

Then $\phi(z)=\frac{az+b}{cz+d}$.

The solution of $\phi(z)=z$ is $cz^2+(d-a)z-b=0$.

Such solutions are $z=\frac{-(d-a)\pm\sqrt{(d-a)^2+4bc}}{2c}$.

So, $\phi$ has 1 or 2 fixed points.

</details>

#### Proposition 3.5 of triple transitivity

If $z_1,z_2,z_3\in\mathbb{C}P^1$ are distinct, then there exists a non-constant linear fractional transformation $\phi$ such that $\phi(z_1)=z_2$ and $\phi(z_3)=\infty$.

Proof as homework.

#### Theorem 3.8 Preservation of clircles

We defined clircle to be a circle or a line.

If $\phi$ is a non-constant linear fractional transformation, then $\phi$ maps clircles to clircles.

Proof continue on next lecture.
