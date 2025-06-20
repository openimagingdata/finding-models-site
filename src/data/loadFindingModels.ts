import fs from 'fs';
import path from 'path';

const modelDir = path.resolve('./external/findingmodels/defs');

export function getAllModels() {
  return fs.readdirSync(modelDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const raw = fs.readFileSync(path.join(modelDir, file), 'utf-8');
      const data = JSON.parse(raw);
      return {
        slug: file.replace('.json', ''),
        ...data
      };
    });
}

export function getModelBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(modelDir, `${slug}.json`), 'utf-8');
  return JSON.parse(raw);
}