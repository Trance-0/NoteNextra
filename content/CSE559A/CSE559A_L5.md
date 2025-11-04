# CSE559A Lecture 5

## Continue on linear interpolation

- In linear interpolation, extreme values are at the boundary.
- In bicubic interpolation, extreme values may be inside.

`scipy.interpolate.RegularGridInterpolator`

### Image transformations

Image warping is a process of applying transformation $T$ to an image.

Parametric (global) warping: $T(x,y)=(x',y')$

Geometric transformation: $T(x,y)=(x',y')$ This applies to each pixel in the same way. (global)

#### Translation

$T(x,y)=(x+a,y+b)$

matrix form:

$$
\begin{pmatrix}
x'\\y'
\end{pmatrix}
=
\begin{pmatrix}
1&0\\0&1
\end{pmatrix}
\begin{pmatrix}
x\\y
\end{pmatrix}
+
\begin{pmatrix}
a\\b
\end{pmatrix}
$$

#### Scaling

$T(x,y)=(s_xx,s_yy)$ matrix form:

$$
\begin{pmatrix}
x'\\y'
\end{pmatrix}
=
\begin{pmatrix}
s_x&0\\0&s_y
\end{pmatrix}
\begin{pmatrix}
x\\y
\end{pmatrix}
$$

#### Rotation

$T(x,y)=(x\cos\theta-y\sin\theta,x\sin\theta+y\cos\theta)$

matrix form:

$$
\begin{pmatrix}
x'\\y'
\end{pmatrix}
=
\begin{pmatrix}
\cos\theta&-\sin\theta\\\sin\theta&\cos\theta
\end{pmatrix}
\begin{pmatrix}
x\\y
\end{pmatrix}
$$

To undo the rotation, we need to rotate the image by $-\theta$. This is equivalent to apply $R^\top$ to the image.

#### Affine transformation

$T(x,y)=(a_1x+a_2y+a_3,b_1x+b_2y+b_3)$

matrix form:

$$
\begin{pmatrix}
x'\\y'
\end{pmatrix}
=
\begin{pmatrix}
a_1&a_2&a_3\\b_1&b_2&b_3
\end{pmatrix}
\begin{pmatrix}
x\\y\\1
\end{pmatrix}
$$

Taking all the transformations together.

#### Projective homography

$T(x,y)=(\frac{ax+by+c}{gx+hy+i},\frac{dx+ey+f}{gx+hy+i})$

$$
\begin{pmatrix}
x'\\y'\\1
\end{pmatrix}
=
\begin{pmatrix}
a&b&c\\d&e&f\\g&h&i
\end{pmatrix}
\begin{pmatrix}
x\\y\\1
\end{pmatrix}
$$

### Image warping

#### Forward warping

Send each pixel to its new position and do the matching.

- May cause gaps where the pixel is not mapped to any pixel.

#### Inverse warping

Send each new position to its original position and do the matching.

- Some mapping may not be invertible.

#### Which one is better?

- Inverse warping is better because it usually more efficient, doesn't have a problem with holes.
- However, it may not always be possible to find the inverse mapping.

## Sampling and Aliasing

### Naive sampling

- Remove half of the rows and columns in the image.

Example:

When sampling a sine wave, the result may interpret as different wave.

#### Nyquist-Shannon sampling theorem

- A bandlimited signal can be uniquely determined by its samples if the sampling rate is greater than twice the maximum frequency of the signal.

- If the sampling rate is less than twice the maximum frequency of the signal, the signal will be aliased.

#### Anti-aliasing

- Sample more frequently. (not always possible)
- Get rid of all frequencies that are greater than half of the new sampling frequency.
  - Use a low-pass filter to get rid of all frequencies that are greater than half of the new sampling frequency. (eg, Gaussian filter)

```python
import scipy.ndimage as ndimage
def down_sample(height, width, image):
    # Apply Gaussian blur to the image
    im_blur = ndimage.gaussian_filter(image, sigma=1)
    # Down sample the image by taking every second pixel
    return im_blur[::2, ::2]
```

## Nonlinear filtering

### Median filter

Replace the value of a pixel with the median value of its neighbors.

- Good for removing salt and pepper noise. (black and white dot noise)

### Morphological operations

Binary image: image with only 0 and 1.

Let $B$ be a structuring element and $A$ be the original image (binary image).

- Erosion: $A\ominus B = \{p\mid B_p\subseteq A\}$, this is the set of all points that are completely covered by $B$.
- Dilation: $A\oplus B = \{p\mid B_p\cap A\neq\emptyset\}$, this is the set of all points that are at least partially covered by $B$.
- Opening: $A\circ B = (A\ominus B)\oplus B$, this is the set of all points that are at least partially covered by $B$ after erosion.
- Closing: $A\bullet B = (A\oplus B)\ominus B$, this is the set of all points that are completely covered by $B$ after dilation.

Boundary extraction: use XOR operation on eroded image and original image.

Connected component labeling: label the connected components in the image. _use prebuild function in scipy.ndimage_

## Light,Camera/Eyes, and Color

### Principles of grouping and Gestalt Laws

- Proximity: objects that are close to each other are more likely to be grouped together.
- Similarity: objects that are similar are more likely to be grouped together.
- Closure: objects that form a closed path are more likely to be grouped together.
- Continuity: objects that form a continuous path are more likely to be grouped together.

### Light and surface interactions

A photon's life choices:

- Absorption
- Diffuse reflection (nice to model) (lambertian surface)
- Specular reflection (mirror-like) (perfect mirror)
- Transparency
- Refraction
- Fluorescence (returns different color)
- Subsurface scattering (candles)
- Photosphorescence
- Interreflection

#### BRDF (Bidirectional Reflectance Distribution Function)

$$
\rho(\theta_i,\phi_i,\theta_o,\phi_o)
$$

- $\theta_i$ is the angle of incidence.
- $\phi_i$ is the azimuthal angle of incidence.
- $\theta_o$ is the angle of reflection.
- $\phi_o$ is the azimuthal angle of reflection.
