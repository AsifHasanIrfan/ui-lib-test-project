import * as React from 'react';
//Material-ul imports
import { styled } from '@material-ui/core/styles';


const TableContainer = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));

export default function Index() {
  return (  
    <TableContainer>
      <h4>This is work page dummy content.</h4>
    </TableContainer>
  );
}