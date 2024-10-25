import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function Form() {

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            country: "",
            state: "",
            district: ""
        },
        onSubmit: async (values) => {
            try {
               const userData = await axios.post("https://670d45fd073307b4ee42f889.mockapi.io/users",values)
               console.log()
            } catch (error) {
                console.log(error)
            }
        }
    })
    
  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="">Name</label>
                    <input type="text" name="userName" value={formik.values.userName} onChange={formik.handleChange}  className="form-control" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                  </div>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <label htmlFor="">Country</label>
                    <select id="" name="country" value={formik.values.country} onChange={formik.handleChange} className="form-control">
                      <option value="In">India</option>
                      <option value="">America</option>
                      <option value="">Canada</option>
                      <option value="">London</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="">State</label>
                    <select id="" name="state" value={formik.values.state} onChange={formik.handleChange} className="form-control">
                      <option value="kr">Kerala</option>
                      <option value="TN">Tamilnadu</option>
                      <option value="DL">Delhi</option>
                      <option value="PU">Pune</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="">District</label>
                    <select id="" name="district" value={formik.values.district} onChange={formik.handleChange} className="form-control">
                      <option value="TPJ">Trichy</option>
                      <option value="SA">Salem</option>
                      <option value="CN">Chennai</option>
                      <option value="TH">Theni</option>
                    </select>
                  </div>
                </div>

              </div>
              <br />
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Form