import { StyleSheet, ImageStyle } from "react-native";
import { oliveGreen, ivoryWhite } from "@/constants/Colors";

export const globalStyles = StyleSheet.create({
  // header title styling for each tab stack
  headerTitleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Hubballi_400Regular",
  },
  //bottom sheet
  bottomSheet: {
    backgroundColor: oliveGreen,
  },
  // content page (e.g. plant info, observation info) styling
  infoPageContainer: {
    flex: 1,
    width: "100%",
    // alignItems: 'center',
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: oliveGreen,
  },
  infoPageSubContainer: {
    alignItems: "center",
    paddingBottom: 20,
    marginHorizontal: 20,
    backgroundColor: ivoryWhite,
    borderRadius: 20,
    opacity: 0.9,
    minHeight: 400,
  },
  infoPrimaryTitle: {
    fontSize: 30,
    marginTop: 10,
  },
  infoSecondaryTitle: {
    fontSize: 18,
    marginVertical: 2,
    marginHorizontal: 40,
  },
  infoUnderlinedTitle: {
    textAlign: "left",
    // alignSelf: 'flex-start',
    marginHorizontal: 20,
    textDecorationLine: "underline",
  },
  secondaryGroup: {
    marginVertical: 5,
    alignItems: "center",
  },
  divider: {
    height: 1,
    width: "90%",
    backgroundColor: oliveGreen,
    marginVertical: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  image: {
    width: "90%",
    height: 220,
    borderRadius: 10,
  } as ImageStyle,
  html: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  note: {
    width: "90%",
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  closeBottomSheetButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 2,
    // backgroundColor: "red",
    borderRadius: 50,
    // iOS Shadow
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,

    // Android Shadow
    elevation: 5,
  },
});
