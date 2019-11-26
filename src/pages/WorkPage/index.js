
import React, { Component } from 'react';
import styles from './works.module.scss';
import WorkLists from '../../components/WorkLists';
import datas from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.title }>
            <h3>Resources for Upcoming Year</h3>
            <p>Parents and wanderers, please take a look at the resources below for this upcoming academic year!</p>
        </div>
        <WorkLists dataSource={ datas.data } />
    </div>
}
