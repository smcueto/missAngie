import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link,Route,withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

         {/* 头部导航 */}
         <header className={styles.header}>
            <div className={styles.box}>
               <Link to="/"><div className={styles.boxleft}>yoo Welcome to the Classroom</div></Link>
               <div className={styles.boxright}>
                  <Link to="/"><p className={ location.pathname==="/" ? styles.selected : null }>Home</p></Link>
                  <Link to="/works"><p className={ location.pathname==="/works" ? styles.selected : null } >Resources</p></Link>
               </div>
            </div>
         </header>

         {/* 内容区 */}
         <section className={styles.content}>
           <Route path="/missAngie" exact component={ HomePage } />
           <Route path="/works" exact component={ WorkPage } />
           <Route path="/works/:id" exact component={ WorkPageDetail } />
         </section>

         {/* 底部 */}
         <footer className={styles.footer}>
           <p>© <b>2020</b></p>
           <p>smcueto</p>
         </footer>
      </div>
    );
  }
}

export default withRouter(App);
