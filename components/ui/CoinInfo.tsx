import React from "react";
import { Item } from "../../interfaces/interfaces";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import ArrowComponent from "../icons/ArrowIcon";
import { formatUSA } from "../../config/formatNumber";
import { theme } from "../../style/theme";
export interface Coin {
  item: Item;
  onPress?: () => void;
  styleItem?: Object;
}
export const CoinInfo = ({
  item,
  onPress,
  styleItem,
}:Coin) => {
  const priceUsd = parseFloat(item.priceUsd).toFixed(2);
  const changePercent24Hr = (+item.changePercent24Hr).toFixed(1);
  const isPositive = +changePercent24Hr >= 0 ? true : false;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styleItem}>
            <View style={styles.header}>
              <View style={styles.leftContainer}>
                <Text style={styles.money}>{item.symbol} - </Text>
                <Text style={styles.money}>{item.name}</Text>
              </View>
              <View style={styles.rigthContainerTop}>
                <Text style={styles.rank}>#{item.rank}</Text>
              </View>
            </View>
            <View style={styles.bottomDescription}>
              {/* 💯  In this execercise you can round numbers without a library */}
              <View style={styles.leftContainer}>
                <Text style={styles.price}>
                  {/* TODO agregar formato */}$ {formatUSA(priceUsd)}
                  <Text style={styles.usd}> USD</Text>
                </Text>
              </View>
              <View
                style={[
                  styles.rigthContainer,
                  styles.percentageContainer,
                  isPositive ? styles.boxPositive : styles.boxNegative,
                  styles.box,
                ]}
              >
                <View style={!isPositive && styles.arrowNegative}>
                  <ArrowComponent
                    color={
                      isPositive
                        ? theme.colors.greenCrayola
                        : theme.colors.deepCarminePink
                    }
                  />
                </View>
                <Text style={styles.rigthContent}>
                  {" "}
                  {Math.abs(+changePercent24Hr)}%
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    borderRadius:8,
  },
  header: {
    flexDirection: "row",
    flex: 1,
  },
  illustration: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    borderRadius: 8,
    display: "flex",
    backgroundColor: theme.colors.white,
    marginVertical: 6,
    padding: 8,
  },
  bottomDescription: {
    flexDirection: "row",
    flex: 1,
  },
  rigthContent: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  leftContent: {
    alignItems: "flex-start",
  },
  price: {
    color: theme.colors.bondiBlue,
    fontSize: 24,
    fontWeight: "normal",
  },
  usd: {
    color: theme.colors.auroMetalSaurus,
    fontSize: 14,
    textAlignVertical: "bottom",
  },
  money: {
    color: theme.colors.zinnwalditeBrown,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  rank: {
    color: theme.colors.auroMetalSaurus,
    fontSize: 14,
    fontStyle: "normal",
    alignSelf: "flex-end",
  },
  leftContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  rigthContainerTop: {},
  rigthContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  percentageContainer: {
    alignItems: "flex-end",
  },
  box: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    alignItems: "center",
  },
  boxPositive: {
    backgroundColor: theme.colors.aeroBlue,
    color: theme.colors.castletonGreen,
  },
  boxNegative: {
    backgroundColor: theme.colors.palePink,
    color: theme.colors.darkCandyAppleRed,
  },
  arrowNegative: {
    transform: [{ rotate: "180deg" }],
  },
});
