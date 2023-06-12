'use client';

import styled from 'styled-components';
import colors from './colors';
import { Zilla_Slab } from 'next/font/google'

const zilla_slab = Zilla_Slab({ subsets: ['latin'], weight: '700' })

export const AppContainer = styled.body`
  all: unset;
  background-color: ${colors.light.background};
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.background};
    color: ${colors.dark.foreground};
  }
`

// Text

export const StyledH1 = styled.h1`
  font-size: 30px;
  color: ${colors.light.highlight};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight};
  }
`

export const H1 = ({children}) => <StyledH1 className={zilla_slab.className}>{children}</StyledH1>