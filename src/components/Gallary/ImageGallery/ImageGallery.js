import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

import Box from 'components/Box';
import Modal from 'components/Modal';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    tags: '',
    image: '',
    showModal: false,
  };

  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  imageClick = e => {
    this.setState({
      image: e.target.dataset.set,
      tags: e.target.alt,
    });
    this.togleModal();
  };

  render() {
    const { items } = this.props;
    const { showModal, image, tags } = this.state;

    return (
      <Box>
        <ImageGalleryList>
          {items.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              tags={tags}
              onClick={this.imageClick}
              modalImage={largeImageURL}
            />
          ))}
        </ImageGalleryList>

        {showModal && (
          <Modal onClick={this.togleModal}>
            <img src={image} alt={tags} />
          </Modal>
        )}
      </Box>
    );
  }
}

export default ImageGallery;
