import * as React from 'react';

export interface SwitchProps {
    on?: boolean;
    className?: string;
    onClick?(): void;
}

export default function Switch({on, className = '', ...props}: SwitchProps): JSX.Element {
    return (
        <div className="toggle">
            <input type="checkbox" className="toggle-input"/>
            <button
                className={`${className} toggle-btn ${on ? "toggle-btn-on" : "toggle-btn-off"}`}
                {...props} />
        </div>
    );
}
