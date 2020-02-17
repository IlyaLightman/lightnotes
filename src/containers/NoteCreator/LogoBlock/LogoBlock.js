import React from 'react'
import Radium from 'radium'

const LogoBlock = props => {
    return (
        <div style={{
            width: 70, height: 70,
            border: '1px solid black',
            borderRadius: 10, display: 'flex',
            flexDirection: 'center',
            alignItems: 'center',
            transition: '0.4s',
            background: props.background,
            ':hover': {
                background: 'lightblue'
            },
        }}>
            <i 
                className={props.logo}
                style={{
                    fontSize: 35, margin: '0 auto'
                }}
            ></i>
        </div>
    )
}

export default Radium(LogoBlock)