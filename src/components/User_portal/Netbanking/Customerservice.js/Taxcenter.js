import React from "react";
import { Link } from "react-router-dom";
import './Customerservice.css'
import Footer from "./Customerservicefooter";

const CustomerserviceTaxCentre = () => {
  return (
    <div className="TaxCenter_Container container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="TaxCentre_firsttext">
          <h2 className="TaxCanter_heading_h2">Tax Cantre</h2>
          <h4 className="TaxCanter_heading_h4">View Tax/Account Statement</h4>
          </div>
          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5>View Tax Credit Statement - Form 26 AS</h5>
                  <p >View your Form 26 AS statement.</p>
                  <div class="TaxCentre_space_btnknow">
                  <Link to="/" class="btn  TaxCentre_buttonOverflow">
                  VIEW
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">FROM 16A</h5>
                  <p class="">View / Download your Form 16A.</p>
                  <div class="TaxCentre_space_btnknow">
                  <Link to="/" class="btn  TaxCentre_buttonOverflow">
                  VIEW
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">e Tax Challans</h5>
                  <p class="">View / Download your Challans for Direct/Indirect tax payments.</p>
                  <div class="TaxCentre_space_btnknow">
                  <Link to="/" class="btn  TaxCentre_buttonOverflow">
                    VIEW
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">Form 15G/H</h5>
                  <p class="">View / Download your Form 15G/H.</p>
                  <div class="TaxCentre_space_btnknow ">
                  <Link to="/" class="btn  TaxCentre_buttonOverflow">
                    UPDATE
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links2">Know More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">e-Statements</h5>
                  <p class="">Download your account statements for Bank Accounts/Credit Card/ Demat.</p>
                  <Link to="/" class="btn TaxCentre_buttonOverflow">
                  DOWNLOAD
                  </Link>
                  
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">Interest & TDS Certificate</h5>
                  <p class="">Download your Interest & TDS Certificate</p>
                  <div class="TaxCentre_space_btnknow ">
                  <Link to="/" class="btn  TaxCentre_buttonOverflow">
                    DOWNLOAD
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TaxCentre_Cardgap">
      <h4 className="TaxCentre_PayTaxgap">Pay Tax</h4>
      <div class="row">
        <div class="col-sm-6">
          <div class="card TaxCenter_Card_inform">
            <div class="TaxCenter_Cardsetting">
              <h5 class="">Direct Tax</h5>
              <p class="">Tax deducted at source[TDS], Tax Collected at source[TDS], Income Tax etc.</p>
              <Link to="/" class="btn  TaxCentre_buttonOverflow">
              PAY NOW
              </Link>
              <Link to="/" className="TaxCentre_paynow_Links">Know More</Link>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card TaxCenter_Card_inform2">
            <div class="TaxCenter_Cardsetting">
              <h5 class="">Indirect Tax</h5>
              <p class="">Excise Duty, Service Tax</p>
              <div class="TaxCentre_space_btnknow">
              <Link to="/" class="btn  TaxCentre_buttonOverflow">
                PAY NOW
              </Link>
              <Link to="/" className="TaxCentre_paynow_Links">Know More</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CustomerserviceTaxCentre;