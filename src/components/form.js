import React from "react";

const Form = (props) => {
    return(
        <div className="form_city">
            <form onSubmit = {props.gettingData}>
                <input type = "text" name="city" placeholder="Місто..." required/>
                <br/>
                <button type = "submit">Отримати погоду</button>
            </form>
        </div>
    );
}

export default Form;