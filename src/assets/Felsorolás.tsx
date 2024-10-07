import { useEffect, useState } from "react";
import { Book } from "./magyarKonyvek";


export function Felsor(){
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
            <ul>
                {felsor.map(element=>
                <li>{element.author} +  {element.title}</li>

                )}
            </ul>
        </>
}