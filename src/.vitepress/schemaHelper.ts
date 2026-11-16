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

export interface BreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItem[];
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD microdata
 * based on page route hierarchy.
 */
export function getBreadcrumbSchema(relativePath: string, title?: string): BreadcrumbListSchema | null {
  if (relativePath === 'index.md') return null;

  const SECTION_NAMES: Record<string, string> = {
    'recommend': '机场推荐',
    'vpn': 'VPN与加速器',
    'clash': 'Clash客户端',
    'resources': '资源与情报',
    'brands': '42家品牌评测库'
  };

  const items: BreadcrumbItem[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: 'https://jichangcloud.world/'
    }
  ];

  const clean = relativePath.replace(/\.md$/, '');
  const parts = clean.split('/');

  if (parts.length === 1) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: title || parts[0],
      item: `https://jichangcloud.world/${parts[0]}`
    });
  } else if (parts.length === 2) {
    const [section, page] = parts;
    const sectionName = SECTION_NAMES[section] || section;
    const sectionUrl = `https://jichangcloud.world/${section}/`;

    items.push({
      '@type': 'ListItem',
      position: 2,
      name: sectionName,
      item: sectionUrl
    });

    if (page !== 'index') {
      let pageName = title || page;
      // Strip trailing branding suffixes for clean breadcrumb presentation
      pageName = pageName.replace(/\s*\|\s*机场cloud.*$/, '').split('：')[0].split(' - ')[0].trim() || pageName;

      items.push({
        '@type': 'ListItem',
        position: 3,
        name: pageName,
        item: `https://jichangcloud.world/${section}/${page}`
      });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
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
