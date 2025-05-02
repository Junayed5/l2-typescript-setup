{
  //Type Alias

  type Student = {
    id: number;
    name: string;
    isStudent: boolean;
    studentType: null | undefined;
    success?: 'complete';
  };

  const student: Student = {
    id: 1,
    name: "Mubin",
    isStudent: true,
    studentType: null,
    success: 'complete'
  };
  const student2: Student = {
    id: 2,
    name: "Ayan",
    isStudent: true,
    studentType: undefined,
  };
}
