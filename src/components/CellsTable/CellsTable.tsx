import { Container, ScrollArea, ActionIcon, Paper } from '@mantine/core';
import React, { useState } from 'react';
import { IconDoorEnter, IconPlus} from '@tabler/icons';

const Cell: React.FC<{ index: number }> = ({ index }) => (
  <div style={{ width: '127px', height: '100px', border: '1px solid black', padding: '10px', float: 'left', backgroundColor: 'white', marginRight: '10px', marginBottom: '10px' }}>
    <div style={{ textAlign: 'left', fontWeight: 'bold'}}>{index}</div>
    <div style={{ height: '30px' }} />
    <ActionIcon style={{ marginLeft: '-5px'}}><IconDoorEnter color='red'/></ActionIcon>
  </div>
);

const CellsTable: React.FC = () => {
  const [cells, setCells] = useState<number[]>([1]);

  const addCell = () => {
    setCells([...cells, cells.length + 1]);
  };

  return (
    <>
    <ScrollArea style={{ height: 500 }} offsetScrollbars>
      <div>
        {cells.reduce((rows, cell, index) => {
          if (index % 5 === 0) {
            rows.push([cell]);
          } else {
            rows[rows.length - 1].push(cell);
          }
          return rows;
        }, [] as number[][]).map((row, index) => (
          <div key={index} style={{ textAlign: 'right' }}>
            {row.map(cell => (
              <Cell key={cell} index={cell} />
            ))}
          </div>
        ))}
        <div style={{ width: '100px', height: '100px', float: 'left', marginRight: '10px', marginBottom: '10px'}}>
          <button style={{ width: '127px', height: '100px' }} onClick={addCell}><IconPlus/></button>
        </div>
      </div>
    </ScrollArea>
    </>
  );
};

export default CellsTable;
