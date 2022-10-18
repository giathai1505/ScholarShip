import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { listStudents } from "../../assets/data";
import { ConvertLinkGGDrive } from "../../assets/function/convertLinkGGDrive";
import logo from "../../assets/images/logo.png";

import "./style.css";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    setDetail(listStudents.filter((item) => item.Stt.toString() === id)[0]);
  }, []);

  console.log(detail);

  return (
    <div class="mx-[300px] my-10">
      <div className="flex items-center gap-[250px]">
        <img src={logo} className="w-[150px]" />
        <h1 class="title font-bold text-center text-3xl">
          ĐƠN ỨNG TUYỂN VSDP 2021
        </h1>
      </div>

      <section class="">
        <h2 class="mt-10 mb-3 font-semibold text-xl">1. Thông tin cá nhân</h2>
        <div class="border-solid mb-4 border border-gray p-4 rounded-lg">
          <div class="grid grid-cols-5 mb-3">
            <div class="col-span-1 leading-10">
              <p class="font-weight-bold">Họ và tên:</p>
              <p>Tên trường:</p>
              <p>Ngành học:</p>
              <p>MSSV:</p>
            </div>
            <div class="col-span-4 leading-10">
              <p class="font-bold">{detail?.Name}</p>
              <p class="font-bold" id="university">
                {detail?.University}
              </p>
              <p class="font-bold" id="major">
                {detail?.Major}
              </p>
              <p class="font-bold" id="studentId">
                {detail?.Mssv}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-5">
            <div className="col-span-1 border border-solid border-gray rounded-lg">
              <img
                src={
                  detail?.Portrait ? ConvertLinkGGDrive(detail?.Portrait) : ""
                }
                alt="..."
                className="w-full h-full object-contain"
              />
            </div>

            <div class="col-span-2 leading-10">
              <p>
                Giới tính:&nbsp;&nbsp;
                <label class="radio-inline mb-0" onclick="return false;">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    checked={detail?.Gender === "Nam"}
                  />{" "}
                  Nam
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <label class="radio-inline mb-0" onclick="return false;">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    checked={detail?.Gender === "Nữ"}
                  />{" "}
                  Nữ
                </label>
              </p>
              <p>
                Ngày sinh: <span class="font-bold">{detail?.Birth}</span>
              </p>
              <p>
                Địa chỉ thường trú:&nbsp;
                <span class="font-bold"> {detail?.CurrentAddress}</span>
              </p>
              <p>
                Tỉnh/Thành phố:&nbsp;
                <span class="font-bold"> {detail?.Province}</span>
              </p>
              <p>
                Địa chỉ liên lạc:&nbsp;
                <span class="font-bold">{detail?.Address}</span>
              </p>
              <p>
                SĐT cá nhân:&nbsp;
                <span class="font-bold">{detail?.Phone1}</span>
              </p>
              <p>
                SĐT người thân:&nbsp;
                <span class="font-bold">{detail?.Phone2}</span>
              </p>
              <p>
                Số CMND/CCCD:&nbsp;
                <span class="font-bold">{detail?.Cmnd}</span>
              </p>
              <p>
                Email:&nbsp;
                <span class="font-bold">{detail?.Email}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="border-solid border border-gray rounded-lg grid grid-cols-2 leading-10 bg-red-50  p-4">
          <div class="col-span-1">
            <p>
              Sinh viên có đang đi làm thêm:&nbsp;
              <span class="font-bold">{detail?.StudyOrWork}</span>
            </p>
          </div>
          <div class="col-span-1">
            <p>
              Công việc làm thêm:&nbsp;
              <span class="font-bold">{detail?.NameOfJob}</span>
            </p>
          </div>
          <div class="col-span-1">
            <p>
              Thu nhập từ công việc làm thêm:&nbsp;
              <span class="font-bold">{detail?.Income}</span>
            </p>
          </div>
        </div>
      </section>
      <section class="learning">
        <h2 class="mt-10 mb-3 font-semibold text-xl">2. Thông tin học tập</h2>
        <div class="border-solid mb-4 border border-gray p-4 rounded-lg leading-10 bg-blue-50">
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <p class="font-bold">Trúng tuyển theo phương thức:</p>
            </div>
            <div class="col-span-1">
              <p id="method" class="font-bold">
                Xét điểm học bạ THPT
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <p>
                Điểm thi THPT 2021:&nbsp;
                <span class="font-bold" id="nationExamScore">
                  {detail?.ScoreTotNghiep}
                </span>
              </p>
            </div>
            <div class="col-span-1">
              <p>
                Điểm học bạ THPT:&nbsp;
                <span class="font-bold" id="scoreHighSchool">
                  {detail?.ScoreHB}
                </span>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <p>
                Điểm thi đánh giá năng lực:&nbsp;
                <span class="font-bold" id="scoreCompetency">
                  {detail?.ScoreDGNL}
                </span>
              </p>
            </div>
            <div class="col-span-1">
              <p>
                Tổng điểm các môn trong tổ hợp xét tuyển:&nbsp;
                <span class="font-weight-bold" id="totalScoreGraduation">
                  {detail?.ScoreCombination}
                </span>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1">
              <p>
                Điểm xét tuyển của phương thức đặc cách tốt nghiệp:&nbsp;
                <span class="font-bold" id="totalScoreExceptional">
                  {detail?.ScoreDatCach}
                </span>
              </p>
            </div>
          </div>
        </div>
        <h5 class="text-center mb-3 mt-4" id="notification">
          Giấy báo nhập học
        </h5>
        <div class="row justify-content-around">
          <div class="card rotatable-image">
            <img
              id="imageSrc"
              onLoad={"Thái"}
              class="rounded d-block test-rotate"
              alt="..."
              data-toggle="modal"
              data-target=".image-modal"
              src={
                detail?.JoinUniversityPaperPic
                  ? ConvertLinkGGDrive(detail?.JoinUniversityPaperPic)
                  : ""
              }
            />
            <div class="rotate-btn card">
              <img src="./images/rotate-btn.png" />
            </div>
          </div>
        </div>
        <div class="border-solid mb-4 border border-gray p-4 rounded-lg leading-10 bg-blue-50">
          <div class="flex gap-6">
            <div class="col-4">
              <p>
                Điểm TB lớp 10:{" "}
                <span class="font-bold" id="gpa10">
                  {detail?.Average10}
                </span>
              </p>
            </div>
            <div class="col-4">
              <p>
                Điểm TB lớp 11:{" "}
                <span class="font-bold" id="gpa11">
                  {detail?.Average11}
                </span>
              </p>
            </div>
            <div class="col-4">
              <p>
                Điểm TB lớp 12:{" "}
                <span class="font-bold" id="gpa12">
                  {detail?.Average12}
                </span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                {" "}
                Liệt kê các giải thưởng liên quan đến HỌC TẬP từ THPT:{" "}
                <span class="font-bold" id="award">
                  {detail?.StudyAward}
                </span>{" "}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                {" "}
                Giải thưởng học tập cao nhất:{" "}
                <span class="font-bold" id="highestAcademicAward">
                  {detail?.HighestAward}
                </span>{" "}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                {" "}
                Liệt kê những học bổng sinh viên đã nhận được tính từ THPT đến
                nay:{" "}
                <span class="font-bold" id="scholarship">
                  {detail?.ListScholarship}
                </span>{" "}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                {" "}
                Sinh viên có thư giới thiệu không:{" "}
                <span class="font-bold" id="teacherLetter">
                  {detail?.IfCoverLetter}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <h5 class="text-center mb-3 mt-4" id="certificateHighestAcademicAward">
          Giải thưởng học tập cao nhất
        </h5>
        <div class="row justify-content-around">
          <div class="card rotatable-image">
            <img
              src={detail?.AwardPic ? ConvertLinkGGDrive(detail?.AwardPic) : ""}
            />
            <div class="rotate-btn card">
              <img
                src={
                  detail?.AwardPic ? ConvertLinkGGDrive(detail?.AwardPic) : ""
                }
              />
            </div>
          </div>
        </div>
        <h5 class="text-center mb-3 mt-4" id="teacherLetterFile">
          Thư giới thiệu sinh viên
        </h5>
        <div class="row justify-content-around">
          <div class="card rotatable-image">
            <img
              id="imageSrc"
              class="rounded d-block test-rotate"
              alt="..."
              data-toggle="modal"
              data-target=".image-modal"
              src={
                detail?.THPTCoverLetterPic
                  ? ConvertLinkGGDrive(detail?.THPTCoverLetterPic)
                  : ""
              }
            />
            <div class="rotate-btn card">
              <img src="./images/rotate-btn.png" />
            </div>
          </div>
        </div>
      </section>
      <section class="farmily">
        <h2 class="mt-10 mb-3 font-semibold text-xl">3. Thông tin gia đình</h2>
        <div class="border-solid mb-4 border border-gray rounded-lg leading-10 content p-4 bg-green-50">
          <div class="mb-4">
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p class="font-weight-bold">
                  {" "}
                  Họ tên cha:{" "}
                  <span class="font-bold" id="fatherName">
                    {detail?.FatherName}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="col-span-1">
                <p>
                  {" "}
                  Tình trạng sức khỏe:{" "}
                  <span class="font-bold" id="fatherHealthStatus">
                    {detail?.FatherHealth}
                  </span>{" "}
                </p>
              </div>
              <div class="col-span-1">
                <p>
                  Năm sinh:{" "}
                  <span class="font-bold" id="fatherBirth">
                    {detail?.FatherBirth}
                  </span>
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p>
                  {" "}
                  Bệnh (nếu có) hoặc lí do mất sức lao động:{" "}
                  <span class="font-bold" id="fatherDetailHealth">
                    {detail?.IfFatherHealth}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="col-span-1">
                <p>
                  Trình độ học vấn:{" "}
                  <span class="font-bold" id="fatherAcademicLevel">
                    {detail?.FatherEducation}
                  </span>
                </p>
              </div>
              <div class="col-span-1">
                <p>
                  Nghề nghiệp:{" "}
                  <span class="font-bold" id="fatherJob">
                    {detail?.FatherJob}
                  </span>
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p>
                  {" "}
                  Thu nhập bình quân hàng tháng:{" "}
                  <span class="font-bold" id="fatherSalary">
                    {detail?.FatherIncome}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p>
                  {" "}
                  Họ tên mẹ:{" "}
                  <span class="font-bold" id="motherName">
                    {detail?.MotherName}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="col-span-1">
                <p>
                  {" "}
                  Tình trạng sức khỏe:{" "}
                  <span class="font-bold" id="motherHealthStatus">
                    {detail?.MotherHealth}
                  </span>{" "}
                </p>
              </div>
              <div class="col-span-1">
                <p>
                  Năm sinh:{" "}
                  <span class="font-bold" id="motherBirth">
                    {detail?.MotherBirth}
                  </span>
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p>
                  {" "}
                  Bệnh (nếu có) hoặc lí do mất sức lao động:{" "}
                  <span class="font-bold" id="motherDetailHealth">
                    {detail?.IfMotherHealth}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="col-span-1">
                <p>
                  Trình độ học vấn:{" "}
                  <span class="font-bold" id="motherAcademicLevel">
                    {detail?.MotherEducation}
                  </span>
                </p>
              </div>
              <div class="col-span-1">
                <p>
                  Nghề nghiệp:{" "}
                  <span class="font-bold" id="motherJob">
                    {detail?.MotherJob}
                  </span>
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <div class="col-span-1">
                <p>
                  {" "}
                  Thu nhập bình quân hàng tháng:{" "}
                  <span class="font-bold" id="motherSalary">
                    {detail?.MotherIncome}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-solid mb-4 border border-gray rounded-lg leading-10 content p-4 bg-green-50 ">
          <p>
            {" "}
            Nơi ở của cha mẹ hiện nay:{" "}
            <span class="font-bold" id="parentAddress">
              {detail?.CurrentParentsAddress}
            </span>{" "}
          </p>

          <p>
            {" "}
            Tình trạng hôn nhân của cha mẹ:{" "}
            <span class="font-bold" id="parentMaritalStatus">
              {detail?.Marrage}
            </span>{" "}
          </p>

          <p>
            {" "}
            Nếu cha mẹ ly dị thì người còn lại có đóng góp/trợ cấp nuôi con
            không?{" "}
            <span class="font-bold" id="parentSupport">
              {detail?.ReasonIfDivorce}
            </span>{" "}
          </p>

          <p>
            {" "}
            Loại giấy tờ xác nhận hoàn cảnh của sinh viên:{" "}
            <span class="font-bold" id="poorHousehold">
              {detail?.PoorPaper}
            </span>{" "}
          </p>
        </div>
        <div class="border-solid mb-4 border border-grayrounded-lg leading-10 content p-4 bg-green-50">
          <p class="font-bold">
            {" "}
            Trả lời chi tiết về hoàn cảnh gia đình:{" "}
            <span>{detail?.DetailFamily}</span>
          </p>

          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p> (1) Số ông/bà đang sống chung </p>
            </div>
            <div class="col-span-1">
              <p id="numberGrandparent">{detail?.[331]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p> (2) Số anh/chị/em ĐÃ lập gia đình </p>
            </div>
            <div class="col-span-1">
              <p id="numberSiblingMarried">{detail?.[332]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p>
                {" "}
                (3) Số anh/chị/em CHƯA lập gia đình, và đang là sinh viên:{" "}
              </p>
            </div>
            <div class="col-span-1">
              <p id="numberSiblingStudent">{detail?.[333]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p>
                {" "}
                (4) Số anh/chị/em CHƯA lập gia đình, và đang học phổ thông hay
                học nghề{" "}
              </p>
            </div>
            <div class="col-span-1">
              <p id="numberSiblingHighSchoolOrApprentice">{detail?.[334]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p>
                {" "}
                (5) Số anh/chị/em CHƯA lập gia đình, và đang làm nông, làm mướn,
                thất nghiệp, nội trợ HAY còn nhỏ chưa đi học:{" "}
              </p>
            </div>
            <div class="col-span-1">
              <p id="numberSiblingHighSchoolUnemployed">{detail?.[335]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p>
                {" "}
                (6) Số anh/chị/em CHƯA lập gia đình, và làm các nghề khác như
                công nhân giáo viên, bộ đội, kỹ sư,….{" "}
              </p>
            </div>
            <div class="col-span-1">
              <p id="numberSiblingHighSchoolHaveJob">{detail?.[336]}</p>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              <p class="font-bold">
                {" "}
                (7) Tổng số thành viên ĐÃ NÊU Ở TRÊN trong gia đình{" "}
              </p>
            </div>
            <div class="col-span-1">
              <p class="font-bold">{detail?.[337]}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="essay">
        <h2 class="mt-10 mb-3 font-semibold text-xl">4. Bài luận</h2>
        <div class="border-solid mb-4 border border-gray rounded-lg  bg-yellow-50 leading-6 content p-4">
          <p className="leading-6">
            {" "}
            Câu 1: Bạn hãy trình bày một cách chi tiết nhất về hoàn cảnh gia
            đình mình hiện nay và những khó khăn, thử thách đã gặp phải khi theo
            đuổi việc học.Nếu bạn được chọn là thành viên của Chương trình Phát
            triển Sinh viên VietHope 2021 và nhận được Học bổng USP 2021, bạn sẽ
            sử dụng số tiền đó như thế nào?{" "}
          </p>
        </div>
        <div class="ml-2 mr-2 mt-4 mb-5 text-justify" id="answer1">
          <p className="leading-8">{detail?.Question1}</p>
        </div>
        <div class="border-solid mb-4 border border-gray rounded-lg leading-6 content p-4 bg-yellow-50">
          <p>
            {" "}
            Câu 2: Theo bạn những phẩm chất/thế mạnh gì đã giúp bạn vượt qua
            những khó khăn trong quá khứ để tiếp tục việc học? Trong những năm
            học đại học sắp tới, những thách thức lớn nhất của bạn là gì? Bạn dự
            định sẽ sử dụng những thế mạnh của mình để vượt qua những thách thức
            đó như thế nào trên con đường theo đuổi học vấn? Khuyến khích miêu
            tả chi tiết và có sử dụng ví dụ cụ thể cho những ý trình bày.{" "}
          </p>
        </div>
        <div class="ml-2 mr-2 mt-4 mb-5 text-justify" id="answer2">
          <p className="leading-8">{detail?.Question2}</p>
          <p></p>
        </div>
      </section>
      <div class="modal fade image-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <img id="preview-image" src="" alt="preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
