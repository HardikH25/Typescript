// 1. Basic Class & Properties

class Chai {
    // By default in TypeScript, properties are PUBLIC if no modifier is written.
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai('Ginger', 20);
masalaChai.flavour = 'masala'; // Allowed because it's public


// 2. Access Modifiers: public, private, protected

class Chai2 {
    // PUBLIC: Accessible everywhere (inside the class, in subclasses, and from outside objects).
    public flavour: string = 'Masala';

    // PRIVATE: Accessible ONLY inside this exact class. 
    // Outside objects cannot read or write to it directly.
    private secretIngredients: string = 'Cardamom';

    // ECMAScript Native Private Field (modern alternative to 'private')
    // Prefixing with '#' enforces privacy at real JavaScript runtime too!
    #trueSecretFormula: string = 'Secret Ratio 1:2';

    // Encapsulation: We expose the private value safely through a controlled method.
    // The class decides WHEN, HOW, and to WHOM this secret is revealed.
    reveal() {
        return this.secretIngredients;
    }
}
// CANNOT DO: new Chai2().secretIngredients (TypeScript compile-time error)

class Shop {
    // PROTECTED: Accessible inside this class AND inside any 'class' that extends (inherits from) it.
    // Outside objects cannot access it directly.
    protected shopName: string = 'Chai Corner';
}

class Branch extends Shop {
    getName() {
        // Allowed because 'Branch' inherits from 'Shop'
        return this.shopName;
    }
}
const b1 = new Branch();
// b1.shopName; // Error: Property 'shopName' is protected and only accessible within class 'Shop' and its subclasses.


// 3. readonly Modifier & Parameter Properties

class Cup {
    // READONLY: Can only be assigned during declaration or inside the constructor.
    // After initialization, it can never be reassigned.
    readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}
const c = new Cup(100);
// c.capacity = 10; // Error: Cannot assign to 'capacity' because it is a read-only property.


// 4. Getters and Setters (Accessors)


class ModernChai {
    // Keep internal state private to prevent unauthorized or invalid mutations
    private _sugar: number = 2;

    // GETTER: Intercepts reads (e.g. `c2.sugar`). Behaves like a variable, runs like a function.
    get sugar(): number {
        return this._sugar;
    }

    // SETTER: Intercepts assignments (e.g. `c2.sugar = 4`). Allows validation before storing!
    set sugar(value: number) {
        if (value < 0) {
            throw new Error("Sugar Can't be Negative");
        }
        if (value > 5) {
            throw new Error('Too Sweet');
        }
        this._sugar = value;
    }
}

const c2 = new ModernChai();
c2.sugar = 4;           // Triggers setter with validation
console.log(c2.sugar);  // Triggers getter


// 5. Static Members

class EkChai {
    // STATIC: Belongs directly to the CLASS itself, NOT to individual instances (objects).
    static shopName: string = 'Chaicode Cafe';
    flavour: string
    constructor(flavour: string) {
        this.flavour = flavour
    }
}

console.log(EkChai.shopName); // Accessed via Class name
console.log(new EkChai('Masala').flavour)
// const myEkChai = new EkChai('Masala');
// myEkChai.shopName; // Error: Cannot access static member through an instance!


// 6. Abstract Classes

// Incomplete blueprint that CANNOT be instantiated directly via 'new'.
// Used as a base class to force derived classes to implement specific contracts.
abstract class Drink {
    // Concrete method: Reusable logic shared across all subclasses
    pour(): void {
        console.log('Pouring into cup...');
    }

    // Abstract method: No body {}. Every subclass MUST provide its own implementation.
    abstract make(): void;
}

class MyChai extends Drink {
    // Forced to implement make()
    make(): void {
        console.log('Had to implement the make method');
    }
}

// new MyChai().pour()


// 7. Inheritance vs Composition: The Definitive Comparison

class Heater {
    heat(): void {
        console.log('Heating at 100°C...');
    }
}

// Approach 1: INHERITANCE ("IS-A" Relationship)

// Concept: ChaiMakerInheritance "IS A" Heater.
//
// How it works:
// - Uses the 'extends' keyword.
// - All public and protected members of Heater are inherited directly.
// - We can call 'this.heat()' directly inside make().
//
// Trade-offs:
// ✔ Good when there is a true hierarchical relationship (e.g. Dog is an Animal).
// ❌ Tight Coupling: If Heater's method name or behavior changes, subclasses break.
// ❌ Rigid: You cannot swap out the heater dynamically at runtime.
// ❌ Leaky / Exposed API: Outside callers can now call 'maker.heat()' directly,
//    even if you only intended to expose 'maker.make()'.
class ChaiMakerInheritance extends Heater {
    make(): void {
        this.heat(); // Directly uses inherited method
        console.log('Chai is ready via Inheritance!');
    }
}
const inheritanceMaker = new ChaiMakerInheritance();
inheritanceMaker.make();
inheritanceMaker.heat(); // ⚠️ Notice: Outside callers can also call .heat() directly!


// Approach 2: COMPOSITION ("HAS-A" Relationship)  <-- ⭐ INDUSTRY PREFERRED

// Concept: ChaiMakerComposition "HAS A" Heater.
//
// How it works:
// - Receives a Heater instance through constructor dependency injection.
// - Stores it in a private property ('private heater: Heater').
// - Delegates the heating task: 'this.heater.heat()'.
//
// Advantages:
// ✔ Loose Coupling: ChaiMaker does not inherit or expose Heater's internal methods.
// ✔ Flexibility / Interchangeability: You can easily pass any heater (GasHeater,
//   ElectricHeater, SolarHeater) as long as it satisfies the heating contract.
// ✔ Clean Encapsulation: 'this.heater' is private. Callers only see and use .make().
// ✔ Testability: Easy to mock the heater when writing automated unit tests.
class ChaiMakerComposition {
    private heater: Heater; //private is important to use here.

    constructor(heater: Heater) {
        this.heater = heater; // Stores the reference to the external component
    }

    make(): void {
        this.heater.heat(); // Delegates the work to the internal heater object
        console.log('Chai is ready via Composition!');
    }
}

const myHeater = new Heater();
const compositionMaker = new ChaiMakerComposition(myHeater);
compositionMaker.make();
// compositionMaker.heater.heat(); // ❌ Compile error: 'heater' is private & safely hidden!