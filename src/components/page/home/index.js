import React, { Fragment } from 'react';
import { AnimatedContainer, Separator, Wrapper } from 'components/shared/';
import Header from './header/';
import AboutMeSection from './aboutmeSection';
import QuoteSection from './quoteSection';
import StyleSection from './styleSection';
import SkillSection from './skillSection';
const Home = props => {
    return (
        <Fragment>
            <Header />
            <Wrapper>
                <AboutMeSection />
                <Separator space="1em" />
                <QuoteSection />
                <Separator space="1em" />
                <StyleSection />
                <Separator space="2em" />
                <SkillSection />
                <Separator space="2em" />
            </Wrapper>
        </Fragment>
    );
};

export default AnimatedContainer(Home);
