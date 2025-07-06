# CSE559A Lecture 7

## Computer Vision (In Artificial Neural Networks for Image Understanding)

Early example of image understanding using Neural Networks: [Back propagation for zip code recognition]

Central idea; representation change, on each layer of feature.

Plan for next few weeks:

1. How do we train such models?
2. What are those building blocks
3. How should we combine those building blocks?

## How do we train such models?

CV is finally useful...

1. Image classification
2. Image segmentation
3. Object detection

ImageNet Large Scale Visual Recognition Challenge (ILSVRC)

- 1000 classes
- 1.2 million images
- 10000 test images

### Deep Learning (Just neural networks)

Bigger datasets, larger models, faster computers, lots of incremental improvements.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(1, 6, 5)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        x = F.max_pool2d(F.relu(self.conv1(x)), (2, 2))
        x = F.max_pool2d(F.relu(self.conv2(x)), 2)
        x = x.view(-1, self.num_flat_features(x))
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

    def num_flat_features(self, x):
        size = x.size()[1:]
        num_features = 1
        for s in size:
            num_features *= s
        return num_features

# create pytorch dataset and dataloader
dataset = torch.utils.data.TensorDataset(torch.randn(1000, 1, 28, 28), torch.randint(10, (1000,)))
dataloader = torch.utils.data.DataLoader(dataset, batch_size=4, shuffle=True, num_workers=2)

# training process

net = Net()
optimizer = optim.Adam(net.parameters(), lr=0.001)
criterion = nn.CrossEntropyLoss()

# loop over the dataset multiple times
for epoch in range(2):
    for i, data in enumerate(dataloader, 0):
        inputs, labels = data
        optimizer.zero_grad()
        outputs = net(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

print(f"Finished Training")
```

Some generated code above.

### Supervised Learning

Training: given a dataset, learn a mapping from input to output.

Testing: given a new input, predict the output.

Example: Linear classification models

Find a linear function that separates the data.

$$
f(x) = w^T x + b
$$

[Linear classification models](http://cs231n.github.io/linear-classify/)

Simple representation of a linear classifier.

### Empirical loss minimization framework

Given a training set, find a model that minimizes the loss function.

Assume iid samples.

Example of loss function:

l1 loss:

$$
\ell(f(x; w), y) = |f(x; w) - y|
$$

l2 loss:

$$
\ell(f(x; w), y) = (f(x; w) - y)^2
$$

### Linear classification models

$$
\hat{L}(w) = \frac{1}{n} \sum_{i=1}^n \ell(f(x_i; w), y_i)
$$

hard to find the global minimum.

#### Linear regression

However, if we use l2 loss, we can find the global minimum.

$$
\hat{L}(w) = \frac{1}{n} \sum_{i=1}^n (f(x_i; w) - y_i)^2
$$

This is a convex function, so we can find the global minimum.

The gradient is:

$$
\nabla_w||Xw-Y||^2 = 2X^T(Xw-Y)
$$

Set the gradient to 0, we get:

$$
w = (X^T X)^{-1} X^T Y
$$

From the maximum likelihood perspective, we can also derive the same result.

#### Logistic regression

Sigmoid function:

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

The loss of logistic regression is not convex, so we cannot find the global minimum using normal equations.

#### Gradient Descent

Full batch gradient descent:

$$
w \leftarrow w - \eta \nabla_w \hat{L}(w)
$$

Stochastic gradient descent:

$$
w \leftarrow w - \eta \nabla_w \hat{L}(w; x_i, y_i)
$$

Mini-batch gradient descent:

$$
w \leftarrow w - \eta \nabla_w \hat{L}(w; x_i, y_i)
$$

Mini-batch Gradient Descent:

$$
w \leftarrow w - \eta \nabla_w \hat{L}(w; x_i, y_i)
$$

at each step, we update the weights using the average gradient of the mini-batch.

the mini-batch is selected randomly from the training set.

#### Multi-class classification

Use softmax function to convert the output to a probability distribution.

## Neural Networks

From linear to non-linear.

- Shadow approach:
  - Use feature transformation to make the data linearly separable.
- Deep approach:
  - Stack multiple layers of linear models.

Common non-linear functions:

- ReLU:
  - $$
    \text{ReLU}(x) = \max(0, x)
    $$
- Sigmoid:
  - $$
    \text{Sigmoid}(x) = \frac{1}{1 + e^{-x}}
    $$
- Tanh:
  - $$
    \text{Tanh}(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
    $$



### Backpropagation