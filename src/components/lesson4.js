import React from "react";

const Lesson4 = props => {
    return(
        <div>
            <h3>Поле для отображения текста:</h3>
            <textarea  type = "text" name="text" placeholder = "Введите текст" onChange={props.getTextFunc}/>
        </div>
    );
}

export default Lesson4;