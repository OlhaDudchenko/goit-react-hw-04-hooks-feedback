import styled from "@emotion/styled";

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatisticsItem = styled.span`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
