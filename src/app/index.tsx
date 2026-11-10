//นำเข้า วิว    ข้อความ              จาก   ชื่อไลบรารี่
import { StyleSheet, Text, View, Image } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

//ส่งออก เริ่มต้น  ฟังก์ชัน    ขื่อฟังก์ชัน
export default function App(){
 return (
    <View style={homeStyle.container} >
    
    {/* ใส่ภาพ */}
    <Image 
    source={{uri: "https://e-sis.e-tech.ac.th/etech/Moduls/studentPhotos/photo/2569/6911673183065.jpg"}} 
    style={{ 
      width: 150, 
      height: 150, 
      borderRadius: 250, 
      borderWidth: 4,
      borderColor: "#c7dcfc",
      marginTop: 70}}
    />

    {/* ใส่ข้อความ */}
    <Text style={homeStyle.title}> น.ส วริสรา ยุภานิช </Text>

    <Text style={{marginTop: 5}}> บิดเเล้วรวยดวงซวยเเล้วไง </Text>

    <View style={{padding: 20, backgroundColor: "#e8e8e8", width: 350, height: 100, gap: 5, borderRadius: 10, marginTop: 10}}>
      <Text style={{}}>ห้อง BIT.1/1 เลขที่ 2</Text>
      <Text>Gmail: misswaritsara.yupanit@e-tech.ac.th </Text>
      <Text>เบอร์โทร: 093-xxx-xxxx</Text>
    </View>

    <Text style={{marginTop: 10, marginBottom: 10, width: "100%", marginLeft: 95}}>ภาพกิจกรรม</Text>

    <View style={{flexDirection: "row"}}>
      <Image
      source={{uri:"https://i.pinimg.com/1200x/3b/c9/c6/3bc9c6a6fb4505b3aa6a753b5410d281.jpg" }}
      style={{ 
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 10
      }}
      />
      <Image
      source={{uri: "https://i.pinimg.com/1200x/e2/c7/e1/e2c7e137803506686a09719e31358af9.jpg"}}
      style={{
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 10
      }}
      />
      <Image
      source={{uri: "https://i.pinimg.com/736x/78/86/64/7886643049de05cbe01a8b71ded2580d.jpg"}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 10
      }}
      />

    </View>

  </View>
 )
}

//สร้างสไตล์เเต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex:1, //ขยายให้เต็มพื้นที่
    alignItems: "center",
  },
  title:{
    color: "black", //สีอักษร
    fontSize: 25, //ขนาดอักษร
    fontWeight: 600, //ความหนาอักษร 100-900
    fontStyle: "italic", //เอียง
    marginTop: 20,
  }
})