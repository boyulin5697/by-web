import React, {useEffect, useState} from 'react';
import './index.css'
import ByCard from "../../component/Card";
import {useNavigate} from "react-router-dom";
import {Divider, Spin} from "antd";
import {getStudyNaviPage} from "../../api/blog";


/**
 * Study Navi
 *
 * @author by.
 */

const StudyNaviPage = () => {

    const navigate = useNavigate()

    const [status, setStatus] = useState<boolean>(true);
    const [part1, setPart1] = useState<any[]>([]);
    const [part2, setPart2] = useState<any[]>([]);
    const [part3, setPart3] = useState<any[]>([]);

    async function getPart1(){
        const resp1 = (await getStudyNaviPage(1)).resp

        if(resp1.code==200){
            setPart1(resp1.data)
        }
    }

    async function getPart2(){
        const resp2 = (await getStudyNaviPage(2)).resp

        if(resp2.code==200){
            setPart2(resp2.data)
        }
    }

    async function getPart3(){
        const resp3 = (await getStudyNaviPage(3)).resp

        if(resp3.code==200){
            setPart3(resp3.data)
            setStatus(false)
        }
    }

    useEffect(() => {
        getPart1()
        getPart2()
        getPart3()
    },[])

    return (
        <div className = "study-navi">
            <Spin spinning={status} delay = {5} size={"large"}>
            <div className="part-one">
                <h4>第一部分 React基础部分</h4>
                <div className= "content-wrapper">
                    {
                        part1.map((value, index) => {
                            return <ByCard
                                title = {value.title}
                                description = {value.description}
                                onClick = {() => {navigate(value.to)}}
                            />
                        })
                    }
                </div>
            </div>
            <Divider dashed />
            <div className="part-two">
                <h4>第二部分 antd组件实践部分</h4>
                <div className= "content-wrapper">
                    {
                        part2.map((value,index) => {
                            return <ByCard
                                title = {value.title}
                                src = {value.src}
                                description = {value.description}
                                onClick = {() => {navigate(value.to)}}
                            />
                        })
                    }
                </div>
            </div>
                <Divider dashed />
            <div className="part-three">
                <h4>第三部分 页面跳转</h4>
                <div className= "content-wrapper">
                    {
                        part3.map((value,index) => {
                            console.log(index)
                            return <ByCard
                                title = {value.title}
                                src = {value.src}
                                description = {value.description}
                                onClick = {() => {navigate(value.to)}}
                            />
                        })
                    }
                </div>
            </div>
            </Spin>
        </div>
    );
};

export default StudyNaviPage;