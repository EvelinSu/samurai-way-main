import React, {FC} from 'react';
import {Box} from "../../../components/Box/Box";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post";
import {theme} from "../../../styles/constants";
import {SText} from "../../../components/Text/SText";
import AddPost from "./AddPost";
import {useAppSelector} from "../../../hooks/useAppDispatch";
import {shallowEqual} from "react-redux";

type TPostsProps = {
    avatar: string,
    name: string,
    myId: number
}
const Posts: FC<TPostsProps> = (props) => {

    const state = useAppSelector(state => state.profilePage, shallowEqual)

    return (
        <>
            <Box
                gap={20}
                flexDirection={"column"}
            >
                <Box
                    alignItems={"center"}
                    gap={10}
                >
                    <STitle
                        color={theme.colors.primaryLightest}
                    >
                        {/*{state.activeProfile.fullName} posts*/}
                        Demo posts
                    </STitle>
                    <SText
                        opacity={0.4}
                        title={'Всего постов'}
                    >
                        ({state.posts.length})
                    </SText>
                </Box>
                {props.myId === state.activeProfile.userId && (
                    <AddPost newPostText={state.newPostText}/>
                )}
            </Box>
            {state.posts.length > 0
                ? <Box
                    gap={25}
                    flexDirection={"column"}
                >
                    {state.posts.map((post) => (
                        <Post
                            avatar={props.avatar}
                            key={post.id}
                            post={post}
                        />
                    ))}
                </Box>
                : <Box
                    justifyContent={"center"}
                    opacity={0.3}
                >
                    there are no posts
                </Box>
            }
        </>
    );
};

export default Posts;