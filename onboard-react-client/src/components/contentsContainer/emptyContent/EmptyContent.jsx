import React, { PureComponent } from 'react';
import { TextField } from 'react-md';
import { FontIcon, Button, Paper, NavigationDrawer, SVGIcon } from 'react-md';
import "./emptycontent.css"

const EmptyContent = () => {
  return (
    <div className='empty-content-container'>
      <Button floating secondary>text_format</Button>
      <Button floating secondary>insert_photo</Button>
      <Button floating secondary>video_library</Button>
      <Button floating secondary>assignment</Button>
    </div>
  )
}

export default EmptyContent
