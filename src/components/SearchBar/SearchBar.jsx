import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    searchQuerry: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuerry: event.currentTarget.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.searchQuerry.trim() === '') {
      return alert('Write down something please!');
    }

    this.props.handleSubmit(this.state.searchQuerry.trim());

    event.currentTarget.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
