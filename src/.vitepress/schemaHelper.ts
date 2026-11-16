import fs from 'node:fs';
import path from 'node:path';

/**
 * Sanitizes markdown strings into plain, search-engine friendly text.
 */
export function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1') // remove bold
    .replace(/\*([^*]+)\*/g, '$1')     // remove italic
    .replace(/`([^`]+)`/g, '$1')       // remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove links, keep anchor text
    .replace(/<[^>]+>/g, '')           // remove html tags
    .replace(/\r?\n+/g, ' ')           // replace newlines with space
    .replace(/\s{2,}/g, ' ')           // collapse multiple spaces
    .trim();
}

export interface SchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FaqPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: SchemaQuestion[];
}

/**
 * Extracts FAQ questions and answers from a markdown file on disk
 * and constructs a standard Schema.org FAQPage JSON-LD object.
 */
export function getFaqSchema(relativePath: string): FaqPageSchema | null {
  try {
    const fullPath = path.resolve(process.cwd(), 'src', relativePath);
    if (!fs.existsSync(fullPath)) return null;

    const content = fs.readFileSync(fullPath, 'utf8');
    // Match ### Q1: / ### Q01: / ### Q1： headers and their following answer paragraphs
    const matches = [...content.matchAll(/###\s*(Q\d+[:：]\s*[^\n\r]+)\r?\n([\s\S]*?)(?=\r?\n###|\r?\n##|\r?\n---|$)/g)];
    
    if (matches.length === 0) return null;

    const mainEntity: SchemaQuestion[] = matches.map(m => {
      const rawQ = m[1].trim();
      const cleanQ = cleanMarkdown(rawQ);
      const rawA = m[2].trim();
      const cleanA = cleanMarkdown(rawA);

      return {
        '@type': 'Question',
        name: cleanQ,
        acceptedAnswer: {
          '@type': 'Answer',
          text: cleanA
        }
      };
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity
    };
  } catch (err) {
    console.error(`Error generating FAQ schema for ${relativePath}:`, err);
    return null;
  }
}
