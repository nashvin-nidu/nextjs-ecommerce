import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const guests = pgTable("guest", {
    id: uuid("id").primaryKey().defaultRandom(),
    sessionToken: text("session_token").notNull().unique(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
