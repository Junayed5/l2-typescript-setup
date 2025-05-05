{
  // interface

  // type alias

  type User1 = {
    name: string;
    age: number;
  };
  //for adding new type with previous declared type
  type UserUpdate1 = User1 & { role: boolean };

  //interface

  interface User2 {
    name: string;
    age: number;
  }

  //for adding new type with previous declared type using interface

  interface UserUpdate2 extends User2 {
    role: boolean;
  }

  const user: UserUpdate2 = {
    name: "juns",
    age: 24,
    role: true,
  };

  //array interface type

  //using alias
  type RollNumber1 = number[];

  //using interface
  interface RollNumber2 {
    [index: number]: number
  }

  const roll: RollNumber2 = [1, 2, 4];

  // function interface type

  //using alias 

  type Add1 = (num1: number, num2: number) => number


  //using interface

  interface Add2 {
    (num1: number, num2: number) : number
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
