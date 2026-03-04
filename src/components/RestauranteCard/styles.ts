import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
import { ButtonContainer, ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.lightCream};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${colors.pink};
  height: 100%;

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    height: 200px;
  }
`

export const CardContent = styled.div`
  padding: 8px;
  border: 1px solid ${colors.pink};
  border-radius: 0 0 8px 8px;
  border-top: none;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonContainer} {
    width: fit-content;
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
