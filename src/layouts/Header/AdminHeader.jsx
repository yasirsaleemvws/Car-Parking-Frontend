import React from "react";

const AdminHeader = () => {
  return (
    <Header className="bg-white shadow-md flex items-center justify-between p-4">
      <div className="lg:hidden">
        <Button icon={<MenuOutlined />} onClick={() => setCollapsed(false)} />
      </div>

      <div>
        <h2 className="text-xl font-semibold">Create Event</h2>
      </div>
      <div className="flex items-center space-x-4">
        <Button type="primary">Save & Continue</Button>
        <img
          src="https://via.placeholder.com/30"
          alt="User Avatar"
          className="rounded-full"
        />
      </div>
    </Header>
  );
};

export default AdminHeader;
