import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  return (
    <StHome>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </StHome>
  );
};

const StHome = styled.div`
  background-color: #faf6e9;
  min-height: 100vh;
`;

export default Home;
