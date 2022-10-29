import React from 'react'
import '../../styles/404.css'

function PageNotFound() {
    return (
        <main>
            <div className="PageNotFound-404">404</div>
            <span className="PageNotFound-Text">Oups! La page que vous demandez n'existe pas.</span>
            <a className="PageNotFound-Home" href="http://localhost:3000/">Retourner sur la page d'acceuil</a>
        </main>
    );

}

export default PageNotFound;