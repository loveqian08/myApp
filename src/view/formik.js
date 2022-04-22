import { useFormik } from "formik";
import React  from "react";
import * as Yup from 'yup';

// import { Toast  } from 'antd-mobile';
function FormikTest () {
    const formik = useFormik({
        initialValues: { username: "ccc", phone: '' }, 
        onSubmit: values => {
            console.log("表单数据", values)
        },
        // 一般验证
        // validate: values => {
        //     const errors = {};
        //     if (!values.username) {
        //         errors.username = "请输入用户名";
        //     } else if (values.username.length > 15) {
        //         errors.username = "用户名的长度不能大于15";
        //     }
        //     if (values.phone.length < 6) {
        //         errors.phone = "密码长度不能小于6";
        //     }
        //     console.log("表单数据2", errors)
        //     return errors;
        // }
        
        // yup 验证
        validationSchema: Yup.object({
            username: Yup.string().max(12, '用户名的长度不能超过12').required('请填写用户名'),
            phone: Yup.string().max(6, '手机的长度不能小于6').required('请填写手机号码'),
        })
    });
    return (
        <div style={{marginTop: "50px", padding: 0}}>
            <form onSubmit={formik.handleSubmit}>
                {/* <input type="text" 
                name="username" 
                placeholder="请输入你的姓名"
                style={{width: "300px", height: "40px", border: "1px solid #ccc"}}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ></input> */}
               <input type="text" 
                name="username" 
                placeholder="请输入你的姓名"
                style={{width: "300px", height: "40px", border: "1px solid #ccc"}}
                {...formik.getFieldProps('username')}
                ></input>
                <input type="text" 
                name="phone" 
                placeholder="请输入你的手机"
                style={{width: "300px", height: "40px", border: "1px solid #ccc"}}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ></input>
                 <p>{ formik.touched.phone && formik.errors.phone?  formik.errors.phone : null}</p>
                <input type="submit"
                style={{width: "300px", height: "40px", marginTop: "30px"}}></input>
            </form>
        </div>
    )
}

export default FormikTest;