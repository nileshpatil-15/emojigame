/* eslint-disable prettier/prettier */
// Write your code here.
import './index.css'   

const EmojiCard =(props)=>{
    const {data,clickedEmoji}=props
    const {emojiUrl,id}=data

    const changeEmoji=()=>{
        clickedEmoji(id)
    }

    return(
      <li className='emoji-item'>
         <button className='btn' type='button' onClick={changeEmoji}>
            <img className='emoji' alt='emoji' src={emojiUrl}/>
         </button> 
      </li>                
    )
}
export default EmojiCard