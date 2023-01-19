

function ModalPriceSection(props) {
    return (
        <div className="modal-price-section">
            <span>${props.price}</span>
            <span> / per piece</span>
        </div>
    )
}

export default ModalPriceSection