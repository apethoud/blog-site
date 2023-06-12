'use client';

import styled from 'styled-components';
import colors from './colors';

export const AppContainer = styled.body`
  all: unset;
  background-color: ${colors.light.background};
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.background};
    color: ${colors.dark.foreground};
  }
`