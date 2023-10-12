import React from "react";
import { Link } from "react-router-dom";
function PricingCard() {
  return (
    <center>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{ padding: "20px" }}>
              <div className="card-body">
                <h3 className="card-title">- BASIC -</h3>
                <p className="card-text" style={{ fontSize: "40px" }}>
                  $100
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 3 Days -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 3 Pages -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Featured -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Responsive Design -
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  PURCHASE NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{ padding: "20px" }}>
              <div className="card-body">
                <h3 className="card-title">- PREMIUM -</h3>
                <p className="card-text" style={{ fontSize: "40px" }}>
                  $200
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 3 Days -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 5 Pages -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Featured -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Responsive Design -
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  PURCHASE NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{ padding: "20px" }}>
              <div className="card-body">
                <h3 className="card-title">- BUSINESS -</h3>
                <p className="card-text" style={{ fontSize: "40px" }}>
                  $300
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 5 Days -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - 8 Pages -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Featured -
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  - Responsive Design -
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  PURCHASE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default PricingCard;
