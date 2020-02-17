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
                value={props.value}
                onChange={props.onChange}
                type='text'
            />
        </div>
    )
}

export default Input