import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

// ฟังก์ชันคอมโพเนนต์หลักของแอป
export default function App() {
  // สร้าง state สำหรับเก็บจำนวนครั้งที่รู้สึกอยากสูบบุหรี่ไฟฟ้า
  const [craveCount, setCraveCount] = useState(0);

  return (
    // View หลักที่ใช้จัดวางองค์ประกอบต่าง ๆ
    <View style={styles.container}>
      {/* ข้อความแสดงจำนวนครั้งที่อยากสูบ */}
      <Text style={styles.header}>ความอยากสูบบุหรี่ไฟฟ้าในวันนี้: {craveCount} ครั้ง</Text>
      {/* ปุ่มสำหรับเพิ่มจำนวนครั้งเมื่อกด */}
      <Button title="รู้สึกอยากสูบ" onPress={() => setCraveCount(craveCount + 1)} />
    </View>
  );
}

// กำหนดสไตล์สำหรับแต่ละองค์ประกอบในแอป
const styles = StyleSheet.create({
  // สไตล์ของ View หลัก
  container: {
    flex: 1, // ขยายเต็มพื้นที่หน้าจอ
    backgroundColor: '#fff', // พื้นหลังสีขาว
    padding: 20, // ระยะห่างรอบนอก
    marginTop: 50, // ระยะห่างด้านบน
  },
  header: {
    fontSize: 22, // ขนาดตัวอักษรใหญ่
    fontWeight: 'bold', // ตัวหนา
    marginTop: 20, // ระยะห่างด้านบน
    marginBottom: 20, // ระยะห่างด้านล่าง
    textAlign: 'center', // จัดข้อความตรงกลาง
  },
});
