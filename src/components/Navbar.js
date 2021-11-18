import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`bg-red-500 h-5 w-5`};
`


export const Navbar = () => {
    return (
        <Wrapper>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}
