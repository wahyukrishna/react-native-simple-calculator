import React from "react";
import {View,TextInput} from "react-native";
import {Text,Header,Button} from "native-base";

class Contents extends React.Component{
    constructor(){
        super();
        this.state ={
            inputAngkaPertama: "",
            inputAngkaKedua: "",
            operator: "+",
            hasil: "0"
        }
    }

    handleInputAngkaPertama = (event) => {
        this.setState({inputAngkaPertama: event});
      }

      handleInputAngkaKedua = (event) => {
        this.setState({inputAngkaKedua: event});
      }

      handleOperatorTambah = () =>{
          this.setState({operator: "+"})
      }

      handleOperatorKurang = () =>{
        this.setState({operator: "-"})
    }

    handleOperatorBagi = () =>{
        this.setState({operator: "/"})
    }

    handleOperatorKali = () =>{
        this.setState({operator: "*"})
    }

    handleHitung = () => {
        this.setState({
        hasil: eval(this.state.inputAngkaPertama+this.state.operator+this.state.inputAngkaKedua)})
      }
    

    render() {
        return (
            <View>
                <Header style={{backgroundColor: "#03fc6f",paddingTop:15}}>
                    <Text style={{fontSize:20}}>
                    KALKULATOR REACT NATIVE
                    </Text>                 
                </Header>
                <TextInput onChangeText={this.handleInputAngkaPertama} placeholder="Masukkan Angka" value={this.state.inputAngkaPertama} keyboardType="numeric" style={{fontSize:20,marginHorizontal:15,marginTop:15}}/>
                <Text style={{color: "blue",textAlign: "center",fontSize: 40,padding:20}}>{this.state.operator}</Text>
                <TextInput onChangeText={this.handleInputAngkaKedua} placeholder="Masukkan Angka" value={this.state.inputAngkaKedua} keyboardType="numeric" style={{fontSize:20,marginHorizontal:15,marginBottom: 10}}/>
                <Text style={{textAlign: "center",fontSize: 50,borderTopColor:"grey",borderTopWidth:3,marginHorizontal:20,padding: 10}}>{this.state.hasil}</Text>
                <Text style={{borderTopColor:"grey",borderTopWidth:3,marginHorizontal:20,paddingTop:20}}>Operator
                </Text>
                <View style={{flexDirection: "row",marginLeft: 15,paddingTop: 10}}>
                <Button style ={{margin:10}} onPress={this.handleOperatorTambah} rounded>
                    <Text>
                        +
                    </Text>
                </Button>
                <Button style ={{margin:10}} onPress={this.handleOperatorKurang} rounded>
                    <Text>
                        -
                    </Text>
                </Button>
                <Button style ={{margin:10}} onPress={this.handleOperatorBagi} rounded>
                    <Text>
                        /
                    </Text>
                </Button>
                <Button style ={{margin:10}} onPress={this.handleOperatorKali} rounded>
                    <Text>
                        *
                    </Text>
                </Button>
                <Button style ={{margin:10,backgroundColor: "green"}}
                onPress={this.handleHitung} rounded>
                    <Text>
                        Hitung
                    </Text>
                </Button>
                </View>


            </View>
        )
    }
} 

export default Contents;