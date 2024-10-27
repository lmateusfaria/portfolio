import React from 'react';
import {Icon} from 'semantic-ui-react'



class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Icon name='home'size='huge' />
                <h2>Página Inicial </h2>
                <main>
                    <p>This section contains information home...</p>
                </main>
            </div>
            
        );
    }

}

export default Home;