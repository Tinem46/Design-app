import { usePathname } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link } from "expo-router";

const MenuLeft = () => {
  const pathname = usePathname(); 
  const progress = 0.3;

  return (
    <View style={styles.container}>
      <View>
        <MenuItem icon="home" title="Home" href="/" pathname={pathname} />
        <MenuItem
          icon="explore"
          title="Discovery"
          href="/DiscoveryScreen"
          pathname={pathname}
        />
        <MenuItem
          icon="folder"
          title="My Project"
          href="/MyProjectScreen"
          pathname={pathname}
        />
      </View>

      <View style={styles.separator} />

      <View>
        <MenuItem
          icon="delete"
          title="Trash"
          href="/TrashScreen"
          pathname={pathname}
        />
        <MenuItem
          icon="settings"
          title="Settings"
          href="/SettingsScreen"
          pathname={pathname}
        />
        <MenuItem
          icon="help"
          title="Get Help"
          href="/HelpScreen"
          pathname={pathname}
        />
      </View>

      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>Projects</Text>
        <Text style={styles.projectsCount}>6/20</Text>
        <Text style={styles.projectsInfo}>Monthly usage resets in 29 days</Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>

        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Component MenuItem để tái sử dụng
const MenuItem = ({ icon, title, href, pathname }) => {
  const isActive = pathname === href; // Kiểm tra xem tab hiện tại có khớp với href không

  return (
    <Link href={href} style={[styles.menuItem, isActive && styles.activeMenu]}>
      <View style={styles.menuContent}>
        <Icon name={icon} size={24} color={isActive ? "#000" : "#666"} />
        <Text style={[styles.menuText, isActive && styles.activeMenuText]}>
          {title}
        </Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    width: 250,
    height: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    zIndex: 1,
    borderRadius: 9,
    borderWidth: 0.1,
    borderColor: "#f5f5f5",
    borderTopColor: "#f5f5f5",
  },
  menuItem: {
    paddingVertical: 15,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
    lineHeight: 24,
    marginLeft: 10,
  },
  menuContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeMenu: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  activeMenuText: {
    color: "#000",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
  },
  projectsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 70,
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  projectsCount: {
    fontSize: 16,
    color: "#666",
  },
  projectsInfo: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 3,
  },
  upgradeButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
    borderWidth: 1,
  },
  upgradeText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuLeft;
