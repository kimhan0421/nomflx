import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
`;

const SearchPresenter = ( {
    movieResults, tvResults, searchTerm, handleSubmit, loading, error
} ) => <Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows..." value={searchTerm}>
        </Input>
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
