import React from 'react';
import {SSiteContent} from "../../layout/styled";
import Avatar from "../../common/Avatar/Avatar";
import userPhoto from "../../assets/img/default-photo.png";
import {changeProfile, putAvatar} from "../../../bll/profileReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {Box} from "../../common/Box/Box";
import Input from "../../common/Form/Input";
import {useFormik} from "formik";
import * as Yup from "yup";
import {STitle} from "../../common/Text/STitle";
import {SForm} from "../../common/Form/styled";
import Checkbox from "../../common/Checkbox/Checkbox";
import Button from "../../common/Button/Button";
import PagePanel from "../PagePanel";
import FacebookIcon from "../../assets/icons/contacts/FacebookIcon";
import InstagramIcon from "../../assets/icons/contacts/InstagramIcon";
import VkIcon from "../../assets/icons/contacts/VkIcon";
import GitHubIcon from "../../assets/icons/contacts/GitHubIcon";
import TwitterIcon from "../../assets/icons/contacts/TwitterIcon";
import MainLinkIcon from "../../assets/icons/contacts/MainLinkIcon";
import WebsiteIcon from "../../assets/icons/contacts/WebsiteIcon";
import YouTubeIcon from "../../assets/icons/contacts/YouTubeIcon";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../bll/types";
import {TActiveProfile} from "../../../dal/api/types";

export const SettingsPage = () => {
    const dispatch = useAppDispatch()

    const activeProfile = useAppSelector(state => state.profile.activeProfile)
    const myId = useAppSelector(state => state.auth.account.id)
    const isFetching = useAppSelector(state => state.profile.isFetching)

    const changeAvatarHandler = (newAvatar: FormData) => {
        dispatch(putAvatar(newAvatar))
    }

    const {
        handleBlur,
        handleSubmit,
        touched,
        handleChange,
        setFieldValue,
        values,
        errors,
    } = useFormik({
        initialValues: {...activeProfile.contacts, ...activeProfile},
        validationSchema: Yup.object({
            fullName: Yup.string()
                         .min(3, "Must be more than 2")
                         .max(50, "Must be less than 50")
                         .required('Required')
            ,
        }),
        onSubmit: (values) => {
            const validProfile: TActiveProfile = {
                aboutMe: "Just me",
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                fullName: values.fullName,
                userId: values.userId,
                contacts: {
                    facebook: values.facebook,
                    website: values.website,
                    vk: values.vk,
                    twitter: values.twitter,
                    instagram: values.instagram,
                    youtube: values.youtube,
                    github: values.github,
                    mainLink: values.mainLink,
                },
                photos: activeProfile.photos
            }
            dispatch(changeProfile(validProfile))
        }
    });

    if (!activeProfile.userId) return <Redirect to={PATH.profile + "/" + myId} />

    return (
        <SSiteContent>
            <PagePanel title={"Settings"}>
            </PagePanel>
            <SForm onSubmit={handleSubmit}>
                <Box alignItems={"center"}>
                    <Avatar
                        onClick={changeAvatarHandler}
                        img={activeProfile.photos.large || userPhoto}
                        size={"large"}
                        isEditable
                    />
                    <Box flexDirection={"column"} width={"40%"} gap={25}>
                        <Input
                            error={touched.fullName ? errors.fullName : ""}
                            value={values.fullName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="name"
                            name="fullName"
                            placeholder="Nickname"
                        />
                        <Input
                            value={values.lookingForAJobDescription}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="text"
                            name="lookingForAJobDescription"
                            placeholder="Looking for a job (description)"
                        />
                        <Checkbox
                            label="Looking for a job"
                            type="checkbox"
                            name="lookingForAJob"
                            onChange={(event) => setFieldValue("lookingForAJob", event.target.checked)}
                        />
                    </Box>
                </Box>
                <Box>
                    <STitle>
                        Contacts
                    </STitle>
                </Box>
                <Box>
                    <Input
                        value={values.github}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="github"
                        placeholder="Github"
                        icon={<GitHubIcon />}
                    />
                    <Input
                        value={values.vk}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="vk"
                        placeholder="VK"
                        icon={<VkIcon />}
                    />
                </Box>
                <Box>
                    <Input
                        value={values.facebook}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="facebook"
                        placeholder="Facebook"
                        icon={<FacebookIcon />}
                    />
                    <Input
                        value={values.instagram}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="instagram"
                        placeholder="Instagram"
                        icon={<InstagramIcon />}
                    />
                </Box>
                <Box>
                    <Input
                        value={values.twitter}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="twitter"
                        placeholder="Twitter"
                        icon={<TwitterIcon />}
                    />
                    <Input
                        value={values.website}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="website"
                        placeholder="Website"
                        icon={<WebsiteIcon />}
                    />
                </Box>
                <Box>
                    <Input
                        value={values.youtube}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="youtube"
                        placeholder="Youtube"
                        icon={<YouTubeIcon />}
                    />
                    <Input
                        value={values.mainLink}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        name="mainLink"
                        placeholder="Main link"
                        icon={<MainLinkIcon />}
                    />
                </Box>
                <Box justifyContent={"center"} margin={"20px 0 0 0"}>
                    <Button
                        type={"submit"}
                        size={"lg"}
                        label={"Save changes"}
                        isLoading={isFetching}
                    />
                    <></>
                </Box>
            </SForm>
        </SSiteContent>
    )
};

