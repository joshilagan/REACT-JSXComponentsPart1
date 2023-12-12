import React from 'react'

//pass in the props as parameter to the Job Component
const Job = (props) => {
  return (
    <div className='jab'>
        <div className='box'>
            {/* use chaining method to declare the props values */}
            <h1 className='position'>{props.position}</h1>
            <h3 className='description'> Salary: {props.salary} - Company: {props.company}</h3>
        </div>        

    </div>
  )
}

export default Job