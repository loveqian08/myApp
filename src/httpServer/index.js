// 拦截器
import axios from 'axios';
import { Toast } from 'antd-mobile';

// 拦截请求
axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 0);
    return config;
})

// 拦截响应
axios.interceptors.response.use(function (config) {
    Toast.hide();
    return config;
})

// 基于cookie用户验证
// express 依赖 cookie-parser，需要npm instarll cookie-parser --save 安装