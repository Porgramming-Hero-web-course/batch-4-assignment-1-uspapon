/***
 * --------------------------------------------------------------------------------------
 * Create a TypeScript class Car with properties make, model, and year. Include a method
 * getCarAge that returns the car's age based on the current year.

      => Sample Input 1:
      const car = new Car("Honda", "Civic", 2018);
      car.getCarAge();

      => Sample Output 1:
      6 (assuming current year is 2024)
    -------------------------------------------------------------------------------------
 */

    class Car {
      make: string;
      model: string;
      year: number;

      constructor(make: string, model: string, year: number) {
         this.make = make;
         this.model = model;
         this.year = year;
      }

      getCarAge(): number {
         const date = new Date();
         let currentYear = date.getFullYear();
         const carAge = currentYear - this.year;
         if(carAge>0){
            return carAge
         }
         return 0;
      }
    }


   const car = new Car("Honda", "Civic", 2018);
   console.log(car.getCarAge());



