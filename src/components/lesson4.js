import React from "react";

const Lesson4 = props => {
    return(
        <div>
            <h3>Поле для отображения текста:</h3>
            <textarea  type = "text" name="text" placeholder = "Введите текст" style={{ width: "250px", height: "70px", maxWidth: "300px", maxHeight: "200px"}} onChange={props.getTextFunc}/>
        </div>
    );
}

export default Lesson4;