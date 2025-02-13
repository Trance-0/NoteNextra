# Math416 Lecture 4

## Review

### Derivative of a complex function

$$
\frac{\partial f}{\partial z}=\frac{1}{2}\left(\frac{\partial f}{\partial x}-\frac{\partial f}{\partial y}\right)
$$

$$
\frac{\partial f}{\partial \bar{z}}=\frac{1}{2}\left(\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\right)
$$

### Angle between two curves

Let $\gamma_1,\gamma_2$ be two curves in $G\subset \mathbb{C}$ with $\gamma_1(t_0)=\gamma_2(t_0)=\zeta_0$ for some $t_0\in I_1\cap I_2$.

The angle between $\gamma_1$ and $\gamma_2$ at $\zeta_0$ is the angle between the vectors $\gamma_1'(t_0)$ and $\gamma_2'(t_0)$. Denote as $\arg(\gamma_2'(t_0))-\arg(\gamma_1'(t_0))=\arg(\gamma_2'(t_0)\gamma_1'(t_0))$.

### Cauchy-Riemann equations

$$
\frac{\partial f}{\partial z}=\frac{1}{2}\left(\frac{\partial f}{\partial x}-\frac{\partial f}{\partial y}\right)
$$

## Continue on last lecture

### Theorem of conformality

Suppose $f:G\to \mathbb{C}$ is holomorphic function on open set $G\subset \mathbb{C}$ and $\gamma_1,\gamma_2$ are regular curves in $G$ with $\gamma_1(t_0)=\gamma_2(t_0)=\zeta_0$ for some $t_0\in I_1\cap I_2$.

If $f'(\zeta_0)\neq 0$, then the angle between $\gamma_1$ and $\gamma_2$ at $\zeta_0$ is the same as the angle between the vectors $f'(\zeta_0)\gamma_1'(t_0)$ and $f'(\zeta_0)\gamma_2'(t_0)$.

### Lemma of function of a curve and angle

If $f:G\to \mathbb{C}$ is holomorphic function on open set $G\subset \mathbb{C}$ and $\gamma$ is differentiable curve in $G$ with $\gamma(t_0)=\zeta_0$ for some $t_0\in I$.

Then,

$$
(f\circ \gamma)'(t_0)=f'(\gamma(t_0))\gamma'(t_0).
$$

> Looks like the chain rule.

Proof:

We want to show that

$$
\lim_{t\to t_0}\frac{(f\circ \gamma)(t)-(f\circ \gamma)(t_0)}{t-t_0}=f'(\gamma(t_0))\gamma'(t_0).
$$

> Notation:
>
> A function $g(h)$ is $O(h)$ if $\exists C>0$ such that $|g(h)|\leq C|h|$ for all $h$ in a neighborhood of $0$.
>
> A function $g(h)$ is $o(h)$ if $\lim_{h\to 0}\frac{g(h)}{h}=0$.
> 
> $f$ is differentiable if and only if $f(z+h)=f(z)+f'(z)h+\frac{1}{2}h^2f''(z)+o(h^3)$ as $h\to 0$. (By Taylor expansion)

Since $f$ is holomorphic at $\gamma(t_0)=\zeta_0$, we have

$$
f(\zeta_0)=f(\zeta_0)+(\zeta-\zeta_0)f'(\zeta_0)+o(\zeta-\zeta_0)
$$

and

$$
f(\gamma(t_0))=f(\gamma(t_0))+f'(\gamma(t_0))(\gamma(t)-\gamma(t_0))+o(\gamma(t)-\gamma(t_0))
$$

So,

$$
\begin{aligned}
\lim_{t\to t_0}\frac{(f\circ \gamma)(t)-(f\circ \gamma)(t_0)}{t-t_0}
&=\lim_{t\to t_0}\frac{\left[f(\gamma(t_0))+f'(\gamma(t_0))(\gamma(t)-\gamma(t_0))+o(\gamma(t)-\gamma(t_0))\right]-f(\gamma(t_0))}{t-t_0} \\
&=\lim_{t\to t_0}\frac{f'(\gamma(t_0))(\gamma(t)-\gamma(t_0))+o(\gamma(t)-\gamma(t_0))}{t-t_0} \\
&=\lim_{t\to t_0}\frac{f'(\gamma(t_0))(\gamma(t)-\gamma(t_0))}{t-t_0} +\lim_{t\to t_0}\frac{o(\gamma(t)-\gamma(t_0))}{t-t_0} \\
&=f'(\gamma(t_0))\lim_{t\to t_0}\frac{\gamma(t)-\gamma(t_0)}{t-t_0} +0\\
&=f'(\gamma(t_0))\gamma'(t_0)
\end{aligned}
$$

EOP

#### Definition 2.12 (Conformal function)

A function $f:G\to \mathbb{C}$ is called conformal if it preserves the angle between two curves.

#### Theorem 2.13 (Conformal function)

If $f:G\to \mathbb{C}$ is conformal at $\zeta_0\in G$, then $f$ is holomorphic at $\zeta_0$ and $f'(\zeta_0)\neq 0$.

Example:

$$
f(z)=z^2
$$

is not conformal at $z=0$ because $f'(0)=0$.

#### Lemma of conformal function

Suppose $f$ is real differentiable, let $a=\frac{\partial f}{\partial \zeta}(\zeta_0)$, $b=\frac{\partial f}{\partial \overline{\zeta}}(\zeta_0)$.

Let $\gamma(t_0)=\zeta_0$. Then $(f\circ \gamma)'(t_0)=a\gamma'(t_0)+b\overline{\gamma'(t_0)}$.

Proof:

$f=u+iv$, $u,v$ are real differentiable.

$$
a=\frac{\partial f}{\partial \zeta}=\frac{1}{2}\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right)+i\frac{1}{2}\left(\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}\right)
$$

$$
b=\frac{\partial f}{\partial \overline{\zeta}}=\frac{1}{2}\left(\frac{\partial u}{\partial x}-\frac{\partial v}{\partial y}\right)+i\frac{1}{2}\left(\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}\right)
$$

$$
\gamma'(t_0)=\frac{d\alpha}{dt}+i\frac{d\beta}{dt}
$$

$$
\overline{\gamma'(t_0)}=\frac{d\beta}{dt}-i\frac{d\alpha}{dt}
$$

$$
\begin{aligned}
(f\circ \gamma)'(t_0)&=\frac{\partial f}{\partial \zeta}(\gamma(t_0))\gamma'(t_0)+\frac{\partial f}{\partial \overline{\zeta}}(\gamma(t_0))\overline{\gamma'(t_0)} \\
&=\left[\frac{1}{2}\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right)+i\frac{1}{2}\left(\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}\right)\right]\left(\frac{d\alpha}{dt}+i\frac{d\beta}{dt}\right)\\
&+\left[\frac{1}{2}\left(\frac{\partial u}{\partial x}-\frac{\partial v}{\partial y}\right)+i\frac{1}{2}\left(\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}\right)\right]\left(\frac{d\beta}{dt}-i\frac{d\alpha}{dt}\right) \\
&=\left[\frac{1}{2}\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right)\frac{d\alpha}{dt}-\frac{1}{2}\left(\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}\right)\frac{d\beta}{dt}\right]\\
&+i\left[\frac{1}{2}\left(\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}\right)\frac{d\alpha}{dt}+\frac{1}{2}\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right)\frac{d\beta}{dt}\right] \\
&=\left[a+b\right]\frac{d\alpha}{dt}+i\left[a-b\right]\frac{d\beta}{dt} \\
&=\left[u_x+iv_x\right]\frac{d\alpha}{dt}+i\left[v_y-iu_y\right]\frac{d\beta}{dt} \\
&=a\gamma'(t_0)+b\overline{\gamma'(t_0)}
\end{aligned}
$$

EOP

#### Theorem of differentiability

Let $f:G\to \mathbb{C}$ be a function defined on an open set $G\subset \mathbb{C}$ that is both holomorphic and (real) differentiable, where $f=u+iv$ with $u,v$ real differentiable functions.

Then, $f$ is conformal at every point $\zeta_0\in G$ if and only if $f$ is holomorphic at $\zeta_0$ and $f'(\zeta_0)\neq 0$.

Proof:

We prove the equivalence in two parts.

($\implies$) Suppose that $f$ is conformal at $\zeta_0$. By definition, conformality means that $f$ preserves angles (including their orientation) between any two intersecting curves through $\zeta_0$. In the language of real analysis, this requires that the (real) derivative (Jacobian) of $f$ at $\zeta_0$, $Df(\zeta_0)$, acts as a similarity transformation. Any similarity in $\mathbb{R}^2$ can be written as a rotation combined with a scaling; in particular, its matrix representation has the form
$$
\begin{pmatrix}
A & -B \\
B & A
\end{pmatrix},
$$
for some real numbers $A$ and $B$. This is exactly the matrix corresponding to multiplication by the complex number $a=A+iB$. Therefore, the Cauchy-Riemann equations must hold at $\zeta_0$, implying that $f$ is holomorphic at $\zeta_0$. Moreover, because the transformation is nondegenerate (preserving angles implies nonzero scaling), we must have $f'(\zeta_0)=a\neq 0$.

($\impliedby$) Now suppose that $f$ is holomorphic at $\zeta_0$ and $f'(\zeta_0)\neq 0$. Then by the definition of the complex derivative, the first-order (linear) approximation of $f$ near $\zeta_0$ is
$$
f(\zeta_0+h)=f(\zeta_0)+f'(\zeta_0)h+o(|h|),
$$
for small $h\in\mathbb{C}$. Multiplication by the nonzero complex number $f'(\zeta_0)$ is exactly a rotation and scaling (i.e., a similarity transformation). Therefore, for any smooth curve $\gamma(t)$ with $\gamma(t_0)=\zeta_0$, we have
$$
(f\circ\gamma)'(t_0)=f'(\zeta_0)\gamma'(t_0),
$$
and the angle between any two tangent vectors at $\zeta_0$ is preserved (up to the fixed rotation). Hence, $f$ is conformal at $\zeta_0$.

For further illustration, consider the special case when $f$ is an affine map.

Case 1: Suppose 
$$
f(\zeta)=a\zeta+b\overline{\zeta}.
$$
The Wirtinger derivatives of $f$ are
$$
\frac{\partial f}{\partial \zeta}=a \quad \text{and} \quad \frac{\partial f}{\partial \overline{\zeta}}=b.
$$
For $f$ to be holomorphic, we require $\frac{\partial f}{\partial \overline{\zeta}}=b=0$. Moreover, to have a nondegenerate (angle-preserving) map, we must have $a\neq 0$. If $b\neq 0$, then the map mixes $\zeta$ and $\overline{\zeta}$, and one can check that the linearization maps the real axis $\mathbb{R}$ into the set $\{(a+b)t\}$, which does not uniformly scale and rotate all directions. Thus, $f$ fails to be conformal when $b\neq 0$.

Case 2: For a general holomorphic function, the lemma of conformal functions shows that if 
$$
(f\circ \gamma)'(t_0)=f'(\zeta_0)\gamma'(t_0)
$$
for any differentiable curve $\gamma$ through $\zeta_0$, then the effect of $f$ near $\zeta_0$ is exactly given by multiplication by $f'(\zeta_0)$. Since multiplication by a nonzero complex number is a similarity transformation, $f$ is conformal at $\zeta_0$.

EOP

### Harmonic function

Let $\Omega$ be a domain in $\mathbb{C}$. A function $u:\Omega\to \mathbb{R}$ 

> A domain is a connected open set.

Say $g:\Omega\to \mathbb{R} \text{ or } \mathbb{C}$ is harmonic if it satisfies the Laplace equation

$$
\Delta g=\frac{\partial^2 g}{\partial x^2}+\frac{\partial^2 g}{\partial y^2}=0.
$$

#### Theorem of harmonic conjugate

Let $f=u+iv$ be holomorphic function on domain $\Omega\subset \mathbb{C}$. Then $u$ and $v$ are harmonic functions on $\Omega$.

Proof:

$$
\Delta u=\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}=0.
$$

Using the Cauchy-Riemann equations, we have

$$
\frac{\partial^2 u}{\partial x^2}=\frac{\partial^2 v}{\partial x\partial y}, \quad \frac{\partial^2 u}{\partial y^2}=-\frac{\partial^2 v}{\partial y\partial x}.
$$

So,

$$
\Delta u=\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}=\frac{\partial^2 v}{\partial x\partial y}-\frac{\partial^2 v}{\partial y\partial x}=0.
$$

EOP

If $v$ is such that $f=u+iv$ is holomorphic on $\Omega$, then $v$ is called harmonic conjugate of $u$ on $\Omega$.

Example:

$$
u(x,y)=x^2-y^2
$$

is harmonic on $\mathbb{C}$.

To find a harmonic conjugate of $u$ on $\mathbb{C}$, we need to find a function $v$ such that

$$
\frac{\partial v}{\partial x}=-\frac{\partial u}{\partial y}=2y, \quad \frac{\partial v}{\partial y}=\frac{\partial u}{\partial x}=2x.
$$

Integrating, we get

$$
v(x,y)=2xy+G(y)
$$

$$
\frac{\partial v}{\partial y}=2x+G'(y)=2x
$$

So,

$$
G'(y)=0 \implies G(y)=C
$$

$$
v(x,y)=2xy+C
$$

is a harmonic conjugate of $u$ on $\mathbb{C}$.

Combine $u$ and $v$ to get $f(x,y)=x^2-y^2+2xyi+C=(x+iy)^2+C=z^2+C$, which is holomorphic on $\mathbb{C}$.
