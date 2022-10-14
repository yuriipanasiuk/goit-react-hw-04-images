import { Formik } from 'formik';
import {
  Header,
  Form,
  SearchFormButton,
  Input,
  ErrorMessage,
} from './Searchbar.styled';

import { BsSearch } from 'react-icons/bs';
import Box from 'components/Box';
import { Component } from 'react';
import { schema } from 'components/validationSchema';

const initualValue = {
  searchValue: '',
};

class Searchbar extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Box>
        <Header>
          <Formik
            initialValues={initualValue}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
          >
            <Form>
              <SearchFormButton type="submit">
                <BsSearch />
              </SearchFormButton>

              <Input
                name="searchValue"
                type="text"
                autoFocus
                placeholder="Search images and photos"
              />
              <ErrorMessage name="searchValue" component="span" />
            </Form>
          </Formik>
        </Header>
      </Box>
    );
  }
}

export default Searchbar;
