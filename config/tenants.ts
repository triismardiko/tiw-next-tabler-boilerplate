// config/tenants.ts

export type Tenant = {
  id: string;
  name: string;
  code?: string;
  logoUrl?: string;
  tag?: string; // misal: "Production", "Staging"
};

export const tenants: Tenant[] = [
  {
    id: "venteny",
    name: "Venteny Group",
    code: "VTN",
    tag: "Production",
  },
  {
    id: "testing1",
    name: "PT Testing 1",
    code: "Test1",
    tag: "Sandbox",
  },
  {
    id: "testing2",
    name: "PT Testing 2",
    code: "Test2",
    tag: "Staging",
  },
];
