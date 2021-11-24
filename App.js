import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";

/*
  ======== Công việc đã làm ============
  1.Các state lưu trữ
  2.Hàm Convert dạng ml -> yyyy-mm-dd
  3.Hàm render những ngày không có tiết học
  4.Hàm lấy nguyên liệu để hiển thị lên màn hình (sắp xếp các môn học vào đúng ngày học)
  5.Hàm sắp xếp hiển thị chi tiết các thông tin trong ngày học đó (Khi click vào môn học sẽ hiển thị lên cái này)
*/

export default function App() {
  //1.Các state lưu trữ
  const [items, setItems] = useState({});
  const [arrayData, setArrayData] = useState([
    {
      maMH: "TH01023",
      ngay: [
        "2021-8-16",
        "2021-8-23",
        "2021-8-30",
        "2021-9-6",
        "2021-9-13",
        "2021-9-20",
        "2021-9-27",
        "2021-10-4",
        "2021-10-11",
      ],
      nhom: "01",
      phong: "B.107",
      soTiet: "3",
      tenMH: "Toán rời rạc",
      thu: "Hai",
      tietBatDau: "1",
    },
    {
      maMH: "ML01004",
      ngay: [
        "2021-8-16",
        "2021-8-23",
        "2021-8-30",
        "2021-9-6",
        "2021-9-13",
        "2021-9-20",
        "2021-9-27",
        "2021-10-4",
        "2021-10-11",
      ],
      nhom: "10",
      phong: "E205",
      soTiet: "3",
      tenMH: "Đường lối cách mạng của ĐCSVN",
      thu: "Hai",
      tietBatDau: "6",
    },
    {
      maMH: "GT01016",
      ngay: [
        "2021-8-17",
        "2021-8-24",
        "2021-8-31",
        "2021-9-7",
        "2021-9-14",
        "2021-9-21",
        "2021-9-28",
        "2021-10-5",
        "2021-11-2",
        "2021-11-9",
        "2021-11-16",
        "2021-11-23",
        "2021-11-30",
        "2021-12-7",
        "2021-12-14",
      ],
      nhom: "10",
      phong: "SAN3",
      soTiet: "2",
      tenMH: "Giáo dục thể chất đại cương",
      thu: "Ba",
      tietBatDau: "2",
    },
    {
      maMH: "TH03106",
      ngay: [
        "2021-8-17",
        "2021-8-24",
        "2021-8-31",
        "2021-9-7",
        "2021-9-14",
        "2021-9-21",
      ],
      nhom: "01",
      phong: "CD-8",
      soTiet: "2",
      tenMH: "Lập trình hướng đối tượng",
      thu: "Ba",
      tietBatDau: "4",
    },
    {
      maMH: "TH03106",
      ngay: ["2021-8-19", "2021-8-26", "2021-9-9", "2021-9-16", "2021-9-23"],
      nhom: "01",
      phong: "ND205",
      soTiet: "3",
      tenMH: "Lập trình hướng đối tượng",
      thu: "Năm",
      tietBatDau: "1",
    },
    {
      maMH: "TH01023",
      ngay: [
        "2021-8-19",
        "2021-8-26",
        "2021-9-9",
        "2021-9-16",
        "2021-9-23",
        "2021-9-30",
        "2021-10-7",
        "2021-10-14",
      ],
      nhom: "01",
      phong: "ND201",
      soTiet: "2",
      tenMH: "Toán rời rạc",
      thu: "Năm",
      tietBatDau: "4",
    },
    {
      maMH: "TH02016",
      ngay: [
        "2021-8-19",
        "2021-8-26",
        "2021-9-9",
        "2021-9-16",
        "2021-9-23",
        "2021-9-30",
        "2021-10-7",
        "2021-10-14",
      ],
      nhom: "02",
      phong: "ND401",
      soTiet: "2",
      tenMH: "Cấu trúc dữ liệu và giải thuật",
      thu: "Năm",
      tietBatDau: "9",
    },
    {
      maMH: "TH03124",
      ngay: ["2021-8-20", "2021-8-27", "2021-9-10", "2021-9-17"],
      nhom: "01",
      phong: "B.303",
      soTiet: "3",
      tenMH: "An toàn cơ sở dữ liệu",
      thu: "Sáu",
      tietBatDau: "1",
    },
    {
      maMH: "TH02016",
      ngay: [
        "2021-8-20",
        "2021-8-27",
        "2021-9-10",
        "2021-9-17",
        "2021-9-24",
        "2021-10-1",
        "2021-10-8",
        "2021-10-15",
      ],
      nhom: "02",
      phong: "ND308",
      soTiet: "3",
      tenMH: "Cấu trúc dữ liệu và giải thuật",
      thu: "Sáu",
      tietBatDau: "1",
    },
    {
      maMH: "ML01004",
      ngay: [
        "2021-8-20",
        "2021-8-27",
        "2021-9-10",
        "2021-9-17",
        "2021-9-24",
        "2021-10-1",
        "2021-10-8",
        "2021-10-15",
      ],
      nhom: "10",
      phong: "C205",
      soTiet: "2",
      tenMH: "Đường lối cách mạng của ĐCSVN",
      thu: "Sáu",
      tietBatDau: "4",
    },
    {
      maMH: "TH03106",
      ngay: [
        "2021-9-5",
        "2021-9-12",
        "2021-9-19",
        "2021-9-26",
        "2021-10-3",
        "2021-10-10",
      ],
      nhom: "01",
      phong: "THCNTT09",
      soTiet: "5",
      tenMH: "Lập trình hướng đối tượng",
      thu: "CN",
      tietBatDau: "6",
    },
    {
      maMH: "TH03124",
      ngay: ["2021-9-20", "2021-9-27", "2021-10-4", "2021-10-11"],
      nhom: "01",
      phong: "E202",
      soTiet: "3",
      tenMH: "An toàn cơ sở dữ liệu",
      thu: "Hai",
      tietBatDau: "6",
    },
    {
      maMH: "KN01003",
      ngay: ["2021-9-22", "2021-9-29", "2021-10-6", "2021-10-13", "2021-11-3"],
      nhom: "07",
      phong: "E104",
      soTiet: "5",
      tenMH: "Kỹ năng quản lý bản thân",
      thu: "Tư",
      tietBatDau: "1",
    },
    {
      maMH: "TH02037",
      ngay: [
        "2021-11-4",
        "2021-11-11",
        "2021-11-18",
        "2021-11-25",
        "2021-12-2",
        "2021-12-9",
        "2021-12-16",
        "2021-12-23",
        "2021-12-30",
      ],
      nhom: "03",
      phong: "ND208",
      soTiet: "5",
      tenMH: "Phân tích & thiết kế hệ thống",
      thu: "Năm",
      tietBatDau: "6",
    },
    {
      maMH: "KN01004",
      ngay: [
        "2021-11-11",
        "2021-11-18",
        "2021-11-25",
        "2021-12-2",
        "2021-12-9",
      ],
      nhom: "15",
      phong: "E103",
      soTiet: "5",
      tenMH: "Kỹ năng tìm kiếm việc làm",
      thu: "Năm",
      tietBatDau: "1",
    },
    {
      maMH: "TH02035",
      ngay: [
        "2021-11-19",
        "2021-11-26",
        "2021-12-3",
        "2021-12-10",
        "2021-12-17",
        "2021-12-24",
      ],
      nhom: "02",
      phong: "THCNTT01",
      soTiet: "5",
      tenMH: "TH cấu trúc DL&giải thuật",
      thu: "Sáu",
      tietBatDau: "1",
    },
    {
      maMH: "TH03124",
      ngay: ["2021-12-7", "2021-12-14", "2021-12-21"],
      nhom: "01",
      phong: "THCNTT01",
      soTiet: "5",
      tenMH: "An toàn cơ sở dữ liệu",
      thu: "Ba",
      tietBatDau: "6",
    },
    {
      maMH: "KN01003",
      ngay: ["2021-12-21"],
      nhom: "07",
      phong: "ND207",
      soTiet: "5",
      tenMH: "Kỹ năng quản lý bản thân",
      thu: "Ba",
      tietBatDau: "6",
    },
    {
      maMH: "KN01004",
      ngay: ["2021-12-22"],
      nhom: "15",
      phong: "ND207",
      soTiet: "5",
      tenMH: "Kỹ năng tìm kiếm việc làm",
      thu: "Tư",
      tietBatDau: "6",
    },
  ]);

  //2.Hàm Convert dạng ml -> yyyy-mm-dd
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  //3.Hàm render những ngày không có tiết học
  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Ngày được nghỉ</Text>
      </View>
    );
  };

  //4.Hàm lấy nguyên liệu để hiển thị lên màn hình
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000; //return ml
        const strTime = timeToString(time); //return yyyy-mm-dd
        // strTime: 2021-11-20
        if (!items[strTime]) {
          items[strTime] = [];

          arrayData.forEach((item) => {
            item.ngay.forEach((itemNgay) => {
              if (itemNgay == strTime) {
                items[strTime].push(item);
              }
            });
          });
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  //5.Hàm sắp xếp hiển thị chi tiết các thông tin trong ngày học đó (Khi click vào môn học sẽ hiển thị lên cái này)
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={[styles.item]} onPress={() => alert(item.tenMH)}>
        <Text style={{ color: "red" }}>{item.tenMH}</Text>
        <Text>Lớp học: {item.phong}</Text>
        <Text>Tiết bắt đầu: {item.tietBatDau}</Text>
        <Text>Số tiết: {item.soTiet}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.item]}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date()}
        renderItem={renderItem}
        // renderEmptyDate={renderEmptyDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
