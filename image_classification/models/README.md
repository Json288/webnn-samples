# ONNX models for Image Classification

Place ONNX models in this folder to use the ONNX-based samples (WebNN EP, no EGL path).

## ResNet-18

- **File name:** `resnet18.onnx`
- **Path:** `image_classification/models/resnet18.onnx`
- **UI:** Select "ResNet-18 (ONNX)" with NCHW + Float32.

## ResNet-50 (replaces NPU + Float32 + ResNet 50 V2)

- **File name:** `resnet50.onnx`
- **Path:** `image_classification/models/resnet50.onnx`
- **UI:** Select "ResNet 50 V2" with NCHW + Float32. This uses the ONNX model instead of the native WebNN graph.

## Model requirements (both)

- Input shape **NCHW**: `[1, 3, 224, 224]`, dtype **float32**
- ImageNet-style preprocessing: mean `[0.485, 0.456, 0.406]`, std `[0.229, 0.224, 0.225]` (applied by the app)
- Output: 1000 class logits or probabilities (ImageNet)

