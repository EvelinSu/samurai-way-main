import React from 'react';
import {Box} from "../../components/Box/Box";
import Input from "../../components/Form/Input";
import Button from "../../components/Button/Button";
import { SLabel } from '../../components/Checkbox/styled';

type TSearchFormProps = {
    searchText: string,
    setSearchText: (text: string) => void
    onSearchHandler: () => void
    textInUrl?: string
}

const SearchForm: React.FC<TSearchFormProps> = ({searchText, setSearchText, textInUrl, onSearchHandler}) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onSearchHandler()
        }
    }

    return (
        <Box gap={20}>
            <SLabel style={{gap: 20}}>
                <Input
                    placeholder={'Search by name'}
                    value={searchText}
                    onChange={onChangeHandler}
                    onKeyUp={onKeyDownHandler}
                />
                <Button isDisabled={(searchText === textInUrl) || (!searchText && !textInUrl)}
                        type={"submit"}
                        label={'Search'}
                        onClick={onSearchHandler}
                />
            </SLabel>

        </Box>
    );
};

export default SearchForm;
