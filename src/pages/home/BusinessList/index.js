import React from 'react'
import ReactDOM from 'react-dom'
import {Card,Badge,WingBlank,ListView} from 'antd-mobile'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

class BusinessList extends React.Component{
    constructor(props, context) {
        super(props, context);

        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

     this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
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
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.rData = { ...this.rData, ...genData(++pageIndex) };
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }, 1000);
    }


  render(){
    const row = (rowData, sectionID, rowID) => (
        <WingBlank size="lg">
            <Card className='item'>
              <Card.Header
                title="商家名字"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span><Badge text="减" hot style={{ marginLeft: 12 }} />
                <Badge text="惠" hot style={{ marginLeft: 12 }} />
                <Badge text="免" hot style={{ marginLeft: 12 }} />
                <Badge text="反" hot style={{ marginLeft: 12 }} /></span>}
              />
            <Card.Body>
              <div>吹拉染烫样样精通</div>
            </Card.Body>
            <Card.Footer content="平均评分：9" extra={<div>共有100人消费</div>} />
            </Card>
          </WingBlank>
      );
    
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    return (
      <div className='g-box'>
        <h2 className='header'>附近商家</h2>
        <div className='business-list'>
          <WingBlank size="lg">
            <Card className='item'>
              <Card.Header
                title="商家名字"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span><Badge text="减" hot style={{ marginLeft: 12 }} />
                <Badge text="惠" hot style={{ marginLeft: 12 }} />
                <Badge text="免" hot style={{ marginLeft: 12 }} />
                <Badge text="反" hot style={{ marginLeft: 12 }} /></span>}
              />
            <Card.Body>
              <div>吹拉染烫样样精通</div>
            </Card.Body>
            <Card.Footer content="平均评分：9" extra={<div>共有100人消费</div>} />
            </Card>
          </WingBlank>
          <WingBlank size="lg">
            <Card className='item'>
              <Card.Header
                title="商家名字"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span><Badge text="减" hot style={{ marginLeft: 12 }} />
                <Badge text="惠" hot style={{ marginLeft: 12 }} />
                <Badge text="免" hot style={{ marginLeft: 12 }} />
                <Badge text="反" hot style={{ marginLeft: 12 }} /></span>}
              />
            <Card.Body>
              <div>吹拉染烫样样精通</div>
            </Card.Body>
            <Card.Footer content="平均评分：9" extra={<div>共有100人消费</div>} />
            </Card>
          </WingBlank>
          <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>header</span>}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          useBodyScroll
          renderRow={row}
          pageSize={4}
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
        </div>
          
      </div>
    )
  }
}
export default BusinessList