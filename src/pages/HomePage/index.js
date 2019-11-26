
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpeg") } />
            <h2>Miss. Angie Gonzalez</h2>
            <ul>
                <li>I am a Teacher</li>
                <li>Learner of Life</li>
                <li>Taurus</li>
            </ul>
            <p>I was born and raised in southeast Los Angeles. I graduated from East Los Angeles College and transferred to San Francisco State. There, I earned my B.A. in Latina/o Studies and a minor in Race & Resistance Studies. I have worked in public schools both in L.A. and San Francisco. I am currently finishing her fourth year as a Resident Teacher at the San Francisco Friends School and working towards my Master’s and Credential through the Bay Area Teacher Training Institute.</p>
            <p>I am looking forward to graduating and having my own classroom. I am passionate about advocating for youth to learn about and love their culture and language. As a Native Spanish speaker, I am also an advocate of Spanish Immersion and Bilingual education.</p>
            <p>In my free time, I like going on hikes and spending time with my partner and pet bearded dragon Rayquaza.</p>
            <p>Contact me at teacherG@email.com</p>
        </section>  
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>Resources for Upcoming Year</h3>
                <p>Parents and wanderers, please take a look at the resources below for this upcoming academic year!</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
