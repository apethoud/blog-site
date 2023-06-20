'use client';

import styled from 'styled-components';
import colors from './colors';
import Image from 'next/image';

export const HomeWrapper = styled.div`
  padding: 12px;
`

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const HeroText = styled.div`
  width: 70%;
  font-size: 24px;
  line-height: 32px;
  color: ${colors.light.highlight50};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight50};
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const HeroPicContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const HeroPic = styled.div`
  width: 80%;

  > div {
    position: unset !important;
  }
`

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  border-radius: 50%;
`