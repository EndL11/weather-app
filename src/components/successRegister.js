import React from "react";

const SuccessRegister = props => {
    return(
        <div>
            <h1>OK</h1>
            Email: <span>{props.email}</span> <br/>
            Пароль: <span>{props.password}</span><br/>
            
            Посада: <span>{props.role}</span><br/>

            Даю згоду на обробку даних <input type="checkbox" name="isAgree" checked ={props.isAgree} onChange={props.OnChange}/>  
        </div>
    );
}
export default SuccessRegister;