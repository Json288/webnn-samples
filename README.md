[![lint](https://github.com/webmachinelearning/webnn-samples/workflows/lint/badge.svg)](https://github.com/webmachinelearning/webnn-samples/actions)
[![deploy](https://github.com/webmachinelearning/webnn-samples/workflows/deploy/badge.svg)](https://github.com/webmachinelearning/webnn-samples/actions)

> **Fork** — This repository is a fork of [webmachinelearning/webnn-samples](https://github.com/webmachinelearning/webnn-samples) with additional changes (e.g. ResNet-18 ONNX sample). For the canonical upstream project, see the [original repository](https://github.com/webmachinelearning/webnn-samples).

# WebNN API Samples
This repository contains a collection of samples and examples demonstrating Web Neural Network API (WebNN) usage in web applications. Web Neural Network API (WebNN) is a JavaScript API that provides a high-level interface for performing machine learning computations on neural networks in web applications. With WebNN, developers can leverage hardware acceleration to efficiently run inference tasks on various devices, including CPUs, GPUs, and dedicated AI accelerators. It simplifies the integration of machine learning models into web apps, opening up new possibilities for interactive experiences and intelligent applications right in the browser.

## Repository Structure
This repository hosts a wide range of samples and examples that showcase different use cases and functionalities of WebNN. Here's an overview of the directory structure:    

* [Code Editor](/code): This is a Code Editor used for evaluating, reviewing and modifying WebNN sample codes interactively in web browser.
* [Face recognition](/face_recognition): This directory contains examples of SSD MobileNet V2 Face and Face Landmark (SimpleCNN) model implementation.
* [Facial landmark detection](/facial_landmark_detection): This directory contains examples of SSD MobileNet V2 Face and Face Landmark (SimpleCNN) model implementation.
* [Image classification](/image_classification): This directory contains examples demonstrating image classification using pre-trained models with WebNN.
* [LeNet](/lenet): This example showcases the LeNet-based handwritten digits classification by WebNN API.
* [NNotepad](/nnotepad): This is a browser-based playground for experimenting with WebNN expressions without boilerplate code.
* [NSNet2](/nsnet2): This example shows how to implement the NSNet2 baseline implementation of a deep learning-based noise suppression model.
* [Object detection](/object_detection): Samples showcasing object detection tasks using WebNN with pre-trained models.
* [RNNoise](/rnnoise): This example shows the RNNoise baseline implementation of a deep learning-based noise suppression model.
* [Selfie segmentation](/selfie_segmentation): This example demonstrates the MediaPipe Selfie Segmentation models.
* [Semantic segmentation](/semantic_segmentation): This directory contains examples of implementing the DeepLab V3 MobileNet V2, from TFLite models.
* [Style transfer](/style_transfer): Explore examples highlighting the artistic possibilities of WebNN by applying style-transfer techniques to images.

## Requirements
You will require a compatible browser that supports Web Neural Network API (WebNN) to run the samples in this repository. Currently, Chrome and Edge browsers provide support for WebNN.

## Prerequisites: Node.js and npm
You need **Node.js** (which includes **npm**) to install dependencies and run the dev server.

- **Install Node.js** (LTS recommended): [https://nodejs.org/](https://nodejs.org/) — download the installer for your OS; npm is included.
- **Verify** after installation:
  ```bash
  node -v
  npm -v
  ```
- Alternatively, on Linux/macOS you can use a version manager (e.g. [nvm](https://github.com/nvm-sh/nvm)) or your package manager (`apt`, `brew`, etc.).

## Getting Started
To get started, follow these steps:    
1. Clone the repository to your local machine and navigate to it:
 ```bash
> git clone --recurse-submodules https://github.com/Json288/webnn-samples.git
> cd webnn-samples
> npm install
> npm run start
```

## Resources
### WebNN Resources
To learn more about Web Neural Network API (WebNN) and its capabilities, check out the following resources:
* [Web Neural Network API Specification](https://webmachinelearning.github.io/webnn/)
* [W3C WebML Working Group and Community Group](https://webmachinelearning.github.io/)

### WebNN API Samples
* [WebNN code editor](https://webmachinelearning.github.io/webnn-samples/code/)
* [NNotepad](https://webmachinelearning.github.io/webnn-samples/nnotepad/)
* [Handwritten digits classification](https://webmachinelearning.github.io/webnn-samples/lenet/)
* Noise suppression:
  * [NSNet2](https://webmachinelearning.github.io/webnn-samples/nsnet2/)
  * [RNNoise](https://webmachinelearning.github.io/webnn-samples/rnnoise/)
* [Fast style transfer](https://webmachinelearning.github.io/webnn-samples/style_transfer/)
* [Semantic segmentation](https://webmachinelearning.github.io/webnn-samples/semantic_segmentation/)
* [Facial Landmark Detection](https://webmachinelearning.github.io/webnn-samples/facial_landmark_detection/)
* [Image classification](https://webmachinelearning.github.io/webnn-samples/image_classification/)
* [Object detection](https://webmachinelearning.github.io/webnn-samples/object_detection/)

