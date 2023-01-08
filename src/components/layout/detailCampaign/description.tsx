import { useEffect, useState } from 'react';

const Description = () => {
    const [currentText, setCurrentText] = useState("line-clamp-6");
    const [currentLabel, setCurrentLabel] = useState("Baca selengkapnya");

    const showText = () => {
        if (currentText === "line-clamp-6") {
            setCurrentText("line-clamp-none");
            setCurrentLabel("Tutup deskripsi");
        }
        else {
            setCurrentText("line-clamp-6");
            setCurrentLabel("Baca selengkapnya");
        }
    };

    return (
        <div className="
            mt-2 text-[8px] text-right
            md:mt-6 md:text-[15px]">
            <h2 className="
                text-xs font-bold text-left mb-1
                md:text-xl md:mb-2">Deskripsi</h2>
            <p className={`text-justify ${currentText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar imperdiet maximus. Nunc at feugiat nisi, ut sagittis massa. Nulla non faucibus sapien. Sed consectetur lacinia congue. Vestibulum ut felis volutpat nunc posuere viverra nec id nibh. Donec iaculis nisi sit amet dolor auctor, quis molestie lorem aliquet. Donec eu diam lorem. Suspendisse potenti. Pellentesque ante diam, consequat in risus consequat, lacinia mollis tortor.
                <br />
                Suspendisse neque nulla, euismod vitae fermentum eu, vulputate nec lectus. Nunc lobortis, odio vestibulum finibus mattis, dolor lorem tincidunt nulla, non laoreet nisi velit et nibh. Integer nulla mi, blandit sed quam vel, aliquet hendrerit leo. Maecenas pellentesque arcu nibh, ac pretium justo accumsan eu. Nunc gravida efficitur laoreet. In at ante odio. Vestibulum turpis enim, aliquet vel mollis eget, pulvinar in mauris. In mi dolor, scelerisque id elit at, venenatis porta erat.
                <br />
                Pellentesque iaculis nisl in orci volutpat facilisis. Maecenas vitae felis accumsan, dictum odio sit amet, lacinia ligula. Praesent rutrum justo dictum metus condimentum eleifend. In fermentum consectetur nunc vel accumsan. Vivamus rutrum ligula id justo gravida ornare. Suspendisse sodales sem non turpis feugiat accumsan. Proin interdum nisi sed dui viverra dictum. Aliquam eget neque rutrum, interdum urna consectetur, tincidunt nisl. Nunc eget magna ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ullamcorper ex a nisl imperdiet, a cursus nibh ultrices. Duis sagittis, augue sed faucibus commodo, nulla elit porta justo, eget egestas massa erat id augue. Nam tempus diam vel purus venenatis imperdiet. Duis finibus vitae dui vel commodo. Ut ut tortor vehicula, aliquet magna nec, laoreet arcu.
                <br />
                Praesent eu eleifend augue, nec vehicula risus. In at dui tellus. Curabitur maximus odio in lorem efficitur, at volutpat velit egestas. Aliquam viverra, dui non bibendum volutpat, ipsum nisi porttitor diam, in tincidunt tortor massa commodo felis. Nam quis enim nisi. Morbi dignissim ultrices risus, quis ullamcorper arcu eleifend at. Aliquam rhoncus eget elit non dapibus. Donec non nulla libero. Etiam lacus elit, dictum vel urna a, porttitor luctus sapien. Nulla et nibh ipsum. In elementum hendrerit maximus. Ut eleifend commodo felis, sit amet auctor libero faucibus non. Sed lacinia pellentesque mauris et mollis. Nunc nec leo ex. Duis ut ligula interdum, venenatis neque non, tristique ligula.
                <br />
                Sed pellentesque libero in tincidunt ornare. Curabitur et nibh ut nulla convallis accumsan eu ac urna. Aliquam sit amet accumsan est. Donec cursus ac augue eu euismod. Fusce lobortis mollis eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec neque eu est euismod consequat eu id nisi.</p>
            <button className="font-bold hover:underline hover:decoration-[#007BC7]" onClick={() => showText()}>{currentLabel}</button>
        </div>
    );
};

export default Description;