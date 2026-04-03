import styled from '@emotion/styled';

const ErrorDialog = styled.div`
    position: relative;
    top: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;


interface QueryErrorProps {
    error: Error & {code?: string};
}

export default function QueryError({error}: QueryErrorProps) {
    return (
        <ErrorDialog>
            <pre>{error.code ?? error.name ?? 'ERR_UNKNOWN'}</pre>
        </ErrorDialog>
    );
}