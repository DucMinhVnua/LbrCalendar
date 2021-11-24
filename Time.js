import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

/*
    ====== Các việc đã làm =======
    1.Đổi thứ sang số
    2.Đổi ngược ngày tháng năm trên đào tạo
    3.Khai báo biến cần thiết ban đầu
    4.Hàm chuyển đổi date sang dạng yyyy-mm-dd (string)
    5.Tính được ngày của thứ bắt đầu học ---- Tiếng anh 2 (Thứ 7)
    6.Phân tách tuần ra
    7.Xác định tuần học đầu tiên
    8.Cắt từ tuần học đầu tiên đến hết
    9.Lưu dữ liệu mới <Ngày tháng năm (đã lấy theo thứ) học> vào mảng mới
        a.Lấy ra thứ bắt đầu học rồi xử lý thứ đó chuyển về dạng yyyy-mm-dd <thứ bắt đầu học = day - 1 (Chủ nhật)>
        b.Đánh dấu tuần đó phải học hay không flag = 0: không phải học
    10.Lấy ra các ngày tháng chính xác học môn đó
*/

export default function App() {
  //1.Đổi thứ sang số
  const letterToNumer = (day) => {
    switch (day) {
      case "Hai":
        return 2;
      case "Ba":
        return 3;
      case "Tư":
        return 4;
      case "Năm":
        return 5;
      case "Sáu":
        return 6;
      case "Bảy":
        return 7;
      case "CN":
        return 8;
    }
  };

  //2.Đổi ngược ngày tháng năm trên đào tạo
  const reverseDate = (dateWeb) => {
    const splitDate = dateWeb.split("/");
    return splitDate.reverse().join("/");
  };

  //3.Khai báo biến cần thiết ban đầu
  //note: đổi ngược ngày tháng ban đầu trên đào tạo
  const Week = "-----------------89";
  const dayFirst = reverseDate("13/12/2021"); // Thứ 2 (Ngày bắt đầu)
  const day = letterToNumer("CN"); //Thứ trên đào tạo

  //4.Hàm chuyển đổi date sang dạng yyyy-mm-dd (string)
  const timeToString = (date) => {
    return date.toISOString().split("T")[0];
  };

  //5.Tính được ngày của thứ bắt đầu học ---- Tiếng anh 2 (Thứ 7)
  //Ý tưởng: Lấy ngày bắt đầu <Thứ 2 + 7 -1(thứ 7)>
  //const date = new Date(ngayBD);
  //date.setDate(date.getDate() + 6);
  //const time = timeToString(date);

  //6.Phân tách tuần ra
  //Ý tưởng: dùng split tách từng phần trong string ra rồi đếm => tổng số tuần
  const splitWeek = Week.split(""); //return arr
  const numberOfWeek = splitWeek.length; //return int

  //7.Xác định tuần học đầu tiên
  //Ý tưởng: Lặp qua phần tử trong mảng splitWeek rồi check các tuần học
  const firstWeek = splitWeek.find((element, index) => {
    return element != "-";
  });

  //8.Cắt từ tuần học đầu tiên đến hết
  const indexFirstWeek = splitWeek.indexOf(firstWeek); //return int
  const cutFirstWeek = splitWeek.slice(indexFirstWeek); //return arr

  //9.Lưu dữ liệu mới <Ngày tháng năm (đã lấy theo thứ) học> vào mảng mới
  const data = [];
  let convertData = {};

  //a.Lấy ra thứ bắt đầu học rồi xử lý thứ đó chuyển về dạng yyyy-mm-dd <thứ bắt đầu học = day - 1 (Chủ nhật)>
  let i = day - 1;
  let date = new Date(dayFirst);
  date.setDate(date.getDate() + i);
  let dayOfWeek = timeToString(date);

  //b.Đánh dấu tuần đó phải học hay không flag = 0: không phải học
  cutFirstWeek.forEach((element) => {
    if (element == "-") {
      convertData = {
        dayOfWeek,
        flag: "0",
      };
    } else {
      convertData = {
        dayOfWeek,
        flag: "1",
      };
    }
    data.push(convertData);
    date.setDate(date.getDate() + 7);
    dayOfWeek = timeToString(date);
  });

  //10.Lấy ra các ngày tháng chính xác học môn đó
  data.forEach((element) => {
    if (element.flag == "1") {
      console.log(element.dayOfWeek);
    }
  });

  return (
    <SafeAreaView>
      <Text>Hello Test</Text>
    </SafeAreaView>
  );
}
