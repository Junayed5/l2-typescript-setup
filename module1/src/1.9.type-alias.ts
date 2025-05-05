{
  //Type Alias

  type Student = {
    id: number;
    name: string;
    isStudent: boolean;
    studentType: null | undefined;
    success?: "completed";
  };

  const student: Student = {
    id: 1,
    name: "Mubin",
    isStudent: true,
    studentType: null,
    success: "completed",
  };
  const student2: Student = {
    id: 2,
    name: "Ayan",
    isStudent: true,
    studentType: undefined,
  };

  type Add = (num1: number, num2: number) => number;

  const add:Add = (num1, num2) => num1 + num2;
}
