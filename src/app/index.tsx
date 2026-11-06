//นำเข้า วิว    ข้อความ              จาก   ชื่อไลบรารี่
import { StyleSheet, Text, View, Image } from 'react-native';

//ส่งออก เริ่มต้น  ฟังก์ชัน    ขื่อฟังก์ชัน
export default function App(){
 return (
  <View style={homeStyle.container} >
    {/* ใส่ข้อความ */}
    <Text style={homeStyle.title}>Waritsara Yupanit</Text>

    {/* ใส่ภาพ */}
    <Image 
    source={require('@/assets/dudi dudi dam dam.jpeg')} 
    style={{ 
      width: 300, 
      height: 300, 
      borderRadius: 250, 
      borderWidth: 10}}
    />
    {/* ใส่รูปจากเว็บ */}
    <Image 
    source={{uri:"https://i.pinimg.com/736x/65/c5/6f/65c56f6da1f7afb4b4c1ad3b19807b94.jpg"}}
    style={{
      width: 300, 
      height: 300, 
      borderRadius: 250, 
      borderWidth: 10}}
    />
    {/* เรียงวัตถุเเนวนอน ซ้ายไปขวา */}
    <View style={{flexDirection: "row"}}>
      <Text>mew</Text>
      
      <Text>meow</Text>
    </View>

  </View>
 )
}

//สร้างสไตล์เเต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "red",
    flex:1, //ขยายให้เต็มพื้นที่
    alignItems: "center",
  },
  title:{
    color: "white", //สีอักษร
    fontSize: 32, //ขนาดอักษร
    fontWeight: 700, //ความหนาอักษร 100-900
    fontStyle: "italic", //เอียง
    textAlign: "center" //ปรับตำเเหน่ง
  }
})