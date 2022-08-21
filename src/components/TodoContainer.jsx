import React, { useContext } from 'react';
import { Row, Col, Empty,Typography } from 'antd';

import TodoCard from './TodoCard';
import { DataContext } from '../contexts/DataContext';

import { UserContext } from '../contexts/UserContext';

const TodoContainer = () => {

    const { dataList } = useContext(DataContext)
    const { user } = useContext(UserContext);

    return (
      
        user ?
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
        : (
          <div className='empty-container'>
            <Empty 
              image='https://firebasestorage.googleapis.com/v0/b/todo-app-rsp.appspot.com/o/undraw_enter_uhqk.svg?alt=media&token=21f890ce-f22d-43f8-b19e-4612ff99881f'
              imageStyle={{
                height: 260,
              }}
              description={
                <Typography.Title>Todo App</Typography.Title>
              }
            /> 
          </div>
        )
      
    );
}

export default TodoContainer;
