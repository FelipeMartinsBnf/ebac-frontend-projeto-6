import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
  background-color: ${colors.pink};
  font-size: 16px bold;
  padding: 8px 16px;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  display: inline-block;
  margin-top: auto;
`

export const ButtonLink = styled(Link)`
  font-size: 16px bold;
  padding: 8px 16px;
  color: ${colors.pink};
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
`
