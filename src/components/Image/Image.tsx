import React from 'react';

type ImageProps = {
    width: number | string;
    height?: number | string;
    name: string;
    src: string;
    align: 'left' | 'right' | 'center';
}

const Image: React.FC = ({ width, height, name, src, align = 'left' }: ImageProps) => (
    <div style={{ textAlign: align }}>
        <figure>
            <img
                src={src}
                width={width}
                height={height}
                alt={name}
            />
            {name && <figcaption><p>{name}</p></figcaption>}
        </figure>
    </div>
);

export default Image;