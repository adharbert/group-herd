import React, { Component } from 'react'

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Group Herd</h1>
                                <p className="lead"> Social group where you can go out and enjoy steak with friends.</p>
                                <hr />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Landing;