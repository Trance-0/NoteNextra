# Math416 Lecture 3

## Differentiation of functions in complex variables

### Differentiability

#### Definition of differentiability in complex variables

**Suppose $G$ is an open subset of $\mathbb{C}$**.

A function $f:G\to \mathbb{C}$ is differentiable at $\zeta_0\in G$ if

$$
f'(\zeta_0)=\lim_{\zeta\to \zeta_0}\frac{f(\zeta)-f(\zeta_0)}{\zeta-\zeta_0}
$$

exists.

Or equivalently,

We can also express the $f$ as $f=u+iv$, where $u,v:G\to \mathbb{R}$ are real-valued functions.

Recall that $u:G\to \mathbb{R}$ is differentiable at $\zeta_0\in G$ if and only if there exists a complex number $(x,y)\in \mathbb{C}$ such that a function

$$
R(x,y)=u(x,y)-\left(u(x_0,y_0)+\frac{\partial u}{\partial x}(x_0,y_0)(x-x_0)+\frac{\partial u}{\partial y}(x_0,y_0)(y-y_0)\right)
$$

satisfies

$$
\lim_{(x,y)\to (x_0,y_0)}\frac{|R(x,y)|}{|(x,y)-(x_0,y_0)|}=\lim_{(x,y)\to (x_0,y_0)}\frac{|R(x,y)|}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0.
$$

_$R(x,y)$ is the immediate result of mean value theorem applied to $u$ at $(x_0,y_0)$_.

> Theorem from 4111?
> 
> If $u$ is differentiable at $(x_0,y_0)$, then $\frac{\partial u}{\partial x}(x_0,y_0)$ and $\frac{\partial u}{\partial y}(x_0,y_0)$ exist.
> 
> If $\frac{\partial u}{\partial x}(x_0,y_0)$ and $\frac{\partial u}{\partial y}(x_0,y_0)$ exist and one of them is continuous at $(x_0,y_0)$, then $u$ is differentiable at $(x_0,y_0)$.

$$
\begin{aligned}
\lim_{(x,y)\to (x_0,y_0)}\frac{|R(x,y)|}{|(x,y)-(x_0,y_0)|}&=\lim_{(x,y)\to (x_0,y_0)}\frac{|u(x,y)-u(x_0,y_0)-\frac{\partial u}{\partial x}(x_0,y_0)(x-x_0)-\frac{\partial u}{\partial y}(x_0,y_0)(y-y_0)|}{\sqrt{(x-x_0)^2+(y-y_0)^2}}\\
&=\lim_{(x,y)\to (x_0,y_0)}\frac{|u(x,y)-u(x_0,y_0)-\frac{\partial u}{\partial x}(x_0,y_0)(x-x_0)-\frac{\partial u}{\partial y}(x_0,y_0)(y-y_0)|}{\sqrt{(x-x_0)^2+(y-y_0)^2}}\\
\end{aligned}
$$

Let $a(x,y)=\frac{\partial u}{\partial x}(x,y)$ and $b(x,y)=\frac{\partial u}{\partial y}(x,y)$.

We can write $R(x,y)$ as

$$
R(x,y)=u(x,y)-u(x_0,y_0)-a(x,y)(x-x_0)-b(x,y)(y-y_0).
$$

So $\lim_{(x,y)\to (x_0,y_0)}\frac{|R(x,y)|}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0$ if and only if $\lim_{(x,y)\to (x_0,y_0)}\frac{a(x-x_0)}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0$ and $\lim_{(x,y)\to (x_0,y_0)}\frac{b(y-y_0)}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0$.

On the imaginary part, we proceed similarly. Define
$$
S(x,y)=v(x,y)-v(x_0,y_0)-\frac{\partial v}{\partial x}(x_0,y_0)(x-x_0)-\frac{\partial v}{\partial y}(x_0,y_0)(y-y_0).
$$
Then the differentiability of $v$ at $(x_0,y_0)$ guarantees that
$$
\lim_{(x,y)\to (x_0,y_0)}\frac{|S(x,y)|}{\sqrt{(x-x_0)^2+(y-y_0)^2}}=0.
$$
Moreover, considering the definition of the complex derivative of $f=u+iv$, if we approach $\zeta_0=x_0+iy_0$ along different directions we obtain
$$
f'(\zeta_0)=\frac{\partial u}{\partial x}(x_0,y_0)+i\frac{\partial v}{\partial x}(x_0,y_0)
=\frac{\partial v}{\partial y}(x_0,y_0)-i\frac{\partial u}{\partial y}(x_0,y_0).
$$
Equating the real and imaginary parts of these two expressions forces
$$
\frac{\partial u}{\partial x}(x_0,y_0)=\frac{\partial v}{\partial y}(x_0,y_0),\quad \frac{\partial u}{\partial y}(x_0,y_0)=-\frac{\partial v}{\partial x}(x_0,y_0).
$$

#### Theorem 2.6 (The Cauchy-Riemann equations):

If $f=u+iv$ is complex differentiable at $\zeta_0\in G$, then $u$ and $v$ are real differentiable at $(x_0,y_0)$ and

$$
\frac{\partial u}{\partial x}(x_0,y_0)=\frac{\partial v}{\partial y}(x_0,y_0),\quad \frac{\partial u}{\partial y}(x_0,y_0)=-\frac{\partial v}{\partial x}(x_0,y_0).
$$

> Some missing details:
>
> The Cauchy-Riemann equations are necessary and sufficient for the differentiability of $f$ at $\zeta_0$.
>
> This states that a function $f$ is **complex differentiable** at $\zeta_0$ if and only if $u$ and $v$ are real differentiable at $(x_0,y_0)$ and the Cauchy-Riemann equations hold at $(x_0,y_0)$. That is $f'(\zeta_0)=\frac{\partial u}{\partial x}(x_0,y_0)+i\frac{\partial v}{\partial x}(x_0,y_0)=\frac{\partial v}{\partial y}(x_0,y_0)-i\frac{\partial u}{\partial y}(x_0,y_0)$.

And $u$ and $v$ have continuous partial derivatives at $(x_0,y_0)$.

And let $c=\frac{\partial u}{\partial x}(x_0,y_0)$ and $d=\frac{\partial v}{\partial x}(x_0,y_0)$.

**Then $f'(\zeta_0)=c+id$, is holomorphic at $\zeta_0$.**

### Holomorphic Functions

#### Definition 2.8 (Holomorphic functions)

A function $f:G\to \mathbb{C}$ is holomorphic (or analytic) at $\zeta_0\in G$ if it is complex differentiable at $\zeta_0$.

Example:

Suppose $f:G\to \mathbb{C}$ where $f=u+iv$ and $\frac{\partial f}{\partial x}=\frac{\partial u}{\partial x}+i\frac{\partial v}{\partial x}$, $\frac{\partial f}{\partial y}=\frac{\partial u}{\partial y}+i\frac{\partial v}{\partial y}$.

Define $\frac{\partial}{\partial \zeta}=\frac{1}{2}\left(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\right)$ and $\frac{\partial}{\partial \bar{\zeta}}=\frac{1}{2}\left(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\right)$.

Suppose $f$ is holomorphic at $\bar{\zeta}_0\in G$ (Cauchy-Riemann equations hold at $\bar{\zeta}_0$).

Then $\frac{\partial f}{\partial \bar{\zeta}}(\bar{\zeta}_0)=0$.

Note that $\forall m\in \mathbb{Z}$, $\zeta^m$ is holomorphic on $\mathbb{C}$.

i.e. $\forall a\in \mathbb{C}$, $\lim_{\zeta\to a}\frac{\zeta^m-a^m}{\zeta-a}=\frac{(\zeta-a)(\zeta^{m-1}+\zeta^{m-2}a+\cdots+a^{m-1})}{\zeta-a}=ma^{m-1}$.

So polynomials are holomorphic on $\mathbb{C}$.

So rational functions $p/q$ are holomorphic on $\mathbb{C}\setminus\{z\in \mathbb{C}:q(z)=0\}$.

#### Definition 2.9 (Complex partial differential operators)

Let $f:G\to \mathbb{C}$, $f=u+iv$, be a function defined on an open set $G\subset \mathbb{C}$.

Define:

$$
\frac{\partial}{\partial x}f=\frac{\partial u}{\partial x}+i\frac{\partial v}{\partial x},\quad \frac{\partial}{\partial y}f=\frac{\partial u}{\partial y}+i\frac{\partial v}{\partial y}.
$$

And

$$
\frac{\partial}{\partial \zeta}f=\frac{1}{2}\left(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\right)f,\quad \frac{\partial}{\partial \bar{\zeta}}f=\frac{1}{2}\left(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\right)f.
$$

This definition of partial differential operators on complex functions is consistent with the definition of partial differential operators on real functions.

$$
\frac{\partial}{\partial x}f=\frac{\partial}{\partial \zeta}f+\frac{\partial}{\partial \bar{\zeta}}f,\quad \frac{\partial}{\partial y}f=i\left(\frac{\partial}{\partial \zeta}f-\frac{\partial}{\partial \bar{\zeta}}f\right).
$$

### Curves in $\mathbb{C}$

#### Definition 2.11 (Curves in $\mathbb{C}$)

A curve $\gamma$ in $G\subset \mathbb{C}$ is a continuous map of an interval $I$ into $G$. We say $\gamma$ is differentiable if $\forall t_0\in I$, $\gamma'(t_0)=\lim_{t\to t_0}\frac{\gamma(t)-\gamma(t_0)}{t-t_0}$ exists.

If $\gamma'(t_0)$ is a point in $\mathbb{C}$, then $\gamma'(t_0)$ is called the tangent vector to $\gamma$ at $t_0$.

#### Definition of regular curves in $\mathbb{C}$

A curve $\gamma$ is regular if $\gamma'(t)\neq 0$ for all $t\in I$.

#### Definition of angle between two curves

Let $\gamma_1,\gamma_2$ be two curves in $G\subset \mathbb{C}$ with $\gamma_1(t_0)=\gamma_2(t_0)=\zeta_0$ for some $t_0\in I_1\cap I_2$.

The angle between $\gamma_1$ and $\gamma_2$ at $\zeta_0$ is the angle between the vectors $\gamma_1'(t_0)$ and $\gamma_2'(t_0)$. Denote as $\arg(\gamma_2'(t_0))-\arg(\gamma_1'(t_0))=\arg(\gamma_2'(t_0)\gamma_1'(t_0))$.

#### Theorem of conformality

Suppose $f:G\to \mathbb{C}$ is holomorphic function on open set $G\subset \mathbb{C}$ and $\gamma_1,\gamma_2$ are regular curves in $G$ with $\gamma_1(t_0)=\gamma_2(t_0)=\zeta_0$ for some $t_0\in I_1\cap I_2$.

If $f'(\zeta_0)\neq 0$, then the angle between $\gamma_1$ and $\gamma_2$ at $\zeta_0$ is the same as the angle between the vectors $f'(\zeta_0)\gamma_1'(t_0)$ and $f'(\zeta_0)\gamma_2'(t_0)$.

#### Lemma of function of a curve and angle

If $f:G\to \mathbb{C}$ is holomorphic function on open set $G\subset \mathbb{C}$ and $\gamma$ is differentiable curve in $G$ with $\gamma(t_0)=\zeta_0$ for some $t_0\in I$.

Then,

$$
(f\circ \gamma)'(t_0)=f'(\gamma(t_0))\gamma'(t_0).
$$

If Lemma of function of a curve and angle holds, then the angle between $f\circ \gamma_1$ and $f\circ \gamma_2$ at $\zeta_0$ is

$$
\begin{aligned}
\arg\left[(f\circ \gamma_2)'(t_2)(f\circ \gamma_1)'(t_1)\right]&=\cdots
\end{aligned}
$$

Continue on Thursday. (Applying the chain rules)