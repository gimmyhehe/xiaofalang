import React from 'react'
import ReactDOM from 'react-dom'
import {Card,Badge,WingBlank,ListView} from 'antd-mobile'
import Business from '@/pages/Business'
import PopModal from '@/components/PopModal'
const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 4;
let pageIndex = 0;
const initData = [
  {
    name:'邻家发郎',
    img:"/static/imgs/logo.jpg",
    des:'邻家发郎，一家专业的美发机构，行业领先技术',
    scroe: 9,
    buyNum:100,
  },
  {
    name:'三木造型',
    img:"https://p0.meituan.net/wedding/1d2bb986c39681b4fb6065f9346a5577132734.jpg%40300w_225h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
    des:'高品质、快速便捷服务',
    scroe: 9,
    buyNum:100,
  },
  {
    name:'Hair烫染造型',
    img:"http://p1.meituan.net/dpdeal/65a6433cb56edb124c91bced9f6dcd7476654.jpg",
    des:'邻家发郎，一家专业的美发机构，行业领先技术',
    scroe: 9,
    buyNum:100,
  },
  {
    name:'随意造型',
    img:"http://p1.meituan.net/dpdeal/1c4d6b4107298bdf297d6b137bb6fc2c268219.jpg",
    des:'随意造型随意造型随意造型',
    scroe: 9,
    buyNum:100,
  },
]
const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs[ii]=sectionName;
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const row = initData[jj%4];
      rowIDs[ii].push(row);
      dataBlobs[row] = row;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

class BusinessList extends React.Component{
    constructor(props, context) {
        super(props, context);

    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

     this.state = {
      dataSource,
      isLoading: true,
      hasMore:true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  
  showDetail(){
    this.child.show()
  }
    componentDidMount() {
      // you can scroll to the specified position
      // setTimeout(() => this.lv.scrollTo(0, 120), 800);
  
      const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
      // simulate initial Ajax
      setTimeout(() => {
        genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
          height: hei,
        });
      }, 600);
    }

    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log(dataBlobs,'sectionIDs',sectionIDs, 'rowIDs',rowIDs)
      // console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        genData(++pageIndex);
        this.setState({
          dataSource:  this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
        });
      }, 1000);
    }


  render(){
    const row = (rowData, sectionID, row) => {
      return(
        <WingBlank size="lg" >
            <Card className='item'  onClick={this.showDetail.bind(this)}>
              <Card.Header
                title={row.name}
                thumb="/static/imgs/icon/business.png"
                extra={<span><Badge text="团" hot style={{ marginLeft: 12 }} />
                <Badge text="惠" hot style={{ marginLeft: 12 }} /></span>}
              />
            <Card.Body>
              <img src={row.img} alt='商家图' />
              <div className='business-des'>{row.des}</div>
            </Card.Body>
            <Card.Footer content={'平均评分：'+row.scroe} extra={<div>共有{row.buyNum}人消费</div>} />
            </Card>
          </WingBlank>
      )
    }
    
    return (
      <div className='g-box'>
        <h2 className='header'>附近商家</h2>
        <div className='business-list'>
          <ListView
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
        />
        </div>
        <PopModal title='商家详情页' ref={(ref)=>{this.child = ref}} ><Business /></PopModal>
      </div>
    )
  }
}
export default BusinessList