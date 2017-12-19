import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

//add obtained cover, description and rate to Book model daamn and
//redefine them? this gotta be easier in sequelize

@inject('store') @observer
class GoodReads extends React.Component {

  componentDidMount() {
	  this.props.store.getGoodReadsInfo();
  }

  @observable cover = '';
  @observable overview = '';

  renderGoodReads() {
	  const { store } = this.props;
	  store.setGoodReadsInfo(this.cover, this.overview)
  }

  render() {
	  return (
	    <div>
	      GoodReads block goes here
	      {this.renderGoodReads()}
	    </div>
	  )
  }
}

export default GoodReads;
