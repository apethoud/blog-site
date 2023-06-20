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
  border-top: 2px solid ${colors.light.highlight50};
  background-color: ${colors.light.background};
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    border-top: 2px solid ${colors.dark.highlight50};
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

// Nav

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const NavButton = styled(NextLink)`
  padding: 12px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  ${({ logo }) => logo && 'font-size: 24px;'}
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.foreground};
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${colors.light.highlight90};
      color: ${colors.light.highlight10};
      @media (prefers-color-scheme: dark) {
        background: ${colors.dark.highlight10};
        color: ${colors.dark.highlight60};
      }
    }
  }
`

// Text

export const StyledH1 = styled.h1`
  font-size: 32px;
  color: ${colors.light.highlight50};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight50};
  }
`

export const H1 = ({children}) => <StyledH1 className={zilla_slab.className}>{children}</StyledH1>

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: normal;
  color: ${colors.light.highlight30};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight30};
  }
`

export const P = styled.p`
  font-size: 20px;
  line-height: 28px;
`

export const Link = styled(NextLink)`
  text-decoration: none;
  color: ${colors.light.highlight50};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.highlight50};
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const LinkText = styled.div`
  font-size: 18px;
`

export const StyledTimestamp = styled.div`
  font-size: 18px;
  font-style: italic;
  color: ${colors.light.foreground};
  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.foreground};
  }
`
