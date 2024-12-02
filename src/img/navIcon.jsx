import { Icon } from '@iconify/react';
import styled from 'styled-components';
// import HeartImage from "./img/Heart.png"; // 상대 경로로 import

import { Heart } from './logo';

const StyledIcon = styled(Icon)`
  font-size: ${(props) => props.size || '24px'};
`;


const HeartIcon = styled.img`
  width: 24px;  // 원하는 크기로 설정
  height: 24px;
  object-fit: contain;
`;

export const Q_StorageIcon = (props) => (
<Heart {...props} />
);

export const HomeIcon = (props) => (
  <StyledIcon icon="ic:baseline-person" {...props} />
);

export const FaceIdIcon = (props) => (
  <StyledIcon icon="iconoir:face-id" {...props} />
);

export const PersonIcon = (props) => (
  <StyledIcon icon="ic:baseline-person" {...props} />
);