import React from 'react'
import classes from './Input.module.css'

const Input = props => {
    const cls = [
        classes.Input
    ]

    if (props.invalid) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <p>{props.title}</p>
            <input
                defaultValue={props.value}
                onChange={props.onChange}
                type='text'
                // style={{height: +props.height * 30}}
            />
        </div>
    )
}

export default Input