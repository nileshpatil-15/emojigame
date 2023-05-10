/* eslint-disable prettier/prettier */
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react' 
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

export default class EmojiGame extends Component{
  
state={
    isclick:false
}

    
    changeEmoji=()=>{
    
}

    render(){
        const {emojisList}=this.props
       
            
        
        return(
            <div className='app-container'>
                <div className='nav-container'>
                    <NavBar/>
                </div>
                <div className='card-container'>
                    <ul className='inner-card-container'>

                        {emojisList.map(eachEmoji=><EmojiCard data={eachEmoji} key={eachEmoji.id} clickedEmoji={this.changeEmoji} />)}

                        


                    </ul>

                </div>

            </div>
        )
    }
}