import { Counter } from "../Counter/ItemCount"
export const ItemListContainer =(props)=>{
    return (
    <section>
    
    <h1>{props.mensaje}</h1>
        <Counter/>
    </section>
    )
}

