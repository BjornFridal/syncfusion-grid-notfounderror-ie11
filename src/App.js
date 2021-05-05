import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-grids';
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-react-grids/styles/material.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showGrid: true
    };
    this.toggleShowGrid = this.toggleShowGrid.bind(this);
  }

  toggleShowGrid() {
    this.setState({ showGrid: !this.state.showGrid });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShowGrid}>toggle grid</button>
        {this.state.showGrid && <Grid />}
      </div>
    );
  }
}

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: 'Orange'
        },
        {
          id: 2,
          name: 'Azure'
        },
        {
          id: 3,
          name: 'Pink'
        },
        {
          id: 4,
          name: 'Lime'
        }
      ]
    };
  }

  template = this.gridTemplate;

  gridTemplate(props) {
    return <div>{props.name}</div>;
  }

  render() {
    return (
      <GridComponent dataSource={this.state.data}>
        <ColumnsDirective>
          <ColumnDirective headerText="ID" field="id" />
          <ColumnDirective headerText="Name" template={this.template} />
        </ColumnsDirective>
      </GridComponent>
    );
  }
}
