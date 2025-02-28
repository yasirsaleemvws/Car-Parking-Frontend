import React from 'react'
import { Modal, Input, Button, Select, Form } from "antd";

const { Option } = Select;
export default function AddTeamMemberModal({ visible, onClose, onSave, user }) {
    const [form] = Form.useForm();
    const availableRoles = user?.role === "company" ? ["Manager", "Member"] : ["Member"];


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
                    <h2 className=" text-lg font-semibold">Add Team Member</h2>
                </div>

                <Form form={form} layout="vertical">
                    <Form.Item
                        name="memberName"
                        label={<span className="text-gray-700">Member Name <span className='text-red-600'>*</span></span>}
                        rules={[{ message: "Please enter the parking area name" }]}
                    >
                        <Input placeholder="Enter Member Name" className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label={<span className="text-gray-700">Email <span className='text-red-600'>*</span></span>}
                        rules={[{ message: "Please enter the parking area name" }]}
                    >
                        <Input placeholder="Enter Member Email" className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" type='email' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label={<span className="text-gray-700">Password <span className='text-red-600'>*</span></span>}
                        rules={[{ message: "Please enter the parking area name" }]}
                    >
                        <Input placeholder="....." className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600" type='password' />
                    </Form.Item>

                    <Form.Item
                        name="role"
                        label={<span className="text-gray-700">Select Role <span className='text-red-600'>*</span></span>}
                        rules={[{ message: "Please enter the parking area name" }]}
                    >
                        <Select className="w-full px-3 py-2 rounded-md  text-gray-700 border border-gray-600 h-[40px]" placeholder="Select Role">
                            {availableRoles.map(role => (
                                <Option key={role} value={role}>{role}</Option>
                            ))}
                        </Select>
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
