import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: { show: false },
    reducers: {
        setShowModal: (state) => {
            state.show = true
        },
        setHideModal: (state) => {
            state.show = false
        }
    }
})

export const { setHideModal, setShowModal } = modalSlice.actions;
export default modalSlice.reducer;