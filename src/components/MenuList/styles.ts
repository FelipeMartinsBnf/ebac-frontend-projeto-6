import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 48px;
  margin-top: 48px;

  li {
    height: 100%;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.67);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  background-color: ${colors.pink};
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  padding: 32px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: right;
    margin-bottom: 24px;

    img {
      cursor: pointer;
    }
  }
`

export const ModalDescription = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  column-gap: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ModalDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-top: 16px;
  }

  ${ButtonContainer} {
    width: fit-content;
    margin-top: 32px;
    background-color: ${colors.lightCream};
    color: ${colors.pink};
    text-align: center;
    font-weight: bold;
  }
`
