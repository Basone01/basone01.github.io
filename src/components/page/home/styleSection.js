import React from 'react';
import { HeadingText, Flex } from 'components/shared';
import { WorkStyle, Section } from './home.styled';
export default () => {
    return (
        <Section>
            <HeadingText lg bottom="1em" top="1em">
                STYLE
            </HeadingText>
            <Flex fluid ali="stretch" dir="column">
                <WorkStyle title="Coding" percent={85} />
                <WorkStyle title="Code Design" percent={70} />
                <WorkStyle title="Project File Structure" percent={50} />
                <WorkStyle title="UI Design" percent={30} />
                <WorkStyle title="Documentation" percent={20} />
                <WorkStyle title="Team Organizing" percent={15} />
            </Flex>
        </Section>
    );
};
