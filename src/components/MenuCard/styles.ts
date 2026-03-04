import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  color: ${colors.lightCream};
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    width: 100%;
    border-radius: 8px;
    height: 200px;
  }

  ${ButtonContainer} {
    background-color: ${colors.lightCream};
    color: ${colors.pink};
    text-align: center;
    font-weight: bold;
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
  flex: 1;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
