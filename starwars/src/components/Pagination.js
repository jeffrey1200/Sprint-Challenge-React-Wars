import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {
    
  return (
    <Pagination style = {{justifyContent:'center'}}aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick = {props.previous}previous href="" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="">
          {props.pageNumber}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick = {props.next} next href="" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Example;
