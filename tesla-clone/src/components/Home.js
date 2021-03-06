import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchlesss Delievery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
        <Section 
                title="Model Y"
                description="Order Online for Touchlesss Delievery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
        />
        <Section 
                title="Model 3"
                description="Order Online for Touchlesss Delievery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
        />
        <Section 
                title="Model X"
                description="Order Online for Touchlesss Delievery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
        />
        <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
        />
        <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof New Plus Solar Panel"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
        />
        <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="SHOP now"
                
        />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`