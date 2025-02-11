# Lecture 4

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

Let $f:G\to \mathbb{C}$ be holomorphic function on open set $G\subset \mathbb{C}$ and real differentiable. $f=u+iv$ where $u,v$ are real differentiable functions.

Then, $f$ is conformal if and only if $f$ is holomorphic at $\zeta_0$ and $f'(\zeta_0)\neq 0,\forall \zeta_0\in G$.

Proof:

<!---TODO: check after lecture-->

Case 1: Suppose $f(\zeta)=a\zeta+b\overline{\zeta}$, Let $b=\frac{\partial f}{\partial \overline{z}}(\zeta)$. We need to prove $a+b\neq 0$. So we want $b=0$ and $a\neq 0$, other wise $f(\mathbb{R})=0$.

$f:\mathbb{R}\to \{(a+b)t\}$ is not conformal.

...

Case 2: Immediate consequence of the lemma of conformal function.

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
