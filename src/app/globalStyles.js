'use client';

import styled from 'styled-components';
import colors from './colors';
import { Zilla_Slab } from 'next/font/google';
import NextLink from 'next/link';

const zilla_slab = Zilla_Slab({ subsets: ['latin'], weight: '700' })

export const Flex = styled.div`
  display: flex;
`

// Site Root

export const Background = styled.body`
  all: unset;
  display: flex;
  justify-content: center;
  background-color: ${colors.light.background};
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.background};
    color: ${colors.dark.foreground};
  }
`

export const AppContainer = styled.div`
  /* padding: 12px; */
  width: 900px;
  @media (max-width: 900px) {
    width: 100%;
  }
  /* @media (min-width: 701px) and (max-width: 1120px) {
    
  } */
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`

// Text

export const StyledH1 = styled.h1`
  font-size: 32px;
  color: ${colors.light.highlight};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight};
  }
`

export const H1 = ({children}) => <StyledH1 className={zilla_slab.className}>{children}</StyledH1>

export const P = styled.p`
  font-size: 20px;
`

export const Link = styled(NextLink)`
  text-decoration: none;
  color: ${colors.light.highlight};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight};
  }
`