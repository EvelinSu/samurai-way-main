import {useDispatch} from "react-redux";
import {TAppDispatch} from "../redux/reduxStore";

export const useAppDispatch = () => useDispatch<TAppDispatch>()