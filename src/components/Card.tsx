'use client';
import { CardProps } from '@/types/types';
import Image from 'next/image';

function Card<T extends object>(props: CardProps<T>) {
    const { title, subtitle, image, description, extra, className } = props;

    return (
        <div
            className={`
    flex flex-col items-center justify-between
    rounded-lg border border-gray-200 dark:border-gray-700
    bg-white dark:bg-gray-900
    p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5
    transition-all duration-200 ease-out
    ${className || ''}
  `}
        >
            <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 text-center'>
                {title}
            </h2>
            {subtitle && (
                <h3 className='text-sm text-gray-500 dark:text-gray-400 mb-2 text-center'>
                    {subtitle}
                </h3>
            )}
            {image && (
                <div className='w-full h-40 overflow-hidden rounded-md mb-3'>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className='w-full h-full object-cover transition-transform duration-200 group-hover:scale-105'
                    />
                </div>
            )}
            {description && (
                <p className='text-sm text-gray-700 dark:text-gray-300 text-center mb-3 line-clamp-3'>
                    {description}
                </p>
            )}
            {extra}
        </div>
    );
}

export default Card;
