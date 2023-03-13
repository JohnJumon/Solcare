import { useEffect, useState } from 'react';

const Description = (props: any) => {
    const campaign = props.campaign;

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

    let doc = document.getElementById('desc');
    let height = doc?.offsetHeight.toString();

    return (
        <div className="mt-2 text-[8px] text-right md:mt-6 md:text-[15px]">
            <h2 className="text-xs font-bold text-left mb-1 md:text-xl md:mb-2">
                Deskripsi
            </h2>
            <p id="desc" className={`text-justify ${currentText}`}>
                {campaign.description}
            </p>
            <button
                className="font-bold hover:underline hover:decoration-[#007BC7]"
                onClick={() => showText()}
                hidden={height === '135' ? false : true}
            >
                {currentLabel}
            </button>
        </div>
    );
};

export default Description;
