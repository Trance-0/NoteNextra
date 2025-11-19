# Math 401, Fall 2025: Thesis notes, S4, Differential Forms

This note aim to investigate  What is homology and cohomology?

To answer this question, it's natural to revisit some concepts we have in Calc III. Particularly, Stoke's Theorem and De Rham Theorem.

Recall that the Stock's theorem states that:

$$
\int_c d\omega=\int_{\partial c} \omega
$$

Where $\partial c$ is a closed curve and $\omega$ is a 1-form.

What is form means here?

> This section is based on extension for conversation with Professor Feres on [11/12/2025].

## Differential Forms and applications

> Main reference: [Differential Forms and its applications](https://link.springer.com/book/10.1007/978-3-642-57951-6)

### Differential Forms in our sweet home, $\mathbb{R}^n$

Let $p$ be a point in $\mathbb{R}^n$. The tangent space of $\mathbb{R}^n$ at $p$ is denoted by $T_p\mathbb{R}^n$, is the set of all vectors in $\mathbb{R}^n$ that use $p$ as origin.

A vector field is a map that associates to each point $p$ in $\mathbb{R}^n$ a vector $v(p)$ in $T_p\mathbb{R}^n$.

That is

$$
v(p)=a_1(p)e_1+...+a_n(p)e_n
$$

where $e_1,...,e_n$ is the standard basis of $\mathbb{R}^n$, (in fact could be anything you like)

And $a_i(p)$ is a function that maps $\mathbb{R}^n$ to $\mathbb{R}$.

$v$ is differentiable at $p$ if the function $a_i$ is differentiable at $p$.

This gives a vector field $v$ on $\mathbb{R}^n$.

