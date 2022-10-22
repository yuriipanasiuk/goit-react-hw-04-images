import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Box from 'components/Box';

export default function Searchbar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    onSubmit(value);
    e.target.reset();
  };

  return (
    <Box mb={4} as="header">
      <Header>
        <Form onSubmit={handleSubmit}>
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
