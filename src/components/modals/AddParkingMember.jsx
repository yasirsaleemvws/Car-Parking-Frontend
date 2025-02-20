import React, { useState } from 'react';
import { Modal, Input, Button, Form } from 'antd';
import MembershipTypeModal from './MembershipType';
import PaymentMethodModal from './PaymentMethod';

export default function AddParkingMemberModal({ visible, onClose, onSave }) {
    const [form] = Form.useForm();
    const [membershipModalVisible, setMembershipModalVisible] = useState(false);
    const [selectedMembershipType, setSelectedMembershipType] = useState('Free');
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');

    const handleSave = () => {
        form.validateFields()
            .then(values => {
                onSave({ ...values, membershipType: selectedMembershipType });
                form.resetFields();
                setSelectedMembershipType('');
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleSelectMembershipType = (type) => {
        setSelectedMembershipType(type);
    };

    const handleSelecPayment = (type) => {
        setSelectedMembershipType(type);
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
                <div className="flex items-center mb-4">
                    <img src="/images/icons/files.png" alt="Parking Icon" className="w-10 h-10 mr-3" />
                    <h2 className="text-lg font-semibold">Add Parking Member</h2>
                </div>

                <Form form={form} layout="vertical">
                    <Form.Item
                        name="memberName"
                        label={<span className="text-gray-700">Member Name <span className='text-red-600'>*</span></span>}
                        rules={[{ required: true, message: "Please enter the member name" }]}
                    >
                        <Input placeholder="Enter Member Name" className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600" />
                    </Form.Item>

                    <Form.Item
                        name="plateNumber"
                        label={<span className="text-gray-700">Plate Number <span className='text-red-600'>*</span></span>}
                        rules={[{ required: true, message: "Please enter the plate number" }]}
                    >
                        <Input placeholder="Enter Plate Number" className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600" />
                    </Form.Item>

                    <Form.Item
                        name="membershipType"
                        label={<span className="text-gray-700">Membership Type <span className='text-red-600'>*</span></span>}
                        rules={[{ required: true, message: "Please select the membership type" }]}
                    >
                        <div
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600 cursor-pointer"
                            onClick={() => setMembershipModalVisible(true)}
                        >
                            {selectedMembershipType || "Select Membership Type"}
                        </div>
                    </Form.Item>

                    <Form.Item
                        name="paymentMethod"
                        label={<span className="text-gray-700">Payment Method <span className='text-red-600'>*</span></span>}
                        rules={[{ required: true, message: "Please select the payment method" }]}
                    >
                        <div
                            className="w-full px-3 py-2 rounded-md text-gray-700 border border-gray-600 cursor-pointer"
                            onClick={() => setPaymentModalVisible(true)}
                        >
                            {selectedPayment || "Select Payment Method"}
                        </div>
                    </Form.Item>

                    {/* Save Button */}
                    <div className="mt-4">
                        <Button
                            type="primary"
                            className="w-full py-5 text-white bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-semibold"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </div>
                </Form>

                <MembershipTypeModal
                    visible={membershipModalVisible}
                    onClose={() => setMembershipModalVisible(false)}
                    onSelect={handleSelectMembershipType}
                    value={selectedMembershipType}
                />

                <PaymentMethodModal
                    visible={paymentModalVisible}
                    onClose={() => setPaymentModalVisible(false)}
                    onSelect={handleSelecPayment}
                />
            </div>
        </Modal>
    );
}
