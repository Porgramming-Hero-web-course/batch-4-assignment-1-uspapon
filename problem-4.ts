/***
 * --------------------------------------------------------------------------------------
 * Define a union type Circle and Rectangle, where each type has a unique shape property. 
 * Create a function calculateShapeArea that uses type guards to calculate the area based 
 * on the shape type.

   => Sample Input 1:
   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

   => Sample Output 1:
   78.54;

   => Sample Input 2:
   const rectangleArea = calculateShapeArea({
   shape: "rectangle",
   width: 4,
   height: 6,
   });

   => Sample Output 2:
   24;
    -------------------------------------------------------------------------------------
 */

    type Circle = {
      shape: "circle";
      radius: number;
    }

    type Rectangle = {
      shape: "rectangle"
      width: number;
      height: number;
    }

    type Shape = Circle | Rectangle; 

    const calculateShapeArea = (shape : Shape) : number => {
      if( "radius" in shape){
         const area = (Math.PI * shape.radius * shape.radius).toFixed(2);
         return parseFloat(area);
      }else if ("width" in shape && "height" in shape){
         return shape.height * shape.width;
      }

      return 0; 
    };

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
      });

   console.log(rectangleArea);



