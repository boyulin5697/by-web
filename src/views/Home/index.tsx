import React from 'react'
import { Carousel, Image, Timeline, Card} from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

/**
 * 主页（糊弄
 * 
 * @author by.
 * @since 2022/8/10
 *  
 */


const text = "我是by. , 一个大学生，本来致力于后端开发，没想到被迫要改行当全栈了...\n 想看我的博客吗，等着，过段时间我把前、后端都开发出来^_^";

//暂时如此，以后修改为从后端获取列表

const photos = [
  {name:"https://by-web-1305486145.cos.ap-guangzhou.myqcloud.com/WechatIMG1.jpeg"},
  {name:"https://by-web-1305486145.cos.ap-guangzhou.myqcloud.com/jgjyfgj.png"}
]

export default function Home(props:any) {
  const { announceComponentChange } = props;
  announceComponentChange("Home");

  return (
    <div className='general'>
      <div className = "Carousel" style={{ maxHeight:'50%'}}>
        <Carousel autoplay pauseOnHover= {true}>{
          photos.map((item,index) => {
            //不要这样做！（ 特 指 用 index 做 key 值
            return <div key = {index} className = "CarouselPart" style={{maxHeight:'90%'}}>
              <Image preview={false} height={300} width={1300} src={item.name}></Image>
            </div> 
          })
        }
        </Carousel>
      </div>
      <br/>
      <div className='TimeTable' style={{height:'350px'}}>
        <div className='timeLine' style={{ float:'left' }} >
        <Card title="时间线" style={{ width: '180%', minHeight:'min-content', boxShadow:'0px -5px 5px -3px #000'}}>
          <Timeline>
            <Timeline.Item>获得域名 2022-02-01(概？)</Timeline.Item>
            <Timeline.Item>开始建站 2022-08-06</Timeline.Item>
            <Timeline.Item>1.0版本初步定义 2022-08-07</Timeline.Item>
            <Timeline.Item>前端设计与编码开始 2022-08-08</Timeline.Item>
            <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
            <p>目前仍在建设中..</p>
            </Timeline.Item>
          </Timeline>
        </Card>
        </div>
        <div className='intro' style={{ float:'right'}}>
          <Card title="要看我的自我介绍吗...不看就把它收起来吧" style={{marginLeft:'30%',width:'70%'}}>
              <p>{text}</p>
          </Card>
        </div>
      </div>
      <br/>
      <div className='tailImage' style={{float:'inline-start',width:'100%'}}>
        <Image preview={false} width={'100%'} src="https://by-web-1305486145.cos.ap-guangzhou.myqcloud.com/6528518_0.jpeg"/>
      </div>
    </div>
  )
}
