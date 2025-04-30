import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://designdb_owner:npg_nJu5MRtXpb3a@ep-winter-cake-a81ca804-pooler.eastus2.azure.neon.tech/designdb?sslmode=require',
  },
});
