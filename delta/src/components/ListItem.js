import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    fontWeight: '600',
  },
};

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
/** Dito ung logic kapag magcocompare ng
 * items sa state and sa props ng component
 */
const mapStateToProps = (state, ownProps) => {
  const expanded = state.activeLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
