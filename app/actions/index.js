export const HELLO_WORLD = 'HELLO WORLD'
export const RESET = 'RESET'

export const helloworld = () => {
    return {
        type: HELLO_WORLD
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}
