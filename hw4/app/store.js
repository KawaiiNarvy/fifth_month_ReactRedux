import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counter/counterSlise";
import modeReduser from "../features/Mode/modeSlice";

export default configureStore({
    reducer: {
        counter: counterReduser,
        mode: modeReduser
    },
});
