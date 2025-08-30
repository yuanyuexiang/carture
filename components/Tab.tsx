import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface TabProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  vertical?: boolean;
}

const Tab: React.FC<TabProps> = ({ label, selected, onPress, vertical }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.tabButton, selected && styles.selectedTab, vertical && styles.verticalTab]}
  >
    <Text style={[styles.tabText, selected && styles.selectedTabText, vertical && styles.verticalTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  verticalTab: {
    marginRight: 0,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  verticalTabText: {
    writingDirection: 'ltr',
    textAlign: 'center',
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedTab: {
    backgroundColor: '#ff6b35',
    borderColor: '#ff6b35',
  },
  tabText: {
    fontSize: 15, // 增加标签文字大小，提高可读性
    color: '#666',
    fontWeight: '500',
  },
  selectedTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Tab;
