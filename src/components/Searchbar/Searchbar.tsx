import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Box from '../Box';

interface IProps {
  onSubmit: (value: string) => void;
}

export default function Searchbar({ onSubmit }: IProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.target as typeof e.target & {
      query: { value: string };
    };

    onSubmit(value.query.value);
    e.currentTarget.reset();
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
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    </Box>
  );
}
