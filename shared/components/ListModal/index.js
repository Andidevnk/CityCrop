import React from 'react';
import { StyleSheet, FlatList, View, Modal, Pressable } from 'react-native';

import ListItem from './ListItem';
import NoItems from './NoItems';

const defaultKeyExtractor = (item) => item;

const ListModal = ({
  data,
  keyExtractor,
  renderItemContent,
  onItemPress,
  onOutsidePress,
  ...restProps
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    statusBarTranslucent={true}
    {...restProps}
  >
    <Pressable style={styles.modalContainer} onPress={onOutsidePress}>
      <View style={styles.modalContent}>
        <FlatList
          style={{ width: '100%' }}
          keyExtractor={keyExtractor || defaultKeyExtractor}
          data={data}
          initialNumToRender={10}
          windowSize={4} // performance optimization for large lists
          renderItem={({ item }) => (
            <ListItem
              item={item}
              renderItemContent={renderItemContent}
              onPress={onItemPress}
            />
          )}
          ListEmptyComponent={NoItems}
        />
      </View>
    </Pressable>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    maxHeight: '70%',
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ListModal;
