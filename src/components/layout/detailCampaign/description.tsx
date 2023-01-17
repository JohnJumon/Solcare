import { useEffect, useState } from 'react';

const Description = (props: any) => {
    const [currentText, setCurrentText] = useState('line-clamp-6');
    const [currentLabel, setCurrentLabel] = useState('Baca selengkapnya');

    const showText = () => {
        if (currentText === 'line-clamp-6') {
            setCurrentText('line-clamp-none');
            setCurrentLabel('Tutup deskripsi');
        } else {
            setCurrentText('line-clamp-6');
            setCurrentLabel('Baca selengkapnya');
        }
    };

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setInitializing(false);
    }, []);

    if (initializing === true) {
        return null;
    }

    return (
        <div
            className="
            mt-2 text-[8px] text-right
            md:mt-6 md:text-[15px]"
        >
            <h2
                className="
                text-xs font-bold text-left mb-1
                md:text-xl md:mb-2"
            >
                Deskripsi
            </h2>
            <p className={`text-justify ${currentText}`}>
                {props.campaign.description}
            </p>
            <button
                className="font-bold hover:underline hover:decoration-[#007BC7]"
                onClick={() => showText()}
            >
                {currentLabel}
            </button>
        </div>
    );
};

export default Description;
