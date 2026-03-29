import {useQuery} from '@tanstack/react-query';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import {local} from '../util/assets';
import QueryError from '../components/QueryError.tsx';


const EssaySection = styled.section`
    margin: 1.5rem .5rem;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    column-gap: .5rem;
    row-gap: 1.5rem;

    > * {
        text-align: left;
        width: min(600px, calc(100vw - 4rem));
    }

    @media (min-width: 480px) {
        & p {
            font-size: 1.125rem;
        }
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-evenly;

        > * {
            flex-basis: 30vw;
        }
    }

    h3, h4, h5, h6 {
        margin: 0;
        font-weight: 500;
        text-align: center;
    }

    h3 {
        font-size: 1.5rem;

    }

    h4 {
        font-size: 1.25rem;
    }
`;

export default function Essay() {
    const {data, isPending, error} = useQuery({
        queryKey: ['essay'],
        queryFn: () => local('whoami-article.md', 'text').then(text => text.split(/-{3,}\r?\n/g).map(s => s.trim()))
    });

    if (error) return (<QueryError {...{error}}/>);
    else if (isPending) return (<></>);
    else return (
            <EssaySection id={'essay'}>
                {data.map(((paragraph, index) =>
                    (<section key={index}><ReactMarkdown>{paragraph}</ReactMarkdown></section>)))}
            </EssaySection>
        );
}