// research-validation.ts
'use server';

/**
 * @fileOverview Validates research document content for plagiarism and citation format.
 *
 * - researchValidation - A function that handles the research validation process.
 * - ResearchValidationInput - The input type for the researchValidation function.
 * - ResearchValidationOutput - The return type for the researchValidation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ResearchValidationInputSchema = z.object({
  documentContent: z.string().describe('The content of the research document to validate.'),
});
export type ResearchValidationInput = z.infer<typeof ResearchValidationInputSchema>;

const ResearchValidationOutputSchema = z.object({
  plagiarismReport: z.string().describe('A report detailing any instances of plagiarism found in the document.'),
  citationFormatCheck: z.string().describe('An assessment of the document citation format compliance.'),
  overallFeedback: z.string().describe('Overall feedback on the document quality and areas for improvement.'),
});
export type ResearchValidationOutput = z.infer<typeof ResearchValidationOutputSchema>;

export async function researchValidation(input: ResearchValidationInput): Promise<ResearchValidationOutput> {
  return researchValidationFlow(input);
}

const researchValidationPrompt = ai.definePrompt({
  name: 'researchValidationPrompt',
  input: {
    schema: z.object({
      documentContent: z.string().describe('The content of the research document to validate.'),
    }),
  },
  output: {
    schema: z.object({
      plagiarismReport: z.string().describe('A report detailing any instances of plagiarism found in the document.'),
      citationFormatCheck: z.string().describe('An assessment of the document citation format compliance.'),
      overallFeedback: z.string().describe('Overall feedback on the document quality and areas for improvement.'),
    }),
  },
  prompt: `You are an AI-powered research validator. Review the document content provided and provide feedback on plagiarism and citation formats.

  Document Content: {{{documentContent}}}

  Your output should include:
  - A detailed plagiarism report highlighting any potential instances of plagiarism.
  - An assessment of the citation format, checking for compliance with academic standards (APA, MLA, Chicago, etc.).
  - Overall feedback on the document, including suggestions for improvement in terms of originality and academic rigor.`,
});

const researchValidationFlow = ai.defineFlow<
  typeof ResearchValidationInputSchema,
  typeof ResearchValidationOutputSchema
>(
  {
    name: 'researchValidationFlow',
    inputSchema: ResearchValidationInputSchema,
    outputSchema: ResearchValidationOutputSchema,
  },
  async input => {
    const {output} = await researchValidationPrompt(input);
    return output!;
  }
);
