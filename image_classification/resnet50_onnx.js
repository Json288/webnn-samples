'use strict';

import * as ort from 'onnxruntime-web';

/**
 * ResNet-50 image classification via ONNX model (resnet50.onnx).
 * Uses ONNX Runtime Web with WebNN execution provider.
 * Replaces the native WebNN ResNet50 V2 path for NPU + Float32.
 * Place your resnet50.onnx in image_classification/models/resnet50.onnx.
 */
export class ResNet50Onnx {
  constructor() {
    this.session_ = null;
    this.inputName_ = null;
    this.outputName_ = null;
    this.inputOptions = {
      mean: [0.485, 0.456, 0.406],
      std: [0.229, 0.224, 0.225],
      norm: true,
      inputLayout: 'nchw',
      labelUrl: './labels/labels1000.txt',
      inputShape: [1, 3, 224, 224],
    };
    this.outputShape_ = [1, 1000];
  }

  async load(contextOptions) {
    const deviceType = contextOptions?.deviceType || 'cpu';
    const modelUrl = './models/resnet50.onnx';
    this.session_ = await ort.InferenceSession.create(modelUrl, {
      executionProviders: [{name: 'webnn', deviceType}],
    });
    const inputs = this.session_.inputNames;
    const outputs = this.session_.outputNames;
    if (!inputs.length || !outputs.length) {
      throw new Error('ResNet50 ONNX: model must have at least one input and output');
    }
    this.inputName_ = inputs[0];
    this.outputName_ = outputs[0];
    return this.outputName_;
  }

  async build(_outputOperand) {
    // No separate build step for ONNX Runtime.
  }

  async compute(inputBuffer) {
    const dims = this.inputOptions.inputShape;
    const tensor = new ort.Tensor('float32', inputBuffer, dims);
    const feeds = {[this.inputName_]: tensor};
    const results = await this.session_.run(feeds);
    const output = results[this.outputName_];
    if (!output || !output.data) {
      throw new Error('ResNet50 ONNX: no output from session.run');
    }
    return new Float32Array(output.data);
  }
}
