import React, { useContext } from 'react';
import { Row, Col, Empty } from 'antd';

import TodoCard from './TodoCard';
import { DataContext } from '../contexts/DataContext';

const TodoContainer = () => {

    const { dataList } = useContext(DataContext)

    return (
        <div className='todo-container'>
          
            { 
                dataList === undefined || ( dataList && dataList.length === 0 ) ?  
                <div className='empty-container'>
                  <Empty/> 
                </div>
                : 
                
                  <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                    {dataList.map((todo) => {
                      return (
                        <Col key={todo.id} className="gutter-row" span={6}>
                          <TodoCard todo={todo}/>
                        </Col>
                      )
                    })}
                </Row>
            }
          
        </div>
    );
}

export default TodoContainer;
