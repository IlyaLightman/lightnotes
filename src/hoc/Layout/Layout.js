import React from 'react'
import './Layout.scss'

const Layout = props => {
    return (
        <div className='Layout'>
            <div style={{textAlign: 'center', background: 'lightblue', width: '100%'}}>
                <h2 style={{color: 'white'}}>Header</h2>
            </div>
            
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout