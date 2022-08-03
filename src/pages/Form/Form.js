import React from "react";

function Form(){
    return (
        <div>
            <form>
                <input type="hidden" name="id" value="id" />
                <input type="hidden" name="name" value="name" />
                <input type="hidden" name="value" value="value" />
                <input type="hidden" name="checked" value="checked" />
            </form>
        </div>
    )
}

export default Form;