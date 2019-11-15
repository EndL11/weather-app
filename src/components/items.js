import React from "react";
import Weather from "./weather"

const Items = props => {
    return(
        <div>
            {props.items.length > 0 && 
                <Weather items = {props.items} deleteItem = {props.deleteItem}/>
            }
            <p>{props.error}</p>
        </div>
    );
}
export default Items;