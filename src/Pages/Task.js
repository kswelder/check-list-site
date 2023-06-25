import { React } from "react";

function Task() {
    return (
        <div>
            <form>
                <div>
                    <p>Task name</p>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <p>Start task</p>
                    <input type="date"/>
                    <input type="time"/>
                </div>
                <div>
                    <p>End task</p>
                    <input type="date"/>
                    <input type="time"/>
                </div>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Task