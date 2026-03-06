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
  position: relative;

  .container {
    padding: 32px;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 1;
  }
`

export const BannerTag = styled.p`
  font-weight: 100;
  position: absolute;
  top: 32px;
`

export const BannerTitle = styled.h2<BannerProps>`
  color: ${(props) => (props.type === 'home' ? colors.pink : colors.white)};
  text-align: ${(props) => (props.type === 'home' ? 'center' : 'left')};
`

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
