// Reference Type --> Object

const user: {
  readonly student: "Programming Hero"; // type --> literal type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  student: "Programming Hero",
  firstName: "Abu Tahir",
  middleName: "Mohammad",
  lastName: "Junayed",
  isMarried: false,
};
