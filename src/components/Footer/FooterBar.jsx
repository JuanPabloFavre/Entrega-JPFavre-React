import React from 'react';
import '../../styles/style.css'
import FooterBarItem from './FooterBarItem';


const FooterBar = (props) => {
    return (
        <div  className="footer bg-body-tertiary opacity-50 ">
           <ul className='ulFooter'>
						{props.items?.map((texto,index) =>(
							<FooterBarItem key={index} texto ={texto} />
						))}
		
					</ul>
        </div>
    );
};

export default FooterBar;