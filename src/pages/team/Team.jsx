import React, { useState } from 'react'
import CustomFilters from '../../components/CustomFilters';
import AddTeamMemberModal from '../../components/modals/AddTeamMember';
import { useQuery } from 'react-query';
import { Dropdown, Menu, Tag } from 'antd';
import { IoMdMore } from 'react-icons/io';
import CustomTable from "../../components/CustomTable";
import { GET_TEAM_MEMBERS } from "../../api/PrivateApi";

const renderActionsDropdown = (item) => {
  const actionMenu = (
    <Menu className="min-w-[120px]">
      <Menu.Item key="deactivate" className="border-b border-gray-300"> Deactivate </Menu.Item>
      <Menu.Item key="activate" className="border-b border-gray-300"> Activate </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={actionMenu} placement="bottomRight">
      <button className="p-2 border rounded-md hover:bg-gray-200 text-2xl">
        <IoMdMore />
      </button>
    </Dropdown>
  );
};

export default function Team() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 10,
  });

  const { data, isLoading } = useQuery(
    ["parkingData", pagination.current, sort, search],
    () => GET_TEAM_MEMBERS(pagination.current, pagination.pageSize, search, sort ? "asc" : "desc"),
    { keepPreviousData: true }
  );

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (value) => (
        <Tag color={value ? "green" : "yellow"}>
          {value ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date) =>
        new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(date)),
    },
    {
      title: "Action",
      render: (_, record) => <div>{renderActionsDropdown(record)}</div>,
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSave = (data) => {
    console.log("Saved data:", data);
    setIsModalVisible(false);
    // Handle the saved data (e.g., make an API call)
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Team Management</h1>
        {userInfo?.user.role !== "user" && (
          <button
            className="bg-white text-gray-600 py-2 pl-4 pr-8 border border-gray-400 rounded flex items-center"
            onClick={showModal}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add Team Member
          </button>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg">
        <CustomFilters title="All Team Members" setSearch={setSearch} sort={sort} setSort={setSort} />
        <CustomTable data={data?.data} columns={columns} pagination={pagination} setPagination={setPagination} loading={isLoading} />
      </div>

      <AddTeamMemberModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSave}
        user={userInfo?.user}
      />
    </>
  );
}
