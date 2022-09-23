import React, {Component} from 'react';
import axios from "axios";
import {TRootState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import Profile from "./Profile";
import {profileToggleLoader, setActiveProfile, TActiveProfile} from "../../redux/profileReducer";
import LoaderIcon from "../../assets/loaders/loader";
import {RouteComponentProps, withRouter} from "react-router-dom";

type TProfileContainerProps = RouteComponentProps<TPathParams> & TMapStateToProps & TMapDispatchToProps

type TPathParams = {
    id: string
}

class ProfileContainer extends Component<TProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.match.params.id || '2'
        this.props.profileToggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile${'/' + userId}`)
             .then(response => {
                     this.props.setActiveProfile(response.data)
                     setTimeout(() => {
                         this.props.profileToggleLoader(false)

                     }, 500)
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

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setActiveProfile, profileToggleLoader})(WithUrlDataComponent)