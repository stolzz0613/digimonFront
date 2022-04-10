import { queryByTitle } from '@testing-library/react'
import React from 'react'
import icon from '../../assets/icon.png'
import './styles.scss'

export default function Card({image, title}) {

  return (
    <div className='card_container'>
        <div className='title_container'>
            <div className='title_text'>
                <img className="folder_icon" src={icon} alt='avatar' />
                <div>{title}</div>
            </div>
            <div className='title_symbols'>
                <div>_</div>
                <div>◻</div>
                <div>X</div>
            </div>
        </div>
        <div className='tools_container'>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Help</span>
        </div>
        <img className='card_image' src={image} alt='avatar' />
    </div>
  )
}
