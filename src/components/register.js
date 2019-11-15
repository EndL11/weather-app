import React from "react";

const RegisterForm = props => {
    var options = props.options.map((el, k) => (
        <option key={k} value = {el}>{el}</option>
    ));
    return(
        <div>
            <form>
                Email: <input type="text" name="email" value={props.email} onChange={props.onChange}/><br/>
                Пароль: <input type="password" name="password" value={props.password} onChange={props.onChange}/><br/>
                
                Посада: <select value={props.role} onChange={props.onSelect}>
                    {options}
                </select><br/>

                Даю згоду на обробку даних <input type="checkbox" name="isAgree" defaultChecked={false} onChange={props.onChange}/>  
            </form>
        </div>
    );
}
export default RegisterForm;