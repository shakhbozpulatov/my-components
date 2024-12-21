import type { RouteRecordRaw } from "vue-router";

export default <RouteRecordRaw[]>[
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/PHome.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("@/pages/Input/PInput.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("@/pages/Button/PButton.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("@/pages/Table/PTable.vue"),
  },
  {
    path: "/carusel",
    name: "Carusel",
    component: () => import("@/pages/Carusel/PCarusel.vue"),
  },
];
