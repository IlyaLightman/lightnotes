import React from 'react'
import Radium from 'radium'

const LogoBlock = props => {
    return (
        <div style={{
            width: 70, height: 70,
            border: '1px solid black',
            borderRadius: 10, display: 'flex',
            marginRight: 25,
            padding: '0 10px 0 10px',
            flexDirection: 'center',
            alignItems: 'center',
            transition: '0.4s',
            background: props.background,
            ':hover': {
                cursor: 'pointer',
                background: 'lightblue'
            },
        }}
            onClick={props.background ? () => props.editColor(props.id) : () => props.editLogo(props.id)}
        >
            <i 
                className={props.logo}
                style={{
                    fontSize: 35, margin: '0 auto', color: props.active === 'true' ? 'black' : 'gray'
                }}
            ></i>
        </div>
    )
}

export default Radium(LogoBlock)