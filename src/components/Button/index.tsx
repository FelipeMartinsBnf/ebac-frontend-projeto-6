import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  type: 'button' | 'link'
  children: string
  title?: string
  to?: string
  onClick?: () => void
}

const Button = ({ type, children, title, to, onClick }: ButtonProps) => {
  if (type === 'button')
    return (
      <ButtonContainer onClick={onClick} title={title}>
        {children}
      </ButtonContainer>
    )

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
