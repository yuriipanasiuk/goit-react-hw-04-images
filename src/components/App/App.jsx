import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Component } from 'react';
import Box from 'components/Box';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/Gallary/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';
import getImage from 'components/ApiService/ApiService';
import Notice from 'components/Notice';
import NoticeError from 'components/Notice/NoticeError';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    showLoader: false,
    image: '',
    tags: '',
    showButton: false,
    error: false,
  };

  componentDidUpdate(_, prevState) {
    scroll.scrollToBottom();
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    )
      this.fetchImage(this.state.page, this.state.query);
  }

  fetchImage = async (page, query) => {
    try {
      this.setState({
        showLoader: true,
        showButton: false,
      });

      const imageItems = await getImage(page, query);
      if (imageItems.length === 0) {
        return toast.error('Please enter new image or photo name!');
      }
      this.setState(prevState => ({
        items: [...prevState.items, ...imageItems],
        showButton: true,
      }));
    } catch (error) {
      this.setState({
        error: true,
        showButton: false,
      });
    } finally {
      this.setState({
        showLoader: false,
      });
    }
  };

  getImageName = data => {
    const { query } = this.state;

    if (data === '') {
      return toast.error('Please enter image or photo name!');
    }
    if (data === query) {
      return toast.warning(`${query} has already been found`);
    }

    this.setState({
      query: data,
      items: [],
      page: 1,
    });
  };

  onImageClick = e => {
    this.setState({
      image: e.target.dataset.set,
      tags: e.target.alt,
    });
  };

  closeModal = () => {
    this.setState({
      image: '',
      tags: '',
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showLoader, image, tags, items, query, showButton, error } =
      this.state;

    return (
      <Box
        textAlign="center"
        pb="24px"
        ml="auto"
        mr="auto"
        width="1330px"
        as="section"
      >
        <Searchbar onSubmit={this.getImageName} />
        {error && <NoticeError />}
        <ImageGallery onClick={this.onImageClick} items={items} />
        <Loader visible={showLoader} notice={query} />
        {!query && <Notice />}
        {showButton && <Button children="Load more" onClick={this.loadMore} />}
        {image.length > 0 && (
          <Modal onClick={this.closeModal}>
            <img src={image} alt={tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} theme="light" />
      </Box>
    );
  }
}
