import React from 'react';
import stylesTitle from './stylesTitle.module.css';

function Title() {
  return (
    <div className="description">
      <h1 className={stylesTitle.title}>Mainecoon cats are the biggest domesticated cats
      in the world.</h1>
      <p className={stylesTitle.para}>
      The Maine Coon is a native New Englander, hailing from Maine, 
      where they were popular mousers, farm cats, and–most likely–ship’s
      cats, at least as far back as the early 19th century.
      </p>
    </div>
  );
}

export default Title;