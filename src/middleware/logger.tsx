<<<<<<< HEAD
export default function loggerMiddleware ({ getState }) {
  return next => action => {
    console.log('log action', action)
    console.log('log state', getState())
    next(action)
  }
}
=======
export default function loggerMiddleware ({ getState }) {
  return next => action => {
    console.log('log action', action)
    console.log('log state', getState())
    next(action)
  }
}
>>>>>>> 6090fceb (Initial commit of all components)
