import React, {FocusEvent, useState} from 'react';
import {SEditableText} from "./styled";
import {useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {TActiveProfile} from "../../redux/profileReducer";
import {SText} from "../Text/SText";

type TEditableText = {
    text: string
    placeholder: string
    myId: number
    setText: (newText: string) => void
}

const EditableText: React.FC<TEditableText> = ({setText, text, placeholder, myId}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const state = useSelector<TRootState, TActiveProfile>(state => state.profilePage.activeProfile)

    const onBlurHandler = (e: FocusEvent<HTMLSpanElement>) => {
        setText(e.currentTarget.innerText)
        setIsEditable(false)
    }

    return (
        myId === state.userId
            ? (
                <SEditableText
                    tabIndex={1}
                    opacity={(!text && !isEditable) ? 0.3 : 1}
                    onDoubleClick={() =>  setIsEditable(true)}
                    onBlur={onBlurHandler}
                    contentEditable={isEditable}
                    suppressContentEditableWarning={isEditable}
                >
                    {text || (!isEditable && placeholder)}
                </SEditableText>
            )
            : (
                <SText
                    opacity={!text ? 0.3 : 1}
                >
                    {text || placeholder}
                </SText>)

    );
};

export default EditableText;
