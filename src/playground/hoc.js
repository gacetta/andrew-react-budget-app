// Higher Order Component (HOC) - ac omponent that renders another component
// reuse code
// render hijacking
//prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Don't share yo!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <div>
        <p>User is authenticated</p>
        <WrappedComponent {...props}/>
      </div> :
        <p>Please Log In to view info</p>}
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='cannonball' />, document.querySelector('#app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='the secret message' />, document.querySelector('#app'))