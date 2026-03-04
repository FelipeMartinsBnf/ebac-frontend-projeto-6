import { styled } from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
  background-color: ${colors.cream};
`

export const SocialMedia = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;
  display: flex;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
  }
`
