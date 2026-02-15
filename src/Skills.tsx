import styled from "@emotion/styled";
import {SectionTitle} from "./Components.tsx";
import {useAsset} from "./util/assets-legacy.ts";
import useMessage from "./util/message.ts";
import type {SkillsInfo} from "./data.ts";

const Section = styled.section`
    display: flex;
    flex-direction: column;
`;

export default function Skills(){
    const message = useMessage();

    return (
        <Section id={'skills'}>
            <SectionTitle>{message?.title_skills}</SectionTitle>
            <SkillsArticle/>
        </Section>
    )
}

const Article = styled.article`
    height: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media(min-width: 960px) {
        display: grid;
        grid-template-columns: 2fr 3fr 3fr;
        max-width: 1000px;
        margin: 0 auto;
    }
`;

const SkillsCategoryArticle = styled.article`
    display: flex;
    flex-flow: column;
    gap: .75rem;
    
    & > h3 {
        font-size: 1.75rem;
        font-weight: 500;
        text-align: center;
        margin: 0;
    }
`;

const SkillsList = styled.ul`
    list-style: none;
    padding-left: 0;
    
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

const SkillsListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: .5rem;
    border-bottom: 1px solid lightgray;
    
    & span {
        flex-grow: 1;
    }
    
    @media(min-width: 480px) {
        font-size: 1.25rem;
    }
    
    & i {
        font-size: 1.5em;
    }
    
    & small[data-subcategory] {
        text-transform: uppercase;
        padding: .25rem .5rem;
        border-radius: .5rem;
        font-size: .625em;
        background-color: gray;
    }
    
    & small {
        &[data-subcategory=web_frontend] {
            background-color: oklch(45% 0.085 224.283);
        }
        
        &[data-subcategory=web_backend] {
            background-color: oklch(45.2% 0.211 324.591);
        }
        
        &[data-subcategory=web_full-stack] {
            background-color: oklch(42.4% 0.199 265.638);
        }
        
        &[data-subcategory=gui_app] {
            background-color: oklch(47.6% 0.114 61.907);
        }
        
        &[data-subcategory=database] {
            background-color: oklch(45.3% 0.124 130.933);
        }
    }
`;



function SkillsItem({category, name, icon} : SkillsInfo) {
    const subCategory = category.startsWith('dev/')
        ? category.substring(4) : null;

    return (
        <SkillsListItem>
            <i className={icon}/>
            <span>{name}</span>
            <small data-subcategory={subCategory || undefined}>
                {subCategory?.replace('_', ' ') || undefined}
            </small>
        </SkillsListItem>
    )
}

function SkillsArticle(){

    const skills = useAsset('skills.json', 'json') as SkillsInfo[];


    return (
        <Article translate={'no'} className={'notranslate'}>
            <SkillsCategoryArticle>
                <h3>Languages</h3>
                <SkillsList>
                    {skills?.filter(skill => skill.category === 'language').map(skill => <SkillsItem key={skill.id} {...skill}/>)}
                </SkillsList>
            </SkillsCategoryArticle>
            <SkillsCategoryArticle>
                <h3>Development Solutions</h3>
                <SkillsList>
                    {skills?.filter(skill => skill.category?.startsWith('dev/')).map(skill => <SkillsItem key={skill.id} {...skill}/>)}
                </SkillsList>
            </SkillsCategoryArticle>
            <SkillsCategoryArticle>
                <h3>Tools</h3>
                <SkillsList>
                    {skills?.filter(skill => skill.category === 'tool').map(skill => <SkillsItem key={skill.id} {...skill}/>)}
                </SkillsList>
            </SkillsCategoryArticle>
        </Article>
    )
}