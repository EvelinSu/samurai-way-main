import React, {Component} from 'react';
import axios from "axios";
import {TRootState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import Profile from "./Profile";
import {profileToggleLoader, setActiveProfile, TActiveProfile} from "../../redux/profileReducer";
import LoaderIcon from "../../assets/loaders/loader";
import {withRouter} from "react-router-dom";

type TProfileContainerProps = TMapStateToProps & TMapDispatchToProps

// const activeUserId = useParams<{ id: string }>()

class ProfileAPI extends Component<TProfileContainerProps> {
    componentDidMount() {
        this.props.profileToggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${'25991'}`)
             .then(response => {
                     this.props.setActiveProfile(response.data)
                     this.props.profileToggleLoader(false)
                 }
             )
    }

    render() {
        return (
            this.props.isFetching
                ? <LoaderIcon />
                : <Profile activeProfile={this.props.activeProfile} />
        )
    }

}

type TMapStateToProps = {
    activeProfile: TActiveProfile
    isFetching: boolean
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        activeProfile: state.profilePage.activeProfile,
        isFetching: state.profilePage.isFetching
    }
}

type TMapDispatchToProps = {
    setActiveProfile: (activeProfile: TActiveProfile) => void
    profileToggleLoader: (isFetching: boolean) => void
}


export const ProfileContainer = connect(mapStateToProps, {setActiveProfile, profileToggleLoader})(ProfileAPI)