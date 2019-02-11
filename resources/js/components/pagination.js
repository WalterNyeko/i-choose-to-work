import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationComponent extends Component {

  constructor(props)
  {
      super(props)
  }
  
  render() {

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    const myrange = range(this.props.from, this.props.to)
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">
                View Other Services
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    )
  }
}
