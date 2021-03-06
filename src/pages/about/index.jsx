import React from 'react';
import Comment from '../../components/Comment';
import styles from './index.less'
import Tag from '../../components/Tag';
import ContentTitle from '../../components/ContentTitle'
import { Row, Col } from 'antd';
import SimplifyModule from '../../components/SimplifyModule'


export default () => {
    return (
        <div className={styles.content}>
            <div className={styles.image}></div>
            <SimplifyModule
                data={{
                    title: '「 个人简介 」',
                    imgStyle: { height:'25rem'},      
                    // time: '2021.03.20',
                    imgUrl: 'https://pg12138.oss-cn-beijing.aliyuncs.com/assets/other/home-bg-art.jpg',
                    content: '一枚年轻的码农，老家位于黑龙江，高中毕业后，进入本地非著名本科就读软件工程专业。专业目前就职于北京字节跳动有限公司，作为前端开发工程师。目前工作方向是Edu，以及Psc方向，欢迎同行一起探讨。'
                }
                }
            ></SimplifyModule>
        </div>
    );
}
