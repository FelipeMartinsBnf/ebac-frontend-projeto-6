import { styled } from 'styled-components'
import { ProductListProps } from '.'
import { colors } from '../../styles'
import { Card } from '../product/styles'

export const Container = styled.section<ProductListProps>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
