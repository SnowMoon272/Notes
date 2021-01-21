import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import FacebookLogo from "../assets/svgs/facebook-3.svg"
import TwitterLogo from "../assets/svgs/twitter-seeklogo.com.svg"
import InstagramLogo from "../assets/svgs/instagram-2016.svg"



const FooterStyle = styled.footer`
    height: 3rem;
    width: 100%;
    background-color: ${colors.yellow};
    display: flex;
    justify-content: space-around;
    align-items: center;


    & p {
        font-size: 0.8rem;
    }
    /* & a:hover {
        border: 1px solid black;
    } */

`

export default function footer() {
    return (
        <FooterStyle>
                <p>Pagina creada por: SnowMoon272</p>
                <div style={{ 
                    display: 'flex',
                    
                    }}>
                   
                    <a href="https://www.facebook.com/CastielAltair">
                        <FacebookLogo style={{
                               width: '28px', 
                               height: '28px', 
                               borderRadius: '50%',
                               marginRight: '1rem',
                            }}
                        />
                    </a>
                    <a href="https://twitter.com/Altair272">
                        <TwitterLogo style={{
                               width: '28px', 
                               height: '28px', 
                               borderRadius: '50%',
                               marginRight: '1rem',
                            }}
                        />
                    </a>
                    <a href="https://www.instagram.com/snowmoon272/">
                        <InstagramLogo style={{
                               width: '28px', 
                               height: '28px', 
                               borderRadius: '50%',
                               marginRight: '1rem',
                            }}
                        />
                    </a>
                </div>
        </FooterStyle>
    )
}
