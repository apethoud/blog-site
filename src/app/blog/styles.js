'use client';

import styled from 'styled-components';
import colors from '../colors';

export const BlogContainer = styled.div`
  padding: 12px;
  width: 700px;
  @media (max-width: 700px) {
    width: 100%;
  }
  /* @media (min-width: 701px) and (max-width: 1120px) {
    
  } */
`

export const PostPreviewContainer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.light.highlight70};
  @media (prefers-color-scheme: dark) {
    border-bottom: 1px solid ${colors.dark.highlight20};
  }
`