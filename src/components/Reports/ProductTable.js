import React, { Fragment } from 'react'

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import Button from 'react-bootstrap/Button'

const { SearchBar } = Search

const tableColumns = [{
  dataField: '_id',
  text: 'Product ID',
  hidden: true,
  csvExport: false
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}, {
  dataField: 'sale',
  text: 'Product Sale Price',
  sort: true
}]

const ProductTable = props => {
  return (
    <Fragment>
      <ToolkitProvider
        keyField="_id"
        data={props.products}
        columns={tableColumns}
        search
        exportCSV
        bootstrap4
      >
        {
          props => (
            <div>
              <SearchBar { ...props.searchProps } />
              <Button
                variant="outline-secondary"
                onClick={() => props.csvProps.onExport()}
                className="ml-3"
              >
                Export to CSV
              </Button>
              <BootstrapTable
                { ...props.baseProps }
                noDataIndication="No Results"
                striped
                hover
                wrapperClasses="table-responsive"
              />
            </div>
          )
        }
      </ToolkitProvider>
    </Fragment>
  )
}

export default ProductTable
