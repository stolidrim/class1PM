import React, {useContext} from 'react';
import { GlobalContext } from './GlobalContext';

const ComE = () => {
  const varname=useContext(GlobalContext)
  return (
    <>
        <h1>The React is JavaScript framework. We are learning is {varname}.</h1>
    </>
  )
};

export default ComE;

