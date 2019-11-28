import React from "react";
import Weather from "./weather"

const Items = props => {
    return(
        <div>
            
            {props.items.length > 0 && 
                <Weather items = {props.items} deleteItem = {props.deleteItem}/>
            }
        </div>
    );
}
export default Items;