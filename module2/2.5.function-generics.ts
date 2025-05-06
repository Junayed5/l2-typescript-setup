{
  // function generics

  const createArray = (param: string): string[] => {
    return [param]
  }
  // using generics
  const createArrayWithGenerics = <T>(param: T): T[]    => {
    return [param]
  }

  interface ObjType {
    id:number;
    name: string
  }
  const res1 = createArray('bangladesh');
  const res2 = createArrayWithGenerics<string>('bangladesh');
  const resObj = createArrayWithGenerics<ObjType>({id: 342, name: "jhony"});


  // using generics tuple
  const createArrayWithGenericsTuple = <T,Q>(param1: T, param2: Q): [T,Q]    => {
    return [param1,param2]
  }

  type User = {
    name:string;
    age:number
  }
  const tuple = createArrayWithGenericsTuple<string, User>('dfshk', {name:'juns', age: 32})


  
  const courseLevel = <T>(student: T) => {
    const course = "Next Level web development";

    return {
        ...student, course
    }
  }

  type Student = {
    name: string;
    email: string;
    devType: string;
  }
  const student1 = courseLevel<Student>({name:' x', email: 'x@gmail.com', devType: "NLWD"})
} 
