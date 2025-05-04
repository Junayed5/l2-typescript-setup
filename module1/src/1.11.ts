{
  //ternary operator || optional chaining || nullish coalescing operator

  //ternary operator

  const age:number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({isAdult});

  // nullish coalescing operator

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? 'Guest';
  const result2 = isAuthenticated ? isAuthenticated : 'Guest';

  console.log({result1}, {result2}); 

  //optional chaining

type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    parmanentAddress?: string;
  }
}

const user: User = {
  name: "John",
  address: {
    city: "Dhaka",
    road: "Mirpur",
    presentAddress: "Mirpur-1",
  }
}

const permanentAddress = user?.address?.parmanentAddress ?? "Permanent Address Not Found"

console.log({permanentAddress});

}
