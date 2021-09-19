import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  padding: 3.5rem 2.5rem;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 1rem;
  }
`

export const Content = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;

  color: #514e4e;
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;

  & > span {
    background: #dfdfdf;
    padding: 0 0.25rem;
    border-radius: 5px;
  }

  & > a {
    color: #514e4e;
    font-weight: bold;
    text-decoration: underline;

    &:active,
    &visited {
      color: #514e4e;
    }
  }

  @media screen and (max-width: 1024px) {
    text-align: justify;
  }
`

export const Title = styled.h1`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #514e4e;
  letter-spacing: 0.1rem;

  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

export const Subtitle = styled.h2`
  margin: 1.5rem 0;
  font-weight: 500;
  color: #514e4e;

  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`