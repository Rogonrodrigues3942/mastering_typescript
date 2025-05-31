class Person{
    
        name: string;
        age: number;
        height:number;

    constructor(name:string, age: number, height:number){
        this.name = name;
        this.age = age;
        this.height = height; 
    }

}

const ramon = new Person('Ramon Ortiz', 23,1.89);
const sammy = new Person('Sammy Haggar', 70, 1.85)
console.log(ramon)
console.log(sammy)

ramon.name = 'Roberto Diaz'
console.log(ramon)
