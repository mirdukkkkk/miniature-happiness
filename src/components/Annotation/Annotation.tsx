import React from 'react';
import styles from './Annotation.module.css';

type AnnotationProps = {
    text: string;
    children: React.ReactNode;
}

const Annotation: React.FC = ({ text, children }: AnnotationProps) => (
    <div className={styles.annotation}>
        {children}
        <span className={styles.annotation_text}>{text}</span>
    </div>
);

export default Annotation;