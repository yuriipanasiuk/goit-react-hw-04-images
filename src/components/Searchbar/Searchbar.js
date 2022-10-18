import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Box from 'components/Box';
import { Component } from 'react';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    this.props.onSubmit(value);
    e.target.reset();
  };

  render() {
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
      </Box>
    );
  }
}

export default Searchbar;
