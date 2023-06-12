'use client';

import styled from 'styled-components';
import colors from '../colors';

export const BlogContainer = styled.div`
  padding: 12px;
  width: 800px;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 701px) and (max-width: 1120px) {
    
  }
`

export const Title = styled.h1`
  all: unset;
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight}
  }
`