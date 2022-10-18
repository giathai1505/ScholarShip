import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listStudents } from "../../assets/data";
import "./styles.css";
import logo from "../../assets/images/logo.png";

const ListCandidates = () => {
  const [list, setList] = useState(listStudents);

  return (
    <div className="mx-[200px]">
      <div className="flex items-center gap-[250px]">
        <img src={logo} className="w-[150px]" />
        <h1 className="mt-10 font-bold text-2xl text-center">
          DANH SÁCH SINH VIÊN ĐĂNG KÝ
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="border w-[300px] border-solid border-gray rounded-sm px-2 py-1">
          <input
            className="outline-none"
            type="text"
            placeholder="Nhập tên....."
          />
        </div>
        <span className="block rounded-sm text-white bg-[#009879] p-1 cursor-pointer">
          Tìm kiếm
        </span>
      </div>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>SDT</th>

              <th>MSSV</th>
              <th>Trường</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listStudents.map((item, index) => {
              return (
                <tr>
                  <td>{item.Stt}</td>
                  <td>{item.Name}</td>
                  <td>{item.Birth}</td>
                  <td>{item.Phone1}</td>

                  <td>{item.Mssv}</td>
                  <td>{item.University}</td>
                  <td>{item.Email}</td>
                  <td>
                    <button className="cursor-pointer px-2 py-1 rounded-lg block text-white bg-[#009879]">
                      <Link to={`/${item.Stt}`}>chi tiết</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCandidates;
