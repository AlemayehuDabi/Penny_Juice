import { pgTable, uuid, timestamp, decimal } from "drizzle-orm/pg-core";
import { users } from "./user";
import { juices } from "./juice";

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  buyerId: uuid("buyer_id")
    .references(() => users.id)
    .notNull(),
  sellerId: uuid("seller_id")
    .references(() => users.id)
    .notNull(),
  juiceId: uuid("juice_id")
    .references(() => juices.id)
    .notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
