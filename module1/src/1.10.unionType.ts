{
  // union type

  type FrontendDeveloper = "fakibazDeveloper" | "JuniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "backendDeveloper";

  type developer = FrontendDeveloper | FullStackDeveloper;

  const frontendDeveloper: FrontendDeveloper = "JuniorDeveloper";

  type User = {
    name: string;
    age: number;
    gender: "Male" | "Female";
  }

  const person: User = {
    name: "Junayed",
    age: 22,
    gender: ""
  }
}
