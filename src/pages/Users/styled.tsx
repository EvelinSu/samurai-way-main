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

export const BoxShadowContent = styled(Box)(props => ({
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    padding: 15,
    borderRadius: "inherit",
    boxShadow: "inset 0 0 100px 100px rgba(0, 0, 0, 0.8)",
    transition: "0.7s",
    "&:hover": {
        color: "rgba(255, 255, 255, 0.3)",
        boxShadow: "inset 0 0 100px 1px rgba(0, 0, 0, 0.8)",


    }
}))

type TUserNameProps = {
    isHovered?: boolean
}

export const SUserName = styled.div<TUserNameProps>(props => ({
    fontSize: 24,
    color: theme.colors.primaryLightest,
    fontWeight: 600,
    transition: "0.5s",
    ...props.isHovered && {
        textShadow: "0 0 5px rgba(0, 0, 0, 1)",
        opacity: 0.5,

    }
}))

export const SUserStatus = styled.div(props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    flexGrow: 1,


}))

export const SUserStatusText = styled.div(props => ({
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "min-content",
    maxHeight: "2.9rem",

}))