import React from 'react'
import './Textarea.scss'

const Textarea = props => {
    return (
        <div className='Textarea'>
            <p>{props.title}</p>
            <textarea
                style={{
                    width: '100%',
                    height: +props.height * 30
                }}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Textarea