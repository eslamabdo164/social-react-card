import React , {Component} from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Imgplace from './Imgplace';
import Userdata from './Userdata';
import Postimage from './Postimage';
import './Card.css';
class Card extends Component {
   
    render() {
        return(
            <div className="c_wrapper">
               <header>
                    <Imgplace />
                    <Userdata />
               </header>
               <div className='_linkHolder'>
                        <div className='_postImage'>
                        <Postimage />
                        <p className='_postTitle'>Title placeholder</p> 
                        <p className='_postDes'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et </p>
                        </div>
                </div>

                <div className='_postReaction'>
                    <ul>
                        <li><FaHeart /> <i>33</i> </li>
                        <li><FaShare /> <i>15</i></li>
                        <li><FaBookmark /><i>40</i></li>
                        <li><FaEnvelope /></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card;