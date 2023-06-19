import express from "express";
import { UserRoute } from "../module/users/user.route";
import { CowRoute } from "../module/cow/cow.route";
import { OrderRoute } from "../module/orders/order.route";

const router = express.Router();

const moduleRoutes = [
  { path: "/users", route: UserRoute },
  { path: "/cows", route: CowRoute },
  { path: "/orders", route: OrderRoute },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const ApplicationRoutes = router;
