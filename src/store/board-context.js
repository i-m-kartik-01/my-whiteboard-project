import  { createContext } from 'react'

const boardContext = createContext({
    activeToolItem: "",
    toolActionType: "",
    elements: [],
    history: [[]],
    index: 0,
    boardMouseDownHandler: () => {},
    changeToolHandler: () => {},
    boardMouseMoveHandler: () => {},
    boardMouseUpHandler: () => {},
    textAreaBlurHandler: () => {},
}) 

export default boardContext