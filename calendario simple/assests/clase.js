class Aprendiz
{
    //constructor
    constructor(name, id, program, state)
    {
        //se definen atributos y todo es publico
        this.name= name;
        this.id = id;
        this.program = program;
        this.state = state;
    }

    //funcion
    resume()
    {
        return this.name + " con cc" + this.id + ", estudia" + this.program + ". Su estado es" + this.state;
    }
}
// como se crea un objeto
let aprendiz1 = new Aprendiz("pepito", "1234","ADSI", "Etapa elecctiva")

console.log(aprendiz1.resume());