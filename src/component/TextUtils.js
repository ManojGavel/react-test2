import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextUtils(props) {
    const [text,setText]=useState("Enter Text Here")
    const toUpCase=()=>{
    const upper=text.toUpperCase()
    setText(upper)
    props.showAlert("text is converted to upper case","success")
    }
    const uppertxt=(e)=>{
        const txt =e.target.value
        console.log(txt)
        setText(txt)
    }
    const toClipbord=()=>{
        // const copy =text.select()
        navigator.clipboard.writeText(text)
        props.showAlert("text is copyed to clipbord","success")
    }
    return (
        <>
            <div className="mb-3 ">
                <h1 className={`display-6 text-${props.defMode ==="light"?"dark":"light"}`}>{props.title}</h1>
                <textarea style={{background:props.defMode==="dark"?"gray":"white"}} value={text} onChange={uppertxt} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button onClick={toUpCase} className='mt-3 btn btn-primary'>Click to Change text to upper Case</button>
                <button onClick={toClipbord} className=" ms-2 mt-3 btn btn-primary">Click to copy to clipbord</button>
            </div>
        </>
    )
}
TextUtils.defaultProps={
    title:"set title please",
}
TextUtils.propTypes = {
    title: PropTypes.string
  };