import React from 'react';
import style from './home.less';


const Home = () => (
    <div className={ style.homeContainer }>
        <div className={ style.headerContainer }>
            <h1>Brian Tam's Utilities App</h1>
            <h2>A Single Page App created with React, Redux, LESS, AWS S3, D3 and Media Queries, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest), and Continuous Integration using TravisCI.</h2>
            <div className={ style.technologies }>
                <img src='../../../public/img/technologies/react.png' alt='React'/>
                <img src='../../../public/img/technologies/redux.png' alt='Redux'/>
                <img src='../../../public/img/technologies/node.png' alt='NodeJS'/>
                <img src='../../../public/img/technologies/less.png' alt='LESS'/>
                <img src='../../../public/img/technologies/aws_s3.png' alt='AWS S3'/>
                <img src='../../../public/img/technologies/travis_CI.png' alt='TravisCI'/>
                <img src='../../../public/img/technologies/postgreSQL.png' alt='PostgreSQL'/>
                <img src='../../../public/img/technologies/jwt.png' alt='JWT'/>
                <img src='../../../public/img/technologies/d3.png' alt='D3'/>
                <img src='../../../public/img/technologies/mocha.png' alt='Mocha'/>
                <img src='../../../public/img/technologies/chai.png' alt='Chai'/>
                <img src='../../../public/img/technologies/express.png' alt='Express'/>
                <img src='../../../public/img/technologies/babel.png' alt='Babel'/>
                <img src='../../../public/img/technologies/webpack.png' alt='Webpack'/>
                <img src='../../../public/img/technologies/heroku.png' alt='Heroku'/>
                <img src='../../../public/img/technologies/media_queries.png' alt='Media Queries'/>
            </div>
        </div>
        <div>
            <img src='../../public/img/profile_picture.jpg' alt='profile picture' className={ style.profilePic }/>
        </div>
    </div>
)


export default Home;