import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  const closeModal = () => {
    setImage(null);
    setTags('');
  };

  const onImageClick = e => {
    setImage(e.target.dataset.set);
    setTags(e.target.alt);
  };

  return (
    <GalleryItem>
      <ImageGallery
        src={webformatURL}
        alt={alt}
        onClick={onImageClick}
        data-set={largeImageURL}
      />
      {image && (
        <Modal onClick={closeModal}>
          <img src={image} alt={tags} />
        </Modal>
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
};
