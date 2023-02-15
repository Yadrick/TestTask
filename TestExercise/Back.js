

class Animal{

    constructor(options){
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.about = options.about;
        this.eyeColor = options.eyeColor;
    }

    voice(){
        console.log('kar-kar-jandos')
    }
}

const animal = new Animal({
    firstName:"jojo",
    lastName:"bizzare",
    about: "just text",
    hasTail: "black"
})
