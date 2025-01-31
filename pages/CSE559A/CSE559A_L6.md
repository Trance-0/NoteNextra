# Lecture 6

## Continue on Light, eye/camera, and color

### BRDF (Bidirectional Reflectance Distribution Function)

$$
\rho(\theta_i,\phi_i,\theta_o,\phi_o)
$$

#### Diffuse Reflection

- Dull, matte surface like chalk or latex paint

- Most often used in computer vision
- Brightness _does_ depend on direction of illumination

Diffuse reflection governed by Lambert's law: $I_d = k_d N\cdot L I_i$

- $N$: surface normal
- $L$: light direction
- $I_i$: incident light intensity
- $k_d$: albedo

$$
\rho(\theta_i,\phi_i,\theta_o,\phi_o)=k_d \cos\theta_i
$$

#### Photometric Stereo

Suppose there are three light sources, $L_1, L_2, L_3$, and we have the following measurements:

$$
I_1 = k_d N\cdot L_1
$$

$$
I_2 = k_d N\cdot L_2
$$

$$
I_3 = k_d N\cdot L_3
$$

We can solve for $N$ by taking the dot product of $N$ and each light direction and then solving the system of equations.

Will not do this in the lecture.

#### Specular Reflection

- Mirror-like surface

$$
I_e=\begin{cases}
I_i & \text{if } V=R \\
0 & \text{if } V\neq R
\end{cases}
$$

- $V$: view direction
- $R$: reflection direction
- $\theta_i$: angle between the incident light and the surface normal

Near-perfect mirror have a high light around $R$.

common model:

$$
I_e=k_s (V\cdot R)^{n_s}I_i
$$

- $k_s$: specular reflection coefficient
- $n_s$: shininess (imperfection of the surface)
- $I_i$: incident light intensity

#### Phong illumination model

- Phong approximation of surface reflectance
  - Assume reflectance is modeled by three compoents
    - Diffuse reflection
    - Specular reflection
    - Ambient reflection

$$
I_e=k_a I_a + I_i \left[k_d (N\cdot L) + k_s (V\cdot R)^{n_s}\right]
$$

- $k_a$: ambient reflection coefficient
- $I_a$: ambient light intensity
- $k_d$: diffuse reflection coefficient
- $k_s$: specular reflection coefficient
- $n_s$: shininess
- $I_i$: incident light intensity

Many other models.

#### Measuring BRDF

Use Gonioreflectometer.

- Device for measuring the reflectance of a surface as a function of the incident and reflected angles.
- Can be used to measure the BRDF of a surface.

BRDF dataset:

- MERL dataset
- CURET dataset

### Camera/Eye

#### DSLR Camera

- Pinhole camera model
- Lens
- Aperture (the pinhole)
- Sensor
- ...

#### Digital Camera block diagram

![Digital Camera block diagram](https://static.notenextra.trance-0.com/images/CSE559A/DigitalCameraBlockDiagram.png)

Scanning protocols:

- Global shutter: all pixels are exposed at the same time
- Interlaced: odd and even lines are exposed at different times
- Rolling shutter: each line is exposed as it is read out

