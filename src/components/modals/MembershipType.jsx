import React from 'react';
import { Modal, Button, Radio } from 'antd';
import { IoLayersSharp } from "react-icons/io5";
import { MdOutlineLayers } from "react-icons/md";
import { PiExcludeFill } from "react-icons/pi";

export default function MembershipTypeModal({ visible, onClose, onSelect, value }) {
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
                <h2 className="text-lg font-semibold mb-6">Select Your Plan</h2>
                <Radio.Group onChange={e => setSelectedType(e.target.value)} className="w-full">
                    <div className="flex flex-col space-y-4">
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Basic Monthly' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <IoLayersSharp className={`text-2xl ${selectedType === 'Basic Monthly' ? 'text-purple-800' : ''}`} />
                            <div>
                                <span className="font-medium">Basic Monthly</span>
                                <span className="text-sm text-gray-600 mt-1">$300/month</span>
                                <p className="text-sm text-gray-500">Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                            <Radio value="Basic Monthly" checked={selectedType === 'Basic Monthly'} />
                        </div>
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Free' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <MdOutlineLayers className={`text-2xl ${selectedType === 'Free' ? 'text-purple-800' : ''}`} />
                            <div>
                                <span className="font-medium">Free</span>
                                <span className="text-sm text-gray-600 mt-1">$0/month</span>
                                <p className="text-sm text-gray-500">Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                            <Radio value="Free" checked={selectedType === 'Free'} />
                        </div>
                        <div className={`flex justify-between p-4 gap-2 border rounded-lg ${selectedType === 'Basic Yearly' ? 'border-purple-800 border-2 bg-purple-100' : ''}`}>
                            <PiExcludeFill className={`text-2xl ${selectedType === 'Basic Yearly' ? 'text-purple-800' : ''}`} />
                            <div>
                                <span className="font-medium">Basic Yearly</span>
                                <span className="text-sm text-gray-600 mt-1">$40/month</span>
                                <p className="text-sm text-gray-500">Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                            <Radio value="Basic Yearly" checked={selectedType === 'Basic Yearly'} />
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