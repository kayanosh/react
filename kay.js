let myName = 'kayanosh'
console.log(myName)

myName = 'malik'
console.log(myName) // let is a variable, and can give lots of outputs

// arrow functions
const printMyName = ()=> {
    console.log('max')
}

const printMyName = (name,age)=> {
    console.log(name,age)
}
printMyName('kay',24)

const multiply = (number) => {
    return number *2
}
console.log(multiply(2))

// classes

class human {
    constructor() {
        this.gender = 'male'
    }
    printGender()  {
        console.log
    }
}
class person extends human {

}



class person {
    constructor() {
        super()
        this.name = 'kay'
    }


printMyName()  {
    console.log(this.name)
}
}

const person = new person()
person.printMyName()
person.printGender()    