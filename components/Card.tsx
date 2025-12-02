import Image from 'next/image';

interface CardProps {
    title: string;
    subtitle: string;
    meta: string;
    price: number;
    imageSrc: string;
    badge?: {
        label: string;
        tone: 'orange' | 'red' | 'green';
    };
}

export default function Card({
    title,
    subtitle,
    meta,
    price,
    imageSrc,
    badge,
}: CardProps) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    const toneColors = {
        orange: 'text-support-orange',
        red: 'text-support-red',
        green: 'text-support-green',
    };

    return (
        <div className="group flex flex-col gap-2 bg-light-100 ring-2 ring-light-200 hover:ring-light-300 rounded-t-xl">
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-light-200  rounded-t-xl">
                {badge && (
                    <div className={`absolute left-4 top-4 z-10 rounded-full bg-light-100 px-3 py-1 text-xs font-medium ${toneColors[badge.tone]} shadow-sm`}>
                        {badge.label}
                    </div>
                )}
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col p-5">
                <div className="flex items-start justify-between">
                    <h3 className="text-body-medium font-medium text-dark-900">{title}</h3>
                    <p className="text-body-medium font-medium text-dark-900">{formattedPrice}</p>
                </div>
                <p className="text-body text-dark-700">{subtitle}</p>
                <p className="text-body text-dark-700">{meta}</p>
            </div>
        </div>
    );
}
