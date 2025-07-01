import { pgTable, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";
import { juices } from "./juice";

export const favorites = pgTable("favorites", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  juiceId: uuid("juice_id")
    .references(() => juices.id)
    .notNull(),
});
