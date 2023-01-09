import Select from 'react-select';

const options = [
    {
        label: 'Terbaru',
        value: 'new',
    },
    {
        label: 'Terlama',
        value: 'old',
    },
    {
        label: 'Persen Target',
        value: 'target',
    },
    {
        label: 'Tenggat Waktu',
        value: 'deadline',
    },
];

const Sort = () => {
    const generateOption = () => {
        let components = [];
        for (let i = 0; i < options.length; i++) {
            components.push(
                <option className="" value={options[i].value}>
                    {options[i].label}
                </option>
            );
        }
        return components;
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
                    defaultValue={options[0]}
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
                />
            </div>
        </div>
    );
};

export default Sort;
