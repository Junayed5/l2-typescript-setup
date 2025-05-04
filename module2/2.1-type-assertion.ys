{
  // type assertion

  let anything: any;

  anything = "hello next";
  anything = 234;

  anything as string;

  const kgToGram = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const convert = parseFloat(value) * 1000;
      return convert;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(1000) as number;
  const result2 = kgToGram("1000") as string;
}
