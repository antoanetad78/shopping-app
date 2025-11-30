import { ElementType, HTMLAttributes } from 'react';

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: [
        {
            rating: number;
            comment: string;
            date: string;
            reviewerName: string;
            reviewerEmail: string;
        }
    ];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: Date;
        updatedAt: Date;
        barcode: string;
        qrCode: string;
    };
    thumbnail: string;
    images: string[];
};

export type CardProps<T> = {
    title: string;
    subtitle?: string;
    image?: string;
    description?: string;
    onClick?: () => void;
    data: T;
    extra?: React.ReactNode;
    className?: string;
};

export interface TextProps extends HTMLAttributes<ElementType> {
    text: string;
    as?: ElementType;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick: () => void;
    className?: string;
}
