import React from 'react'
import ReactDOM from 'react-dom'
import {Card,Badge,WingBlank,ListView} from 'antd-mobile'
import { fillImg } from '@/utils/tools'
import { search_business_loca } from '@/api/business'
import { CITYNAME } from '@/config/localStoreKey'
import localStore from '@/utils/localStore'
import Business from '@/pages/Business'
import PopModal from '@/components/PopModal'
import PureRenderMixin from 'react-addons-pure-render-mixin'
const NUM_ROWS = 2;
let pageIndex = 0;

var initData = []
function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = initData[ii%NUM_ROWS];
  }
  return dataBlob;
}
class BusinessList extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

     this.state = {
      dataSource,
      isLoading: true,
      hasMore:1,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  
  showDetail(){
    this.child.show()
  }
  getMoreData(pIndex=0){
    const dataBlob = {};
    return new Promise((resolve,reject)=>{
      this.getLocalBusiness((pIndex+1)).then(()=>{
        console.log('afterinitData',initData)
        for (let i = 0; i < NUM_ROWS; i++) {
          const ii = (pIndex * NUM_ROWS) + i;
          if(ii>=initData.length) break;
          dataBlob[`${ii}`] = initData[ii];
        }
        resolve(dataBlob)
      })
    })
  }
  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
       this.getMoreData().then(res=>{
        pageIndex = 0
        this.rData = res
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      });
    }, 600);
  }
  getLocalBusiness(pIndex){
    return new Promise((resolve,reject)=>{
      let params ={}
      params['country'] = '中国'
      params['province'] = '广东'
      params['area'] = localStore.getItem(CITYNAME)
      params['pageSize'] = NUM_ROWS
      params['currPage'] = pIndex
      search_business_loca(params).then(res=>{
        console.log(res)
        let data = res.data
        initData = initData.concat(data.Result)
        if(data.hasMore==0){
          this.setState({hasMore:0})
        }
        console.log('beforeinitData',initData)
        resolve()
      })
    })


  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      let moreData = this.getMoreData(++pageIndex).then(res=>{
        this.rData = { ...this.rData, ...res };
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      })
      
    }, 1000);
  }


  render(){


    const row = (rowData, sectionID, rowId) => {
      console.log("row",rowData,sectionID,rowId)
      const row = rowData
      return(
        <div key={row.id}>
        <WingBlank size="lg">
            <Card className='item'   onClick={this.showDetail.bind(this)}>
              <Card.Header
                title={row.company.company_name}
                thumb="/static/imgs/icon/business.png"
                extra={<span><Badge text="团" hot style={{ marginLeft: 12 }} />
                <Badge text="惠" hot style={{ marginLeft: 12 }} /></span>}
              />
            <Card.Body>
              <img src={fillImg(row.user_Pic.user_pic_dir)} alt='商家图' />
              <div className='business-des'>{row.company.company_intr}</div>
            </Card.Body>
            <Card.Footer content={'平均评分：8'} extra={<div>共有55人消费</div>} />
            </Card>
          </WingBlank>
          </div>
      )
    }
    
    return (
      <div className='g-box'>
        <h2 className='header'>附近商家</h2>
        <div className='business-list'>
          {/* <ListView
          ref={el => {this.lv = el}}
          dataSource={this.state.dataSource}
          renderFooter={
            () => (
            <div style={{ padding: 30, 
            textAlign: 'center' }}>
            {this.state.isLoading ?
            '加载中...' : '加载完成'}
          </div>)}
          useBodyScroll
          renderRow={row}
          pageSize={4}
          onScroll={() => 
            { console.log('scroll'); }}
          scrollRenderAheadDistance={100}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        /> */}

      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={
          () => (
          <div style={{ padding: 30, 
          textAlign: 'center' }}>
          { this.state.hasMore==0 ? "已经到底啦，没用更多了！" :
            this.state.isLoading ?
          '加载中...' : '加载完成'}
        </div>)}
        renderRow={row}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
        </div>
        <PopModal title='商家详情页' ref={(ref)=>{this.child = ref}} ><Business /></PopModal>
      </div>
    )
  }
}
export default BusinessList