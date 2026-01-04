import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

interface VCardProps {
    name: string;
    phone?: string;
    email?: string;
    url?: string;
}

export const VCardButton: React.FC<VCardProps> = ({ name, phone, email, url }) => {
    const generateVCard = () => {
        // Simple VCard generation
        const vcard = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${name}`,
            phone && `TEL;TYPE=CELL:${phone}`,
            email && `EMAIL:${email}`,
            url && `URL:${url}`,
            'END:VCARD'
        ].filter(Boolean).join('\n');

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            onClick={generateVCard}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <UserPlus size={18} />
            Save Contact
        </motion.button>
    );
};
