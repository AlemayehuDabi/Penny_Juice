import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";
import { juices } from "./juice";

export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  juiceId: uuid("juice_id")
    .references(() => juices.id)
    .notNull(),
  rating: integer("rating").notNull(), // e.g., 1–5
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow(),
});
