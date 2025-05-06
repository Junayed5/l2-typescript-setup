{
  //promise
  // simulated

  type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getToDo = async (): Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res.json();

    return data;
  };

  getToDo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something..";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function

  const showData = async (): Promise<string> => {
    const data = await createPromise();
    return data;
  };

  showData();

  //
}
