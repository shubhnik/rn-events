/**
 * injects Context data into the connected Component
 */
import React from 'react'

import AppContext from '../Context/AppContext'

export default function withContext (WrappedComponent) {
 return class extends React.Component{
   render() {
     return (
      <AppContext.Consumer>
        {
          context => <WrappedComponent {...this.props} {...context}/>
        }
      </AppContext.Consumer>
     )
   }
 } 
}