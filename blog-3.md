# Blog
## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
In the run time, Type Guards helps the compiler to infer the correct datatype because values could be multiple types. It is specially helpful to narrow down the type of variable within a specific scope. It provides safer operation between variables since the data-type is very much defined for each and every variable. It also help to prevent run time error due to data level clarity. 

### There are many way to type guard data:
- typeof type guard
- in operator type guard
- instanceof type guard

### typeof type guard:
this type guard is used to narrow down primitive type data such as string, number, boolean, undefined etc

**use case**
when we work with primitive type of data we need to check their type explicitly as follows. 

**Example:**

```typescript

type AlphaNumeric = number | string;
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }else {
            return param1.toString() + param2.toString();
        }
    }

    const result = add(2,3);
    console.log(result);

```
### in operator type guard:
'in' operator checks if a property exists on an object. it is generally used to narrow down object types. 


**use case:**
when we need to check a presence of a property in an object and distinguish between different object types. 

**Example:**
```typescript
    type RegularUser = {
        name: string;
    }


    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: RegularUser | AdminUser) => {
        
        // type guard checking
        if("role" in user){
            console.log(`My name is ${user.name} and my role will be the ${user.role}`);
        }
    }

    const regularUser: RegularUser = {
        name: "Faysal Abbas"
    };

    const adminUser: AdminUser = {
        name: "Umme Salma",
        role: "admin"
    }

    getUser(adminUser);
        
```

### instanceof type guard: 
the instance of type guard is used to check if an specific object is an instance of a class or constructor function. 

**use case**
when we want to check if an object is an instance of a particular class or subclass. 

**Example:**
```typescript
class Dog {
    bark(){
        console.log*("dog barks");
    }
}

class Cat {
    meow(){
        console.log*("cat meows");
    }
}

function makeSound(animal: Dog | Cat) {
    if(animal instanceof Dog){
        animal.bark();
    }else {
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);

```
in this case instanceof type guard narrow down the type of animal to dog with conditional checking. 



