import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <StHeader>
            <h4>의미있는 삶을 위한 To Do List</h4>
            <h4>SY</h4>
        </StHeader>
    )
};
export default Header;

const StHeader = styled.div`
  align-items: center;
  border-radius: 12px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 10px 30px;
  margin: 0 0 20px 0;
  background-color: #ECE8D9;
`;