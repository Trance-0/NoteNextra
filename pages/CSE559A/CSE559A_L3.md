# CSE559A Lecture 3

## Image formation

### Degrees of Freedom

$$
x=K[R|t]X
$$

$$
w\begin{bmatrix}
x\\
y\\
1
\end{bmatrix}
=
\begin{bmatrix}
    \alpha & s & u_0 \\
    0 & \beta & v_0 \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
r_{11} & r_{12} & r_{13} &t_x\\
r_{21} & r_{22} & r_{23} &t_y\\
r_{31} & r_{32} & r_{33} &t_z\\
\end{bmatrix}
\begin{bmatrix}
x\\
y\\
z\\
1
\end{bmatrix}
$$

### Impact of translation of camera

$$
p=K[R|t]\begin{bmatrix}
x\\
y\\
z\\
0
\end{bmatrix}=K[R]\begin{bmatrix}
x\\
y\\
z\\
\end{bmatrix}
$$

Projection of a vanishing point or projection of a point at infinity is invariant to translation.

### Recover world coordinates from pixel coordinates

$$
\begin{bmatrix}
u\\
v\\
1
\end{bmatrix}=K[R|t]^{-1}X
$$

Key issue: where is the world origin $w$? Suppose $w=1/s$

$$
\begin{aligned}
    \begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}
    &=sK[R|t]X\\
    K^{-1}\begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}
    &=s[R|t]X\\
    R^{-1}K^{-1}\begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}&=s[I|R^{-1}t]X\\
    R^{-1}K^{-1}\begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}&=[I|R^{-1}t]sX\\
    R^{-1}K^{-1}\begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}&=sX+sR^{-1}t\\
    \frac{1}{s}R^{-1}K^{-1}\begin{bmatrix}
        u\\
        v\\
        1
    \end{bmatrix}-R^{-1}t&=X\\
\end{aligned}
$$

## Projective Geometry

### Orthographic Projection

Special case of perspective projection when $f\to\infty$

- Distance for the center of projection is infinite
- Also called parallel projection
- Projection matrix is

$$
w\begin{bmatrix}
u\\
v\\
1
\end{bmatrix}=
\begin{bmatrix}
f & 0 & 0 & 0\\
0 & f & 0 & 0\\
0 & 0 & 0 & s\\
\end{bmatrix}
\begin{bmatrix}
x\\
y\\
z\\
1
\end{bmatrix}
$$

Continue in later part of the course

## Image processing foundations

### Motivation for image processing

Representational Motivation:

- We need more than raw pixel values

Computational Motivation:

- Many image processing operations must be run across many locations in a image
- A loop in python is slow
- High-level libraries reduce errors, developer time, and algorithm runtime
- Two common libraries:
  - Torch+Torchvision: Focus on deep learning
  - scikit-image: Focus on classical image processing algorithms

### Operations on images

#### Point operations

Operations that are applied to one pixel at a time

Negative image

$$
I_{neg}(x,y)=L-1-I(x,y)
$$

Power law transformation:

$$
I_{out}(x,y)=cI(x,y)^{\gamma}
$$

- $c$ is a constant
- $\gamma$ is the gamma value

Contrast stretching

use function to stretch the range of pixel values

$$
I_{out}(x,y)=f(I(x,y))
$$

- $f$ is a function that stretches the range of pixel values

Image histogram

- Histogram of an image is a plot of the frequency of each pixel value

Limitations:

- No spatial information
- No information about the relationship between pixels

#### Linear filtering in spatial domain

Operations that are applied to a neighborhood at each position

Used to:

- Enhance image features
  - Denoise, sharpen, resize
- Extract information about image structure
  - Edge detection, corner detection, blob detection
- Detect image patterns
  - Template matching
- Convolutional Neural Networks

Image filtering

Do dot product of the image with a kernel

$$
h[m,n]=\sum_{k=0}^{m-i}\sum_{l=0}^{n-i}g[k,l]f[m+k,n+l]
$$

```python
def filter2d(image, kernel):
    """
    Apply a 2D filter to an image, do not use this in practice
    """
    for i in range(image.shape[0]):
        for j in range(image.shape[1]):
            image[i, j] = np.dot(kernel, image[i-1:i+2, j-1:j+2])
    return image
```

Computational cost: $k^2mn$, assume $k$ is the size of the kernel and $m$ and $n$ are the dimensions of the image

Do not use this in practice, use built-in functions instead.

**Box filter**

$$
\frac{1}{9}\begin{bmatrix}
1 & 1 & 1\\
1 & 1 & 1\\
1 & 1 & 1
\end{bmatrix}
$$

Smooths the image

**Identity filter**

$$
\begin{bmatrix}
0 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 0
\end{bmatrix}
$$

Does not change the image

**Sharpening filter**

$$
\begin{bmatrix}
0 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 0
\end{bmatrix}-
\begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1
\end{bmatrix}
$$

Enhances the image edges

**Vertical edge detection**

$$
\begin{bmatrix}
1 & 0 & -1 \\
2 & 0 & -2 \\
1 & 0 & -1
\end{bmatrix}
$$

Detects vertical edges

**Horizontal edge detection**

$$
\begin{bmatrix}
1 & 2 & 1 \\
0 & 0 & 0 \\
-1 & -2 & -1
\end{bmatrix}
$$

Detects horizontal edges

Key property:

- Linear:
  - `filter(I,f_1+f_2)=filter(I,f_1)+filter(I,f_2)`
- Scale invariant:
  - `filter(I,af)=a*filter(I,f)`
- Shift invariant:
  - `filter(I,shift(f))=shift(filter(I,f))`
- Commutative:
  - `filter(I,f_1)*filter(I,f_2)=filter(I,f_2)*filter(I,f_1)`
- Associative:
  - `filter(I,f_1)*(filter(I,f_2)*filter(I,f_3))=(filter(I,f_1)*filter(I,f_2))*filter(I,f_3)`
- Distributive:
  - `filter(I,f_1+f_2)=filter(I,f_1)+filter(I,f_2)`
- Identity:
  - `filter(I,f_0)=I`

Important filter:

**Gaussian filter**

$$
G(x,y)=\frac{1}{2\pi\sigma^2}e^{-\frac{x^2+y^2}{2\sigma^2}}
$$

Smooths the image (Gaussian blur)

Common mistake: Make filter too large, visualize the filter before applying it (make the value on the edge $3\sigma$)

Properties of Gaussian filter:

- Remove high frequency components
- Convolution with self is another Gaussian filter
- Separable kernel:
  - `G(x,y)=G(x)G(y)` (factorable into the product of two 1D Gaussian filters)

##### Filter Separability

- Separable filter:
  - `f(x,y)=f(x)f(y)`

Example:

$$
\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 2 \\
1 & 2 & 1
\end{bmatrix}=
\begin{bmatrix}
1 \\
2 \\
1
\end{bmatrix}\times
\begin{bmatrix}
1 & 2 & 1
\end{bmatrix}
$$

Gaussian filter is separable

$$
G(x,y)=\frac{1}{2\pi\sigma^2}e^{-\frac{x^2+y^2}{2\sigma^2}}=G(x)G(y)
$$

This reduces the computational cost of the filter from $k^2mn$ to $2kmn$
