import React from "react";
import "./input-form.styles.scss";

const FormInput=(({changeHandler,label,...otherprops})=>
    <div className="group">
    <input className="form-input" onChange={changeHandler} {...otherprops}></input>
    {
        label?
        <label className= {`${otherprops.value.length ? 'shrink':''} form-input-label`}>{label}</label>
        :null
    }
    </div>
)

export default FormInput;