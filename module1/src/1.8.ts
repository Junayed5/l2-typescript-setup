{
  // destructuring
  const user = {
    id: 121,
    name: {
      firstName: "Md",
      lastName: "Junayed",
    },
    contactNo: 93209,
    address: "Uganda",
  };

  // cannot declare type like {name: string} = user it means name change;

  const {
    contactNo,
    name: { firstName },
  } = user;

  //   array destructuring

  const myFriend: string[] = ["sifat", "mujahid", "mahian", "sharzy"];

  const [, bestFriend, , ...rest] = myFriend;

  // coma is ignoring previous value if I want a set value in one variable set ...varName ;
}
