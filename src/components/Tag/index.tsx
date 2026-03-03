import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'large'
  children: JSX.Element | string
}

const Tag = ({ size = 'small', children }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
