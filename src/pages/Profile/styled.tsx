import styled from "styled-components";
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {theme} from "../../styles/constants";

export const SProfileHeaderImage = styled.img(props => ({
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    height: 180,
    borderRadius: "inherit",
    opacity: 0.8,

}))

type TSProfileProps = {
    stylized?: boolean
}
export const SProfile = styled(SFlexBlock)<TSProfileProps>(({stylized}) => ({
    flexDirection: "column",
    height: "100%",
    ...stylized && {
        padding: "30px",
        margin: "30px 0",
        borderRadius: theme.blockSettings.borderRadius,
        background: `linear-gradient(to left bottom, ${theme.colors.secondary}, ${theme.colors.primaryLight})`,
        boxShadow: "0 0 8px 0 rgba(255, 255, 255, 0.05)"
    }
}))