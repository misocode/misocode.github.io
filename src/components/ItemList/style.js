import styled from 'styled-components'

export const ListWrapper = styled.div`
  max-width: 1280px;
  min-width: 375
  margin: 0.5rem auto;
  padding: 0.5rem;
  text-align: center;
`

export const Item = styled.div`
  width: 300px;
  display: inline-block;
  margin: 1.2rem;
  padding: 0.5rem;
  line-height: 1.5;
  box-shadow: 0 0 3px #999;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const ItemPreview = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`