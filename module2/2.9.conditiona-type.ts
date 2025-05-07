{
  //conditional type

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //condition
  type y = a1 extends number ? true : b1 extends undefined ? undefined : false;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle <T>= T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicleUseKey <T>= T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicleUseKey<"bike">;

  //
}
