import React from 'react'
import { Modal, Input, Button, Select, Form } from "antd";

const { Option } = Select;
export default function AddParkingModal({ visible, onClose, onSave }) {
    const [form] = Form.useForm();

    const handleSave = () => {
        form.validateFields()
            .then(values => {
                onSave(values);
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
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
                    <h2 className=" text-lg font-semibold">Add Parking Area</h2>
                </div>

                <Form form={form} layout="vertical">
                    {/* Parking Area Name */}
                    <Form.Item
                        name="parkingAreaName"
                        label={<span className="text-gray-700">Parking Area Name <span className='text-red-600'>*</span></span>}
                        rules={[{  message: "Please enter the parking area name" }]}
                    >
                        <Input placeholder="Enter Area Name" className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />
                    </Form.Item>

                    {/* Parking Area (Length & Width) */}
                    <div className="flex space-x-4">
                        <Form.Item
                            name="parkingAreaLength"
                            label={<span className="text-gray-700">Length<span className='text-red-600'>*</span></span>}
                            rules={[{ message: "Please enter the length" }]}
                            className="flex-1"
                        >
                            <Input placeholder="25" type='number' className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />
                        </Form.Item>

                        <Form.Item
                            name="parkingAreaWidth"
                            label={<span className="text-gray-700">Width<span className='text-red-600'>*</span></span>}
                            rules={[{  message: "Please enter the width" }]}
                            className="flex-1"
                        >
                            <Input placeholder="25" type='number' className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />
                        </Form.Item>
                    </div>

                    {/* Parking Capacity */}
                    <Form.Item
                        name="parkingCapacity"
                        label={<span className="text-gray-700">Parking Capacity<span className='text-red-600'>*</span></span>}
                        rules={[{  message: "Please select the parking capacity" }]}
                    >
                        <Input placeholder="250" type='number' className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />

                    </Form.Item>

                    {/* Installed Camera */}
                    <Form.Item
                        name="installedCamera"
                        label={<span className="text-gray-700">Installed Camera<span className='text-red-600'>*</span></span>}
                        rules={[{  message: "Please select the number of installed cameras" }]}
                    >
                        <Input placeholder="150" type='number' className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />
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
            </div>
        </Modal>
    );
}
