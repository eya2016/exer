import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron container">
            <h1>Jumbotron heading</h1>
            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
            <form>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-addon" id="basic-addon2">@example.com</span>
                </div>

                <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-addon">.00</span>
                </div>
            </form>
        </div>
    )
}

export default Jumbotron;