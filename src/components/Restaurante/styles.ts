import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.lightCream};
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  display: block;
  position: relative;
  border: 1px solid ${colors.pink};
  color: ${colors.pink};

  img {
    width: 100%;
    border-radius: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
