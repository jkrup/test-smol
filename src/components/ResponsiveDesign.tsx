import React from 'react';
import '../styles/responsiveDesign.css';

const ResponsiveDesign: React.FC = () => {
    return (
        <div className="responsiveDesign">
            <div className="desktop">
                <p>This is the desktop view of ImGeX. Adjust the size of your browser window to see the mobile view.</p>
            </div>
            <div className="tablet">
                <p>This is the tablet view of ImGeX. Adjust the size of your browser window to see the mobile or desktop view.</p>
            </div>
            <div className="mobile">
                <p>This is the mobile view of ImGeX. Adjust the size of your browser window to see the tablet or desktop view.</p>
            </div>
        </div>
    );
};

export default ResponsiveDesign;