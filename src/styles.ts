import styled, { createGlobalStyle } from 'styled-components'

export type TextProps = {
  size?: 'small' | 'medium' | 'large'
  color: 'white' | 'pink'
}

export const colors = {
  white: '#EEEEEE',
  lightCream: '#FFF8F2',
  pink: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.lightCream};
    color: ${colors.white};
  }

  .container {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
  }
`

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px'
      case 'medium':
        return '14px'
      case 'large':
        return '18px'
      default:
        return '14px'
    }
  }};

  color: ${({ color }) => (color === 'white' ? colors.white : colors.pink)};
`
