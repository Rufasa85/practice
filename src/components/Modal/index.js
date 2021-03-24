import React from 'react'

export default function Modal(props) {
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{props.photo.name}</h3>
                <img alt={props.photo.category}src={props.photo.src} />
                <p>
                    {props.photo.desc}
    </p>
                <button data-testid="closeme" onClick={props.close}type="button">
                    Close this modal
    </button>
            </div>
        </div>
    )
}
