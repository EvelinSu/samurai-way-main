import styled from "styled-components";
import {Box} from "../../components/Box/Box";
import {theme} from "../../styles/constants";

export const SUsers = styled.div(() => ({

}))

type TUserBox = {
    img?: string,
}

export const SUserBox = styled(Box)<TUserBox>((props) => ({
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: theme.blockSettings.borderRadius,
}))


export const SUserBoxHeader = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    height: 60,
    maxWidth: "100%",
    gap: 15,
}))

export const BoxShadowContent = styled(Box)(props => ({
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    padding: 15,
    borderRadius: "inherit",
    boxShadow: `inset 0 0 100px 200px ${theme.colors.primaryDarkAlpha}`,
    transition: "0.3s",
    "&:hover": {
        color: "rgba(255, 255, 255, 0.3)",
        boxShadow: `inset 0 0 100px 50px ${theme.colors.primaryDarkAlpha}`,

    }
}))

type TUserNameProps = {
    isHovered?: boolean
}

export const SUserName = styled.div<TUserNameProps>(props => ({
    fontSize: 18,
    color: theme.colors.primaryLightest,
    fontWeight: 600,
    transition: "0.5s",
    textOverflow: "ellipsis",
    overflow: "hidden",
    ...props.isHovered && {
        textShadow: "0 0 5px rgba(0, 0, 0, 1)",
        opacity: 0.5,
        color: "#fff",
    }
}))

export const SUserStatus = styled.div(props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 14,
    flexGrow: 1,
}))

type TSUserStatusTextProps = {
    opacity?: number
}

export const SUserStatusText = styled.div<TSUserStatusTextProps>(props => ({
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxHeight: "2.4rem",
    minHeight: "2.4rem",
    opacity: props.opacity,
}))


