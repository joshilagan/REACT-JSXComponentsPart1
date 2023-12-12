import React from 'react'


const Job = (props) => {
  return (
    <div>
        <div className='box'>
            <h1 className='position'>{props.position}</h1>
            <h3 className='description'> Salary: {props.salary} - Company: {props.company}</h3>
        </div>        

    </div>
  )
}

export default Job