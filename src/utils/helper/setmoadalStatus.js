import { setHideModal, setShowModal } from "../../features/modalSlice";

function setModalStatus(status, dispatch) {
    if (status === true) {
        dispatch(setShowModal())
    } else {
        dispatch(setHideModal())
    }
}

export default setModalStatus;