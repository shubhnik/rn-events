import events from '../constants/dummyData'

/**
 * mock api with 2 seconds wait time to emulate real world api.
 */
export const getData = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(events), 2000)
})
