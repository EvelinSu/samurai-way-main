import React, {ChangeEvent, FocusEvent, useState} from 'react';
import {SEditableText} from "./styled";
import {SText} from "../Text/SText";

type TEditableText = {
    text: string
    placeholder: string
    myId: number
    setText: (newText: string) => void
    maxLength: number
    title?: string
    currentId?: number
}

const EditableText: React.FC<TEditableText> = ({setText, text, myId, maxLength, currentId, ...props}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [error, setError] = useState('')

    const onBlurHandler = (e: FocusEvent<HTMLSpanElement>) => {
        let value = e.currentTarget.innerText
        if (value.length >= maxLength) {
            return setError(`the message length should not be more than ${maxLength}`)
        }
        if (error.length) setError('')
        if (value === text) return;
        setText(value.trim())
        setIsEditable(false)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSpanElement>) => {
        let value = e.currentTarget.innerText
        if (value.length >= maxLength) return setError(`the message length should not be more than ${maxLength}`)
        if (error.length) setError('')
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        let value = e.currentTarget.innerText
        if(e.key === 'Enter' && e.shiftKey) return
        if(e.key === 'Enter') {
            e.preventDefault()
            setText(value.trim())
            setIsEditable(false)
        }
    }

    return (
        myId === currentId
            ? (
                <SEditableText
                    opacity={(!text && !isEditable) ? 0.3 : 1}
                    onClick={() => setIsEditable(true)}
                    onBlur={onBlurHandler}
                    onKeyDown={onKeyDownHandler}
                    onInput={onChangeHandler}
                    contentEditable={isEditable}
                    suppressContentEditableWarning={isEditable}
                    isError={!!error}
                    error={error}
                    title={props.title && props.title}
                >
                    {text || (!isEditable && props.placeholder)}
                </SEditableText>
            )
            : (
                <SText margin={"4px 10px"}  opacity={!text ? 0.3 : 1}>
                    {text || props.placeholder}
                </SText>
            )

    );
};

export default EditableText;
