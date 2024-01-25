import React from "react";
import Select from 'react-select';
import { LuIndianRupee } from "react-icons/lu";
import { Link } from 'react-router-dom';
import'./investments.css'


const GuaranteedPensionPlan = () => {


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 mt-1 Guaranteed_Pension_plan_note'>
                    <div className="card Guaranteed_Pension_plan_card ">
                        <div className="p-4">
                            <h2>Pension for me with return of intial investment of death</h2>
                            <ul>
                                <li>You get pension for entire life</li>
                                <li>Nominee gets back the intial investment the on death of pensioner</li>

                            </ul>
                        </div>
                        <div className="Guaranteed_Pension_plan_list p-3">
                            <div className="Guaranteed_Pension_plan_radio">
                           <Link to='/upi' > <input type="radio" className="" /></Link>
                            </div>
                            <p>Annuity payout</p>
                            <p><LuIndianRupee />0</p>
                            <Select 
                                options={[
                                    {value: "year",label:"Yearly"},
                                    {value: "month",label:"Monthly"},

                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GuaranteedPensionPlan;