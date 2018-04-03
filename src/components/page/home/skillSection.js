import React from 'react';
import { HeadingText } from 'components/shared';
import {Section } from './home.styled'
import SkillList from "./skills"
export default () => {
    return (
        <Section>
            <HeadingText lg bottom="1em">
                SKILLs
            </HeadingText>
            <SkillList>
                <SkillList.Skill src={require('img/reactIcon.png')} title={'React'} />
                <SkillList.Skill src={require('img/nodejsIcon.png')} title={'NodeJS'} />
                <SkillList.Skill src={require('img/htmlIcon.png')} title={'HTML'} />
                <SkillList.Skill src={require('img/cssIcon.png')} title={'CSS'} />
                <SkillList.Skill src={require('img/javaIcon.jpg')} title={'Java'} />
            </SkillList>
        </Section>
    );
};
