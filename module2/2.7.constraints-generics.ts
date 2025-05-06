{
    // constraints generics with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | 'ship';

    type OwnerConst = keyof Vehicle


    const person: OwnerConst = "car"
    

    const getPropertyByValue = <X,Y extends keyof X>(obj:X, key:Y) => {
        return obj[key]
    }


    const user = {
        name: 'junayed',
        age: 23
    }
    const car = {
        brand: "Toyota",
        model: "Super GL"
    }

    const result = getPropertyByValue(car, "brand")
}