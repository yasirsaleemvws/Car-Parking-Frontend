import React from 'react';
import { Modal, Button, Radio } from 'antd';
import { IoLayersSharp } from "react-icons/io5";
import { MdOutlineLayers } from "react-icons/md";
import { PiExcludeFill } from "react-icons/pi";

export default function PaymentMethodModal({ visible, onClose, onSelect, value }) {
    const [selectedType, setSelectedType] = React.useState(value);

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
            <div className="rounded-lg">
                <h2 className="text-lg font-semibold mb-6">Select Payment Method</h2>
                <Radio.Group onChange={e => setSelectedType(e.target.value)} className="w-full">
                    <div className="flex flex-col space-y-4">
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Visa' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <img src="/images/icons/visa.png" alt="" />
                            <div>
                                <p className="font-medium">Visa ending in 1234</p>
                                <p className="text-sm text-gray-600 mt-1">Expiry 06/2024</p>
                                <p className="text-sm text-gray-500">Set as default</p>
                            </div>
                            <Radio value="Visa" checked={selectedType === 'Visa'} />
                        </div>
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Mastercard' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <img src="/images/icons/master-card.png" alt="" />
                            <div>
                                <p className="font-medium">Mastercard ending in 1234</p>
                                <p className="text-sm text-gray-600 mt-1">Expiry 06/2024</p>
                                <p className="text-sm text-gray-500">Set as default</p>
                            </div>
                            <Radio value="Mastercard" checked={selectedType === 'Mastercard'} />
                        </div>
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Apple Pay' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <img src="/images/icons/apple.png" alt="" />
                            <div>
                                <p className="font-medium">Visa ending in 1234</p>
                                <p className="text-sm text-gray-600 mt-1">Expiry 06/2024</p>
                                <p className="text-sm text-gray-500">Set as default</p>
                            </div>
                            <Radio value="Apple Pay" checked={selectedType === 'Apple Pay'} />
                        </div>
                    </div>
                </Radio.Group>
                <div className="mt-6 flex justify-end space-x-2">
                    <Button className="mr-2 w-full py-5 text-purple-600 bg-white border border-purple-600 rounded-md text-lg font-semibold" onClick={onClose}>Cancel</Button>
                    <Button type="primary" className='w-full py-5 text-white bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-semibold' onClick={handleConfirm}>Confirm</Button>
                </div>
            </div>
        </Modal>
    );
}