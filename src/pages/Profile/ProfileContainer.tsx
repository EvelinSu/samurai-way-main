import React, {Component} from 'react';
import {TRootState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import Profile from "./Profile";
import {profileToggleLoader, setActiveProfile, TActiveProfile} from "../../redux/profileReducer";
import LoaderIcon from "../../assets/loaders/loader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authAPI, usersAPI} from "../../api/api";

type TProfileContainerProps = RouteComponentProps<TPathParams> & TMapStateToProps & TMapDispatchToProps

type TPathParams = {
    id: string
}

class ProfileContainer extends Component<TProfileContainerProps> {

    componentDidMount() {
        this.props.profileToggleLoader(true)
        authAPI.getMyData().then(me => {
            return me.id
        }).then((myId) => {
            usersAPI.getUser(this.props.match.params.id || myId).then(user => {
                    this.props.setActiveProfile(user)
                    setTimeout(() => {
                        this.props.profileToggleLoader(false)
                    }, 500)
                }
            )
        }).finally(() => {
            setTimeout(() => {
                this.props.profileToggleLoader(false)
            }, 500)
        })

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
    ownProps: TOwnProps
}
type TOwnProps = {
    myId?: number
}
export const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => {
    return {
        activeProfile: state.profilePage.activeProfile,
        isFetching: state.profilePage.isFetching,
        ownProps: {
            myId: ownProps.myId
        }
    }
}

type TMapDispatchToProps = {
    setActiveProfile: (activeProfile: TActiveProfile) => void
    profileToggleLoader: (isFetching: boolean) => void
}

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setActiveProfile, profileToggleLoader})(WithUrlDataComponent)