import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TestButtonProps {}

const StyledTestButton = styled.div`
  color: pink;
`;

export function TestButton(props: TestButtonProps) {
  return (
    <StyledTestButton>
      <h1>Welcome to TestButton!</h1>
    </StyledTestButton>
  );
}

export default TestButton;
