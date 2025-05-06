{
  // generic type

  //dynamic type
  type Generic<T> = Array<T>;

  // const rollNumbers: number[] =[ 534,4534,453,345,] ;
  const rollNumbers: Generic<number> = [534, 4534, 453, 345];

  // const boolSet: boolean[] = [true,false,true]
  const boolSet: Generic<boolean> = [true, false, true];

  // const mentors: string[] = ["djf","df","fg"]
  const mentors: Generic<string> = ["djf", "df", "fg"];

  interface User {
    name: string;
    age: number;
  }

  const users: Generic<User> = [
    {
      name: "Jhankar",
      age: 40,
    },
    {
      name: "mezba",
      age: 32,
    },
  ];

  //generic tuple

  const manush: [string, string] = ["man", "wife"];

  type GenericTuple<X, Y> = [X, Y];

  const user: GenericTuple<string, string> = ["pagol", "sagol"];

  interface User {
    name: string;
    age: number;
  }

  const userWithID: GenericTuple<number, User> = [
    123,
    { name: "fs", age: 234 },
  ];
}
