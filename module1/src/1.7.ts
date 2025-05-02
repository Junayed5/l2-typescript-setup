// Spread operator
// Rest Operator

// Spread operator

const bros1: string[] = ["Sifat", "Mujahid", "Mahian"];
const bros2: string[] = ["Shariat", "Mubin", "Hossain"];

bros1.push(...bros2);

const mentor1 = {
  typeScript: "mezba",
  redux: "mir",
  dbms: "mizan",
};

const mentor2 = {
  prisma: "Firoz",
  next: "Tonmoy",
  cloud: "Nahid",
};

const mentorList = {
  ...mentor1,
  ...mentor2,
};

// Rest Operator

const greetFriends = (...friends: string[]) => {
  friends.forEach((fr) => console.log(`hi ${fr}`));
};

greetFriends("abul", "babul", "kabul", "labul");
