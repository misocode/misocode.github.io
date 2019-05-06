import styled from 'styled-components';
import anim from './anim.css';

export const FooterWrapper = styled.div`
  min-width: 375
  margin: 0.5rem auto;
  padding: 0.5rem;
  border-top: 2px solid var(--light);
  
`

export const Img = styled.img`
  width: 330px;
  display: inline-block;
  object-fit: contain;
`

export const Logo = styled.img`
  width: 120px;
  margin: 1rem;
  display: inline-block;
  object-fit: contain;
  animation: logoanim 2s infinite;
`

