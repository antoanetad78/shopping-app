'use client';

import React from 'react';

type RatingProps = {
    value: number;
    className?: string;
    showValue?: boolean;
};

export default function Rating({
    value,
    className = '',
    showValue,
}: RatingProps) {
    const stars = Math.round(value * 2) / 2; // e.g. 4.3 → 4.5

    return (
        <div className={`flex items-center justify-center gap-1 ${className}`}>
            {[1, 2, 3, 4, 5].map((i) => {
                const isHalf = stars >= i - 0.5 && stars < i;
                const isFull = stars >= i;

                return (
                    <div
                        key={i}
                        className='relative w-4 h-4'
                    >
                        {/* Empty star background */}
                        <span className='absolute text-gray-300 dark:text-gray-600'>
                            ★
                        </span>
                        {/* Half star (when needed) */}
                        {isHalf && (
                            <div className='absolute w-1/2 h-full overflow-hidden'>
                                <span className='text-yellow-400'>★</span>
                            </div>
                        )}
                        {/* Full star (when needed) */}
                        {isFull && (
                            <span className='absolute text-yellow-400'>★</span>
                        )}
                    </div>
                );
            })}
            {showValue && (
                <span className='ml-1 text-xs text-gray-500 dark:text-gray-400'>
                    {value.toFixed(1)}
                </span>
            )}
        </div>
    );
}
