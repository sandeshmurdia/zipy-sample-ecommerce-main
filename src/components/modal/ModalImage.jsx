

function ModalImage(props) {
    return (
        <div className="modal-image-section">
            <div id="modal-main-image-section">
                <img src={props.path} id='modal-main-image' alt="modal-images" />
            </div>

        </div>
    )
}

export default ModalImage