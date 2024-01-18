// Profile.js

import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { Settings, Logout } from '@assets/images/common/svg'; // Replace with actual icons
import appColors from '@theme/appColors';
import { t } from 'i18next';
import { useValues } from '@App';
import styles from './styles'; // Import your existing styles

const Profile = (props) => {
  const { viewRTLStyle, isDark } = useValues();
  const navigation = useNavigation();

  const renderProfileItem = (item) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          item.route && navigation.navigate(item.route);
        }}
        style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
      >
        {isDark ? item.darkIcon : item.icon}
        <View style={[styles.row, { flexDirection: viewRTLStyle }]}>
          <Text
            style={[
              styles.title,
              {
                color: item.textColor
                  ? item.textColor
                  : isDark
                  ? appColors.white
                  : appColors.black,
              },
            ]}
          >
            {t(item.title)}
          </Text>
          {item.showArrow && (
            <Settings
              width={20}
              height={20}
              fill={
                item.textColor
                  ? item.textColor
                  : isDark
                  ? appColors.white
                  : appColors.black
              }
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const profileData = [
    {
      title: 'Profile Photo',
      icon: <Avatar.Image size={24} source={{ uri: 'https://placekitten.com/24/24' }} />,
    },
    { title: 'Date of Birth', showArrow: true, route: 'DOB' },
    { title: 'Employee Number', showArrow: true, route: 'EmployeeNo' },
    { title: 'Address', showArrow: true, route: 'Address' },
    { title: 'Email ID', showArrow: true, route: 'EmailID' },
    { title: 'Phone Number', showArrow: true, route: 'PhoneNo' },
    { title: 'Gender', showArrow: true, route: 'Gender' },
    {
      title: 'Settings',
      icon: <Settings width={24} height={24} />,
      showArrow: true,
      route: 'Settings',
    },
    {
      title: 'Logout',
      icon: <Logout width={24} height={24} />,
      showArrow: false,
      route: 'Logout',
    },
  ];

  return (
    <View>
      <FlatList
        data={profileData}
        renderItem={({ item }) => renderProfileItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Profile;