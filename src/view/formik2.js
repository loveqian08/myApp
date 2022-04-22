import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import '../static/form.scss';

function Checkbox ({label, ...props}) {
    const [ field, meta, helper] = useField(props);
    const { value } = meta;
    const { setValue } = helper;
    const  handleChange =  () => {
        console.log(props.value)
        var set = new Set(value);
        if (set.has(props.value)) {
            set.delete(props.value)
        } else {
            set.add(props.value)
        }
        // setValue 在这里接受一个数组
        setValue([...set]);
    }
    return(
        <div htmlFor="" style={{lineHeight: "40px"}}> 
                <input type="checkbox"
                     {...props} 
                     onChange={ handleChange }
                     checked={ value.includes(props.value) }></input>
                { label } 
            </div>
    )
}

function MyInputField ({label, ...props}) {
    const [field, meta] = useField(props);
    /**
     * value onChange onBlur属性都储存在field 里面
     */
    return(
        <div>
            <label htmlFor={ props.id }> { label } </label>
            <input {...field} {...props}></input>
            { meta.touched && meta.error? <div>{meta.error} </div> : null }
            
        </div>
    )
}

function FormikTest2 () {
    const initialValues = {
        username: '',
        phone: '',
        pwd: 'java',
        password: '',
        hobbies: ["足球", "篮球"]
    };
    const handleSubmit = values => {
        console.log(values)
    }
    const schema = Yup.object({
        username: Yup.string().max(12, '用户名的长度不能超过12').required('请填写用户名'),
        phone: Yup.string().max(6, '手机的长度不能小于6').required('请填写手机号码'),
        password: Yup.string().max(6, '手机的长度不能小于6').required('请填写手机号码')
    })
    return (
        <Formik
            initialValues = {initialValues}
            onSubmit= { handleSubmit }
            validationSchema={schema}>
             
            <Form>
                <Field name="username" className="common-form"></Field>
                <ErrorMessage name="username"></ErrorMessage>
                <Field name="phone"  className="common-form"></Field>
                <ErrorMessage name="phone" ></ErrorMessage>
                <Field name="pwd"  className="common-form" as="select">
                    <option value="前端">前端</option>
                    <option value="java">Java</option>
                </Field>
                <MyInputField
                  id="myPros"
                   className="common-form"  
                  label="密码"
                  type="password"
                  name="password"
                  placeholder="请输入密码"></MyInputField>
                  <Checkbox 
                   className="checkbox"
                    name="hobbies" 
                    value="足球"
                    label="足球"/>
                    <Checkbox 
                     className="checkbox"
                    name="hobbies" 
                    value="篮球"
                    label="篮球"/>
                    <Checkbox 
                     className="checkbox"
                    name="hobbies" 
                    value="橄榄球"
                    label="橄榄球"/>
                <input type="submit" className='sb-btn'></input>
            </Form>
        </Formik>
    )
}

export default FormikTest2;