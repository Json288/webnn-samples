'use strict';

import * as ort from 'onnxruntime-web';

/** Hugging Face Hub direct file URL (use /resolve/, not /blob/). */
const RESNET50_ONNX_URL =
    'https://huggingface.co/amd/resnet50/resolve/main/ResNet50_fp32.onnx';

/**
 * ResNet-50 image classification via ONNX (AMD model on Hugging Face).
 * https://huggingface.co/amd/resnet50
 * Uses ONNX Runtime Web with WebNN execution provider.
 * Selected in the UI as "ResNet50" (model id `resnet50_onnx`).
 */
export class ResNet50Onnx {
  constructor() {
    this.session_ = null;
    this.modelBuffer_ = null;
    this.deviceType_ = 'cpu';
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
    this.deviceType_ = contextOptions?.deviceType || 'cpu';
    const response = await fetch(RESNET50_ONNX_URL);
    if (!response.ok) {
      throw new Error(
          `ResNet50 ONNX: failed to fetch model (${response.status})`);
    }
    this.modelBuffer_ = await response.arrayBuffer();
    return null;
  }

  async build(_outputOperand) {
    if (!this.modelBuffer_) {
      throw new Error('ResNet50 ONNX: load() must run before build()');
    }
    this.session_ = await ort.InferenceSession.create(this.modelBuffer_, {
      executionProviders: [{name: 'webnn', deviceType: this.deviceType_}],
    });
    this.modelBuffer_ = null;
    const inputs = this.session_.inputNames;
    const outputs = this.session_.outputNames;
    if (!inputs.length || !outputs.length) {
      throw new Error('ResNet50 ONNX: model must have at least one input and output');
    }
    this.inputName_ = inputs[0];
    this.outputName_ = outputs[0];
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
