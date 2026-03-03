import styled from 'styled-components'
import { BannerProps } from '.'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 360px;
  font-weight: bold;
  font-size: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  .container {
    padding: 32px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }
`

export const BannerTag = styled.p`
  font-weight: 100;
  position: absolute;
  top: 32px;
`

export const BannerTitle = styled.h2<BannerProps>`
  color: ${(props) => (props.type === 'home' ? colors.pink : colors.white)};
  justify-content: ${(props) =>
    props.type === 'home' ? 'center' : 'flex-start'};
`
