import React from "react";

// styled-components를 import
import styled from "styled-components";

// Layout 안의 자식 컴포넌트들을 받을 때 {props.children} 사용
function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;

  /* todoBox가 일정 크기를 넘어가면 이미지가 잘리는 현상때문에 추가 */
  min-height: 100vh;

  /* 레이아웃 가운데 정렬 */
  margin: 0 auto;
`;
