import React from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
class AuthRouter extends React.Component {
    componentDidMount () {
        // const publicList = ['/login', '/register'];
        // const pathname = this.props.location.pathname;
        // if (publicList.indexOf(pathname) > -1) {
        //     return null;
        // }
        // axios.get('user/info').then(res => {
        //     console.log(res)
        //     if (res.status === 200) {
        //         if (res.data.code === 0) {

        //         } else {
        //             this.props.history.push('/login')
        //         }
        //     }
        // })
    }

    render () {
        return null
    }
}

export default withRouter(AuthRouter);