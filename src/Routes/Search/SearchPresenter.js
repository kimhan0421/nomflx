import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ( {
    movieResults, tvResults, searchTerm, handleSubmit, loading, error
} ) => <Container>
    <Form onSubmit={handleSubmit}>

    </Form>
</Container>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
}

export default SearchPresenter;
