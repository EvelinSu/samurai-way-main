import React, {FC, useRef} from "react";
import {SAvatar, SAvatarDeleteIcon, SAvatarShadow} from "./styled";
import PhotoIcon from "../../assets/icons/PhotoIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";

type TAvatarProps = {
    img: string;
    size?: "large" | "small" | "smallest";
    isEditable?: boolean;
    onClick?: (newImage: FormData) => void;
    deleteImageHandler?: (e: React.MouseEvent<HTMLDivElement>) => void;
    isFetching?: boolean
};

const Avatar: FC<TAvatarProps> = ({size, img, isEditable, isFetching, ...props}) => {

    const inputFile = useRef<HTMLInputElement | null>(null);
    const onClickHandler = () => {
        inputFile.current?.click();
    };

    const encodeImageFileAsURL = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = (event.target.files && event.target.files[0]) as Blob
        let formData = new FormData();
        formData.append("image", file)
        props.onClick && props.onClick(formData)
    };

    const deleteImageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        props.deleteImageHandler && props.deleteImageHandler(e)
    }

    return (
        <SAvatar size={size} img={img}>
            {isEditable && !isFetching && (
                <SAvatarShadow onClick={onClickHandler}>
                    <input
                        accept=".png, .jpg, .jpeg, .gif"
                        type="file"
                        ref={inputFile}
                        onChange={encodeImageFileAsURL}
                        style={{display: "none"}}
                    />
                    <PhotoIcon />
                    {img && img !== "https://i.imgur.com/lqN6w1t.png" && (
                        <SAvatarDeleteIcon
                            onClick={deleteImageHandler}
                            title={"Delete avatar"}
                        >
                            <DeleteIcon />
                        </SAvatarDeleteIcon>
                    )}
                </SAvatarShadow>
            )}
        </SAvatar>
    );
};

export default Avatar;
