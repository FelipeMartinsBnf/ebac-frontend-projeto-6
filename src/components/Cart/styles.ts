import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.67);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.pink};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    background-color: ${colors.cream};
    color: ${colors.pink};
    display: block;
    text-align: center;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.cream};
  color: ${colors.pink};
  padding: 8px 0;
  position: relative;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;

  img {
    height: 80px;
    max-width: 80px;
    width: 100%;
    border-radius: 8px;

    object-fit: cover;
    margin-right: 16px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 4px;
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
export const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Quantity = styled.p`
  font-size: 16px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
`

export const Prices = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
`
