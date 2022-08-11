import * as React from 'react'
import 'antd/dist/antd.less'
import { Footer } from 'antd/lib/layout/layout'
import { GithubOutlined } from '@ant-design/icons'

/**
 * 页脚组件
 * 
 * @author by.
 * @since 2022/8/9
 * 
 */
const ByFooter: React.FC = () => (
    <div className="footer-container">
        <div className="footer">
            <GithubOutlined  style={{marginLeft:'49%',marginTop:'20px'}} href='https://github.com/boyulin5697'/>
            <Footer style={{ textAlign: 'center' }} className="copyright">
                @boyulin 2022&nbsp;&nbsp;<a href='https://beian.miit.gov.cn/'>闽ICP备2022001194号-1</a>
            </Footer>
        </div>
    </div>
);

export default ByFooter;