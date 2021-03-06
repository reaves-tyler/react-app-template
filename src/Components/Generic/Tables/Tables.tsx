// import React, { ReactElement } from 'react';
// import { Grid, Input } from 'semantic-ui-react';
// import { AgGridReact } from '@ag-grid-community/react';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { MenuModule } from '@ag-grid-enterprise/menu';
// import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
// import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
// import '@ag-grid-community/core/dist/styles/ag-grid.css';
// import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css'; //medium
// import '@ag-grid-community/core/dist/styles/ag-theme-balham.css'; //small
// import '@ag-grid-community/core/dist/styles/ag-theme-material.min.css'; //large
// import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
// // import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
// import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
// import { Module } from '@ag-grid-community/core';

// interface props {
//     columnDefs: object[];
//     rowData: object[];
//     onCellEditingStopped?: any;
//     large?: boolean;
//     small?: boolean;
//     height?: number;
//     globalFilter?: boolean;
//     pagination?: boolean;
//     sidebar?: boolean;
//     rowDragEvents?: Function;
//     topControls?: ReactElement;
// }

// interface state {
//     columnDefs: object[];
//     rowData: object[];
//     modules: [Module, Module, Module, Module, Module, Module];
// }

// export class Tables extends React.Component<props, state> {
//     gridApi: any;

//     constructor(props: props) {
//         super(props);

//         this.state = {
//             columnDefs: this.props.columnDefs,
//             rowData: this.props.rowData,
//             modules: [
//                 ClientSideRowModelModule, // Dependency
//                 RowGroupingModule,
//                 SetFilterModule, // Dropdown filter unique column data
//                 MenuModule, // Pinning, Autosizing, Query (contains)
//                 RichSelectModule,
//                 ColumnsToolPanelModule,
//                 // FiltersToolPanelModule,
//             ],
//         };
//     }
//     /** Gain access to AG-Grid API */
//     onGridReady = (params: any) => {
//         this.gridApi = params.api;
//         params.api.sizeColumnsToFit();
//         this.gridApi.setRowData(this.props.rowData);
//         this.gridApi.setColumnDefs(this.props.columnDefs);
//     };

//     componentDidUpdate() {
//         if (this.gridApi) {
//             this.gridApi.setRowData(this.props.rowData);
//             this.gridApi.setColumnDefs(this.props.columnDefs);
//         }
//     }

//     quickFilter = (e: any, d: any) => {
//         this.gridApi.setQuickFilter(d.value);
//     };

//     render() {
//         if (this.gridApi) {
//             this.gridApi.clearFocusedCell();
//         }

//         let gridOptions = {
//             columnDefs: this.state.columnDefs,
//             rowData: this.state.rowData,
//             onCellEditingStopped: this.props.onCellEditingStopped,
//             paginationPageSize: 25,
//             pagination: this.props.pagination === false ? false : true,
//             defaultColDef: {
//                 sortable: true,
//                 filter: true,
//                 resizable: true,
//                 filterParams: { newRowsAction: 'keep' },
//             },
//             cacheQuickFilter: true,
//             rememberGroupStateWhenNewData: true,
//             suppressScrollOnNewData: true,
//             stopEditingWhenGridLosesFocus: true,
//             rowDragManaged: true, // Animate dragged row through other rows
//             animateRows: true,
//             onRowDragEnd: (event) => {
//                 this.props.rowDragEvents(event, this.props.rowData);
//             },
//         };

//         if (this.props.sidebar) {
//             gridOptions['sideBar'] = {
//                 toolPanels: [
//                     {
//                         id: 'columns',
//                         labelDefault: 'Columns',
//                         labelKey: 'columns',
//                         iconKey: 'columns',
//                         toolPanel: 'agColumnsToolPanel',
//                         toolPanelParams: {
//                             suppressRowGroups: true,
//                             suppressValues: true,
//                             suppressPivots: true,
//                             suppressPivotMode: true,
//                             suppressSideButtons: true,
//                             suppressColumnFilter: true,
//                             suppressColumnSelectAll: true,
//                             suppressColumnExpandAll: true,
//                         },
//                     },
//                 ],
//                 defaultToolPanel: '',
//             };
//         }

//         const style = {
//             height: this.props.height || 700,
//         };

//         const tableStyle = (this.props.small && 'ag-theme-balham') || (this.props.large && 'ag-theme-material') || 'ag-theme-alpine';

//         return (
//             <>
//                 {this.props.globalFilter && (
//                     <>
//                         <Grid>
//                             <Grid.Row columns={2}>
//                                 <Grid.Column width={6}>
//                                     <Input fluid onChange={this.quickFilter} placeholder='Filter' style={{ marginBottom: '1rem' }} />
//                                 </Grid.Column>
//                                 <Grid.Column width={10}>{this.props.topControls}</Grid.Column>
//                             </Grid.Row>
//                         </Grid>
//                     </>
//                 )}
//                 <div className={tableStyle} style={style}>
//                     <AgGridReact modules={this.state.modules} gridOptions={gridOptions} onGridReady={this.onGridReady} groupUseEntireRow={true} />
//                 </div>
//             </>
//         );
//     }
// }
