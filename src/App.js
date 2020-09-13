import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

import BasicUsage from "./examples/BasicUsage";
import FormMethods from "./examples/FormMethods";

function App() {
  return (
    <S.App>
      <div>
        <BasicUsage></BasicUsage>
      </div>

      <div>
        <FormMethods></FormMethods>
      </div>
    </S.App>
  );
}

const S = {};

S.App = styled.div`
  margin: 0 auto;
  width: 62%;

  > div {
    border: 1px solid magenta;
    margin-bottom: 1rem;
    padding: 1rem;
  }
`;

export default App;
