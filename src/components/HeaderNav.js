import React from "react"

import { Link } from "react-router-dom"
import '../styles/Header.css'

function HeaderNav() {

    return (
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/task">TASK</Link></li>
                <li><Link to="/tasks">TASKS</Link></li>
                <li><Link to="/categories">CATEGORIES</Link></li>
            </ul>
        </div>
    )
}

export default HeaderNav