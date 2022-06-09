export const customLogger = (state) => (next) => (action) => {
    console.log('Prev state :', state);
    console.log('Action :', action);

    next(action);

    console.log('Next state :', state);
}