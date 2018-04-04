import React, { Fragment } from 'react';
import {
    AnimatedContainer,
    Separator,
    Wrapper,
    HeadingText,
    TextWithLink
} from 'components/shared/';
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
                <HeadingText lg>Thanks for visiting.</HeadingText>
                <HeadingText lg bottom="3em">
                    Source code of this site are on my github{' '}
                    <TextWithLink href="https://github.com/basone01/basone01profile/">
                        here
                    </TextWithLink>
                </HeadingText>
            </Wrapper>
        </Fragment>
    );
};

export default AnimatedContainer(Home);
