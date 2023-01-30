import React from 'react'

export default function Alert(props) {
    return (
        
           props.alert && <div className={`alert alert-${props.alert.alt} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.alt}</strong>{props.alert.msg}
                
            </div>
        
    )
}
