import { AppRegistration, Apps, Assignment } from "@mui/icons-material";

export const SIDEBAR_MENU = [
  {
    name: "Atendimento",
    path: "atendimento",
    icon: "assignment",
    order: 2,
    iconComponent: Assignment,
  },
  {
    name: "Aplicativos",
    path: "aplicativos",
    icon: "apps",
    order: 3,
    iconComponent: Apps,
  },
  {
    name: "Cadastros",
    path: "cadastros",
    icon: "edit",
    order: 4,
    iconComponent: AppRegistration,
  },
];
