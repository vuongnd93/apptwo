import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AddModal from './addmodal';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
           one: false,
           two:false,
        };
        this._onPressAdd = this._onPressAdd.bind(this); 
        // this._onPressAdd = this._onPressAdd.bind(this); 
    }


    // onAdd() {
    //     const { en, vn } = this.state;
    //     this.props.addWord(en, vn);
    //     this.props.toggleIsAdding();
    // }
    _onPressAdd () {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }
    _onCheck() {
     this.setState({
         checked: true
     })
    }
    onChecked(){
        this.setState({
            one: true
        })
        console.log(this.state.one)
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TextInput 
                    style={styles.textInput} 
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="English word"
                />
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                /> */}
                  <AddModal ref = {'addModal'}>
                  </AddModal>
                <View style={styles.wrapp_checkbox}>
                    <View>
                    <TouchableOpacity onPress={this._onPressAdd()}>
                        <Text>Trên Đường đi</Text>                                                                                   
                    </TouchableOpacity>
                        <CheckBox
                            title='Gặp khách Hàng'
                            checkedColor='red'
                            checked={this.state.one}
                            onPress={()=>{this.onChecked()}}
                        />
                        <CheckBox
                            title='Thu Tiền'
                            checkedColor='red'
                            checked={this.state.two}
                        />
                    
                    </View>
                    <View>
                        <CheckBox
                            title='Lắp đặt '
                            checkedColor='red'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            title='Bảo Hành'
                            checkedColor='red'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            title='Completed'
                            checkedColor='red'
                            checked={this.state.checked}
                        />
                    
                    </View>
                </View>
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null)(Form);

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // alignSelf: 'stretch',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    wrapp_checkbox:{
     flexDirection: 'row',
       alignSelf: 'stretch',
      justifyContent: 'center',
     alignItems: 'center'
    },

    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    }
});