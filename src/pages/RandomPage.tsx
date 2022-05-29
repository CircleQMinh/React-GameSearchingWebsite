import React, { Fragment } from 'react'
import Footer from '../component/Footer/Footer';
import GameDisplay from '../component/GameDisplay/GameDisplay'
import Header from '../component/Header/Header'

function RandomPage() {
  return (
    <Fragment>
      <Header></Header>
      <div className="random_page background_cover_1">
        <GameDisplay></GameDisplay>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default RandomPage