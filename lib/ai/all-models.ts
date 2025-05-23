export interface ModelSpecification {
  specificationVersion: string;
  provider: string;
  modelId: string;
}

export interface Pricing {
  inputMTok: number; // per 1M tokens
  outputMTok: number; // per 1M tokens
}

export interface ModelDefinition {
  id: string;
  name: string;
  specification: ModelSpecification;
  pricing?: Pricing;
}

export const allModels: readonly ModelDefinition[] = [
  {
    id: 'anthropic/claude-v3-opus',
    name: 'Claude 3 Opus',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-opus-latest',
    },
    pricing: {
      inputMTok: 15,
      outputMTok: 75,
    },
  },
  {
    id: 'anthropic/claude-v3-sonnet',
    name: 'Claude 3 Sonnet',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-sonnet-latest',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'anthropic/claude-v3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-5-sonnet-latest',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'anthropic/claude-v3-haiku',
    name: 'Claude 3 Haiku',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-haiku-latest',
    },
    pricing: {
      inputMTok: 0.25,
      outputMTok: 1.25,
    },
  },
  {
    id: 'anthropic/claude-3.5-haiku',
    name: 'Claude 3.5 Haiku',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-5-haiku-latest',
    },
    pricing: {
      inputMTok: 0.8,
      outputMTok: 4,
    },
  },
  {
    id: 'anthropic/claude-3.7-sonnet',
    name: 'Claude 3.7 Sonnet',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-7-sonnet-latest',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'anthropic/claude-3.7-sonnet-reasoning',
    name: 'Claude 3.7 Sonnet Reasoning',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-3-7-sonnet-latest',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'anthropic/claude-4-opus-20250514',
    name: 'Claude 4 Opus',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-opus-4-0',
    },
    pricing: {
      inputMTok: 15,
      outputMTok: 75,
    },
  },
  {
    id: 'anthropic/claude-4-sonnet-20250514',
    name: 'Claude 4 Sonnet',
    specification: {
      specificationVersion: 'v2',
      provider: 'anthropic',
      modelId: 'anthropic/claude-sonnet-4-0',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'bedrock/amazon.nova-pro-v1:0',
    name: 'Nova Pro',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/amazon.nova-pro-v1:0',
    },
  },
  {
    id: 'bedrock/amazon.nova-lite-v1:0',
    name: 'Nova Lite',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/amazon.nova-lite-v1:0',
    },
  },
  {
    id: 'bedrock/amazon.nova-micro-v1:0',
    name: 'Nova Micro',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/amazon.nova-micro-v1:0',
    },
  },
  {
    id: 'bedrock/claude-3-7-sonnet-20250219',
    name: 'Claude 3.7 Sonnet (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-7-sonnet-20250219',
    },
  },
  {
    id: 'bedrock/claude-3-5-haiku-20241022',
    name: 'Claude 3.5 Haiku (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-5-haiku-20241022',
    },
  },
  {
    id: 'bedrock/claude-3-5-sonnet-20241022-v2',
    name: 'Claude 3.5 Sonnet v2 (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-5-sonnet-20241022-v2',
    },
  },
  {
    id: 'bedrock/claude-3-5-sonnet-20240620-v1',
    name: 'Claude 3.5 Sonnet (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-5-sonnet-20240620-v1',
    },
  },
  {
    id: 'bedrock/claude-3-opus-20240229-v1',
    name: 'Claude 3 Opus (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-opus-20240229-v1',
    },
  },
  {
    id: 'bedrock/claude-4-opus-20250514-v1',
    name: 'Claude 4 Opus (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-4-opus-20250514-v1',
    },
  },
  {
    id: 'bedrock/claude-4-sonnet-20250514-v1',
    name: 'Claude 4 Sonnet (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-4-sonnet-20250514-v1',
    },
  },
  {
    id: 'bedrock/claude-3-haiku-20240307-v1',
    name: 'Claude 3 Haiku (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/claude-3-haiku-20240307-v1',
    },
  },
  {
    id: 'bedrock/meta.llama4-maverick-17b-instruct-v1',
    name: 'Llama 4 Maverick 17B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama4-maverick-17b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama4-scout-17b-instruct-v1',
    name: 'Llama 4 Scout 17B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama4-scout-17b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-3-70b-instruct-v1',
    name: 'Llama 3.3 70B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-3-70b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-2-11b-instruct-v1',
    name: 'Llama 3.2 11B Vision Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-2-11b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-2-1b-instruct-v1',
    name: 'Llama 3.2 1B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-2-1b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-2-3b-instruct-v1',
    name: 'Llama 3.2 3B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-2-3b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-2-90b-instruct-v1',
    name: 'Llama 3.2 90B Vision Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-2-90b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-1-70b-instruct-v1',
    name: 'Llama 3.1 70B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-1-70b-instruct-v1',
    },
  },
  {
    id: 'bedrock/meta.llama3-1-8b-instruct-v1',
    name: 'Llama 3.1 8B Instruct (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/meta.llama3-1-8b-instruct-v1',
    },
  },
  {
    id: 'bedrock/deepseek.r1-v1',
    name: 'DeepSeek-R1 (Bedrock)',
    specification: {
      specificationVersion: 'v2',
      provider: 'bedrock',
      modelId: 'bedrock/deepseek.r1-v1',
    },
  },
  {
    id: 'cerebras/llama-4-scout-17b-16e-instruct',
    name: 'Llama 4 Scout',
    specification: {
      specificationVersion: 'v2',
      provider: 'cerebras',
      modelId: 'cerebras/llama-4-scout-17b-16e-instruct',
    },
  },
  {
    id: 'cerebras/llama3.1-8b',
    name: 'Llama 3.1 8B',
    specification: {
      specificationVersion: 'v2',
      provider: 'cerebras',
      modelId: 'cerebras/llama3.1-8b',
    },
  },
  {
    id: 'cerebras/llama-3.3-70b',
    name: 'Llama 3.3 70B',
    specification: {
      specificationVersion: 'v2',
      provider: 'cerebras',
      modelId: 'cerebras/llama-3.3-70b',
    },
  },
  {
    id: 'cerebras/deepseek-r1-distill-llama-70b',
    name: 'DeepSeek R1 Distill Llama 70B',
    specification: {
      specificationVersion: 'v2',
      provider: 'cerebras',
      modelId: 'cerebras/deepseek-r1-distill-llama-70b',
    },
  },
  {
    id: 'cerebras/qwen-3-32b',
    name: 'Qwen 3.32B',
    specification: {
      specificationVersion: 'v2',
      provider: 'cerebras',
      modelId: 'cerebras/qwen-3-32b',
    },
  },
  {
    id: 'cohere/command-a',
    name: 'Command A',
    specification: {
      specificationVersion: 'v2',
      provider: 'cohere',
      modelId: 'cohere/command-a',
    },
  },
  {
    id: 'cohere/command-r-plus',
    name: 'Command R+',
    specification: {
      specificationVersion: 'v2',
      provider: 'cohere',
      modelId: 'cohere/command-r-plus',
    },
  },
  {
    id: 'cohere/command-r',
    name: 'Command R',
    specification: {
      specificationVersion: 'v2',
      provider: 'cohere',
      modelId: 'cohere/command-r',
    },
  },
  {
    id: 'deepinfra/llama-4-maverick-17b-128e-instruct-fp8',
    name: 'Llama 4 Maverick 17B 128E Instruct FP8',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/llama-4-maverick-17b-128e-instruct-fp8',
    },
  },
  {
    id: 'deepinfra/llama-4-scout-17b-16e-instruct',
    name: 'Llama 4 Scout 17B 16E Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/llama-4-scout-17b-16e-instruct',
    },
  },
  {
    id: 'deepinfra/qwen3-235b-a22b',
    name: 'Qwen3-235B-A22B',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/qwen3-235b-a22b',
    },
  },
  {
    id: 'deepinfra/qwen3-30b-a3b',
    name: 'Qwen3-30B-A3B',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/qwen3-30b-a3b',
    },
  },
  {
    id: 'deepinfra/qwen3-32b',
    name: 'Qwen3-32B',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/qwen3-32b',
    },
  },
  {
    id: 'deepinfra/qwen3-14b',
    name: 'Qwen3-14B',
    specification: {
      specificationVersion: 'v2',
      provider: 'deepinfra',
      modelId: 'deepinfra/qwen3-14b',
    },
  },
  {
    id: 'deepseek/chat',
    name: 'DeepSeek-V3',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'deepseek/chat',
    },
  },
  {
    id: 'deepseek/deepseek-r1',
    name: 'DeepSeek R1',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'deepseek/deepseek-r1',
    },
  },
  {
    id: 'fireworks/firefunction-v1',
    name: 'FireFunction V1',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'fireworks/firefunction-v1',
    },
  },
  {
    id: 'fireworks/mixtral-8x22b-instruct',
    name: 'Mixtral MoE 8x22B Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'fireworks/mixtral-8x22b-instruct',
    },
  },
  {
    id: 'fireworks/mixtral-8x7b-instruct',
    name: 'Mixtral MoE 8x7B Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'fireworks/mixtral-8x7b-instruct',
    },
  },
  {
    id: 'fireworks/qwq-32b',
    name: 'QwQ-32B',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'fireworks/qwq-32b',
    },
  },
  {
    id: 'fireworks/qwen3-235b-a22b',
    name: 'Qwen3-235B-A22B',
    specification: {
      specificationVersion: 'v2',
      provider: 'fireworks',
      modelId: 'fireworks/qwen3-235b-a22b',
    },
  },
  {
    id: 'google/gemini-1.5-pro',
    name: 'Gemini 1.5 Pro 001',
    specification: {
      specificationVersion: 'v2',
      provider: 'google',
      modelId: 'google/gemini-1.5-pro',
    },
  },
  {
    id: 'google/gemini-1.5-flash',
    name: 'Gemini 1.5 Flash 001',
    specification: {
      specificationVersion: 'v2',
      provider: 'google',
      modelId: 'google/gemini-1.5-flash',
    },
  },
  {
    id: 'groq/llama-3.3-70b-versatile',
    name: 'Llama 3.3 70B Versatile',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/llama-3.3-70b-versatile',
    },
  },
  {
    id: 'groq/llama-3.1-8b',
    name: 'Llama 3.1 8B Instant',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/llama-3.1-8b',
    },
  },
  {
    id: 'groq/llama-3-8b-instruct',
    name: 'Llama 3 8B Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/llama-3-8b-instruct',
    },
  },
  {
    id: 'groq/llama-3-70b-instruct',
    name: 'Llama 3 70B Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/llama-3-70b-instruct',
    },
  },
  {
    id: 'groq/gemma2-9b-it',
    name: 'Gemma 2 9B IT',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/gemma2-9b-it',
    },
  },
  {
    id: 'groq/deepseek-r1-distill-llama-70b',
    name: 'DeepSeek R1 Distill Llama 70B',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/deepseek-r1-distill-llama-70b',
    },
  },
  {
    id: 'groq/mistral-saba-24b',
    name: 'Mistral Saba 24B',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/mistral-saba-24b',
    },
  },
  {
    id: 'groq/qwen-qwq-32b',
    name: 'QWQ-32B',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/qwen-qwq-32b',
    },
  },
  {
    id: 'groq/llama-4-scout-17b-16e-instruct',
    name: 'Llama 4 Scout 17B 16E Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'groq',
      modelId: 'groq/llama-4-scout-17b-16e-instruct',
    },
  },
  {
    id: 'inception/mercury-coder-small',
    name: 'Mercury Coder Small Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'inception',
      modelId: 'inception/mercury-coder-small',
    },
  },
  {
    id: 'mistral/mistral-large',
    name: 'Mistral Large',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/mistral-large',
    },
  },
  {
    id: 'mistral/mistral-small',
    name: 'Mistral Small',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/mistral-small',
    },
  },
  {
    id: 'mistral/codestral-2501',
    name: 'Mistral Codestral 25.01',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/codestral-2501',
    },
  },
  {
    id: 'mistral/pixtral-12b-2409',
    name: 'Pixtral 12B 2409',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/pixtral-12b-2409',
    },
  },
  {
    id: 'mistral/ministral-3b-latest',
    name: 'Ministral 3B',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/ministral-3b-latest',
    },
  },
  {
    id: 'mistral/ministral-8b-latest',
    name: 'Ministral 8B',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/ministral-8b-latest',
    },
  },
  {
    id: 'mistral/pixtral-large-latest',
    name: 'Pixtral Large',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/pixtral-large-latest',
    },
  },
  {
    id: 'mistral/mistral-small-2503',
    name: 'Mistral Small 2503',
    specification: {
      specificationVersion: 'v2',
      provider: 'mistral',
      modelId: 'mistral/mistral-small-2503',
    },
  },
  {
    id: 'openai/o3-mini',
    name: 'o3-mini',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/o3-mini',
    },
    pricing: {
      inputMTok: 1.1,
      outputMTok: 4.4,
    },
  },
  {
    id: 'openai/o3',
    name: 'o3',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/o3',
    },
    pricing: {
      inputMTok: 10.0,
      outputMTok: 40.0,
    },
  },
  {
    id: 'openai/o4-mini',
    name: 'o4-mini',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/o4-mini',
    },
    pricing: {
      inputMTok: 1.1,
      outputMTok: 4.4,
    },
  },
  {
    id: 'openai/gpt-4.1',
    name: 'GPT-4.1',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4.1',
    },
    pricing: {
      inputMTok: 2.0,
      outputMTok: 8.0,
    },
  },
  {
    id: 'openai/gpt-4.1-mini',
    name: 'GPT-4.1 mini',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4.1-mini',
    },
    pricing: {
      inputMTok: 0.4,
      outputMTok: 1.6,
    },
  },
  {
    id: 'openai/gpt-4.1-nano',
    name: 'GPT-4.1 nano',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4.1-nano',
    },
    pricing: {
      inputMTok: 0.1,
      outputMTok: 0.4,
    },
  },
  {
    id: 'openai/gpt-4o',
    name: 'GPT-4o',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4o',
    },
    pricing: {
      inputMTok: 2.5,
      outputMTok: 10.0,
    },
  },
  {
    id: 'openai/gpt-4o-mini',
    name: 'GPT-4o mini',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4o-mini',
    },
    pricing: {
      inputMTok: 0.15,
      outputMTok: 0.6,
    },
  },
  {
    id: 'openai/gpt-4-turbo',
    name: 'GPT-4 Turbo',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-4-turbo',
    },
  },
  {
    id: 'openai/gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-3.5-turbo',
    },
  },
  {
    id: 'openai/gpt-3.5-turbo-instruct',
    name: 'GPT-3.5 Turbo Instruct',
    specification: {
      specificationVersion: 'v2',
      provider: 'openai',
      modelId: 'openai/gpt-3.5-turbo-instruct',
    },
  },
  {
    id: 'perplexity/sonar',
    name: 'Sonar',
    specification: {
      specificationVersion: 'v2',
      provider: 'perplexity',
      modelId: 'perplexity/sonar',
    },
  },
  {
    id: 'perplexity/sonar-pro',
    name: 'Sonar Pro',
    specification: {
      specificationVersion: 'v2',
      provider: 'perplexity',
      modelId: 'perplexity/sonar-pro',
    },
  },
  {
    id: 'perplexity/sonar-reasoning',
    name: 'Sonar Reasoning',
    specification: {
      specificationVersion: 'v2',
      provider: 'perplexity',
      modelId: 'perplexity/sonar-reasoning',
    },
  },
  {
    id: 'perplexity/sonar-reasoning-pro',
    name: 'Sonar Reasoning Pro',
    specification: {
      specificationVersion: 'v2',
      provider: 'perplexity',
      modelId: 'perplexity/sonar-reasoning-pro',
    },
  },
  {
    id: 'vertex/claude-3-7-sonnet-20250219',
    name: 'Claude 3.7 Sonnet (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-7-sonnet-20250219',
    },
  },
  {
    id: 'vertex/claude-3-5-sonnet-v2-20241022',
    name: 'Claude 3.5 Sonnet v2 (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-5-sonnet-v2-20241022',
    },
  },
  {
    id: 'vertex/claude-3-5-haiku-20241022',
    name: 'Claude 3.5 Haiku (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-5-haiku-20241022',
    },
  },
  {
    id: 'vertex/claude-3-opus-20240229',
    name: 'Claude 3 Opus (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-opus-20240229',
    },
  },
  {
    id: 'vertex/claude-4-opus-20250514',
    name: 'Claude 4 Opus (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-4-opus-20250514',
    },
  },
  {
    id: 'vertex/claude-4-sonnet-20250514',
    name: 'Claude 4 Sonnet (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-4-sonnet-20250514',
    },
  },
  {
    id: 'vertex/claude-3-haiku-20240307',
    name: 'Claude 3 Haiku (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-haiku-20240307',
    },
  },
  {
    id: 'vertex/claude-3-5-sonnet-20240620',
    name: 'Claude 3.5 Sonnet (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertexAnthropic',
      modelId: 'vertex/claude-3-5-sonnet-20240620',
    },
  },
  {
    id: 'vertex/gemini-2.0-flash-001',
    name: 'Gemini 2.0 Flash (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertex',
      modelId: 'vertex/gemini-2.0-flash-001',
    },
  },
  {
    id: 'vertex/gemini-2.0-flash-lite-001',
    name: 'Gemini 2.0 Flash Lite (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertex',
      modelId: 'vertex/gemini-2.0-flash-lite-001',
    },
  },
  {
    id: 'vertex/llama-4-scout-17b-16e-instruct-maas',
    name: 'Llama 4 Scout 17B 16E Instruct (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertex',
      modelId: 'vertex/llama-4-scout-17b-16e-instruct-maas',
    },
  },
  {
    id: 'vertex/llama-4-maverick-17b-128e-instruct-maas',
    name: 'Llama 4 Maverick 17B 128E Instruct (Vertex)',
    specification: {
      specificationVersion: 'v2',
      provider: 'vertex',
      modelId: 'vertex/llama-4-maverick-17b-128e-instruct-maas',
    },
  },
  {
    id: 'xai/grok-beta',
    name: 'Grok Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-beta',
    },
    pricing: {
      inputMTok: 5,
      outputMTok: 15,
    },
  },
  {
    id: 'xai/grok-vision-beta',
    name: 'Grok Vision Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-vision-beta',
    },
    pricing: {
      inputMTok: 5,
      outputMTok: 15,
    },
  },
  {
    id: 'xai/grok-2-1212',
    name: 'Grok 2',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-2-1212',
    },
    pricing: {
      inputMTok: 2,
      outputMTok: 10,
    },
  },
  {
    id: 'xai/grok-2-vision-1212',
    name: 'Grok 2 Vision',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-2-vision-1212',
    },
    pricing: {
      inputMTok: 2,
      outputMTok: 10,
    },
  },
  {
    id: 'xai/grok-3-beta',
    name: 'Grok 3 Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-3-beta',
    },
    pricing: {
      inputMTok: 3,
      outputMTok: 15,
    },
  },
  {
    id: 'xai/grok-3-fast-beta',
    name: 'Grok 3 Fast Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-3-fast-beta',
    },
    pricing: {
      inputMTok: 5,
      outputMTok: 25,
    },
  },
  {
    id: 'xai/grok-3-mini-beta',
    name: 'Grok 3 Mini Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-3-mini-beta',
    },
    pricing: {
      inputMTok: 0.3,
      outputMTok: 0.5,
    },
  },
  {
    id: 'xai/grok-3-mini-fast-beta',
    name: 'Grok 3 Mini Fast Beta',
    specification: {
      specificationVersion: 'v2',
      provider: 'xai',
      modelId: 'xai/grok-3-mini-fast-beta',
    },
    pricing: {
      inputMTok: 0.6,
      outputMTok: 4,
    },
  },
] as const;
