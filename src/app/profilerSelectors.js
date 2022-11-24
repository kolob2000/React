import {useSelector} from "react-redux";

export const useCurrentUserIDSelector = () => {
    const id = useSelector(state => state.profiler.id)
    return id
}
export const useProfilerSelector = () => useSelector(state => state.profiler)