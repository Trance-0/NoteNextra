# Lecture 8

Paper review sharing.

## Recap: Three ways to think about linear classifiers

Geometric view: Hyperplanes in the feature space

Algebraic view: Linear functions of the features

Visual view: One template per class

## Continue on linear classification models

Two layer networks as combination of templates.

Interpretability is lost during the depth increase.

A two layer network is a **universal approximator** (we can approximate any continuous function to arbitrary accuracy). But the hidden layer may need to be huge.

[Multi-layer networks demo](https://playground.tensorflow.org)

### Supervised learning outline

1. Collect training data
2. Specify model (select hyper-parameters)
3. Train model

#### Hyper-parameters selection

- Number of layers, number of units per layer, learning rate, etc.
- Type of non-linearity, regularization, etc.
- Type of loss function, etc.
- SGD settings: batch size, number of epochs, etc.

#### Hyper-parameter searching

Use validation set to evaluate the performance of the model.

Never peek the test set.

Use the training set to do K-fold cross validation.

### Backpropagation

#### Computation graphs

SGD update for each parameter

$$
w_k\gets w_k-\eta\frac{\partial e}{\partial w_k}
$$

$e$ is the error function.

#### Using the chain rule

Suppose $k=1$, $e=l(f_1(x,w_1),y)$

Example: $e=(f_1(x,w_1)-y)^2$

So $h_1=f_1(x,w_1)=w^T_1x$, $e=l(h_1,y)=(y-h_1)^2$

$$
\frac{\partial e}{\partial w_1}=\frac{\partial e}{\partial h_1}\frac{\partial h_1}{\partial w_1}
$$

$$
\frac{\partial e}{\partial h_1}=2(h_1-y)
$$

$$
\frac{\partial h_1}{\partial w_1}=x
$$

$$
\frac{\partial e}{\partial w_1}=2(h_1-y)x
$$

#### General backpropagation algorithm







