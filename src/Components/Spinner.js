import React from 'react'
import loading from './loading.gif'

export default function spinner() {
  return (
    <div className="container my-3" style={{textAlign:"center",color:"rgb(138, 143, 144)"}} >
      <img className="my-3"src={loading} alt={loading}  style={{color:"rgb(138, 143, 144)"}}/>
    </div>
  )
}
