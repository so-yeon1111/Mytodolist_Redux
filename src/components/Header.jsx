import React from "react";

// styled-components를 사용하기 위해 import
import styled from "styled-components";

function Header() {
    return (
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    )
};
export default Header;

const StHeader = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  margin: 20px auto;
`