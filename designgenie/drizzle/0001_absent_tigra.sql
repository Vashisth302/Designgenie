CREATE TABLE "aiGeneratedImage" (
	"id" serial PRIMARY KEY NOT NULL,
	"roomType" varchar NOT NULL,
	"designType" varchar NOT NULL,
	" orgImage" varchar NOT NULL,
	"aiImage" varchar NOT NULL,
	"userEmail" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "credits";