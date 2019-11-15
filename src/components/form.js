import React from "react";

const Form = (props) => {
    return(
        <div className="form_city">
            <form onSubmit = {props.gettingData}>
                <input type = "text" name="city" placeholder="Город" required/>
                <br/>
                <button type = "submit">Узнать погоду</button>
            </form>
        </div>
    );
}

export default Form;