import React from "react";
import './Company.css'
const Company=()=>{
    return(
        <React.Fragment>
            <div>
                <h1>Company Login Form</h1>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="cname">Company Name :</label>
                                </td>
                                <td>
                                    <input type="text" name="cname" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="tcompany">Type of the Company :</label>
                                </td>
                                <td>
                                    <input type="text" name="tcompany" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="scompany"> Size of the Compnay : </label>
                                </td>
                                <td>
                                    <input type="text" name="scompany"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </React.Fragment>
    )
}
export default Company;