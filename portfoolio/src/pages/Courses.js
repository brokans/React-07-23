import React from 'react';
import {Link} from 'react-router-dom';

function Courses() {
  return (<div>
        <Link to="/">
            <button>Tagasi</button>
        </Link>
        <div>Kursuste Sisu</div>
    </div>
    
  )
}

export default Courses