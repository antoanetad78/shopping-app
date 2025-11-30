import { TextProps } from '@/types/types';

export default function Text({ text, className, as: Tag = 'div' }: TextProps) {
    return <Tag className={className}>{text}</Tag>;
}
