{
  // constraints
  // it means force some type that should have inside the scope
  //it means fixed some type in generics

  const addStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "next level";
    return {
      ...student,
      course,
    };
  };

  const student1 = addStudent({
    id: 233,
    name: "junayed",
    email: "j@gmail.com",
    studentType: "NLWD",
  });
  const student2 = addStudent({
    id: 233,
    name: "junayed",
    email: "j@gmail.com",
    studentType: "NLWD",
  });
}
