import {
  BannerContainer,
  BannerOverlay,
  BannerTag,
  BannerTitle
} from './styles'

export type BannerProps = {
  tag?: string
  image: string
  title: string
  type: 'home' | 'restaurante'
}

const Banner = ({ tag, image, title, type }: BannerProps) => (
  <BannerContainer style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      {tag && <BannerTag>{tag}</BannerTag>}
      <BannerTitle type={type}>{title}</BannerTitle>
    </div>
    {type == 'restaurante' && <BannerOverlay />}
  </BannerContainer>
)

export default Banner
