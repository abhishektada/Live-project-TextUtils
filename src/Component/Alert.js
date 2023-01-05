import React from 'react'

export default function Alert(props) {
    const capitalize =(text)=>{
        let word = text.toLowerCase()
        return word.charAt(0).toUpperCase() +word.slice(1)
    }
  return (
    props.alert && <div>
           <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  
</div>
     </div>
  )
}
