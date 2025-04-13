import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://account:npg_hvxmPIr84ZVC@ep-shrill-snow-a1lxvy90.ap-southeast-1.aws.neon.tech/Designgenie?sslmode=require',
  },
});
