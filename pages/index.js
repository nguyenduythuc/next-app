import React, { PureComponent } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector, connect } from 'react-redux'
import Nav from '../components/nav'
import { withRedux } from '../app-redux'

class IndexPage extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      const {dispatch} = this.props
      dispatch({
        type: 'COLOR',
        color: 'blue',
      })
    }, 2000);
  }
  
  render() {
    const state = this.props
    console.log(state)
    return (
      <>
        <div>hello {state.test.color}</div>
      </>
    )
  }
}

const mapStateToProps = ({ test }) => ({ test });
const mapDispatchToProps = dispatch => ({ dispatch });

export default withRedux(connect(mapStateToProps, mapDispatchToProps)(IndexPage))
