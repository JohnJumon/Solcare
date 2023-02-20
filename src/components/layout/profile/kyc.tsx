import Thumbnail from '../../../image/placeholder.svg';
import { useEffect, useState } from 'react';
import { toast, Id } from 'react-toastify';
import axios from 'axios';
import {
    API_BASE_URL,
    STATUS_KYC_ACCEPTED,
    STATUS_KYC_DECLINED,
    STATUS_KYC_PENDING,
    STATUS_KYC_REMOVED,
    OPACITY
} from '../../../utils';
const KYC = (props: any) => {
    const [input, setInput] = useState<{ [string: string]: any }>({
        nik: null,
        idCard: null,
        face: null,
        faceWithIdCard: null,
    });

    const [uploadedPic, setUploadedPic] = useState<{ [string: string]: any }>({
        idCard: '',
        face: '',
        faceWithIdCard: '',
    });

    const [blob, setBlob] = useState<{ [string: string]: any }>({
        idCard: '',
        face: '',
        faceWithIdCard: '',
    });

    const [KYCInfo, setKYCInfo] = useState<any>();

    const handleInputChange = (e: any) => {
        const target = e.target;
        const name = target.name;
        console.log(target.files);
        setInput((state) => {
            const newState = {
                ...state,
            };
            newState[name] = name === 'nik' ? target.value : target.files[0];
            return newState;
        });

        if (name === 'idCard' || name === 'face' || name === 'faceWithIdCard') {
            let file = target.files[0];
            if (file.type === 'image/png' || file.type === 'image/jpeg') {
                setUploadedPic((state) => {
                    const newState = {
                        ...state,
                    };
                    newState[name] = file.name;
                    return newState;
                });
                setBlob((state) => {
                    const newState = {
                        ...state,
                    };
                    newState[name] = URL.createObjectURL(file);
                    URL.revokeObjectURL(file);
                    return newState;
                });
            } else {
                toast.error('Format file invalid');
            }
        }
    };

    const submitInfo = async () => {
        let token = localStorage.getItem('token');

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        if (
            input.nik === null ||
            input.idCard === null ||
            input.face === null ||
            input.faceWithIdCard === null
        ) {
            return toast.error(
                'Mohon isi seluruh data pada form terlebih dahulu'
            );
        }
        try {
            const formData = new FormData();
            formData.append('nik', input.nik);
            formData.append('idCard', input.idCard);
            formData.append('face', input.face);
            formData.append('faceWithIdCard', input.faceWithIdCard);

            const resp = await axios.postForm(
                API_BASE_URL + '/v1/users/kyc',
                formData,
                { headers }
            );
            if (resp.data.status !== 200) {
                toast.error(
                    `Data Gagal Disimpan! Pastikan data baru tidak sama dengan data sebelumnya`
                );
                return;
            }
            toast.success('Data Berhasil Tersimpan');
        } catch (e) {
            console.log(e);
            toast.error(
                `Data Gagal Disimpan! Pastikan data sudah ditulis dengan format yang benar`
            );
            return;
        }
    };

    const fetchUserKYC = async () => {
        let token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const userData = await axios.get(`${API_BASE_URL}/v1/users/kyc`, {
            headers,
        });

        if (userData.data.data != undefined) {
            setKYCInfo(userData.data.data);
        }
    };

    useEffect(() => {
        fetchUserKYC();
    }, []);

    const showKYCStatus = (status: number) => {
        if (status === STATUS_KYC_PENDING) {
            return <p className="text-blue-600">Pending</p>;
        } else if (status === STATUS_KYC_ACCEPTED) {
            return <p className="text-green-600">Terverifikasi</p>;
        } else if (status === STATUS_KYC_DECLINED) {
            return (
                <p className="text-red-600">Permintaan Verifikasi Ditolak</p>
            );
        } else if (status === STATUS_KYC_REMOVED) {
            return <p className="text-red-600">Verifikasi Ditarik</p>;
        }
    };

    return (
        <div className="flex flex-col">
            <p className="font-bold text-xs md:text-lg">KYC</p>
            <div className="mt-2">
                <p className="text-xs md:text-lg">No. KTP</p>
                <input
                    className="
                        text-xs p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        md:text-xl md:p-4 md:rounded-[10px]"
                    type="text"
                    name="nik"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        KTP
                    </p>
                    <label
                        htmlFor="dropzone-file-1"
                        style={{
                            backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, ${blob.idCard == '' ? 0 : OPACITY}), 
                            rgba(0, 0, 0, ${blob.idCard == '' ? 0 : OPACITY})
                          ),url(${blob.idCard})`
                        }}
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file-1"
                                type="file"
                                className="hidden"
                                name="idCard"
                                accept="image/png, image/jpeg"
                                value={input.idCard?.webkitRelativePath}
                                onChange={handleInputChange}
                            />

                        </div>
                    </label>
                    <p
                        id="address-tag-3"
                        className="truncate max-w-[10rem] text-xs md:text-base font-medium"
                    >
                        {uploadedPic.idCard}
                    </p>
                </div>
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        Foto Diri
                    </p>
                    <label
                        htmlFor="dropzone-file-2"
                        style={{
                            backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, ${blob.face == '' ? 0 : OPACITY}), 
                            rgba(0, 0, 0, ${blob.face == '' ? 0 : OPACITY})
                          ),url(${blob.face})`
                        }}
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file-2"
                                type="file"
                                className="hidden"
                                name="face"
                                accept="image/png, image/jpeg"
                                value={input.face?.webkitRelativePath}
                                onChange={handleInputChange}
                            />

                        </div>
                    </label>
                    <p
                        id="address-tag-3"
                        className="truncate max-w-[10rem] text-xs md:text-base font-medium"
                    >
                        {uploadedPic.face}
                    </p>
                </div>
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        KTP & Foto Diri
                    </p>
                    <label
                        htmlFor="dropzone-file-3"
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, ${blob.faceWithIdCard == '' ? 0 : OPACITY}), 
                                rgba(0, 0, 0, ${blob.faceWithIdCard == '' ? 0 : OPACITY})
                              ),url(${blob.faceWithIdCard})`,
                        }}
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file-3"
                                type="file"
                                className="hidden"
                                name="faceWithIdCard"
                                accept="image/png, image/jpeg"
                                value={input.faceWithIdCard?.webkitRelativePath}
                                onChange={handleInputChange}
                            />
                        </div>
                    </label>
                    <p
                        id="address-tag-3"
                        className="truncate max-w-[10rem] text-xs md:text-base font-medium"
                    >
                        {uploadedPic.faceWithIdCard}
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center mt-4">
                <button
                    className="
                    basis-1/2 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]"
                    onClick={submitInfo}
                >
                    Verifikasi
                </button>
                <p className="basis-1/2 text-xs md:text-lg">
                    Status verifikasi
                    {KYCInfo === undefined ? (
                        <></>
                    ) : (
                        showKYCStatus(KYCInfo.status)
                    )}
                </p>
            </div>
        </div>
    );
};

export default KYC;
