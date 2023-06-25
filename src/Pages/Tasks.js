import React, { useEffect, useState } from "react"
import HeaderNav from "../components/HeaderNav"

function Tasks() {
    const [list, setList] = useState([])

    async function getLista() {
        let l = await fetch("http://localhost:8082/task/list/1")
            .then(res => res.json())
            .catch(err => console(err))
        
        if(list.length === 0) {
            l.map(v => setList([...list, JSON.stringify(v)]))
        }
    }

    useEffect(() => {
        if(list.length === 0) {
            getLista()
        }
    })
    
    return (
        <div>
            <HeaderNav/>
            <h1>Tasks</h1>
            <ul>
                {list.map(element => {
                    return (
                        <li>
                            <ul>
                                <li>ID    : {JSON.parse(element)['id']}</li>
                                <li>NAME  : {JSON.parse(element)['name']}</li>
                                <li>START : {JSON.parse(element)['start']}</li>
                                <li>END   : {JSON.parse(element)['end']}</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks