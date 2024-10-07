import { useEffect, useState } from "react"
import { Book } from "./magyarKonyvek"

export function Table(){
    const [felsor,setfelsor]=useState<Book[]>([])
    useEffect(()=>{
        async function load() {
            const response=await fetch("magyarKonyvek.json")
            const data=await response.json()
            setfelsor(data.books)
        }  
        load()
    },[])
    return<>
        <table>
            <thead>
                <tr>
                    <th>Sorszám</th>
                    <th>Könyv címe</th>
                    <th>Könyv ára</th>
                </tr>
            </thead>
            <tbody>
                {felsor.map(element=><tr>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td><p style={{textDecoration:"line-through"}}>{element.price}</p>{element.price*0.9}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}