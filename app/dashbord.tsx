import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { useRouter } from 'expo-router';

export default function Dashbord() {
  const router = useRouter()
  return (
    <ScrollView >
      <Image source={require("../assets/images/bg.png")} style={styles.fundo} />
      {/* logo, falta a caixa  no meio*/}
      <Text style={styles.logo}>
        EasySt<Feather name="package" size={24} color="black" />ck
      </Text>



      {/* Bem vindo */}
      <View style={styles.bemVindoCard}>


        <View>

          <Text style={styles.olaBemVindoText}>
            Olá Ronaldo Luiz!
          </Text>

          <Text style={styles.welcomeText}>
            Seja Bem vindo!
          </Text>

        </View>

        {/*foto do perfil */}
        <Image
          source={require("../assets/images/boneco.png")}
          style={styles.foto}
        />

      </View>



      {/* controle de performace  */}
      <View style={styles.performanceCard}>


        <Text style={styles.performanceTitle}>
          Sua performance
        </Text>


        <View style={styles.performanceRow}>


          <View>
            <Text style={styles.label}>
              Retiradas
            </Text>

            <View style={styles.linha}>
              <AntDesign name="arrow-down" size={40} color="red" />
              <Text style={styles.numeros}>255</Text>
            </View>
          </View>


          <View>
            <Text style={styles.label}>
              Entradas
            </Text>

            <View style={styles.linha}>
              <AntDesign name="arrow-up" size={40} color="#1E8E6E" />
              <Text style={styles.numeros}>100</Text>
            </View>
          </View>

        </View>

      </View>

      <Text style={styles.sectionTitle}>
        O que você deseja fazer hoje?
      </Text>

      <View style={styles.actionsContainer}>


        {/* Adicionar */}
        <TouchableOpacity
          style={[
            styles.actionCard,
            styles.greenCard,
          ]}
          onPress={() => router.push("/addProduto")}
        >
          <FontAwesome6 name="add" size={50} color="white" />

          <Text style={styles.textBranco}>
            Adicionar novos produtos
          </Text>

        </TouchableOpacity>



        {/* retirar*/}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => router.push("/retiradas")}
        >

          <Ionicons name="exit-outline" styles="styles.iconRetirada" size={50} color="black" />

          <Text style={styles.Textpreto}>
            Retirar novos produtos
          </Text>

        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  fundo: {
    position: "absolute",
    top: 0
  },

  logo: {

    fontSize: 34,

    fontWeight: "bold",

    marginLeft: 25,

    marginTop: 40,

    marginBottom: 20,


  },

  bemVindoCard: {

    backgroundColor: "#F5F5F5",

    marginHorizontal: 20,

    borderRadius: 30,

    padding: 20,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.2,

    shadowRadius: 10,

    elevation: 5,


  },

  olaBemVindoText: {

    fontSize: 28,

    fontWeight: "700",

    color: "#0B5D55",


  },

  welcomeText: {

    fontSize: 24,

    fontWeight: "600",


  },

  foto: {

    width: 95,

    height: 95,

    borderRadius: 50,


  },

  performanceCard: {

    backgroundColor: "#F5F5F5",

    margin: 20,

    borderRadius: 30,

    padding: 20,

    shadowColor: "#000",

    shadowOpacity: 0.15,

    shadowRadius: 10,

    elevation: 5,


  },

  performanceTitle: {

    fontSize: 24,

    fontWeight: "700",

    color: "#0B5D55",

    marginBottom: 20,


  },

  performanceRow: {

    flexDirection: "row",

    justifyContent: "space-around",


  },

  label: {

    fontSize: 25,
    textAlign: "left"

  },

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4, // 
  },

  numeros: {
    fontSize: 42,
    color: "#032620",
    fontWeight: "400",
  },

  sectionTitle: {

    fontSize: 28,

    fontWeight: "700",

    color: "#0B5D55",

    marginLeft: 25,

    marginTop: 30,

    marginBottom: 20,


  },

  actionsContainer: {

    flexDirection: "row",

    justifyContent: "space-evenly",

    marginBottom: 120,


  },

  actionCard: {

    width: 160,

    height: 250,

    backgroundColor: "white",

    borderRadius: 30,

    justifyContent: "center",

    alignItems: "center",

    padding: 20,

    shadowColor: "#000",

    shadowOpacity: 0.15,

    shadowRadius: 10,

    elevation: 5,


  },

  greenCard: {

    backgroundColor: "#0D8A76",


  },

  whiteIcon: {

    fontSize: 70,

    color: "white",

    marginBottom: 20,


  },

  iconRetirada: {

    textAlign: "center",

    marginBottom: 20,

    marginLeft: 25,

  },

  textBranco: {

    color: "white",

    textAlign: "center",

    fontSize: 24,

    fontWeight: "600",


  },

  Textpreto: {

    color: "#123",

    textAlign: "center",

    fontSize: 24,

    fontWeight: "600",


  },

}); 