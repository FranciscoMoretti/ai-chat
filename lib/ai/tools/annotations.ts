import { z } from 'zod';
import { ResearchUpdateSchema } from './stream-updates-schema';
import { QueryCompletionSchema } from './web-search';
import type { UIMessage } from 'ai';

export const MessageAnnotationSchema = z.discriminatedUnion('type', [
  ResearchUpdateSchema,
  QueryCompletionSchema,
]);

export type MessageAnnotation = z.infer<typeof MessageAnnotationSchema>;

export type YourUIMessage = Omit<UIMessage, 'annotations'> & {
  annotations?: MessageAnnotation[];
};
