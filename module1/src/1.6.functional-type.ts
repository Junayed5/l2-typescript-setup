// Learning Function
// Normal function
// Arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object --> function --> method

const poorUser = {
  name: "Junayed",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 5];

const newArr: number[] = arr.map((number: number) => number * number);
