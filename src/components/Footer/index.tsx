import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import insta from '../../assets/images/intsagram.png'
import twitter from '../../assets/images/twitter.png'
import { Text } from '../../styles'
import { FooterContainer, SocialMedia } from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <img src={logo} alt="Efood" />
    </div>
    <SocialMedia>
      <img src={facebook} alt="Facebook" />
      <img src={insta} alt="Instagram" />
      <img src={twitter} alt="Twitter" />
    </SocialMedia>
    <div>
      <Text size="small">
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </div>
  </FooterContainer>
)

export default Footer
