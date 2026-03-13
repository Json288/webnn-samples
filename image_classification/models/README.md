# ONNX models for Image Classification

Place your **ResNet-18** ONNX model here to use the "ResNet-18 (ONNX)" sample:

- **File name:** `resnet18.onnx`
- **Path:** `image_classification/models/resnet18.onnx`

The model should:

- Accept input shape **NCHW**: `[1, 3, 224, 224]`, dtype **float32**
- Use ImageNet-style preprocessing: normalize with mean `[0.485, 0.456, 0.406]` and std `[0.229, 0.224, 0.225]` (the sample applies this for you)
- Output 1000 class logits (or probabilities) for ImageNet

You can use a standard ResNet-18 ONNX from the [ONNX Model Zoo](https://github.com/onnx/models) (e.g. ResNet-18 v1/v2) or export your own from PyTorch/other frameworks.
