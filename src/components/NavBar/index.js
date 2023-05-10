/* eslint-disable prettier/prettier */
// Write your code here.

import './index.css'

const NavBar = (props) => {
    const { value } = props
    return (
        <div className='nav-container'>
            <div className='nav-logo-container'>
                <img className='nav-img' alt='nav-img' src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png' />
                <p className='nav-logo-name'>Emoji Game</p>
            </div>
            <div className='score-topscore-container'>
                <p className='score'>score:0</p>
                <p className='topscore'>topscore:0</p>

            </div>
        </div>
    )
}
export default NavBar 
