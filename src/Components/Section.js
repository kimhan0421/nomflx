import React from "react";
import PropTypes, { oneOfType, string } from "prop-types";
import styled from "styled-components";



const Container = styled.div``;

const Title = styled.span``;

const Grid = styled.div``;

const Section = ({title, childern}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{childern}</Grid>
    </Container>
);

Section.PropTypes ={
    title:PropTypes.string.isRequired,
    childern: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;

