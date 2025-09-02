# CSE5519 Advances in Computer Vision

Here is a list of topics we will cover in this course:

## Topics and Papers

**CSE 5519 (Fall 2025)**

> **Notes:**  
> Papers tagged with a 🌟 are the recommended main papers.  
> You can suggest alternate papers (as long as they are important and aligned with the theme). You must email the instructor your rationale well in advance of your presentation date to obtain approval.

---

### Topic A: Semantic Segmentation

#### A.1 2021 and before

- 🌟 **[DeepLabv3+]** Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation (ECCV 2018)
- 🌟 **[SETR]** Rethinking semantic segmentation from a sequence-to-sequence perspective with transformers (CVPR 2021)
- **Swin Transformer:** Hierarchical Vision Transformer using Shifted Windows (CVPR 2021)
- **SegFormer:** Simple and Efficient Design for Semantic Segmentation with Transformers (NeurIPS 2021)

#### A.2 2022

- **[Mask2Former]** Masked-attention Mask Transformer for Universal Image Segmentation (CVPR 2022)

#### A.3 2023 - 2024

- **[SAM]** 🌟 Segment Anything (arXiv; Apr 5, 2023)
- **Segment Anything in High Quality** (NeurIPS 2023)
- **OMG-Seg:** Is One Model Good Enough For All Segmentation? (CVPR 2024)
- **SAM 2:** Segment Anything in Images and Videos (arXiv; Aug 1, 2024)

#### A.4 2025

- **Grounded SAM v1 and v2**
- **Dual Semantic Guidance for Open Vocabulary Semantic Segmentation** (CVPR 2025)
- **Prior2Former:** Evidential Modeling of Mask Transformers for Assumption-Free Open-World Panoptic Segmentation (ICCV 2025)

---

### Topic B: Vision-Language Models

#### B.1 2021 and before

- **Learning Visual Features from Large Weakly Supervised Data** (ECCV 2016)
- **Self-Supervised Learning of Visual Features Through Embedding Images Into Text Topic Spaces** (CVPR 2017)
- 🌟 **[CLIP]** Learning Transferable Visual Models From Natural Language Supervision (arXiv; Feb 26, 2021)

#### B.2 2022

- **Flamingo:** a Visual Language Model for Few-Shot Learning (NeurIPS 2022)
- **CoCa:** Contrastive Captioners are Image-Text Foundation Models (arXiv; May 4, 2022)
- **BLIP:** Bootstrapping Language-Image Pre-training (ICML 2022)

#### B.3 2023

- **BLIP-2:** Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models (ICML 2023)
- **Visual Instruction Tuning** (NeurIPS 2023)
- 🌟 **InstructBLIP:** Towards General-purpose Vision-Language Models with Instruction Tuning (NeurIPS 2023)
- **[Kosmos-1]** Language Is Not All You Need – Aligning Perception with Language Models (ICLR 2023)

#### B.4 2024

- **[LLaVA-1.5]** Improved Baselines with Visual Instruction Tuning (CVPR 2024)
- **Gemini 1.5:** Unlocking multimodal understanding across millions of tokens of context (arXiv; Mar 8, 2024)

#### B.5 2025

- **Molmo and PixMo:** Open Weights and Open Data for State-of-the-Art Vision-Language Models (CVPR 2025)
- **ReVisionLLM:** Recursive Vision-Language Model for Temporal Grounding in Hour-Long Videos (CVPR 2025)

---

### Topic C: Neural Rendering

#### C.1 2021 and before

- **NeRF:** Representing Scenes as Neural Radiance Fields for View Synthesis (ECCV 2020)
- **NeRF in the Wild:** Neural Radiance Fields for Unconstrained Photo Collections (CVPR 2021)
- **D-NeRF:** Neural Radiance Fields for Dynamic Scenes (CVPR 2021)

#### C.2 2022

- 🌟 **Plenoxels:** Radiance Fields without Neural Networks (CVPR 2022)
- **Mega-nerf:** Scalable construction of large-scale nerfs for virtual fly-throughs (CVPR 2022)
- **Mip-NeRF 360:** Unbounded Anti-Aliased Neural Radiance Fields (CVPR 2022)
- **Block-NeRF:** Scalable Large Scene Neural View Synthesis (CVPR 2022)
- **Depth-Supervised NeRF:** Fewer Views and Faster Training for Free (CVPR 2022)

#### C.3 2023

- 🌟 **3D Gaussian Splatting for Real-Time Radiance Field Rendering** (SIGGRAPH 2023)
- **Text2Room:** Extracting Textured 3D Meshes from 2D Text-to-Image Models (ICCV 2023)
- **NoPe-nerf:** Optimising neural radiance field with no pose prior (CVPR 2023)

#### C.4 2024 - 2025

- 🌟 **COLMAP-Free 3D Gaussian Splatting** (CVPR 2024)
- **Flying with Photons:** Rendering Novel Views of Propagating Light (ECCV 2024)
- **Neural Inverse Rendering from Propagating Light** (CVPR 2025)
- **3D Student Splatting and Scooping** (CVPR 2025)

---

### Topic D: Image and Video Generation

#### D.1 2021 and before

- **AttnGAN:** Fine-Grained Text to Image Generation With Attentional Generative Adversarial Networks (CVPR 2019)
- **DF-GAN:** A Simple and Effective Baseline for Text-to-Image Synthesis (arXiv; Aug 13, 2020; also CVPR 2022)
- **Zero-Shot Text-to-Image Generation** (ICML 2021)
- **High-Resolution Image Synthesis with Latent Diffusion Models** (arXiv; Dec 20, 2021; also CVPR 2022)

#### D.2 2022

- **Make-A-Video:** Text-to-Video Generation without Text-Video Data (arXiv; Sep 29, 2022; 2023)
- **An Image is Worth One Word:** Personalizing Text-to-Image Generation using Textual Inversion (arXiv; Aug 2, 2022)

#### D.3 2023

- **DreamBooth:** Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation (CVPR 2023)
- **GLIGEN:** Open-Set Grounded Text-to-Image Generation (CVPR 2023)
- **InstructPix2Pix:** Learning To Follow Image Editing Instructions (CVPR 2023)
- **Scalable Diffusion Models with Transformers** (ICCV 2023)

#### D.4 2024

- **VideoPoet:** A Large Language Model for Zero-Shot Video Generation (ICML 2024)
- **MoMA:** Multimodal LLM Adapter for Fast Personalized Image Generation (ECCV 2024)
- **Autoregressive Model Beats Diffusion:** Llama for Scalable Image Generation (arXiv; Jun 10, 2024)

#### D.5 2025

- *There are many works on image and video generation this year that are purely being shown by press releases; this could be an opportunity to demonstrate the state of the art rather than focusing on a specific paper.*
- **Wan:** Open and Advanced Large-Scale Video Generative Models (arXiv; Mar 26, 2025)  
  *[This is a very long paper, but it is one of the best open source models]*

---

### Topic E: Deep Learning for Geometric Computer Vision

#### E.1 2021 and before

- **PoseNet:** A Convolutional Network for Real-Time 6-DOF Camera Relocalization (ICCV 2015)
- **Unsupervised Learning of Depth and Ego-Motion From Video** (CVPR 2017)
- **GeoNet:** Unsupervised Learning of Dense Depth, Optical Flow and Camera Pose (CVPR 2018)

#### E.2 2022

- **MeshLoc:** Mesh-Based Visual Localization (ECCV 2022)
- **DFNet:** Enhance Absolute Pose Regression with Direct Feature Matching (ECCV 2022)
- **Map-free Visual Relocalization:** Metric Pose Relative to a Single Image (ECCV 2022)

#### E.3 2023

- **Guided Depth Super-Resolution by Deep Anisotropic Diffusion** (CVPR 2023)

#### E.4 2024

- 🌟 **DUSt3R:** Geometric 3D Vision Made Easy (CVPR 2024)
- **Matching 2D Images in 3D:** Metric Relative Pose from Metric Correspondences (CVPR 2024)
- **Depth Anything:** Unleashing the Power of Large-Scale Unlabeled Data (CVPR 2024) and Depth Anything V2 (arXiv; Jun 13, 2024)
- **GeoCalib:** Learning Single-image Calibration with Geometric Optimization (ECCV 2024)

#### E.5 2025

- 🌟 **VGGT:** Visual Geometry Grounded Transformer (CVPR 2025)
- **Fast3R:** Towards 3D Reconstruction of 1000+ Images in One Forward Pass (CVPR 2025)
- **Prompting Depth Anything for 4K Resolution Accurate Metric Depth Estimation** (CVPR 2025)
- **Video Depth Anything:** Consistent Depth Estimation for Super-Long Videos (CVPR 2025)

---

### Topic F: Representation Learning

#### F.1 2021 and before

- **[SimCLR]** A Simple Framework for Contrastive Learning of Visual Representations (ICML 2020)
- **[MoCo]** Momentum Contrast for Unsupervised Visual Representation Learning (CVPR 2020)
- **Barlow Twins:** Self-supervised learning via redundancy reduction (ICML 2021)
- **Exploring Simple Siamese Representation Learning** (CVPR 2021)

#### F.2 2022

- **[MAE]** Masked Autoencoders Are Scalable Vision Learners (CVPR 2022)
- **Masked Siamese Networks for Label-Efficient Learning** (ECCV 2022)

#### F.3 2023

- 🌟 **[JEPA]** Self-supervised learning from images with a joint-embedding predictive architecture (CVPR 2023)
- **StableRep:** Synthetic Images from Text-to-Image Models Make Strong Visual Representation Learners (NeurIPS 2023)

#### F.4 2024

- **DINOv2:** Learning Robust Visual Features without Supervision (TMLR; Jan 2024)
- **Long-clip:** Unlocking the long-text capability of CLIP (ECCV 2024)

#### F.5 2025

- **FLAIR:** VLM with Fine-grained Language-informed Image Representations (CVPR 2025)
- **Can Generative Models Improve Self-Supervised Representation Learning?** (AAAI 2025)

---

### Topic G: Correspondence Estimation and Structure from Motion

#### G.1 2022 and before

- **Structure-from-Motion Revisited** (CVPR 2016)
- **SuperGlue:** Learning Feature Matching With Graph Neural Networks (CVPR 2020)
- **RAFT:** Recurrent All-Pairs Field Transforms for Optical Flow (ECCV 2020)
- 🌟 **Pixel-Perfect Structure-from-Motion with Featuremetric Refinement** (ICCV 2021)
- **LoFTR:** Detector-Free Local Feature Matching with Transformers (CVPR 2021)

#### G.2 2023

- **LightGlue:** Local Feature Matching at Light Speed (ICCV 2023)
- 🌟 **Detector-Free Structure from Motion** (IMC 2023 → CVPR 2024)

#### G.3 2024

- **RoMa:** Robust Dense Feature Matching (CVPR 2024)
- 🌟 **Global Structure-from-Motion Revisited** (ECCV 2024)

#### G.4 2025

- **MegaSaM:** Accurate, Fast, and Robust Structure and Motion from Casual Dynamic Videos (CVPR 2025)

---

### Topic H: Safety, Robustness & Evaluation of CV Models

#### H.1 2022 and before

- 🌟 **Does Object Recognition Work for Everyone?** (CVPR Workshop 2019)
- **OccamNets:** Mitigating Dataset Bias by Favoring Simpler Hypotheses (ECCV 2022)

#### H.2 2023

- 🌟 **GeoNet:** Benchmarking Unsupervised Adaptation across Geographies (CVPR 2023)
- **Inspecting the Geographical Representativeness of Images from Text-to-Image Models** (ICCV 2023)

#### H.3 2024

- **Concept Arithmetics for Circumventing Concept Inhibition in Diffusion Models** (ECCV 2024)
- **Efficient Bias Mitigation Without Privileged Information** (ECCV 2024)
- **Unified Concept Editing in Diffusion Models** (WACV 2024)

#### H.4 2025

- **Rethinking Training for De-biasing Text-to-Image Generation:** Unlocking the Potential of Stable Diffusion (CVPR 2025)

---

### Topic I: Embodied Computer Vision and Robotics

#### I.1 2021 and before

- **ViNG:** Learning Open-World Navigation with Visual Goals (ICRA 2021)
- **Pathdreamer:** A World Model for Indoor Navigation (ICCV 2021)

#### I.2 2022

- 🌟 **ViKiNG:** Vision-Based Kilometer-Scale Navigation with Geographic Hints (RSS 2022)
- **DayDreamer:** World Models for Physical Robot Learning (CoRL 2022)

#### I.3 2023 - 2024

- **GNM:** A General Navigation Model to Drive Any Robot (ICRA 2023)
- **NoMaD:** Goal Masked Diffusion Policies for Navigation and Exploration (ICRA 2024)

#### I.4 2025

- **Navigation World Models** (CVPR 2025)

---

### Topic J: Open-Vocabulary Object Detection

#### J.1 2021 and before

- **Open-Vocabulary Object Detection Using Captions** (CVPR 2021)
- 🌟 **MDETR:** Modulated Detection for End-to-End Multi-Modal Understanding (ICCV 2021)

#### J.2 2022

- **Open-vocabulary object detection via vision and language knowledge distillation** (ICLR 2022)
- **Class-agnostic object detection with multimodal transformer** (ECCV 2022)

#### J.3 2023 - 2024

- **CORA:** Adapting CLIP for Open-Vocabulary Detection with Region Prompting and Anchor Pre-Matching (CVPR 2023)
- **Grounding DINO:** Marrying DINO with Grounded Pre-Training for Open-Set Object Detection (ECCV 2024)

#### J.4 2025

- **OW-OVD:** Unified Open World and Open Vocabulary Object Detection (CVPR 2025)
- **Open-World Objectness Modeling Unifies Novel Object Detection** (CVPR 2025)
- **DINO-X:** A Unified Vision Model for Open-World Object Detection and Understanding (arXiv; May 15, 2025)
