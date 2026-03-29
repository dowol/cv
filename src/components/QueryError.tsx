interface QueryErrorProps {
    error: Error;
}

export default function QueryError({error}: QueryErrorProps) {
    return (
        <>{error.message}</>
    );
}