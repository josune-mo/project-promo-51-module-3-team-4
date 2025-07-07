import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/default-avatar.svg';

function GetAvatar({avatar=defaultAvatar, updateAvatar, text='Get avatar!'}) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {

    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    updateAvatar(image);
  };

  return (
    <div className="get-avatar">
      <label className="get-avatar__label get-avatar__button">
        {text}
        <input
          type="file"
          ref={myFileField}
          style={{ display: 'none' }}
          onChange={uploadImage}
        />
      </label>

      <div
        className="get-avatar__preview"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default GetAvatar;