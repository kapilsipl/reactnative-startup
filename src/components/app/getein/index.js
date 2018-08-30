import React, { Component } from 'react'
import { Container, Content } from 'native-base';
import { connect } from 'react-redux'
import styles from '../../../assets/styles';
import { fetchPeopleFromAPI } from '../../../actions/People';
import { HeaderComponent } from '../../common';

import {
    View, Text, ActivityIndicator, FlatList
} from 'react-native'

import {
    Header, Body
} from 'native-base';


class GateIn extends Component {

    

    /**
     * @method render
     * @description Renders the component
     */
    render() {
        const { isFetching, people } = this.props.people
        return (
            <Container>
                <HeaderComponent
                leftButton="menu"
                    title='GateIn'
                />
                <Content>
            <View style={styles.container}>

                <View style={styles.textWrap}>
                    <Text style={styles.text}>Gate In</Text>
                </View>

                <View style={styles.textWrap}>
                    <Text onPress={this.changeScreen}>Click to return back home</Text>
                </View>               
            </View>
            </Content>
            </Container>
        )
    }
}

/**
 * @method mapStateToProps
 * @description return state to component as props
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        people: state.people
    }
}

/**
 * @method mapDispatchToProps
 * @description dispatch actions
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        fetchPeopleFromAPI: () => dispatch(fetchPeopleFromAPI())
    }
}

/**
 * @method connect
 * @description connect with redux
 * @param {function} mapStateToProps
 * @param {function} mapDispatchToProps
 */
export default connect(
    mapStateToProps,
    null
)(GateIn)