import styled from '@emotion/styled';

const Skeleton = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: .375rem;

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }
        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }
        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
    }
`;

interface SkeletonProps {
    size: number;
}


export function RectSkeleton({size}: SkeletonProps) {
    const Item = styled(Skeleton)`
        height: ${size}px;
    `;

    return <Item/>;
}

export function CircleSkeleton({size}: SkeletonProps) {
    const Item = styled(Skeleton)`
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        overflow: hidden;
    `;

    return <Item/>;
}
