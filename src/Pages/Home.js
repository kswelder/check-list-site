import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function Home() {
    return (
        <div className="homePage">
            <h1>HOME</h1>
            <form>
                <div>
                    <p>Username</p>
                    <input type="text" placeholder="username"/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder="password"/>
                </div>
                <div>
                    <input type="submit" value="Sing-in"/>
                </div>
                <div>
                    <Link to="/">Sing-up</Link>
                </div>
            </form>
        </div>
    )
}

export default Home