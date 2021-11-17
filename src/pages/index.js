import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`py-8`};
`
const Text = styled.p`
  ${tw`bg-black text-white`};
`

export default function Home() {
  return (
    <div>
      <Container>
        <Text>
      <h1>Hello, world!</h1>
      <Link href="/about">About</Link>
          I am Text component made with Tailwind CSS + Styled Components
        </Text>
      </Container>
    </div>
  )
}
