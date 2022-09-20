import React from 'react'

export function Employee(props) {
    return (
        <div className=' flex flex-col gap-2 m-2 p-2 h-36 w-64 border-2 border-black' key={props.id}
            onClick={() => handleEmployees(
                'Update Name', { id: props.id, value: 'Renato' })}>
            <p > <span className='font-bold'> Name:</span> {props.fullName}</p>
            <p > <span className='font-bold'> Designation:</span> {props.designation}</p>
        </div>
    )
}
