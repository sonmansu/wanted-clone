import styled, { css } from 'styled-components';

const ContentTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.5;
  overflow: hidden; /* 부모 요소 범위를 넘어가는 자식 요소의 부분은 보이지 않도록 처리 */
  text-overflow: ellipsis; /* 잘린 텍스트를 생략 부호(...)표시 함 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인 수 */
  -webkit-box-orient: vertical;
`;

export default ContentTitle;
