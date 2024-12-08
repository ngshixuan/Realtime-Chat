// SomeComponent.js
import React from 'react';
import { useAuth } from '../firebase/server-side';

const SomeComponent = () => {
  const user = useAuth();

  if (user) {
    console.log(user.uid)
    return (
      <>
      <div>User UID: {user.uid}</div>
      <div>User UID: {user.email}</div>
      <div>User UID: {user.displayName}</div>
      <div>User UID: {user.providerId}</div>
      </>
    );
  } else {
    return <div>No user logged in</div>;
  }
};

export default SomeComponent;
