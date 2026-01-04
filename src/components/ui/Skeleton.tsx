import React from 'react';
import { cn } from '../../utils/cn';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("animate-pulse bg-white/10 rounded-2xl", className)} />
    );
};

export const CardSkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Skeleton className="col-span-2 row-span-2 h-[220px]" />
        <Skeleton className="col-span-2 h-[80px]" />
        <Skeleton className="col-span-1 aspect-square" />
        <Skeleton className="col-span-1 aspect-square" />
    </div>
);
