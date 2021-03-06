import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Progress } from '@icedesign/base';
import { withRouter } from 'react-router-dom';
import DATA from './data';

@withRouter
export default class TopActiveChart extends Component {
  renderProduct = (value, index, record) => {
    return (
      <div style={styles.product}>
        <p style={styles.prodyctTitle}>{record.title}</p>
      </div>
    );
  };

  renderLead = (value) => {
    return (
      <img
        src={value}
        alt=""
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '4px',
        }}
      />
    );
  };

  renderStatus = (value, index, record) => {
    return (
      <span
        style={{
          // border: `1px solid ${record.color}`,
          color: record.color,
          borderRadius: '4px',
          width: '78px',
          height: '24px',
          lineHeight: '24px',
          fontSize: '12px',
          fontWeight: '500',
          textAlign: 'center',
          display: 'inline-block',
        }}
      >
        {value}
      </span>
    );
  };

  renderTeam = (value) => {
    return (
      <div>
        {value.map((item, index) => {
          return (
            <img
              src={item}
              alt=""
              key={index}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50px',
                border: '2px solid #fff',
                boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)',
              }}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <IceContainer title="项目列表">
        <Table dataSource={DATA} hasBorder={false} style={{ width: '100%' }}>
          <Table.Column title="项目名称" dataIndex="name" />
          <Table.Column title="截止时间" dataIndex="endTime" />
          <Table.Column
            title="项目进度"
            dataIndex="percent"
            cell={(value, index, record) => (
              <Progress
                percent={record.percent}
                state={record.state}
                showInfo={false}
              />
            )}
          />
          <Table.Column
            title="负责人"
            dataIndex="lead"
            cell={this.renderLead}
          />
          <Table.Column title="团队" dataIndex="team" cell={this.renderTeam} />
          <Table.Column
            title="状态"
            dataIndex="status"
            cell={this.renderStatus}
          />
        </Table>
      </IceContainer>
    );
  }
}

const styles = {
  product: {
    display: 'flex',
    alignItems: 'center',
  },
  productPic: {
    width: 60,
    height: 60,
  },
  productTitle: {
    margin: 0,
  },
};
