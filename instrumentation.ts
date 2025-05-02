import { registerOTel } from '@vercel/otel';
import { LangfuseExporter } from 'langfuse-vercel';
import { config } from '@/lib/config';

export function register() {
  registerOTel({
    serviceName: config.appPrefix,
    traceExporter: new LangfuseExporter(),
  });
}
