export interface Istep {
  page: string;
  active: boolean;
  status: "todo" | "done" | "error";
  title: string;
}

export const steps: Istep[] = [
  {
    page: "contact",
    active: false,
    status: "todo",
    title: "Contact",
  },
  {
    page: "coffret",
    active: false,
    status: "todo",
    title: "Coffret",
  },
  {
    page: "compteur",
    active: false,
    status: "todo",
    title: "Compteur",
  },
  {
    page: "liaison",
    active: false,
    status: "todo",
    title: "Liaisons",
  },
  {
    page: "observations",
    active: false,
    status: "todo",
    title: "Observations",
  },
  {
    page: "photo",
    active: false,
    status: "todo",
    title: "Photo",
  },
  {
    page: "workout-before",
    active: false,
    status: "todo",
    title: "Avant travaux",
  },
  {
    page: "workout-after",
    active: false,
    status: "todo",
    title: "Après travaux",
  },
  {
    page: "signature",
    active: false,
    status: "todo",
    title: "Signature",
  },
];
