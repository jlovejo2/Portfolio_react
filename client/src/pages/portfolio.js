import React from 'react';
import { Container, Row } from '../components/Grid';


function Portfolio() {

    return (
        <Container>
            <Row>
                <div class="col-lg-1"></div>
                <div id="portfolioContent" class="content col-lg-10">
                    <div class="row font-weight-bold w-100 p-4 mt-4">
                        <h3>Portfolio</h3>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </Row>
        </Container>

    );
}

export default Portfolio;
