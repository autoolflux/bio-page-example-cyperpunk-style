import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '../utils/cn';

interface LinkCardProps {
    title: string;
    url: string;
    iconName: string;
    layout?: 'large' | 'medium' | 'small';
    color?: string;
    className?: string;
    isFeatured?: boolean;
}

export const LinkCard: React.FC<LinkCardProps> = ({
    title,
    url,
    iconName,
    layout = 'medium',
    color,
    className,
    isFeatured
}) => {
    // Dynamic Icon
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Link;

    const [copied, setCopied] = useState(false);
    const isCopyable = url.startsWith('#copy:');
    const displayUrl = isCopyable ? url.replace('#copy:', '') : url;

    const handleClick = (e: React.MouseEvent) => {
        if (isCopyable) {
            e.preventDefault();
            navigator.clipboard.writeText(displayUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <motion.a
            href={!isCopyable ? url : '#'}
            onClick={handleClick}
            target={!isCopyable && !url.startsWith('#') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={cn(
                "relative group block overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10",
                // Layout specific classes
                layout === 'large' && "col-span-2 row-span-2 min-h-[220px] flex flex-col justify-between", // Large square-ish
                layout === 'medium' && "col-span-2 h-[80px] flex items-center gap-4", // Wide rectangle
                layout === 'small' && "col-span-1 aspect-square flex flex-col items-center justify-center gap-2 text-center", // Small square
                className
            )}
            whileHover={{ y: -8, scale: 1.02, rotateZ: 0.5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -4, 0], // Subtle floating
            }}
            transition={{
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2 // Stagger the floating
                },
                opacity: { duration: 0.5 },
                default: { duration: 0.3 }
            }}
            viewport={{ once: true }}
        >
            {/* Background Gradient Glow */}
            {color && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
                />
            )}

            {/* Content Rendering */}
            {layout === 'large' && (
                <>
                    <div className="relative z-10 flex items-start justify-between w-full">
                        <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                            <Icon size={28} className={color ? `text-[${color}]` : ''} style={{ color: color }} />
                        </div>
                        {isFeatured && (
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white/90 backdrop-blur-md rounded-full">
                                Featured
                            </span>
                        )}
                    </div>
                    <div className="relative z-10 space-y-1">
                        <h3 className="text-xl font-bold leading-tight">{title}</h3>
                        <p className="text-sm text-white/50 truncate flex items-center gap-1">
                            {isCopyable ? 'Copy Info' : 'Visit Link'}
                            <LucideIcons.ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                        </p>
                    </div>
                </>
            )}

            {layout === 'medium' && (
                <>
                    <div className="relative z-10 p-3 bg-white/10 rounded-xl shrink-0 group-hover:rotate-6 transition-transform">
                        <Icon size={22} style={{ color: color }} />
                    </div>
                    <div className="relative z-10 flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{title}</h3>
                        {copied ? (
                            <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                                <LucideIcons.Check size={12} /> Copied!
                            </span>
                        ) : (
                            null
                        )}
                    </div>
                    <div className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        {isCopyable ? <LucideIcons.Copy size={18} /> : <LucideIcons.ArrowRight size={20} />}
                    </div>
                </>
            )}

            {layout === 'small' && (
                <>
                    <div className="relative z-10 p-3 bg-white/10 rounded-full mb-1 group-hover:scale-110 transition-transform">
                        <Icon size={24} style={{ color: color }} />
                    </div>
                    <h3 className="relative z-10 text-xs font-medium truncate w-full px-1">{title}</h3>
                </>
            )}
        </motion.a>
    );
};
