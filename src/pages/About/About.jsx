import React from 'react';
import {Icon} from 'semantic-ui-react'

class About extends React.Component {
    
    render() {
        return (
            <div>
                <Icon name='question circle outline'size='huge'/>
                <h2>Página Sobre </h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default About;