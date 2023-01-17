import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const options = [
    {
        label: 'Terbaru',
        value: 'new',
    },
    {
        label: 'Terlama',
        value: 'old',
    },
    // {
    //     label: 'Persen Target',
    //     value: 'target',
    // },
    // {
    //     label: 'Tenggat Waktu',
    //     value: 'deadline',
    // },
];

const Sort = () => {
    let { category, search, filter } = useParams();
    if (search === undefined) {
        search = '';
    }
    if (category === undefined) {
        category = "Semua";
    }

    let defaultOption = 0;
    if (filter === "old") {
        defaultOption = 1;
    }
    // else if (filter === "target"){
    //     defaultOption = 2;
    // }
    // else if (filter === "deadline"){
    //     defaultOption = 3;
    // }
    else {
        defaultOption = 0;
    }

    const handleInputChange = (e: any) => {
        window.location.href = `/explore/${category}/${(search !== '') ? search : ''}/${e.value}`
    };

    return (
        <div
            className="
            flex flex-col mt-6 flex-col-reverse
            xl:flex-row xl:items-center"
        >
            <div className="mt-5 xl:basis-1/2 xl:mt-0">
                <p
                    className="
                    text-xs
                    xl:text-xl
                    "
                >
                    Jelajahi <b>12345 campaign</b>
                </p>
            </div>
            <div
                className="
                flex flex-row items-center justify-between
                xl:basis-1/2 xl:justify-end
                "
            >
                <label
                    htmlFor="sortFilter"
                    className="
                    text-xs font-bold mr-5
                    xl:text-xl"
                >
                    Urutkan berdasarkan
                </label>
                <Select
                    className="w-[200px] text-xs
                        xl:text-xl xl:w-[300px]"
                    options={options}
                    defaultValue={options[defaultOption]}
                    isSearchable={false}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: '4px',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            '&:hover': {
                                borderColor: 'rgba(0, 123, 199, 1)',
                            },
                            '@media only screen and (min-width: 1280px)': {
                                padding: '16px',
                            },
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: '8px',
                            backgroundColor: state.isDisabled
                                ? undefined
                                : state.isSelected
                                ? 'rgba(0, 123, 199, 1)'
                                : state.isFocused
                                ? 'rgba(0, 123, 199, 0.3)'
                                : undefined,
                            '@media only screen and (min-width: 1280px)': {
                                padding: '16px',
                            },
                        }),
                    }}
                    onChange={(choice) => handleInputChange(choice)}
                />
            </div>
        </div>
    );
};

export default Sort;
