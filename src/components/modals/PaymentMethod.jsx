import React from 'react';
import { Modal, Button, Radio } from 'antd';

export default function PaymentMethodModal({ visible, onClose, onSelect }) {
    const [selectedType, setSelectedType] = React.useState(null);

    const handleConfirm = () => {
        onSelect(selectedType);
        onClose();
    };

    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            centered
            className="rounded-lg max-w-[400px]"
        >
            <div className="p-2 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Select Membership Type</h2>
                <Radio.Group onChange={e => setSelectedType(e.target.value)}>
                    <Radio value="Basic Monthly">Basic Monthly</Radio>
                    <Radio value="Free">Free</Radio>
                    <Radio value="Basic Yearly">Basic Yearly</Radio>
                </Radio.Group>
                <div className="mt-4 flex justify-end">
                    <Button className="mr-2" onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={handleConfirm}>Confirm</Button>
                </div>
            </div>
        </Modal>
    );
}
