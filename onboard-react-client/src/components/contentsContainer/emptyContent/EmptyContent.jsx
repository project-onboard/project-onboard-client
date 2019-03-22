import React from 'react';
import { Button } from 'react-md';
import "./emptycontent.css"

const EmptyContent = ({ isEditing, index, type, setCardType }) => {
  if (isEditing) {
    return (
      <div className='empty-content-container'>
        <div className='empty-content-buttons-flexbox'>
          <Button className='empty-content-button' icon onClick={() => {
            setCardType(index, "Text");
          }}>text_format</Button>
          <Button className='empty-content-button' icon onClick={() => {
                    setCardType(index, "image");
                }}>insert_photo</Button>
          <Button className='empty-content-button' icon onClick={() => {
                    setCardType(index, "video");
                }}>video_library</Button>
          <Button className='empty-content-button' icon onClick={() => {
                    setCardType(index, "task");
                }}>assignment</Button>
        </div>
      </div>
    )
  } else {
    return null;
  }

}

export default EmptyContent
