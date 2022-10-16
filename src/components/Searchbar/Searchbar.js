import axios from 'axios';
import { toast } from 'react-toastify';
import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Box from 'components/Box';
import { Component } from 'react';
import Loader from 'components/Loader';
import ImageGallery from 'components/Gallary/ImageGallery';
import Button from 'components/Button';

const API_KEY = '29525266-43f22ff86b92049909965975c';
const BASE_URL = `https://pixabay.com/api/`;
const FILTER_RESPONSE = `image_type=photo&orientation=horizontal`;

class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    showLoader: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({
          showLoader: true,
        });

        const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${FILTER_RESPONSE}&per_page=12`;
        const res = await axios.get(url);
        const { hits } = res.data;

        if (hits.length === 0) {
          return toast.info('Nothing was found for your request!');
        }

        this.setState(
          (prevState = {
            items: [...prevState.items, ...hits],
          })
        );
      } catch (error) {
        throw new Error(error);
      } finally {
        this.setState({ showLoader: false });
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.query.value;
    const { query } = this.state;

    if (value === '') {
      this.setState({
        items: [],
        query: '',
      });
      return toast.error('Please enter image or photo name!');
    }

    if (value === query) {
      e.target.reset();
      return toast.warning(`${query} has already been found`);
    }

    this.setState({
      query: value,
      page: 1,
      items: [],
    });

    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showLoader, items, query } = this.state;
    return (
      <Box mb={4}>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <BsSearch />
            </SearchFormButton>

            <Input
              type="text"
              name="query"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Header>
        <ImageGallery items={items} />
        {query === '' ? (
          <p>enter search name</p>
        ) : (
          <>
            <Loader visible={showLoader} />
            <Button children="Load more" onClick={this.loadMore} />
          </>
        )}
      </Box>
    );
  }
}

export default Searchbar;
