# Lecture 2

## The Geometry of Image Formation

Mapping between image and world coordinates.

Today's focus:

$$
x=K[R\ t]X
$$

### Pinhole Camera Model

Add a barrier to block off most of the rays.

- Reduce blurring
- The opening known as the **aperture**

$f$ is the focal length.  
$c$ is the center of the aperture.

#### Focal length/ Field of View (FOV)/ Zoom

- Focal length: distance between the aperture and the image plane.
- Field of View (FOV): the angle between the two rays that pass through the aperture and the image plane.
- Zoom: the ratio of the focal length to the image plane.

#### Other types of projection

Beyond the pinhole/perspective camera model, there are other types of projection.

- Radial distortion
- 360-degree camera
  - Equirectangular Panoramas
- Random lens
- Rotating sensors
- Photofinishing
- Tiltshift lens

### Perspective Geometry

Length and area are not preserved.

Angle is not preserved.

But straight lines are still straight.

Parallel lines in the world intersect at a **vanishing point** on the image plane.

Vanishing lines: the set of all vanishing points of parallel lines in the world on the same plane in the world.

Vertical vanishing point at infinity.

### Camera/Projection Matrix

Linear projection model.

$$
x=K[R\ t]X
$$

- $x$: image coordinates 2d (homogeneous coordinates)
- $X$: world coordinates 3d (homogeneous coordinates)
- $K$: camera matrix (3x3 and invertible)
- $R$: camera rotation matrix (3x3)
- $t$: camera translation vector (3x1)

#### Homogeneous coordinates

- 2D: $$(x, y)\to\begin{bmatrix}x\\y\\1\end{bmatrix}$$
- 3D: $$(x, y, z)\to\begin{bmatrix}x\\y\\z\\1\end{bmatrix}$$

converting from homogeneous to inhomogeneous coordinates:

- 2D: $$\begin{bmatrix}x\\y\\w\end{bmatrix}\to(x/w, y/w)$$
- 3D: $$\begin{bmatrix}x\\y\\z\\w\end{bmatrix}\to(x/w, y/w, z/w)$$

When $w=0$, the point is at infinity.

Homogeneous coordinates are invariant under scaling (non-zero scalar).

$$
k\begin{bmatrix}x\\y\\w\end{bmatrix}=\begin{bmatrix}kx\\ky\\kw\end{bmatrix}\implies\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}x/k\\y/k\end{bmatrix}
$$

A convenient way to represent a point at infinity is to use a unit vector.

Line equation: $ax+by+c=0$

$$
line_i=\begin{bmatrix}a_i\\b_i\\c_i\end{bmatrix}
$$


Append a 1 to pixel coordinates to get homogeneous coordinates.

$$
pixel_i=\begin{bmatrix}u_i\\v_i\\1\end{bmatrix}
$$

Line given by cross product of two points:

$$
line_i=pixel_1\times pixel_2
$$

Intersection of two lines given by cross product of the lines:

$$
pixel_i=line_1\times line_2
$$

#### Pinhole Camera Projection Matrix

Intrinsic Assumptions:

- Unit aspect ratio
- No skew
- Optical center at (0,0)

Extrinsic Assumptions:

- No rotation
- No translation (camera at world origin)

$$
x=K[I\ 0]X\implies w\begin{bmatrix}u\\v\\1\end{bmatrix}=\begin{bmatrix}f&0&0&0\\0&f&0&0\\0&0&1&0\end{bmatrix}\begin{bmatrix}x\\y\\z\\1\end{bmatrix}
$$

Removing the assumptions:

Intrinsic assumptions:

- Unit aspect ratio
- No skew

Extrinsic assumptions:

- No rotation
- No translation

$$
x=K[I\ 0]X\implies w\begin{bmatrix}u\\v\\1\end{bmatrix}=\begin{bmatrix}\alpha&0&u_0&0\\0&\beta&v_0&0\\0&0&1&0\end{bmatrix}\begin{bmatrix}x\\y\\z\\1\end{bmatrix}
$$

Adding skew:

$$
x=K[I\ 0]X\implies w\begin{bmatrix}u\\v\\1\end{bmatrix}=\begin{bmatrix}\alpha&s&u_0&0\\0&\beta&v_0&0\\0&0&1&0\end{bmatrix}\begin{bmatrix}x\\y\\z\\1\end{bmatrix}
$$

Finally, adding camera rotation and translation:

$$
x=K[I\ t]X\implies w\begin{bmatrix}u\\v\\1\end{bmatrix}=\begin{bmatrix}\alpha&s&u_0\\0&\beta&v_0\\0&0&1\end{bmatrix}\begin{bmatrix}r_{11}&r_{12}&r_{13}&t_x\\r_{21}&r_{22}&r_{23}&t_y\\r_{31}&r_{32}&r_{33}&t_z\end{bmatrix}\begin{bmatrix}x\\y\\z\\1\end{bmatrix}
$$

What is the degrees of freedom of the camera matrix?

- rotation: 3
- translation: 3
- camera matrix: 5

Total: 11
