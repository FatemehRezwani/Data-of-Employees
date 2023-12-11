//difinit types for var, arays, boolean

interface Props{
    name: string;
    email: string;
    age: number;
    ismarried:  boolean;
    courses: string[];
    country: Country;
}


export enum Country{
    Afghanistan= "Afghanistan",
    Iran= "Iran",
    Tajikistan= "Tajikistan"

}

export const Person =(props: Props)=>{

    //definit atype for state
    const [name, setName] = useState<string>("Fatemeh")
    setName("fatemeh")
    return (
    <div>
        <h1>Name : {props.name}</h1>
        <h1>Email : {props.email}</h1>
        <h1>IsMarried : {props.ismarried? "yes":"No"}</h1>
        <h1>Age : {props.age}</h1>
       {props.courses.map((c)=> <h4>{c}</h4>)}
        <h4>{props.country}</h4>
    </div>)

}