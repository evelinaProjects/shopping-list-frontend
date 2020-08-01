import React, { useRef, useState } from 'react';

import profile from './profile.jpg';
import './ImageInput.css'
import Button from './Button';

const ImageInput = ({formState, dispatchFormState }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(profile);


  const refTofile = useRef();

  const previewFile = event => {
    if (event.target.files && event.target.files.length === 1) {
      const f = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(f);
      fileReader.onloadend = () => {
        setImagePreviewUrl(fileReader.result);
         dispatchFormState({type: 'IMAGE', image: fileReader.result});
       }
    }
  }


  const handler = () => {
    refTofile.current.click();
  }

  return (
    <div className="image-input-container">
      <input
        type="file"
        hidden
        ref={refTofile}
        onChange={previewFile}
        accept=".jpg, .png, .jpeg"
        className="file-input"
      />
      <div className={'image-preview'}>
        <img src={imagePreviewUrl} alt="Preview" />
        <Button buttonType={'button'} value={<i className="fas fa-upload fa-2x"></i>} handler={handler} />

      </div>
    </div>
  )
}

export default ImageInput;