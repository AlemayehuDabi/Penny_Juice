import {
  pgTable,
  text,
  uuid,
  decimal,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./user";
import { categories } from "./category";

export const juices = pgTable("juices", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  categoryId: uuid("category_id").references(() => categories.id),
  isSold: boolean("is_sold").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
