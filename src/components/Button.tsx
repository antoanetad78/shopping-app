'use client';

import React from 'react';
import { ButtonProps } from '@/types/types';

function Button({ text, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
}

export default Button;
