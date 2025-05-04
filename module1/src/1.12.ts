{
  // nullish type
  const searchName = (value: string | null) => {
    if (typeof value === "string") {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null)
  //unknown type

  const getSpeedInMeter = (value: unknown) => {
    if (typeof value === "number") {
      const conversion = (value * 1000) / 3600;
      console.log(`The Speed is ${conversion}`);
    }

    if (typeof value === "string") {
      const [speed, desc] = value.split(" ");
      const conversion = (parseFloat(speed) * 1000) / 3600;
      console.log(`The Speed is ${conversion}`);
    }
  };

  getSpeedInMeter("1000 khm per hour");
}
